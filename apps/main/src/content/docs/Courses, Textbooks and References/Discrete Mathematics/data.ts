import * as bib from '@cs-first-aid/bibkit/bib'
import * as Course from '@/data/courses/Discrete Mathematics.ts'

export const course_material = {
  Mathematical_Logic: Course.Mathematical_Logic.material!,
  Set_Theory: Course.Set_Theory.material!,
  Graph_Theory: Course.Graph_Theory.material!,
  Abstract_Algebra: Course.Abstract_Algebra.material!,
  Combinatorics: Course.Combinatorics.material!,
  Number_Theory: Course.Number_Theory.material!,
}
export const reference_ranges = {
  Mathematical_Logic: bib.get_reference_ranges(course_material.Mathematical_Logic),
  Set_Theory: bib.get_reference_ranges(course_material.Set_Theory),
  Graph_Theory: bib.get_reference_ranges(course_material.Graph_Theory),
  Abstract_Algebra: bib.get_reference_ranges(course_material.Abstract_Algebra),
  Combinatorics: bib.get_reference_ranges(course_material.Combinatorics),
  Number_Theory: bib.get_reference_ranges(course_material.Number_Theory),
}
