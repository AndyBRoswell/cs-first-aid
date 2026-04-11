import * as base from '../base.ts'

type ID_t = PropertyKey | bigint | object

const m = new Map<ID_t, base.Course_Material>

export function add(IDs: ID_t[], material: base.Course_Material) {
  for (const ID of IDs) {
    switch (typeof ID) {
      case 'string':
      case 'number':
      case 'bigint':
      case 'symbol':
        m.set(ID, material)
        break
      case 'object':
        if (Array.isArray(IDs)) { // n-tuple only
          m.set(JSON.stringify(ID), material)
        } else {
          throw new Error(`ID cannot be string-indexed object`)
        }
    }
  }
}

export function get(ID: ID_t): base.Course_Material {
  return m.get(ID)!
}