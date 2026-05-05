import * as docs_base from '@/content/docs/base.ts'
import * as data_type from '@/types/data.ts'
import * as catalog from '@/data/materials/catalog.ts'
import '@/data/materials/Strang, Introduction to Linear Algebra.ts'
import '@/data/materials/Margalit&Rabinoff, Interactive Linear Algebra.ts'
import '@/data/materials/Axler, Linear Algebra Done Right.ts'
import '@/data/materials/Treil, Linear Algebra Done Wrong.ts'
import '@/data/materials/Meyer, Matrix Analysis and Applied Linear Algebra.ts'
import '@/data/materials/Lax, Linear Algebra and Its Applications.ts'
import '@/data/materials/蓝以中 高代.ts'

export const I_info = {
  canonical_name: '线性代数I',
  name: [ '线性代数I', ],
  tag: [ '基础必修', ],
  material: {
    text: [
      catalog.get('蓝以中 高代上'),
      catalog.get('ILA6'),
      catalog.get('Interactive Linear Algebra'),
    ],
    video: [

    ],
    problem_set: [

    ],
    other: [

    ],
  }
} satisfies data_type.Course

export const II_info = {
  canonical_name: '线性代数II',
  name: [ '线性代数II', ],
  tag: [ '基础选修', ],
  material: {
    text: [
      catalog.get('蓝以中 高代下'),
      catalog.get('LADR'),
      catalog.get('LADW'),
      catalog.get('P. D. Lax, Linear Algebra and Its Applications'),
      catalog.get('C. D. Meyer, Matrix Analysis and Applied Linear Algebra'),
    ],
    video: [

    ],
    problem_set: [

    ],
    other: [
      catalog.get('C. D. Meyer, Matrix Analysis and Applied Linear Algebra: Study and Solutions Guide'),
    ],
  }
} satisfies data_type.Course

export const I_bib = docs_base.print_bibliography(I_info.material!)
export const II_bib = docs_base.print_bibliography(II_info.material!)