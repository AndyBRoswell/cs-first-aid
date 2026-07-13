import * as bib from '@/content/docs/bib.ts'
import * as Course from '@/data/courses/Discrete Mathematics.ts'

export const course_material = {
  Mathematical_Logic: Course.Mathematical_Logic.material!,
  Set_Theory: Course.Set_Theory.material!,
  Graph_Theory: Course.Graph_Theory.material!,
  Abstract_Algebra: Course.Abstract_Algebra.material!,
  Combinatorics: Course.Combinatorics.material!,
  Number_Theory: Course.Number_Theory.material!,
}
export const mangled_references = {
  Mathematical_Logic: bib.mangle_references(course_material.Mathematical_Logic),
  Set_Theory: bib.mangle_references(course_material.Set_Theory),
  Graph_Theory: bib.mangle_references(course_material.Graph_Theory),
  Abstract_Algebra: bib.mangle_references(course_material.Abstract_Algebra),
  Combinatorics: bib.mangle_references(course_material.Combinatorics),
  Number_Theory: bib.mangle_references(course_material.Number_Theory),
}

export const printed_bib = {
  Mathematical_Logic: bib.print_bibliography(mangled_references.Mathematical_Logic),
  Set_Theory: bib.print_bibliography(mangled_references.Set_Theory),
  Graph_Theory: bib.print_bibliography(mangled_references.Graph_Theory),
  Abstract_Algebra: bib.print_bibliography(mangled_references.Abstract_Algebra),
  Combinatorics: bib.print_bibliography(mangled_references.Combinatorics),
  Number_Theory: bib.print_bibliography(mangled_references.Number_Theory),
}