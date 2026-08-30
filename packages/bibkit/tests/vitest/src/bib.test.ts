// Created by GPT-5.6 Sol Max [codex]. Revised by AndyBRoswell.

import { randomUUID } from 'node:crypto'
import { fc, test } from '@fast-check/vitest'
import { expect } from 'vitest'
import * as node_html_parser from 'node-html-parser'
import * as bib from '@/bib.ts'
import * as CSL from '@/CSL'
import * as types_data from '@/types/data'
import * as catalog from '@/catalog.ts'
import type { Citation_Context, Citation_Item, Material, Scoped_References } from '@/types/data.ts'

type Material_Type = Material['type']
type Range = readonly [ start: number, stop: number ]
type Fixture = { IDs: string[], materials: Material[], ranges: Range[], scope_names: string[], references: Scoped_References, reference_ranges: bib.Reference_Ranges }

const material_types: readonly [ Material_Type, ...Material_Type[] ] = [ 'book', 'webpage', 'article-journal', 'motion_picture', ]
const material_types_by_scope_arbitrary: fc.Arbitrary<Material_Type[][]> = fc.array(fc.array(fc.constantFrom(...material_types), { minLength: 1, maxLength: 6 }), { minLength: 1, maxLength: 5 }) // The outer array contains scopes; each inner array contains the material types in one scope.

function create_fixture(g: fc.GeneratorValue): Fixture {
  const namespace: string = randomUUID()
  const material_types_by_scope: Material_Type[][] = g(fc.array, fc.array(fc.constantFrom(...material_types), { minLength: 2, maxLength: 6 }), { minLength: 2, maxLength: 5 }) // Vary both the number of scopes and the materials contained by each scope.
  const scope_names: string[] = material_types_by_scope.map((_, index) => `scope-${index}`) // Give every outer-array entry one top-level scope name.
  let end: number = 0 // Track the exclusive boundary of the scopes already visited in the flattened array.
  const ranges: Range[] = material_types_by_scope.map(scope_types => { const start: number = end; end += scope_types.length; return [ start, end ] }) // Preserve each scope's half-open range after flattening.
  const IDs: string[] = Array.from({ length: end }, (_, index) => `${namespace}:${index}`)
  const materials: Material[] = material_types_by_scope.flat().map((type, index) => ({ type, title: IDs[index]! })) // Citation order follows scope order, then material order within each scope.
  for (const [ index, ID ] of IDs.entries()) { catalog.add([ ID ], materials[index]!) }
  const references: Scoped_References = Object.fromEntries(ranges.map(([ start, stop ], index) => [ scope_names[index]!, materials.slice(start, stop) ])) // Partition materials at the generated cumulative boundaries.
  return { IDs, materials, ranges, scope_names, references, reference_ranges: bib.get_reference_ranges(references) }
}

function citation_entries(materials: Material[], numbers: number[]) { return numbers.map(number => ({ material: materials[number - 1]!, number })) }

test('resolve_citations returns no results for an empty input', () => { expect(bib.resolve_citations([], [])).toEqual([]) })

test('print_bibliography localizes the lecturer label by interface language', () => {
  const material: Material = { type: 'motion_picture', title: 'Lecture', language: 'en-US', custom: { lecturer: [ { family: '丘', given: '维声', } ], }, }
  expect(bib.print_bibliography([ material ], { language: 'zh-CN' })).toContain('主讲：')
  expect(bib.print_bibliography([ material ], { language: 'en' })).toContain('Lecturer: ')
})

