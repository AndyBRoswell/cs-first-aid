import type { ID_t, Entry, Material, ID_primitive, ID_object } from "@/types/data.ts";
import { legal_keys_of_ID_object } from "@/types/data.ts";
import * as CSL_Data from '@/types/CSL_data.ts'
import Cartesian_product from "fast-cartesian";
import node_fs_promises from 'node:fs/promises';
import node_path from 'node:path'
import * as util from '@/util.ts'

const m = new Map<ID_t, Material>

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

export function add_items(p: Entry[]) {
  for (const pair of p) { add(pair.id, pair.material) }
}

export function add_item(p: Entry) {
  add(p.id, p.material)
}

export function add(IDs: ID_t[], material: Material) {
  if ('ISBN' in material) { CSL_Data.ensure_ISBN(material.ISBN) }
  for (const ID of IDs) {
    const CID = canonical_ID(ID)
    if (m.has(CID)) { throw new Error(`ID ${CID} already exists. Material: ${JSON.stringify(material, null, 2)}`) ; }
    m.set(CID, material)
  }
}

export function get(ID: ID_t): Material {
  const CID = canonical_ID(ID)
  if (m.has(CID)) { return m.get(CID)! }
  else { throw new Error(`Failed to fetch any entry with ID ${JSON.stringify(ID, null, 2)}`) }
}

export async function dump(output_path = node_path.join(util.project_root, 'local/course_materials.json')) {
  await node_fs_promises.writeFile(output_path, JSON.stringify(Array.from(m.values()), null, 2), 'utf8');
}