import type { ID_t, Entry, Material, ID_primitive, ID_object, Material_Filter } from "./types/data.ts";
import { legal_keys_of_ID_object } from "./types/data.ts";
import * as CSL from './CSL.ts'
import Cartesian_product from "fast-cartesian";
import node_fs_promises from 'node:fs/promises';
import node_path from 'node:path'
import node_os from 'node:os'
import pino from 'pino'
import * as ohash from 'ohash'
import * as util from '@cs-first-aid/util'
// @ts-ignore [citation-js doesn't have ts support]
import citation_js from "@citation-js/core";
import '@citation-js/plugin-csl'
// import node_fs from "node:fs";
import get_rendered_author from './get_rendered_author.csl'
import get_full_author_names from './get_full_author_names.csl'

const logger = pino(util.pino_arg)

const m = new Map<ID_t, Material> // map
const v: Material[] = []          // values
const d = new Set()               // digests

export function canonical_ID(ID: ID_t): ID_primitive {
  switch (typeof ID) {
    case 'string':
    case 'number':
    case 'bigint':
      return ID
    case 'object':
      if (Array.isArray(ID)) { return JSON.stringify(ID) } // ordered n-tuple
      else {
        const CID = structuredClone(ID)
        if ('unordered_author' in CID) {
          if (Array.isArray(CID.unordered_author) === false) { CID.unordered_author = [ CID.unordered_author ] }
          else { CID.unordered_author.sort() }
        }
        if ('ordered_author' in CID) {
          if (Array.isArray(CID.ordered_author) === false) { CID.ordered_author = [ CID.ordered_author ] }
        }
        return JSON.stringify(CID, legal_keys_of_ID_object)
      }
  }
}

export type params_of_canonical_ID_enumeration = {
  choices: (keyof ID_object)[][]
  optional?: boolean
  values?: { [key in keyof ID_object]?: { value: ID_object[key][], override?: boolean } } // todo: handle extra values/values used to override
}[]

/**
 * @deprecated
 * It is now recommended to use `filter` instead.
 */
export function enumerate_canonical_IDs(
  groups: params_of_canonical_ID_enumeration = [
    { choices: [ [ 'unordered_author' ], [ 'ordered_author' ] ] },
    { choices: [ [ 'title', 'subtitle' ] ] },
    { choices: [ [ 'edition' ], [ 'date' ] ], optional: true, },
    { choices: [ [ 'volume', 'part' ] ] },
  ],
  material?: Material,
): ID_t[] {
  const ret: ID_t[] = []

  // A task represents a combination of enabled groups.
  const enum_task_components = new Array<boolean[]>(groups.length).fill([])
  for (const [ index, group ] of groups.entries()) {
    enum_task_components[index]!.push(true)
    if (group.optional === true) { enum_task_components[index]!.push(false) }
  }
  const enum_tasks = Cartesian_product(enum_task_components) // ex. TTTT and TTFT for the default of `groups`

  for (const task of enum_tasks) {
    // Each group may have multiple choices. Only 1 choice can be picked for each group during a task.
    const current_target_choices = []
    for (const [ index, enabled ] of task.entries()) { if (enabled) { current_target_choices.push(groups[index]!.choices) } } // Pick selected (enabled) groups of this task.

    // Generate all possible combinations of key choices according to the current enabled groups,
    // e.g.
    //  [['unordered_author'], ['title', 'subtitle'], ['edition'], ['volume', 'part']]
    //  [['unordered_author'], ['title', 'subtitle'], ['date'],    ['volume', 'part']]
    //  ...
    let key_combis = Cartesian_product(current_target_choices)
    for (const key_combi of key_combis) {
      const ID: ID_object = {}
      for (const key in key_combi) {
        switch (key) {
          case 'unordered_author':
          case 'ordered_author':
            break // todo: use citation-js to print bib for a dummy item
          case 'date':
            break // todo: use citation-js to print bib for a dummy item
          default:
            break // todo
        }
      }
    }
  }
  return ret
}

export function add_items(p: Entry[]): void {
  for (const pair of p) { add(pair.id, pair.material) }
}

export function add_item(p: Entry): void {
  add(p.id, p.material)
}