test('print_bibliography renders localized additional and free link lists', () => {
  const material: Material = {
    type: 'book',
    title: 'Links',
    custom: {
      URL: [ 'https://example.com/descriptive?page=1&language=en' ],
      free_material: [
        {
          link: 'https://example.com/file.pdf?download=1&mirror=primary',
          display_text: '<PDF>&',
          note: 'Accessible <copy>',
          'Content-Type': 'application/pdf',
          license: 'CC-BY-4.0',
          tag: [ 'internal', ],
        },
      ] satisfies types_data.Link[],
    } satisfies CSL.Custom,
  }

  for (const [ language, URL_label, free_material_label ] of [ [ 'zh-CN', '其它链接：', '免费资源：' ], [ 'en', 'Additional links:', 'Free materials:' ], ] as const) {
    const root = node_html_parser.parse(bib.print_bibliography([material], { language }))

    const URL_field = root.querySelector('.custom > .URL')!
    expect(URL_field.querySelector(':scope > .label')!.textContent).toBe(URL_label)
    const additional_link = URL_field.querySelector('.link')!
    expect(additional_link.textContent).toBe(material.custom!.URL![0])
    expect(additional_link.getAttribute('href')).toBe(material.custom!.URL![0])

    const free_materials = root.querySelector('.custom > .free_material')!
    expect(free_materials.querySelector(':scope > .label')!.textContent).toBe(free_material_label)
    const free_link = free_materials.querySelector('.Link')!
    expect(free_link.classList.value).toEqual([ 'Link', ])
    expect(free_link.querySelector(':scope > .link')!.textContent).toBe('<PDF>&')
    expect(free_link.querySelector(':scope > .link')!.getAttribute('type')).toBe('application/pdf')
    expect(free_link.querySelector(':scope > .note')!.textContent).toBe('Accessible <copy>')
    expect(free_link.querySelector(':scope > .license')!.textContent).toBe('CC-BY-4.0')
    expect(free_link.textContent).not.toContain('internal')
    expect(free_link.querySelector('pdf')).toBeNull()
    expect(free_link.querySelector('copy')).toBeNull()
  }
})

test('print_bibliography renders named free-material groups as a description list', () => {
  const material: Material = {
    type: 'book',
    title: 'Grouped links',
    custom: {
      free_material: {
        Preview: [ 'https://example.com/preview.pdf', ],
        sample_chapter: [ 'https://example.com/sample.pdf', ],
        Source: [ { link: 'https://example.com/source', display_text: 'Repository', }, ],
      },
    },
  }
  const free_materials = node_html_parser.parse(bib.print_bibliography([ material ], { language: 'en' })).querySelector('.custom > .free_material')!
  const groups = free_materials.querySelector(':scope > .groups')!
  expect(groups.rawTagName).toBe('dl')
  expect(groups.querySelectorAll(':scope > .label').map(group => group.textContent)).toEqual([ 'Preview', 'Sample chapter', 'Source', ])
  expect(groups.querySelectorAll(':scope > .material').map(group => group.querySelector('.Link')!.textContent)).toEqual([ 'https://example.com/preview.pdf', 'https://example.com/sample.pdf', 'Repository', ])

  const Chinese_groups = node_html_parser.parse(bib.print_bibliography([ material ], { language: 'zh-CN' })).querySelectorAll('.custom > .free_material > .groups > .label')
  expect(Chinese_groups.map(group => group.textContent)).toEqual([ '预览', '样章', 'Source', ])
})

test('bibliography labels do not silently fall back for an unsupported language', () => {
  const material: Material = { type: 'book', title: 'Links', custom: { URL: [ 'https://example.com' ], }, }
  expect(() => bib.print_bibliography([ material ], { language: 'fr' })).toThrow('Unsupported bibliography language: "fr"') // Modify this if French is supported in the future.
})

test('print_bibliography_segment starts at the requested global number', () => {
  const materials: Material[] = [ { type: 'book', title: 'Alpha [1]', note: 'Keep this note.' }, { type: 'book', title: 'Beta' }, ]
  const root = node_html_parser.parse(bib.print_bibliography_segment(materials, { language: 'en', start_number: 4 }))
  const bibliography = root.querySelector('ol.Bibliography.csl-bib-body')!
  const entries = root.querySelectorAll('.Bibliography > .entry.CSL')
  expect(bibliography.getAttribute('start')).toBe('4')
  expect(bibliography.getAttribute('role')).toBe('list')
  expect(entries.map(entry => entry.rawTagName)).toEqual([ 'li', 'li' ])
  expect(entries.map(entry => entry.classList.value)).toEqual([ [ 'entry', 'CSL', ], [ 'entry', 'CSL', ], ])
  expect(entries.map(entry => entry.id)).toEqual([ 'reference-4', 'reference-5' ])
  const numbers = entries.map(entry => entry.querySelector(':scope > .number')!)
  expect(numbers.map(number => number.classList.value)).toEqual([ [ 'number', ], [ 'number', ], ])
  expect(numbers.map(number => number.textContent)).toEqual([ '[4]', '[5]' ])
  expect(entries[0]!.querySelector('.csl-entry')!.textContent.trimStart()).not.toMatch(/^\[\d+\]/)
  expect(entries[0]!.querySelector('.csl-entry')!.textContent).toContain('Alpha [1]')
  expect(entries[0]!.querySelector('.csl-entry')!.textContent).toContain('Note: Keep this note.')
})

