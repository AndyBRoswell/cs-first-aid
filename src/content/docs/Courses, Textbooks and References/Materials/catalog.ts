import * as base from '../base.ts'

const course_material: base.Course_Material[] = []

const str_idx = new Map<string, base.Course_Material>
const tuple_idx = new Map<string, base.Course_Material>

export function add_by_str_ID(ID: { str_ID?: string, tuple_ID?: any[], }, material: base.Course_Material) {
  course_material.push(material)
  if (ID.str_ID) { str_idx.set(ID.str_ID, material) }
  if (ID.tuple_ID) { tuple_idx.set(JSON.stringify(ID.tuple_ID), material) }
}

export function get_by_str_ID(ID: string): base.Course_Material {
  return str_idx.get(ID)!
}

export function get_by_tuple_ID(ID: []): base.Course_Material {
  return tuple_idx.get(JSON.stringify(ID))!
}