// Created by Claude Sonnet 4.6 (Extended Thinking)

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
    [string | number, (string | number)?, (string | number)?],
    ([string | number, (string | number)?, (string | number)?])?,
  ]
  season?: string | number
  circa?: string | number | boolean
  literal?: string
  raw?: string
}

// 📄 A single bibliographic item
export interface Item {
  // ✅ Required
  type: Item_Type
  id: string | number

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
  URL?: string
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
  printing?: string | number
  supplement?: string | number
  volume?: string | number

  // 🗃️ Arbitrary key-value store (preferred over `note` for machine data)
  custom?: Record<string, unknown>
}