test('cite owns semantic numbering and preserves plain-text context verbatim', () => {
  const material: Material = { id: 'alpha', type: 'book', title: 'Alpha' }
  const rendered = bib.cite([ material ], [ { condition: () => true, prefix: '<see>& ', label: 'page', locator: '42', suffix: ' <after>&' } ])
  const root = node_html_parser.parse(rendered)
  const citation = root.querySelector('.Citation')!
  expect([ citation, ...citation.querySelectorAll('[class]'), ].map(element => element.classList.value)).toEqual([ [ 'Citation', ], [ 'prefix', ], [ 'reference', ], [ 'number', ], [ 'locator', ], [ 'suffix', ], ])
  expect(citation.querySelector(':scope > .prefix')!.textContent).toBe('<see>& ')
  expect(citation.querySelector(':scope > .reference')!.textContent).toBe('[1, p. 42]')
  expect(citation.querySelector(':scope > .reference > .number')!.getAttribute('href')).toBe('#reference-1')
  expect(citation.querySelector(':scope > .reference > .locator')!.textContent).toBe(', p. 42')
  expect(citation.querySelector(':scope > .suffix')!.textContent).toBe(' <after>&')
  expect(citation.textContent).toBe('<see>& [1, p. 42] <after>&')
  expect(citation.querySelector('see')).toBeNull()
  expect(citation.querySelector('after')).toBeNull()
  expect(rendered).toContain('&lt;see&gt;&amp; ')
  expect(rendered).toContain(' &lt;after&gt;&amp;')
})

test('cite omits absent context elements and renders a number without a locator', () => {
  const material: Material = { id: 'alpha', type: 'book', title: 'Alpha' }
  const citation = node_html_parser.parse(bib.cite([ material ], [ () => true ])).querySelector('.Citation')!
  expect(citation.textContent).toBe('[1]')
  expect(citation.querySelector(':scope > .prefix')).toBeNull()
  expect(citation.querySelector(':scope > .reference > .locator')).toBeNull()
  expect(citation.querySelector(':scope > .suffix')).toBeNull()
})

test('resolve_citations preserves the input order of ID citations', ({ g }) => {
  const fixture: Fixture = create_fixture(g)
  expect(bib.resolve_citations(fixture.references, [ fixture.IDs.at(-1)!, fixture.IDs[0]! ], fixture.reference_ranges)).toEqual([ { entries: citation_entries(fixture.materials, [ fixture.IDs.length ]) }, { entries: citation_entries(fixture.materials, [ 1 ]) } ])
})

test('resolve_citations preserves context on a scoped citation', ({ g }) => {
  const fixture: Fixture = create_fixture(g)
  const scope_index: number = g(fc.integer, { min: 0, max: fixture.ranges.length - 1 })
  const start: number = fixture.ranges[scope_index]![0]
  const context: Citation_Context = { prefix: 'see ', label: 'page', locator: '42', suffix: ' for details' }
  const citation_item: Citation_Item = { condition: { scope: [ fixture.scope_names[scope_index]! ], ID: fixture.IDs[start]! }, ...context } // Resolve an ID within a generated scope.
  expect(bib.resolve_citations(fixture.references, [ citation_item ], fixture.reference_ranges)).toEqual([ { entries: citation_entries(fixture.materials, [ start + 1 ]), ...context } ])
})

test('resolve_citations limits a qualified filter to its scope', ({ g }) => {
  const fixture: Fixture = create_fixture(g)
  const scope_index: number = g(fc.integer, { min: 0, max: fixture.ranges.length - 1 })
  const [ start, stop ]: Range = fixture.ranges[scope_index]!
  const numbers: number[] = Array.from({ length: stop - start }, (_, index) => start + index + 1)
  const citation_items: Citation_Item[] = [ { scope: [ fixture.scope_names[scope_index]! ], filter: () => true, options: { count: numbers.length } } ] // Resolve every entry in the selected scope.
  expect(bib.resolve_citations(fixture.references, citation_items, fixture.reference_ranges)).toEqual([ { entries: citation_entries(fixture.materials, numbers) } ])
})

