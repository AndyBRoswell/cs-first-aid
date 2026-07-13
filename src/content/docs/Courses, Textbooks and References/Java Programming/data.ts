import * as bib from '@/content/docs/bib.ts'
import * as Course from '@/data/courses/Java Programming.ts'

export const course_material = Course.info.material!
export const mangled_references = bib.mangle_references(course_material)
export const printed_bib = bib.print_bibliography(mangled_references)