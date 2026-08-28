// @ts-ignore [citation-js doesn't have ts support]
import citation_js from "@citation-js/core";
import '@citation-js/plugin-csl'
import * as node_html_parser from 'node-html-parser'
import default_bib_style from './IEEE.custom.csl'
import type { ID_t, Scoped_ID_t, Scoped_References, Scope_Name, Serialized_Scope_Name, Material, Material_Filter, Citation_Item, Citation_Result, Citation_Context, Citation_Condition, } from "./types/data.ts";
import * as catalog from './catalog.ts'
import { check_filter_results, type Filter_Options } from "./catalog.ts"
import pino from 'pino'
import * as util from "@cs-first-aid/util"
import node_os from "node:os"
import * as _ from '@cs-first-aid/util/lib/lodash-es'

const logger = pino(util.pino_arg)

const CSL_config = citation_js.plugins.config.get('@csl')
const default_bib_style_name = 'IEEE [Custom]'
CSL_config.styles.add(default_bib_style_name, default_bib_style)
const prettified_default_bib_style: object = {
  format: 'html',
  template: default_bib_style_name,
  hyperlinks: true,
}

const indexing_action_ID = {
  visit: 0,
  start_key: 1,
  end_key: 2,
} as const

type indexing_action =
  | { type: typeof indexing_action_ID.visit, path: string[], node: Scoped_References, }
  | { type: typeof indexing_action_ID.start_key, path: string[], node: Scoped_References, }
  | { type: typeof indexing_action_ID.end_key, path: string[], start: number, }

export type Reference_Range = [ start: number, end: number ]
export type Reference_Ranges = Record<Serialized_Scope_Name, Reference_Range>

// TODO: Test case for loop detection
// Created by Gemini 3.1 Pro Extended [web]. Revised by AndyBRoswell.
export function get_reference_ranges(references: Scoped_References): Reference_Ranges { // Index every scope without transforming its materials.
  const ret: Reference_Ranges = {} // Map each serialized scope name to a zero-based half-open range.
  let counter = 0 // Count the materials that precede the current DFS position.
  const stack: indexing_action[] = [ { type: indexing_action_ID.visit, node: references, path: [] } ] // Start at the root scope.
  while (stack.length > 0) {
    const action = stack.pop()! // Process the most recently scheduled DFS action.
    if (action.type === indexing_action_ID.visit) {
      if (Array.isArray(action.node)) { counter += action.node.length } // A leaf advances once for every material it contains.
      else {
        const keys = Object.keys(action.node) // Object insertion order defines the order of sibling scopes.
        for (let i = keys.length - 1; i >= 0; i--) {
          const next_path = [ ...action.path, keys[i] ] as string[]
          stack.push({ type: indexing_action_ID.start_key, path: next_path, node: action.node[keys[i]!]! }) // Reverse pushing restores insertion order when popping.
        }
      }
    }
    else if (action.type === indexing_action_ID.start_key) {
      stack.push({ type: indexing_action_ID.end_key, path: action.path, start: counter }) // Save the boundary before visiting this scope.
      stack.push({ type: indexing_action_ID.visit, node: action.node, path: action.path }) // Visit the scope before its end action is popped.
    }
    else { ret[JSON.stringify(action.path)] = [ action.start, counter ] } // The counter now marks the scope's exclusive end.
  }
  ret['[]'] = [0, counter] // The root range contains every material in the tree.
  return ret
}

function * iterate_materials(references: Scoped_References): Generator<Material> { // Visit leaf arrays in the same DFS order used by get_reference_ranges().
  const stack: Scoped_References[] = [ references ]
  while (stack.length > 0) {
    const node = stack.pop()!
    if (Array.isArray(node)) {
      for (const material of node) { yield material }
    }
    else {
      const children = Object.values(node)
      for (let i = children.length - 1; i >= 0; i--) { stack.push(children[i]!) }
    }
  }
}

function get_scoped_references(references: Scoped_References, scope_name: Scope_Name): Scoped_References { // A scope may be a proper prefix, so this can return an internal subtree as well as a leaf array.
  let scoped_references = references
  for (const segment of scope_name) {
    if (Array.isArray(scoped_references) || !Object.prototype.hasOwnProperty.call(scoped_references, segment)) {
      throw new Error(`Unknown reference scope: ${JSON.stringify(scope_name)}`)
    }
    scoped_references = scoped_references[segment]!
  }
  return scoped_references
}