export function add(IDs: ID_t[], material: Material): void {
  if ('ISBN' in material) { CSL.ensure_ISBN(material.ISBN) }
  if ('ISSN' in material) { CSL.ensure_ISSN(material.ISSN) }
  for (const ID of IDs) {
    const CID = canonical_ID(ID)
    if (m.has(CID)) { throw new Error(`ID ${CID} already exists. Material: ${JSON.stringify(material, null, 2)}`) ; }
    m.set(CID, material)
  }
  let o: Material
  if ('id' in material) {
    o = structuredClone(material)
    delete o.id
  }
  else { o = material }
  const digest = ohash.serialize(o)
  if (d.has(digest) === false) {
    material.id = v.length // automatically generate an id to let citation-js not mistakenly overwrite the existing items due to duplicate ids
    v.push(material)
    d.add(digest)
  }
}

export function get(ID: ID_t): Material {
  const CID = canonical_ID(ID)
  if (m.has(CID)) { return m.get(CID)! }
  else { throw new Error(`Failed to fetch any entry with ID ${JSON.stringify(ID, null, 2)}`) }
}

export type Filter_Options = {
  count?: number
  min_count?: number
  max_count?: number
}

export const default_filter_options: Filter_Options = {
  min_count: 1,
  max_count: Number.MAX_SAFE_INTEGER,
}

export function filter(predicate: Material_Filter, options: Filter_Options = {}): typeof v {
  return scoped_filter(v, predicate, options)
}

export function scoped_filter(materials: Material[], predicate: Material_Filter, options: Filter_Options = {}): typeof v {
  const results = materials.filter(predicate)
  check_filter_results(predicate, results, options)
  return results
}

export function check_filter_results(predicate: Material_Filter, results: Material[], options: Filter_Options = {}): void {
  if ('count' in options && results.length !== options.count) {
    throw new Error(`Filter ${predicate} returned ${results.length} , which does not match the expected count ${options.count}`)
  }
  if (results.length < (options.min_count ?? default_filter_options.min_count!)) {
    throw new Error(`Filter ${predicate} returned ${results.length} results, which is less than minimum value ${options.min_count ?? default_filter_options.min_count}`)
  }
  if (results.length > (options.max_count ?? default_filter_options.max_count!)) {
    logger.debug(
      `Results:`
      +
      node_os.EOL
      +
      JSON.stringify(results, null, 2)
    )
    throw new Error(
      `Filter ${predicate} returned ${results.length} results, which is more than maximum value ${options.max_count ?? default_filter_options.max_count}.`
    )
  }
}

export function all(): typeof v { return v }

export async function dump_locally(output_path: string = node_path.join(util.project_root, 'local/materials.json')): Promise<void> {
  if (!process.env["CI"] && process.env["export_materials"]) {
    await node_fs_promises.mkdir(node_path.dirname(output_path), { recursive: true })
    await node_fs_promises.writeFile(output_path, JSON.stringify(v, null, 2), 'utf8')
    logger.info(`All imported materials saved at ${output_path}`)
  }
}

export type name_rendering_options = {
  full_name?: boolean
}

export const default_name_rendering_options: name_rendering_options = {
  full_name: false
}

const CSL_config = citation_js.plugins.config.get('@csl')
// const get_rendered_author = node_fs.readFileSync(node_path.resolve(util.source_root, 'data/materials/get_rendered_author.csl'), 'utf8')
CSL_config.styles.add('get_rendered_author', get_rendered_author)
// const get_full_author_names = node_fs.readFileSync(node_path.resolve(util.source_root, 'data/materials/get_full_author_names.csl'), 'utf8')
CSL_config.styles.add('get_full_author_names', get_full_author_names)

export function get_rendered_names(names: CSL.Name_Variable[], options: name_rendering_options = {}): string {
  const dummy_item = [ { id: 0, author: names } ]
  const cite = new citation_js.Cite(dummy_item)
  let output
  switch (options.full_name ?? default_name_rendering_options.full_name) {
    case true:
      output = cite.format('bibliography', { template: 'get_full_author_names' })
      break
    case false:
      output = cite.format('bibliography', { template: 'get_rendered_author' })
      break
  }
  return output.trim()
}