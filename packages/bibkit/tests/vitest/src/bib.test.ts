// Created by GPT-5.6 Sol Max [codex]. Revised by AndyBRoswell.

import { randomUUID } from 'node:crypto'
import { fc, test } from '@fast-check/vitest'
import { expect } from 'vitest'
import * as node_html_parser from 'node-html-parser'
import * as bib from '@/bib.ts'
import * as catalog from '@/catalog.ts'
import type { Citation_Context, Citation_Item, Material, Scoped_References } from '@/types/data.ts'

type Material_Type = Material['type']
type Range = readonly [ start: number, stop: number ]
type Fixture = { IDs: string[], materials: Material[], ranges: Range[], scope_names: string[], mangled: bib.Mangled_References }

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
  return { IDs, materials, ranges, scope_names, mangled: bib.mangle_references(references) }
}

test('resolve_citations returns no results for an empty input', () => { expect(bib.resolve_citations(bib.mangle_references([]), [])).toEqual([]) })

test('print_bibliography localizes the lecturer label by interface language', () => {
  const material: Material = { type: 'motion_picture', title: 'Lecture', language: 'en-US', custom: { lecturer: [ { family: '丘', given: '维声', } ], }, }
  expect(bib.print_bibliography(bib.mangle_references([ material ]), { language: 'zh-CN' })['[]']).toContain('主讲：')
  expect(bib.print_bibliography(bib.mangle_references([ material ]), { language: 'en' })['[]']).toContain('Lecturer: ')
})

test('print_bibliography_segment starts at the requested global number', () => {
  const materials: Material[] = [ { type: 'book', title: 'Alpha [1]' }, { type: 'book', title: 'Beta' }, ]
  const root = node_html_parser.parse(bib.print_bibliography_segment(materials, { language: 'en', start_number: 4 }))
  const entries = root.querySelectorAll('.CSL_Entry')
  expect(entries.map(entry => entry.id)).toEqual([ '[4]', '[5]' ])
  expect(entries[0]!.querySelector('.csl-entry')!.textContent.trimStart()).toMatch(/^\[4\]/)
  expect(entries[1]!.querySelector('.csl-entry')!.textContent.trimStart()).toMatch(/^\[5\]/)
  expect(entries[0]!.textContent).toContain('Alpha [1]')
})

test('resolve_citations preserves the input order of ID citations', ({ g }) => {
  const fixture: Fixture = create_fixture(g)
  expect(bib.resolve_citations(fixture.mangled, [ fixture.IDs.at(-1)!, fixture.IDs[0]! ])).toEqual([ { numbers: [ fixture.IDs.length ] }, { numbers: [ 1 ] } ])
})

test('resolve_citations preserves context on a scoped citation', ({ g }) => {
  const fixture: Fixture = create_fixture(g)
  const scope_index: number = g(fc.integer, { min: 0, max: fixture.ranges.length - 1 })
  const start: number = fixture.ranges[scope_index]![0]
  const context: Citation_Context = { prefix: 'see ', label: 'page', locator: '42', suffix: ' for details' }
  const citation_item: Citation_Item = { condition: { scope: [ fixture.scope_names[scope_index]! ], ID: fixture.IDs[start]! }, ...context } // Resolve an ID within a generated scope.
  expect(bib.resolve_citations(fixture.mangled, [ citation_item ])).toEqual([ { numbers: [ start + 1 ], ...context } ])
})

test('resolve_citations limits a qualified filter to its scope', ({ g }) => {
  const fixture: Fixture = create_fixture(g)
  const scope_index: number = g(fc.integer, { min: 0, max: fixture.ranges.length - 1 })
  const [ start, stop ]: Range = fixture.ranges[scope_index]!
  const numbers: number[] = Array.from({ length: stop - start }, (_, index) => start + index + 1)
  const citation_items: Citation_Item[] = [ { scope: [ fixture.scope_names[scope_index]! ], filter: () => true, options: { count: numbers.length } } ] // Resolve every entry in the selected scope.
  expect(bib.resolve_citations(fixture.mangled, citation_items)).toEqual([ { numbers } ])
})

test('resolve_citations keeps multi-entry results grouped by citation item', ({ g }) => {
  const fixture: Fixture = create_fixture(g)
  const numbers: number[] = Array.from({ length: fixture.materials.length - 1 }, (_, index) => index + 2)
  const citation_items: Citation_Item[] = [ fixture.IDs[0]!, material => material.title === fixture.materials[1]!.title, { filter: material => material.title !== fixture.materials[0]!.title, options: { count: numbers.length } } ] // Resolve one ID, one bare filter, and one multi-entry filter.
  expect(bib.resolve_citations(fixture.mangled, citation_items)).toEqual([ { numbers: [ 1 ] }, { numbers: [ 2 ] }, { numbers } ])
})

test.prop({ material_types_by_scope: material_types_by_scope_arbitrary, scope_selector: fc.nat(), type_selector: fc.nat() })('resolve_citations maps randomized scoped type filters to global citation numbers', ({ material_types_by_scope, scope_selector, type_selector }) => {
  const scope_index: number = scope_selector % material_types_by_scope.length // Select a valid generated scope while allowing fast-check to vary and shrink the scope count.
  const selected_scope_types: Material_Type[] = material_types_by_scope[scope_index]! // One inner array represents all material types in the selected scope.
  const target_type: Material_Type = selected_scope_types[type_selector % selected_scope_types.length]! // Always select a type present in the scope.
  const scope_names: string[] = material_types_by_scope.map((_, index) => `scope-${index}`) // Match every inner array with one top-level scope name.
  const references: Scoped_References = Object.fromEntries(material_types_by_scope.map((scope_types, scope_offset) => [ scope_names[scope_offset]!, scope_types.map((type, material_offset): Material => ({ id: `${scope_offset}:${material_offset}`, type, title: `${scope_offset}:${material_offset}` })) ])) // Expand the compact type matrix into actual scoped materials.
  const start: number = material_types_by_scope.slice(0, scope_index).reduce((total, scope_types) => total + scope_types.length, 0) // The preceding scopes' total length is this scope's zero-based global offset.
  const expected_numbers: number[] = selected_scope_types.flatMap((type, index) => type === target_type ? [ start + index + 1 ] : []) // Convert matching scope-local indices to one-based global citation numbers.
  const mangled: bib.Mangled_References = bib.mangle_references(references) // Flatten scopes in insertion order while retaining each scope's range.

  expect(bib.resolve_citations(mangled, [ { scope: [ scope_names[scope_index]! ], filter: material => material.type === target_type, options: { count: expected_numbers.length } } ])).toEqual([ { numbers: expected_numbers } ])
})