function decorate_bibliography_entry(entry: node_html_parser.HTMLElement, material: Material, number: number, language: string): node_html_parser.HTMLElement { // Apply the site-specific wrapper, anchor, number, and custom fields to one CSL entry.
  const decorated_entry = util.create_HTML_element('li', { class: 'entry CSL', })
  decorated_entry.id = `reference-${number}`
  const citation_number = util.create_HTML_element('span', { class: 'number', }, `[${number}]`)
  decorated_entry.appendChild(citation_number)
  decorated_entry.appendChild(entry)
  // show custom data of this CSL item
  if (material.custom) {
    const additional = util.create_HTML_element('div', { class: 'custom', })
    if ('lecturer' in material.custom) {
      const p = util.create_HTML_element('p', { class: 'lecturer', })
      const lecturer = catalog.get_rendered_names(material.custom.lecturer, { full_name: true })
      p.set_content(`${language === 'zh-CN' ? '主讲：' : 'Lecturer: '}${lecturer}`)
      additional.appendChild(p)
    }
    decorated_entry.appendChild(additional)
  }
  return decorated_entry
}

export function print_bibliography_segment(materials: Material[], { language, start_number }: { language: string, start_number: number }): string { // Render one scope independently while preserving its global numbering.
  if (!Number.isSafeInteger(start_number) || start_number < 1) { throw new RangeError('start_number must be a positive safe integer') }
  const raw_bib = new citation_js.Cite(materials).format('bibliography', prettified_default_bib_style)
  const original_HTML_root = node_html_parser.parse(raw_bib)
  const csl_entries = original_HTML_root.querySelectorAll('.csl-entry')
  if (csl_entries.length !== materials.length) { throw new Error('Unexpected number of bibliography entries') }
  const csl_bib_body = util.create_HTML_element('ol', { class: 'Bibliography csl-bib-body', role: 'list', })
  csl_bib_body.setAttribute('start', `${start_number}`)
  for (const [ index, entry ] of csl_entries.entries()) {
    const number = start_number + index // Translate the segment-local position to the global citation number.
    csl_bib_body.appendChild(decorate_bibliography_entry(entry, materials[index]!, number, language))
  }
  return csl_bib_body.toString()
}

export function print_bibliography(references: Scoped_References, { language }: { language: string }): string {
  const materials = Array.isArray(references) ? references : [ ...iterate_materials(references) ] // Flatten only for this complete rendering.
  return print_bibliography_segment(materials, { language, start_number: 1 })
}

type Reference_Search_Scope = { references: Scoped_References, start: number } // The selected leaf or subtree bounds the search; start maps local offsets to global numbers.

function get_search_scope(references: Scoped_References, reference_ranges: Reference_Ranges | undefined, scope_name: Scope_Name): Reference_Search_Scope {
  if (scope_name.length === 0) { return { references, start: 0 } }
  const serialized_scope_name = JSON.stringify(scope_name)
  const range = reference_ranges?.[serialized_scope_name]
  if (range === undefined) { throw new Error(`Unknown reference scope: ${serialized_scope_name}`) }
  return { references: get_scoped_references(references, scope_name), start: range[0] }
}

// It seems citation.js can't number the citations correctly when using IEEE style. Implemented it from scratch instead.
export function cite(references: Scoped_References, citation_items: Citation_Item[], reference_ranges?: Reference_Ranges): string { // mimic \cite[]{}
  const return_intermediates: string[] = []
  const results = resolve_citations(references, citation_items, reference_ranges) // Preserve each material found within its qualified scope.
  for (const result of results) { // Render each result with its own citation context.
    for (const { material: target_material, number } of result.entries) { // A filter may resolve one citation item to multiple entries.
      let rendered_locator: string | undefined
      if (result.locator !== undefined) {
        try {
          rendered_locator = new citation_js.Cite([ target_material ]).format('citation', {
            format: 'text',
            template: default_bib_style_name,
            entry: [ { id: target_material.id, label: result.label, locator: result.locator, } ]
          })
        }
        catch (error) {
          logger.error(`Failed material:${node_os.EOL}${JSON.stringify(target_material, null, 2)}`)
          throw error
        }
      }
      const citation = util.create_HTML_element('span', { class: 'Citation', })
      if (result.prefix !== undefined) {
        const prefix = util.create_HTML_element('span', { class: 'prefix', }, result.prefix)
        citation.appendChild(prefix)
      }
      const reference = util.create_HTML_element('span', { class: 'reference', })
      reference.appendChild(util.create_HTML_text_node('['))
      const a = util.create_HTML_element('a', { class: 'number', })
      a.setAttribute('href', `#reference-${number}`)
      a.appendChild(util.create_HTML_text_node(`${number}`))
      reference.appendChild(a)
      if (rendered_locator !== undefined) {
        const locator = util.create_HTML_element('span', { class: 'locator', }, `, ${rendered_locator}`)
        reference.appendChild(locator)
      }
      reference.appendChild(util.create_HTML_text_node(']'))
      citation.appendChild(reference)
      if (result.suffix !== undefined) {
        const suffix = util.create_HTML_element('span', { class: 'suffix', }, result.suffix)
        citation.appendChild(suffix)
      }
      return_intermediates.push(citation.toString())
    }
  }
  return return_intermediates.join('')
}

