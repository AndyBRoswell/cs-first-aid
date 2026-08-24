import * as bib from '@cs-first-aid/bibkit/bib'
import * as Course from '@/data/courses/C++ Programming.ts'

export const I_course_material = Course.I_info.material!
export const I_reference_ranges = bib.get_reference_ranges(I_course_material)
