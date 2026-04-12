import * as base from '../base.ts'

type legal_primitives_for_ID = PropertyKey | bigint
type legal_objects_for_ID = {
  unordered_author?: string | string[]
  ordered_author?: string | string[]
  title?: string,
  edition?: string | number
  date?: string
  vol?: string | number
}
const legal_object_keys_for_ID = [
  'unordered_author',
  'ordered_author',
  'title',
  'edition',
  'date',
  'vol',
]
type ID_t = legal_primitives_for_ID | [ legal_objects_for_ID, ...legal_primitives_for_ID[] ] | legal_objects_for_ID

const m = new Map<ID_t, base.Course_Material>

export function canonical_ID(ID: ID_t): ID_t {
  switch (typeof ID) {
    case 'string':
    case 'number':
    case 'bigint':
    case 'symbol':
      return ID
    case 'object':
      if (Array.isArray(ID)) { return JSON.stringify(ID) } // ordered n-tuple
      else { return JSON.stringify(ID, legal_object_keys_for_ID) }
  }
}

export function add(IDs: ID_t[], material: base.Course_Material) {
  for (const ID of IDs) { m.set(canonical_ID(ID), material) }
}

export function get(ID: ID_t): base.Course_Material {
  return m.get(ID)!
}