// @ts-ignore [citation-js doesn't have ts support]
import citation_js from "@citation-js/core";
import '@citation-js/plugin-csl'
import * as node_html_parser from 'node-html-parser'
import default_bib_style from './IEEE.custom.csl'
import type { ID_t, Scoped_ID_t, Scoped_References, Serialized_Scope_Name, Material, Material_Filter, Qualified_Material_Filter, Citation_Item, Citation_Result, Citation_Context, Citation_Condition, } from "./types/data.ts";
import * as catalog from './catalog.ts'
import * as data_type from './types/data.ts'
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

const mangling_action_ID = {
  visit: 0,
  start_key: 1,
  end_key: 2,
} as const

type mangling_action =
  | { type: typeof mangling_action_ID.visit, path: string[], node: Scoped_References, }
  | { type: typeof mangling_action_ID.start_key, path: string[], node: Scoped_References, }
  | { type: typeof mangling_action_ID.end_key, path: string[], start: number, }

export type Mangled_References = { flattened: typeof citation_js.Cite, range: Record<Serialized_Scope_Name, [ number, number ]> }
export type Printed_Bibliography = { [key: Serialized_Scope_Name]: string }

// TODO: Test case for loop detection
// Created by Gemini 3.1 Pro Extended [web]. Revised by AndyBRoswell.
export function mangle_references(references: Scoped_References): Mangled_References { // flat and partition
  const ret: Mangled_References = {
    flattened: new citation_js.Cite(),
    range: {},
  }
  let counter = 0
  const stack: mangling_action[] = [ { type: mangling_action_ID.visit, node: references, path: [] } ]
  while (stack.length > 0) {
    const action = stack.pop()!
    if (action.type === mangling_action_ID.visit) {
      if (Array.isArray(action.node)) {
        for (const element of action.node) {
          ret.flattened.add(element)
          counter++
        }
      }
      else {
        const keys = Object.keys(action.node)
        for (let i = keys.length - 1; i >= 0; i--) {
          const next_path = [ ...action.path, keys[i] ] as string[]
          stack.push({ type: mangling_action_ID.start_key, path: next_path, node: action.node[keys[i]!]! })
        }
      }
    }
    else if (action.type === mangling_action_ID.start_key) {
      stack.push({ type: mangling_action_ID.end_key, path: action.path, start: counter })
      stack.push({ type: mangling_action_ID.visit, node: action.node, path: action.path })
    }
    else { ret.range[JSON.stringify(action.path)] = [ action.start, counter ] }
  }
  ret.range['[]'] = [0, counter]
  return ret
}

export function print_bibliography(mangled: Mangled_References): Printed_Bibliography {
  const raw_bib = mangled.flattened.format('bibliography', prettified_default_bib_style)
  const original_HTML_root = node_html_parser.parse(raw_bib)
  const csl_entry = original_HTML_root.querySelectorAll('.csl-entry')
  const partitioned_bib: Printed_Bibliography = {}
  for (const [ serialized_scope_name, range ] of Object.entries(mangled.range)) {
    const [ start, end ] = range
    const csl_bib_body = node_html_parser.parse(`<div class="csl-bib-body"></div>`).firstChild as node_html_parser.HTMLElement
    const target_entries = csl_entry.slice(start, end)
    for (const [ index, entry ] of target_entries.entries()) {
      // wrap the original content
      const off = start + index
      entry.classList.remove('csl-entry')
      entry.classList.add('CSL_Entry')
      const wrapper = node_html_parser.parse(`<div class="csl-entry"></div>`).firstChild as node_html_parser.HTMLElement
      wrapper.set_content(entry.childNodes)
      entry.set_content(wrapper)
      entry.id = `[${off + 1}]`
      // show custom data of this CSL item
      const current_CSL_item = mangled.flattened.data[off] as data_type.Material
      if ('custom' in current_CSL_item) {
        const additional = node_html_parser.parse(`<div class="custom"></div>`).firstChild as node_html_parser.HTMLElement
        if ('lecturer' in current_CSL_item.custom) {
          const p = node_html_parser.parse(`<p class="lecturer"></p>`).firstChild as node_html_parser.HTMLElement
          const lecturer = catalog.get_rendered_names(current_CSL_item.custom.lecturer, { full_name: true })
          p.set_content(`Lecturer: ${lecturer}`)
          additional.appendChild(p)
        }
        entry.appendChild(additional)
      }
      csl_bib_body.appendChild(entry)
    }
    partitioned_bib[serialized_scope_name] = csl_bib_body.toString()
  }
  return partitioned_bib
}

