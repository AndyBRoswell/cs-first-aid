import * as base from '../base.ts'

const m = new Map<any, base.Course_Material>

export function add(IDs: (PropertyKey | bigint | object)[], material: base.Course_Material) {
  for (const ID of IDs) {
    switch (typeof ID) {
      case 'string':
      case 'number':
      case 'bigint':
      case 'symbol':
        m.set(ID, material)
        break
      case 'object':
        m.set(JSON.stringify(ID), material)
    }
  }
}

export function get(ID: any): base.Course_Material {
  return m.get(ID)!
}