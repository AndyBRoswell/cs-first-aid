import * as bib from '@cs-first-aid/bibkit/bib'
import * as Course from '@/data/courses/Linear Algebra.ts'

export const I_course_material = Course.I_info.material!
export const II_course_material = Course.II_info.material!
export const I_reference_ranges = bib.get_reference_ranges(I_course_material)
export const II_reference_ranges = bib.get_reference_ranges(II_course_material)
