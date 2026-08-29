// Created by Claude Sonnet 4.6 Extended Thinking [web]. Revised by AndyBRoswell.
// Schema: https://github.com/citation-style-language/schema/blob/master/schemas/input/csl-data.json

import * as Data_Type from "./types/data.ts";
import validator_isISBN from 'validator/lib/isISBN'
import validator_isISSN from 'validator/lib/isISSN'

// 📦 Item types
export type Item_Type =
  | 'article'
  | 'article-journal'
  | 'article-magazine'
  | 'article-newspaper'
  | 'bill'
  | 'book'
  | 'broadcast'
  | 'chapter'
  | 'classic'
  | 'collection'
  | 'dataset'
  | 'document'
  | 'entry'
  | 'entry-dictionary'
  | 'entry-encyclopedia'
  | 'event'
  | 'figure'
  | 'graphic'
  | 'hearing'
  | 'interview'
  | 'legal_case'
  | 'legislation'
  | 'manuscript'
  | 'map'
  | 'motion_picture'
  | 'musical_score'
  | 'pamphlet'
  | 'paper-conference'
  | 'patent'
  | 'performance'
  | 'periodical'
  | 'personal_communication'
  | 'post'
  | 'post-weblog'
  | 'regulation'
  | 'report'
  | 'review'
  | 'review-book'
  | 'software'
  | 'song'
  | 'speech'
  | 'standard'
  | 'thesis'
  | 'treaty'
  | 'webpage'

// 👤 Name sub-object
export interface Name_Variable {
  family?: string
  given?: string
  'dropping-particle'?: string
  'non-dropping-particle'?: string
  suffix?: string
  'comma-suffix'?: string | number | boolean
  'static-ordering'?: string | number | boolean
  literal?: string
  'parse-names'?: string | number | boolean
}

// 📅 Date sub-object
// Outer array: 1–2 entries (date range); inner tuple: [year, month?, day?]
export interface Date_Variable {
  'date-parts'?: [
    [ string | number, (string | number)?, (string | number)? ],
    ([ string | number, (string | number)?, (string | number)? ])?,
  ]
  season?: string | number
  circa?: string | number | boolean
  literal?: string
  raw?: string
}

export type ID = string | number

// 📄 A single bibliographic item
export type Item = {
  // ✅ Basic
  type: Item_Type
  id?: ID // Make it optional since aliases will be used to index these items.

  // 🔑 Identifiers & locale metadata
  'citation-key'?: string
  categories?: string[]
  language?: string
  journalAbbreviation?: string
  shortTitle?: string

  // 👥 Name variables
  author?: Name_Variable[]
  chair?: Name_Variable[]
  'collection-editor'?: Name_Variable[]
  compiler?: Name_Variable[]
  composer?: Name_Variable[]
  'container-author'?: Name_Variable[]
  contributor?: Name_Variable[]
  curator?: Name_Variable[]
  director?: Name_Variable[]
  editor?: Name_Variable[]
  'editorial-director'?: Name_Variable[]
  'executive-producer'?: Name_Variable[]
  guest?: Name_Variable[]
  host?: Name_Variable[]
  illustrator?: Name_Variable[]
  interviewer?: Name_Variable[]
  narrator?: Name_Variable[]
  organizer?: Name_Variable[]
  'original-author'?: Name_Variable[]
  performer?: Name_Variable[]
  producer?: Name_Variable[]
  recipient?: Name_Variable[]
  'reviewed-author'?: Name_Variable[]
  'script-writer'?: Name_Variable[]
  'series-creator'?: Name_Variable[]
  translator?: Name_Variable[]

  // 📅 Date variables
  accessed?: Date_Variable
  'available-date'?: Date_Variable
  'event-date'?: Date_Variable
  issued?: Date_Variable
  'original-date'?: Date_Variable
  submitted?: Date_Variable

  // 🔤 String-only fields
  abstract?: string
  annote?: string
  archive?: string
  archive_collection?: string
  archive_location?: string
  'archive-place'?: string
  authority?: string
  'call-number'?: string
  'citation-label'?: string
  'collection-title'?: string
  'container-title'?: string
  'container-title-short'?: string
  dimensions?: string
  division?: string
  DOI?: string
  /** @deprecated Use `event-title` instead — will be removed in v1.1 */
  event?: string
  'event-title'?: string
  'event-place'?: string
  genre?: string
  ISBN?: string
  ISSN?: string
  jurisdiction?: string
  keyword?: string
  medium?: string
  note?: string
  'original-publisher'?: string
  'original-publisher-place'?: string
  'original-title'?: string
  'part-title'?: string
  PMCID?: string
  PMID?: string
  publisher?: string
  'publisher-place'?: string
  references?: string
  'reviewed-genre'?: string
  'reviewed-title'?: string
  scale?: string
  section?: string
  source?: string
  status?: string
  title?: string
  'title-short'?: string
  URL?: string // Preferred descriptive page; use the preferred resource URL only when no descriptive page is available.
  version?: string
  'volume-title'?: string
  'volume-title-short'?: string
  'year-suffix'?: string

  // 🔢 String | number fields (ordinals, pagination, etc.)
  'chapter-number'?: string | number
  'citation-number'?: string | number
  'collection-number'?: string | number
  edition?: string | number
  'first-reference-note-number'?: string | number
  issue?: string | number
  locator?: string | number
  number?: string | number
  'number-of-pages'?: string | number
  'number-of-volumes'?: string | number
  page?: string | number
  'page-first'?: string | number
  part?: string | number
  'printing-number'?: string | number
  supplement?: string | number
  volume?: string | number

  // 🗃️ Arbitrary key-value store (preferred over `note` for machine data)
  custom?: Record<string, unknown>
}

// https://docs.citationstyles.org/en/stable/specification.html#locators
export type Locator_Type =
  | 'book'
  | 'chapter'
  | 'column'
  | 'figure'
  | 'folio'
  | 'issue'
  | 'line'
  | 'note'
  | 'opus'
  | 'page'
  | 'paragraph'
  | 'part'
  | 'section'
  | 'sub verbo'
  | 'verse'
  | 'volume'

export function is_ISBN(str: string): boolean {
  const sanitized = str.replace(/[\s-]+/g, '')
  return (sanitized.length !== 13 || /^97[89]/.test(sanitized)) && validator_isISBN(sanitized)
}

export function is_ISSN(str: string): boolean { return validator_isISSN(str) }

export type Custom = {
  [key: string]: unknown
  tag?: string[]
  subtitle?: string
  'printing-date'?: Date_Variable // Date of the printing identified by `Item['printing-number']`; use `Item.issued` for the edition's publication date.
  'collection-title-short'?: string | string[]
  free_material?: Data_Type.Link[] | Record<string, Data_Type.Link[]> // Freely accessible and normally downloadable resources, or pages through which they can be obtained.
  for?: unknown
  companion?: (Data_Type.ID_t | Data_Type.Material | Data_Type.Course)[]
  institution?: string[]
  lecturer?: Name_Variable[]
  URL?: Data_Type.Link[] // Additional descriptive pages for the same item; `Item.URL` remains preferred.
  suggested_playback_speed?: (number | string)[]
  'collection-title'?: string | string[]
}
