import * as bib from '@/content/docs/bib.ts'
import * as Course from '@/data/courses/C++ Programming.ts'

export const I_course_material = Course.I_info.material!
export const I_mangled_references = bib.mangle_references(I_course_material)
export const I_printed_bib = bib.print_bibliography(I_mangled_references)