export function resolve_citations(references: Scoped_References, citation_items: Citation_Item[], reference_ranges?: Reference_Ranges): Citation_Result[] { // Resolve all citation items in input order.
  return citation_items.flatMap(citation_item => resolve_citation(references, citation_item, reference_ranges)) // Preserve each item's result grouping and context.
}

function resolve_citation(references: Scoped_References, citation_item: Citation_Item, reference_ranges?: Reference_Ranges): Citation_Result[] { // Resolve one citation item without rendering HTML.
  let search_scope: Reference_Search_Scope = { references, start: 0 }
  let ID: ID_t
  let material_filter: Material_Filter
  let filter_options: Filter_Options = {}
  let results: Citation_Result[] = []
  switch (typeof citation_item) {
    case 'function':
      results.push({ entries: cite_by_filter(search_scope, citation_item as Material_Filter, {}) })
      break
    case 'object':
      let condition: Citation_Condition
      let context: Citation_Context | undefined = undefined
      if ('condition' in citation_item) {
        condition = citation_item.condition
        context = _.cloneDeep(citation_item) // shallow copy for filter functions
        // @ts-ignore
        delete (context as Citation_Item).condition
      }
      else { condition = citation_item }
      switch (typeof condition) {
        case 'function':
          results.push({ entries: cite_by_filter(search_scope, condition, {}), ...context })
          break
        case 'object':
          if (!Array.isArray(condition) && 'filter' in condition) {
            material_filter = condition.filter
            if (condition.scope !== undefined) { search_scope = get_search_scope(references, reference_ranges, condition.scope) }
            if ('options' in condition) { filter_options = condition.options }
            results.push({ entries: cite_by_filter(search_scope, material_filter, filter_options), ...context })
          }
          else if ('ID' in condition) {
            search_scope = get_search_scope(references, reference_ranges, (condition as Scoped_ID_t).scope)
            ID = (condition as Scoped_ID_t).ID
            results.push({ entries: [ cite_by_ID(search_scope, ID) ], ...context })
          }
          else { results.push({ entries: [ cite_by_ID(search_scope, condition as ID_t) ], ...context }) }
          break
        case 'string':
        case 'number':
        case 'bigint':
          results.push({ entries: [ cite_by_ID(search_scope, condition as ID_t) ], ...context })
      }
      break
    case 'string':
    case 'number':
    case 'bigint':
      results.push({ entries: [ cite_by_ID(search_scope, citation_item as ID_t) ] })
      break
  }
  return results
}

function cite_by_ID(search_scope: Reference_Search_Scope, ID: ID_t): Citation_Result['entries'][number] {
  const target_material: Material = catalog.get(ID)
  let offset = 0
  for (const material of iterate_materials(search_scope.references)) {
    if (material.id === target_material.id) { return { material, number: search_scope.start + offset + 1 } }
    offset++
  }
  throw new Error(`Failed to cite any entry with ID ${JSON.stringify(ID, null, 2)}`)
}

function cite_by_filter(search_scope: Reference_Search_Scope, material_filter: Material_Filter, filter_options: Filter_Options): Citation_Result['entries'] {
  const entries: Citation_Result['entries'] = []
  const target_materials: Material[] = []
  let offset = 0
  for (const material of iterate_materials(search_scope.references)) {
    if (material_filter(material)) {
      target_materials.push(material)
      entries.push({ material, number: search_scope.start + offset + 1 })
    }
    offset++
  }
  check_filter_results(material_filter, target_materials, filter_options)
  return entries
}
