import * as bib from '@cs-first-aid/bibkit/bib'
import * as Course from '@/data/courses/Java Programming.ts'

export const course_material = Course.info.material!
export const mangled_references = bib.mangle_references(course_material)
