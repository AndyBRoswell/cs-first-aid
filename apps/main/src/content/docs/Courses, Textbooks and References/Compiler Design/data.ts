import * as bib from '@cs-first-aid/bibkit/bib'
import * as catalog from '@cs-first-aid/bibkit/catalog'
import * as Course from '@/data/courses/Compiler Design.ts'

export const page_reference = {
  material: Course.I_info.material,
  reference: [
    ...catalog.filter(item => item.type === 'post-weblog' && item.title === 'Parser generators vs. handwritten parsers: surveying major language implementations in 2021' && item.author?.some(author => author.family === 'Eaton'), { count: 1 }),
    ...catalog.filter(item => item.type === 'post-weblog' && item.title === 'Rewriting the Ruby parser' && item.author?.some(author => author.family === 'Newton'), { count: 1 }),
    ...catalog.filter(item => item.type === 'post-weblog' && item.title === 'Announcing: MSVC Conforms to the C++ Standard' && item.author?.some(author => author.family === 'Luvsanbat'), { count: 1 }),
    ...catalog.filter(item => item.type === 'post-weblog' && item.title === 'MSVC Build Tools Version 14.51 Release Candidate Now Available' && item.author?.some(author => author.family === 'Brumer'), { count: 1 }),
  ],
}
export const reference_ranges = bib.get_reference_ranges(page_reference)
