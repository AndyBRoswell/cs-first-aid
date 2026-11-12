import * as bib from '@cs-first-aid/bibkit/bib'
import * as catalog from '@cs-first-aid/bibkit/catalog'
import * as Course from '@/data/courses/Rust Programming.ts'

export const page_reference = {
  material: Course.info.material,
  reference: [
    ...catalog.filter(item => item.title === '[GIT PULL] Rust introduction for v6.1-rc1' && item.author?.[0]?.family === 'Cook', { count: 1 }),
    ...catalog.filter(item => item.title?.startsWith("Merge tag 'rust-v6.1-rc1'") && item.author?.[0]?.family === 'Torvalds', { count: 1 }),
    ...catalog.filter(item => item.title === 'Linux 6.1-rc1' && item.author?.[0]?.family === 'Torvalds', { count: 1 }),
  ],
}
export const reference_ranges = bib.get_reference_ranges(page_reference)
