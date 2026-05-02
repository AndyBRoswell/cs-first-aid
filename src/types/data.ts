import * as CSL_Data from './CSL_data.ts'

type ID_primitive = PropertyKey | bigint
type ID_object = {
  unordered_author?: string | string[]
  ordered_author?: string | string[]
  title?: string,
  edition?: string | number
  date?: string | number
  volume?: string | number
}
export const legal_object_keys_for_ID = [
  'unordered_author',
  'ordered_author',
  'title',
  'edition',
  'date',
  'volume',
]
export type ID_t = ID_primitive | [ ID_primitive, ...ID_primitive[] ] | ID_object
export type Item = { id: ID_t[], material: CSL_Data.Item, }

export type Link = string | { display_text?: string, link: string, }

export type Course = {
  canonical_name?: string
  names: string[]
  code?: string | number
  description?: string
  tags?: string[]
  prerequisites?: Course[]
  materials?: {
    main?: CSL_Data.Item[]
    problem_sets?: CSL_Data.Item[]
    other?: CSL_Data.Item[]
    excluded?: CSL_Data.Item[]
  }
  videos?: Course_Videos[]
  note?: string
}

export type Course_Videos = {
  title: string
  for: Course[]
  institution?: string[]
  lecturers: string[]
  URLs: Link[]
  materials: CSL_Data.Item[]
  suggested_playback_speeds?: number[]
  note?: string
}