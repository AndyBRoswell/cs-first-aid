// @ts-ignore [citation-js doesn't have ts support]
import citation_js from "@citation-js/core";
import '@citation-js/plugin-csl'

import * as CSL_data from '@/types/CSL_data.ts'
import bibliography_style from './ieee.csl?raw'
import type { ID_t, } from "@/types/data.ts";
import * as catalog from '@/data/Materials/catalog.ts'

export type formatted_references = {
  parsed: { [key: string]: typeof citation_js.Cite }
  printed: { [key: string]: string }
}

const CSL_config = citation_js.plugins.config.get('@csl')
CSL_config.templates.add('custom', bibliography_style)
const bib_format: object = {
  format: 'html',
  template: 'custom',
  hyperlinks: true,
}

export function print_bibliography(data: { [key: string]: CSL_data.Item[] }): formatted_references {
  const ret: formatted_references = {
    parsed: {},
    printed: {},
  }
  for (const [ key, value ] of Object.entries(data)) {
    ret['parsed'][key] = new citation_js.Cite(value)
    ret['printed'][key] = ret['parsed'][key].format('bibliography', bib_format)
  }
  return ret
}

export function cite(parsed_cite: typeof citation_js.Cite, ids: ID_t | ID_t[]): string {
  const id_list = Array.isArray(ids) ? ids : [ ids ]
  const indices: (number | string)[] = id_list.map((id: ID_t) => {
    const target_item: CSL_data.Item = catalog.get(id)
    const index: number = parsed_cite.data.findIndex((item: any) => item.id === target_item.id) // Use linear search since item count is very few [e.g. <= 32]. any is used cause Citation.js lacks type info
    return index !== -1 ? index + 1 : '?'
  })
  return `[${indices.join('][')}]`
}