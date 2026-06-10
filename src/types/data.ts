import * as CSL_Data from './CSL_data.ts'

export type ID_primitive = string | number | bigint
export type ID_object =
  (
    | { unordered_author?: string | string[], ordered_author?: never, }
    | { unordered_author?: never, ordered_author?: string | string[], }
    )
  & {
  title?: string
  subtitle?: string
  edition?: string | number
  date?: string | number
  volume?: string | number
  part?: string | number
  type?: string
}
export const legal_keys_of_ID_object = [
  'unordered_author',
  'ordered_author',
  'title',
  'subtitle',
  'edition',
  'date',
  'volume',
  'part',
  'type',
]
export type ID_t = ID_primitive | [ ID_primitive, ...ID_primitive[] ] | ID_object
export type Entry = { id: ID_t[], material: Material, }

export type Link = string | {
  link: string
  license?: string
  tag?: string[]
  display_text?: string
  note?: string
}

export type Stringified_JSON = string
export type Scope_Name_Of_References = Stringified_JSON
export type Scoped_References = Material[] | { [key: Scope_Name_Of_References]: Material[] | Scoped_References }
export type Scoped_ID_t = { ID: ID_t, scope?: Scope_Name_Of_References }

export type Course = {
  canonical_name?: string
  name: string[]
  code?: string | number
  description?: string
  tag?: string[]
  prerequisite?: Course[]
  material: Scoped_References
  note?: string
}

export type Material = CSL_Data.Item & { custom?: CSL_Data.Custom }

export type Video = Material