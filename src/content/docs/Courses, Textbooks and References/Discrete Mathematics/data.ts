import * as bib from '@/content/docs/bib.ts'
import * as Course from '@/data/courses/Discrete Mathematics.ts'

export const mangled_references = {
  Mathematical_Logic: bib.mangle_references(Course.Mathematical_Logic.material!),
  Set_Theory: bib.mangle_references(Course.Set_Theory.material!),
  Graph_Theory: bib.mangle_references(Course.Graph_Theory.material!),
  Abstract_Algebra: bib.mangle_references(Course.Abstract_Algebra.material!),
  Combinatorics: bib.mangle_references(Course.Combinatorics.material!),
  Number_Theory: bib.mangle_references(Course.Number_Theory.material!),
}

export const printed_bib = {
  Mathematical_Logic: bib.print_bibliography(mangled_references.Mathematical_Logic),
  Set_Theory: bib.print_bibliography(mangled_references.Set_Theory),
  Graph_Theory: bib.print_bibliography(mangled_references.Graph_Theory),
  Abstract_Algebra: bib.print_bibliography(mangled_references.Abstract_Algebra),
  Combinatorics: bib.print_bibliography(mangled_references.Combinatorics),
  Number_Theory: bib.print_bibliography(mangled_references.Number_Theory),
}