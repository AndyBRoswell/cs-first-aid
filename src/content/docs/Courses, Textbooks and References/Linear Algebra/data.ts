import * as bib from '@/content/docs/bib.ts'
import * as Course from '@/data/courses/Linear Algebra.ts'

export const I_mangled_references = bib.mangle_references(Course.I_info.material!)
export const I_printed_bib = bib.print_bibliography(I_mangled_references)
export const II_mangled_references = bib.mangle_references(Course.II_info.material!)
export const II_printed_bib = bib.print_bibliography(II_mangled_references)