// import Cite from '@citation-js'
import * as CSL_Data from './CSL_data.ts'

export type Link = string | { display_text?: string, link: string, }

export type Course_Material = (CSL_Data.Item | Link)

export type Course = {
  canonical_name?: string
  names: string[]
  code?: string | number
  description?: string
  tags?: string[]
  prerequisites?: Course[]
  textbooks?: Course_Material[]
  problem_sets?: Course_Material[]
  other_materials?: Course_Material[]
  videos?: Course_Videos[]
  note?: string
}

export type Course_Videos = {
  title: string
  for: Course[]
  institution?: string[]
  lecturers: string[]
  URLs: Link[]
  materials: Course_Material[]
  suggested_playback_speeds?: number[]
  note?: string
}
