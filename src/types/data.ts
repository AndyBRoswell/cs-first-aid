import * as CSL_Data from './CSL_data.ts'

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