import * as base from '../base.ts'
import * as CSL_data from '../Materials/CSL_data.ts'

export type Course = {
  canonical_name?: string
  names: string[]
  code?: string | number
  description?: string
  tags?: string[]
  prerequisites?: Course[]
  materials?: {
    main?: CSL_data.Item[]
    problem_sets?: CSL_data.Item[]
    other?: CSL_data.Item[]
    excluded?: CSL_data.Item[]
  }
  videos?: Course_Videos[]
  note?: string
}

export type Course_Videos = {
  title: string
  for: Course[]
  institution?: string[]
  lecturers: string[]
  URLs: base.Link[]
  materials: CSL_data.Item[]
  suggested_playback_speeds?: number[]
  note?: string
}