test('resolve_citations accepts a proper scope prefix and searches its entire subtree', () => {
  const before: Material = { id: 'before-prefix', type: 'book', title: 'Before prefix' }
  const first: Material = { id: 'inside-prefix-first', type: 'book', title: 'Inside prefix first' }
  const second: Material = { id: 'inside-prefix-second', type: 'book', title: 'Inside prefix second' }
  const after: Material = { id: 'after-prefix', type: 'book', title: 'After prefix' }
  const references: Scoped_References = { before: [ before ], selected: { first: [ first ], nested: { second: [ second ] } }, after: [ after ] }
  const citation_items: Citation_Item[] = [ { scope: [ 'selected' ], filter: () => true, options: { count: 2 } } ]

  expect(bib.resolve_citations(references, citation_items, bib.get_reference_ranges(references))).toEqual([ { entries: [ { material: first, number: 2 }, { material: second, number: 3 } ] } ])
})

test('resolve_citations keeps multi-entry results grouped by citation item', ({ g }) => {
  const fixture: Fixture = create_fixture(g)
  const numbers: number[] = Array.from({ length: fixture.materials.length - 1 }, (_, index) => index + 2)
  const citation_items: Citation_Item[] = [ fixture.IDs[0]!, material => material.title === fixture.materials[1]!.title, { filter: material => material.title !== fixture.materials[0]!.title, options: { count: numbers.length } } ] // Resolve one ID, one bare filter, and one multi-entry filter.
  expect(bib.resolve_citations(fixture.references, citation_items, fixture.reference_ranges)).toEqual([ { entries: citation_entries(fixture.materials, [ 1 ]) }, { entries: citation_entries(fixture.materials, [ 2 ]) }, { entries: citation_entries(fixture.materials, numbers) } ])
})

test.prop({ material_types_by_scope: material_types_by_scope_arbitrary, scope_selector: fc.nat(), type_selector: fc.nat() })('resolve_citations maps randomized scoped type filters to global citation numbers', ({ material_types_by_scope, scope_selector, type_selector }) => {
  const scope_index: number = scope_selector % material_types_by_scope.length // Select a valid generated scope while allowing fast-check to vary and shrink the scope count.
  const selected_scope_types: Material_Type[] = material_types_by_scope[scope_index]! // One inner array represents all material types in the selected scope.
  const target_type: Material_Type = selected_scope_types[type_selector % selected_scope_types.length]! // Always select a type present in the scope.
  const scope_names: string[] = material_types_by_scope.map((_, index) => `scope-${index}`) // Match every inner array with one top-level scope name.
  const materials_by_scope: Material[][] = material_types_by_scope.map((scope_types, scope_offset) => scope_types.map((type, material_offset): Material => ({ id: `${scope_offset}:${material_offset}`, type, title: `${scope_offset}:${material_offset}` }))) // Expand the compact type matrix into actual scoped materials.
  const references: Scoped_References = Object.fromEntries(materials_by_scope.map((materials, scope_offset) => [ scope_names[scope_offset]!, materials ]))
  const materials: Material[] = materials_by_scope.flat()
  const start: number = material_types_by_scope.slice(0, scope_index).reduce((total, scope_types) => total + scope_types.length, 0) // The preceding scopes' total length is this scope's zero-based global offset.
  const expected_numbers: number[] = selected_scope_types.flatMap((type, index) => type === target_type ? [ start + index + 1 ] : []) // Convert matching scope-local indices to one-based global citation numbers.
  const reference_ranges: bib.Reference_Ranges = bib.get_reference_ranges(references) // Index scopes in insertion order without flattening their materials.

  expect(bib.resolve_citations(references, [ { scope: [ scope_names[scope_index]! ], filter: material => material.type === target_type, options: { count: expected_numbers.length } } ], reference_ranges)).toEqual([ { entries: citation_entries(materials, expected_numbers) } ])
})
