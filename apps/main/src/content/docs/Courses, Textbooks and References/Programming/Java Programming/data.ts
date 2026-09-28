import * as bib from '@cs-first-aid/bibkit/bib'
import * as Course from '@/data/courses/Java Programming.ts'

export const course_material = Course.info.material!
export const reference_ranges = bib.get_reference_ranges(course_material)
