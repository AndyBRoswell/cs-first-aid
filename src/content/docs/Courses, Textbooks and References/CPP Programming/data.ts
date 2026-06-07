import * as bib from '@/content/docs/bib.ts'
import * as Course from '@/data/courses/C++ Programming.ts'

export const mangled_references = bib.mangle_references(Course.I_info.material!)
export const printed_bib = bib.print_bibliography(mangled_references)