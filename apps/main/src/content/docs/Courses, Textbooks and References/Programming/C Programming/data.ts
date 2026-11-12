import * as bib from '@cs-first-aid/bibkit/bib'
import * as catalog from '@cs-first-aid/bibkit/catalog'
import * as Course from '@/data/courses/C Programming.ts'

export const page_reference = {
  material: Course.info.material!,
  reference: [
    ...catalog.filter(item => item.title === '[PATCH] [v2] Kbuild: move to -std=gnu11' && item.author?.[0]?.family === 'Bergmann', { count: 1 }),
    ...catalog.filter(item => item.title?.startsWith("Merge tag 'kbuild-gnu11-v5.18'") && item.author?.[0]?.family === 'Torvalds', { count: 1 }),
  ],
}
export const reference_ranges = bib.get_reference_ranges(page_reference)
