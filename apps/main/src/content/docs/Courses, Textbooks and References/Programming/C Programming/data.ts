import * as bib from '@cs-first-aid/bibkit/bib'
import * as catalog from '@cs-first-aid/bibkit/catalog'
import * as Course from '@/data/courses/C Programming.ts'

export const page_reference = {
  material: Course.info.material!,
  reference: [
    ...catalog.filter(item => item.title === '[PATCH] [v2] Kbuild: move to -std=gnu11' && item.author?.[0]?.family === 'Bergmann', { count: 1 }),
    ...catalog.filter(item => item.URL === 'https://git.kernel.org/linus/50560ce6a0bdab2fc37384c52aa02c7043909d2c', { count: 1 }),
  ],
}
export const reference_ranges = bib.get_reference_ranges(page_reference)