// It seems citation.js can't number the citations correctly when using IEEE style. Implemented it from scratch instead.
export function cite(mangled: Mangled_References, citation_items: Citation_Item[]): string { // mimic \cite[]{}
  const return_intermediates: string[] = []
  const results = resolve_citations(mangled, citation_items) // Resolve every item before rendering the citations.
  for (const result of results) { // Render each result with its own citation context.
    for (const number of result.numbers) { // A filter may resolve one citation item to multiple entries.
      const target_material = mangled.flattened.data[number - 1]! // Citation numbers are one-based.
      let precursor: string
      try {
        precursor = new citation_js.Cite([ target_material ]).format('citation', {
          format: 'text',
          template: default_bib_style_name,
          entry: [ {
            id: target_material.id,
            prefix: result.prefix,
            label: result.label,
            locator: result.locator,
            suffix: result.suffix,
          } ]
        })
      }
      catch (error) {
        logger.error(`Failed material:${node_os.EOL}${JSON.stringify(target_material, null, 2)}`)
        throw error
      }
      const rendered_prefix = result.prefix ?? ''
      const citation_number_placeholder = '[1'
      if (!precursor.startsWith(rendered_prefix + citation_number_placeholder)) {
        logger.error(`Failed material:${node_os.EOL}${JSON.stringify(target_material, null, 2)}`)
        throw new Error(`Unexpected citation rendering: ${JSON.stringify(precursor)}`)
      }
      const rendered_context_tail = precursor.slice((rendered_prefix + citation_number_placeholder).length)
      const a = node_html_parser.parse(`<a></a>`).firstChild as node_html_parser.HTMLElement
      a.setAttribute('href', `#[${number}]`)
      a.textContent = `${number}`
      return_intermediates.push(`${rendered_prefix}[${a.toString()}${rendered_context_tail}`)
    }
  }
  return return_intermediates.join('')
}

export function resolve_citations(mangled: Mangled_References, citation_items: Citation_Item[]): Citation_Result[] { // Resolve all citation items in input order.
  return citation_items.flatMap(citation_item => resolve_citation(mangled, citation_item)) // Preserve each item's result grouping and context.
}

function resolve_citation(mangled: Mangled_References, citation_item: Citation_Item): Citation_Result[] { // Resolve one citation item without rendering HTML.
  let search_scope: [ number, number ] = [ 0, mangled.flattened.data.length ]
  let ID: ID_t
  let material_filter: Material_Filter
  let filter_options: Filter_Options = {}
  let results: Citation_Result[] = []
  switch (typeof citation_item) {
    case 'function':
      results.push({ numbers: cite_by_filter(mangled, search_scope, citation_item as Material_Filter, {}) })
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
          results.push({ numbers: cite_by_filter(mangled, search_scope, condition, {}), ...context })
          break
        case 'object':
          if ('filter' in condition) {
            material_filter = (condition as Qualified_Material_Filter).filter
            if ('scope' in condition) { search_scope = mangled.range[JSON.stringify(condition.scope)]! }
            if ('options' in condition) { filter_options = condition.options }
            results.push({ numbers: cite_by_filter(mangled, search_scope, material_filter, filter_options), ...context })
          }
          else if ('ID' in condition) {
            search_scope = mangled.range[JSON.stringify((condition as Scoped_ID_t).scope)]!
            ID = (condition as Scoped_ID_t).ID
            results.push({ numbers: [ cite_by_ID(mangled, search_scope, ID) ], ...context })
          }
          else { results.push({ numbers: [ cite_by_ID(mangled, search_scope, condition as ID_t) ], ...context }) }
          break
        case 'string':
        case 'number':
        case 'bigint':
          results.push({ numbers: [ cite_by_ID(mangled, search_scope, condition as ID_t) ], ...context })
      }
      break
    case 'string':
    case 'number':
    case 'bigint':
      results.push({ numbers: [ cite_by_ID(mangled, search_scope, citation_item as ID_t) ] })
      break
  }
  return results
}

function cite_by_ID(mangled: Mangled_References, search_scope: [ number, number ], ID: ID_t): number {
  const target_material: Material = catalog.get(ID)
  for (let i = search_scope[0]; i < search_scope[1]; i++) {
    if (mangled.flattened.data[i].id === target_material.id) { return i + 1 }
  }
  throw new Error(`Failed to cite any entry with ID ${JSON.stringify(ID, null, 2)}`)
}

function cite_by_filter(mangled: Mangled_References, search_scope: [ number, number ], material_filter: Material_Filter, filter_options: Filter_Options): number[] {
  const ret: number[] = []
  let target_materials: Material[] = mangled.flattened.data.slice(...search_scope).filter(material_filter)
  check_filter_results(material_filter, target_materials, filter_options)
  let material_index = 0
  for (let i = search_scope[0]; i < search_scope[1]; i++) {
    if (mangled.flattened.data[i].id === target_materials[material_index]!.id) {
      ret.push(i + 1)
      material_index++
    }
    if (material_index >= target_materials.length) { break }
  }
  return ret
}
