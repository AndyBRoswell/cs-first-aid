import * as bib from '@cs-first-aid/bibkit/bib'
import * as Course from '@/data/courses/Operating Systems.ts'

export const course_material = Course.I_info.material
export const reference_ranges = bib.get_reference_ranges(course_material)
