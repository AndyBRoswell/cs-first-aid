import * as CSL from '../CSL.ts'
import type { Filter_Options } from "../catalog.ts";

export type ID_primitive = string | number | bigint
export type ID_object =
  (
    | { unordered_author?: string | string[], ordered_author?: never, }
    | { unordered_author?: never, ordered_author?: string | string[], }
    )
  & {
  title?: CSL.Item['title']
  subtitle?: CSL.Custom['subtitle']
  edition?: CSL.Item['edition']
  date?: string | number
  volume?: CSL.Item['volume']
  part?: CSL.Item['part']
  type?: CSL.Item['type']
  note?: CSL.Item['note']
}
export const legal_keys_of_ID_object: string[] = [
  'unordered_author',
  'ordered_author',
  'title',
  'subtitle',
  'edition',
  'date',
  'volume',
  'part',
  'type',
  'note',
]
export type ID_t = ID_primitive | [ ID_primitive, ...ID_primitive[] ] | ID_object
export type Entry = { id: ID_t[], material: Material, }

export type Material_Filter = (current_material: Material) => unknown

export type Tag = string | { text: string, class: Tag[] } // It seems this is a little complex. Not used yet.

export type Link = string | {
  link: string
  license?: string
  tag?: string[]
  display_text?: string
  note?: string
}

export type Stringified_JSON = string
export type Scope_Name = string[]
export type Serialized_Scope_Name = Stringified_JSON // intent: index by arbitrary primitive array value instead of by reference
export type Segment_Of_Scope_Name = string
export type Scoped_References = Material[] | { [key: Segment_Of_Scope_Name]: Material[] | Scoped_References }
export type Scoped_ID_t = { scope: Scope_Name, ID: ID_t, }
export type Qualified_Material_Filter = { scope?: Scope_Name, filter: Material_Filter, options?: Filter_Options }

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

export type Non_Empty_Array<T> = [ T, ...T[] ]

export type Material = CSL.Item & { custom?: CSL.Custom }
export type Book = Material & {
  type: 'book'
  author: Non_Empty_Array<CSL.Name_Variable>
  title: string
  issued: CSL.Date_Variable
}
export type Video = Material & { type: 'motion_picture' | 'broadcast' }