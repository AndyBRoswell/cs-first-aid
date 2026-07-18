// @ts-ignore [citation-js doesn't have ts support]
import citation_js from "@citation-js/core";
import '@citation-js/plugin-csl'
import node_html_parser from 'node-html-parser'
import default_bib_style from './IEEE.custom.csl?raw'
import type { ID_t, Scoped_ID_t, Scoped_References, Serialized_Scope_Name, Material, } from "@/types/data.ts";
import * as catalog from '@/data/materials/catalog.ts'

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
// Created by Gemini 3.1 Pro Extended. Revised by AndyBRoswell.
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
  return ret
}

export function print_bibliography(mangled: Mangled_References): Printed_Bibliography {
  const raw_bib = mangled.flattened.format('bibliography', prettified_default_bib_style)
  const original_HTML_root = node_html_parser.parse(raw_bib)
  const csl_entry = original_HTML_root.querySelectorAll('.csl-entry')
  const partitioned_bib: Printed_Bibliography = {}
  for (const [ key, value ] of Object.entries(mangled.range)) {
    const [ start, end ] = value
    const new_HTML_root = node_html_parser.parse(`<div class="csl-bib-body"></div>`)
    const target_entries = csl_entry.slice(start, end)
    for (const entry of target_entries) { new_HTML_root.appendChild(entry) }
    partitioned_bib[key] = new_HTML_root.toString()
  }
  return partitioned_bib
}

// It seems citation.js can't number the citations correctly when using IEEE style. Implemented it from scratch instead.
export function cite(mangled: Mangled_References, IDs: (ID_t | Scoped_ID_t) | (ID_t | Scoped_ID_t)[]): string {
  const indices: number[] = []
  if (Array.isArray(IDs)) { for (const ID of IDs) { indices.push(_cite(mangled, ID)) } }
  else { indices.push(_cite(mangled, IDs)) }
  return `[${indices.join('][')}]`
}

function _cite(mangled: Mangled_References, ID: (ID_t | Scoped_ID_t)): number {
  let search_scope: [ number, number ]
  let NID: ID_t // normalized ID
  if (typeof ID === 'object' && "ID" in ID) { // Scoped_ID_t
    NID = ID.ID as ID_t
    search_scope = mangled.range[ID.scope!]!
  }
  else {
    NID = ID as ID_t
    search_scope = [ 0, mangled.flattened.data.length ]
  }
  const target_material: Material = catalog.get(NID)
  for (let i = search_scope[0]; i < search_scope[1]; i++) {
    if (mangled.flattened.data[i].id === target_material.id) { return i + 1 }
  }
  throw new Error(`Failed to cite any entry with ID ${JSON.stringify(ID, null, 2)}`)
}