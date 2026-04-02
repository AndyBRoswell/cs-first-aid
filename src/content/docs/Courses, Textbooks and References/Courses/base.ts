import citation_js from "@citation-js/core";
const { Cite, plugins } = citation_js;
import '@citation-js/plugin-csl'

import * as CSL_Data from './CSL_data.ts'
import bibliography_style from './ieee.csl?raw'

export type Link = string | { display_text?: string, link: string, }

export type Course_Material = (CSL_Data.Item | Link)

export type Course = {
  canonical_name?: string
  names: string[]
  code?: string | number
  description?: string
  tags?: string[]
  prerequisites?: Course[]
  materials?: {
    textbooks?: Course_Material[]
    problem_sets?: Course_Material[]
    other?: Course_Material[]
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
  materials: Course_Material[]
  suggested_playback_speeds?: number[]
  note?: string
}

export type formatted_references = {
  parsed: { [key: string]: typeof Cite }
  printed: { [key: string]: string }
}

const CSL_config = plugins.config.get('@csl')
CSL_config.templates.add('custom', bibliography_style)
const bib_format: object = {
  template: 'custom',
}

export function print_bibliography(data: { [key: string]: Course_Material[] }): formatted_references {
  const ret: formatted_references = {
    parsed: {},
    printed: {},
  }
  for (const [ key, value ] of Object.entries(data)) {
    ret['parsed'][key] = new Cite(data[key], value)
    ret['printed'][key] = ret['parsed'][key].format('bibliography', bib_format)
  }
  return ret
}