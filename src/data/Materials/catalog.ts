import * as CSL_data from './CSL_data.ts'

type ID_primitive = PropertyKey | bigint
type ID_object = {
  unordered_author?: string | string[]
  ordered_author?: string | string[]
  title?: string,
  edition?: string | number
  date?: string | number
  volume?: string | number
}
const legal_object_keys_for_ID = [
  'unordered_author',
  'ordered_author',
  'title',
  'edition',
  'date',
  'volume',
]
type ID_t = ID_primitive | [ ID_primitive, ...ID_primitive[] ] | ID_object
export type Item = { id: ID_t[], material: CSL_data.Item, }

const m = new Map<ID_t, CSL_data.Item>

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

export function add(IDs: ID_t[], material: CSL_data.Item) {
  for (const ID of IDs) { m.set(canonical_ID(ID), material) }
}

export function get(ID: ID_t): CSL_data.Item {
  return m.get(ID)!
}