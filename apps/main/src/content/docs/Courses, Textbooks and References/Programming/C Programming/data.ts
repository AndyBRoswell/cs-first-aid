import * as bib from '@cs-first-aid/bibkit/bib'
import * as Course from '@/data/courses/C Programming.ts'

export const course_material = Course.info.material!
export const reference_ranges = bib.get_reference_ranges(course_material)
