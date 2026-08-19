// Created by GPT-5.6 Sol Max [codex].

import { expect, test } from 'vitest'
import * as Displays from '@/content/docs/Tools and Ideas/Computers/Displays.ts'

test('visual acuity data stays numeric until rendering', () => {
  const data = Displays.create_visual_acuity_table_data([ 1, 2, ]) // Keep calculation assertions independent from presentation formatting.
  expect(data).toEqual({
    rows: [
      { MAR: 1, decimal_acuity: 1, LogMAR: 0, '5-mark': 5, },
      { MAR: 2, decimal_acuity: 0.5, LogMAR: Math.log10(2), '5-mark': 5 - Math.log10(2), },
    ],
  })
  const table = Displays.visual_acuity_table_data_to_HTML_table(data, {
    include_row: row => row.MAR === 1,
    include_column: column => [ 'LogMAR acuity', '5-mark', ].includes(column),
  })
  expect(table.querySelector('caption')!.text).toBe('Visual acuity grades')
  expect(table.querySelectorAll('thead th').map(cell => cell.text)).toEqual([ 'LogMAR acuity', '5-mark', ]) // 5-mark immediately follows LogMAR.
  expect(table.querySelectorAll('tbody td').map(cell => cell.text)).toEqual([ '0.00', '5.0', ])
  table.querySelector('tbody tr')!.remove() // Returned tables remain mutable after rendering.
  expect(table.querySelectorAll('tbody tr')).toHaveLength(0)
  const five_mark_table = Displays.visual_acuity_table_data_to_HTML_table(data, { include_column: column => column === '5-mark', })
  expect(five_mark_table.querySelectorAll('tbody td').map(cell => cell.text)).toEqual([ '5.0', '4.7', ]) // Rendering retains one decimal place.
})

test('distance and acuity data exposes rows and columns independently', () => {
  const data = Displays.create_distance_acuity_PPI_table_data([ 1, 2, ], [ 50, 100, ]) // Two values per axis expose proportional mistakes.
  expect(data.viewing_distances_cm).toEqual([ 50, 100, ])
  expect(data.rows.map(row => row.visual_acuity)).toEqual([ 1, 2, ])
  expect(data.rows[0]!.PPI_values[0]! / data.rows[0]!.PPI_values[1]!).toBeCloseTo(2) // Doubling distance halves PPI.
  expect(data.rows[1]!.PPI_values[0]! / data.rows[0]!.PPI_values[0]!).toBeCloseTo(2) // Doubling acuity doubles PPI.
  const table = Displays.distance_acuity_PPI_table_data_to_HTML_table(data, {
    include_row: row => row.visual_acuity === 2,
    include_column: distance => distance === 100,
  })
  const group_header = table.querySelector('th[colspan]')!
  expect(group_header.getAttribute('colspan')).toBe('1')
  expect(group_header.text).toBe('Viewing Distance (cm)')
  expect(table.querySelectorAll('thead th[scope="col"]').map(cell => cell.text)).toEqual([ '100', ])
  expect(table.querySelectorAll('tbody th[scope="row"]').map(cell => cell.text)).toEqual([ '2.00', ])
})

test('diagonal resolution data contains unformatted PPI values', () => {
  const data = Displays.create_diagonal_resolution_PPI_table_data([ [ 3, 4, ], ], [ 1, 2, ]) // The 3-4-5 triangle gives exact expected values.
  expect(data).toEqual({
    diagonal_sizes_in: [ 1, 2, ],
    rows: [ { resolution: [ 3, 4, ], PPI_values: [ 5, 2.5, ], }, ],
  })
  const table = Displays.diagonal_resolution_PPI_table_data_to_HTML_table(data, {
    include_column: size => size === 2,
  })
  expect(table.querySelector('tbody th[scope="row"]')!.text).toBe('3 \u00d7 4')
  expect(table.querySelectorAll('tbody td').map(cell => cell.text)).toEqual([ '2.5', ])
})

test('compatibility table creators preserve the HTML rendering API', () => {
  const visual_data = Displays.create_visual_acuity_table_data([ 1, ]) // Compatibility functions serialize the same node trees used above.
  const distance_data = Displays.create_distance_acuity_PPI_table_data([ 1, ], [ 50, ])
  const diagonal_data = Displays.create_diagonal_resolution_PPI_table_data([ [ 3, 4, ], ], [ 2, ])
  expect(Displays.create_visual_acuity_table([ 1, ])).toBe(Displays.visual_acuity_table_data_to_HTML_table(visual_data).toString())
  expect(Displays.create_distance_acuity_PPI_table([ 1, ], [ 50, ])).toBe(Displays.distance_acuity_PPI_table_data_to_HTML_table(distance_data).toString())
  expect(Displays.create_diagonal_resolution_PPI_table([ [ 3, 4, ], ], [ 2, ])).toBe(Displays.diagonal_resolution_PPI_table_data_to_HTML_table(diagonal_data).toString())
})
