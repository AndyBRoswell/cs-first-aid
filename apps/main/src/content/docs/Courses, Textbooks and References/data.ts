import * as bib from '@cs-first-aid/bibkit/bib'
import * as catalog from '@cs-first-aid/bibkit/catalog'
import '@/data/materials/import materials.ts'

export const page_reference = {
  reference: [
    ...catalog.filter(item => item.title === '广东省2018年本科理科优先投档分数线上投档情况', { count: 1 }),
    ...catalog.filter(item => item.title === '中山大学2016–2018年本科批次录取统计（广东）', { count: 1 }),
  ],
}
export const reference_ranges = bib.get_reference_ranges(page_reference)
