import * as CSL_Data from '@/types/CSL_data.ts'
import type { ID_t, Item } from "@/types/data.ts";
import { legal_object_keys_for_ID } from "@/types/data.ts";

const m = new Map<ID_t, CSL_Data.Item>

export function canonical_ID(ID: ID_t): ID_t {
  switch (typeof ID) {
    case 'string':
    case 'number':
    case 'bigint':
    case 'symbol':
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

export function add_items(p: Item[]) {
  for (const pair of p) { add(pair.id, pair.material) }
}

export function add_item(p: Item) {
  add(p.id, p.material)
}

export function add(IDs: ID_t[], material: CSL_Data.Item) {
  for (const ID of IDs) { m.set(canonical_ID(ID), material) }
}

export function get(ID: ID_t): CSL_Data.Item {
  return m.get(ID)!
}