import * as CSL_Data from './CSL_data.ts'

export type ID_primitive = string | number | bigint
export type ID_object =
  (
    | { unordered_author?: string | string[], ordered_author?: never, }
    | { unordered_author?: never, ordered_author?: string | string[], }
    )
  & {
  title?: string,
  edition?: string | number
  date?: string | number
  volume?: string | number
  part?: string | number
  type?: string
}
export const legal_object_keys_for_ID = [
  'unordered_author',
  'ordered_author',
  'title',
  'edition',
  'date',
  'volume',
  'part',
  'type',
]
export type ID_t = ID_primitive | [ ID_primitive, ...ID_primitive[] ] | ID_object
export type Entry = { id: ID_t[], material: Material, }

export type Link = string | {
  link: string,
  tag?: string[],
  display_text?: string,
  note?: string,
}

export type Course = {
  canonical_name?: string
  name: string[]
  code?: string | number
  description?: string
  tag?: string[]
  prerequisite?: Course[]
  material?: {
    text?: Material[]
    problem_set?: Material[]
    audio?: Material[]
    video?: Video[]
    other?: Material[]
    excluded?: Material[]
  }
  note?: string
}

export type Material = CSL_Data.Item & { ISBN?: CSL_Data.ISBN }

export type Video = Material & {
  custom?: CSL_Data.Custom
}