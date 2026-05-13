import type { ID_t, Entry, Material, ID_primitive } from "@/types/data.ts";
import { legal_object_keys_for_ID } from "@/types/data.ts";
import * as CSL_Data from '@/types/CSL_data.ts'

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
        return JSON.stringify(CID, legal_object_keys_for_ID)
      }
  }
}

export function add_items(p: Entry[]) {
  for (const pair of p) { add(pair.id, pair.material) }
}

export function add_item(p: Entry) {
  add(p.id, p.material)
}

export function add(IDs: ID_t[], material: Material) {
  if ('ISBN' in material) { if (CSL_Data.check_ISBN(material.ISBN) === false) { throw new Error(`Invalid ISBN ${material.ISBN}`) } }
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