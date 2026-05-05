import * as docs_base from '@/content/docs/base.ts'
import * as data_type from '@/types/data.ts'
import * as catalog from '@/data/materials/catalog.ts'
import '@/data/materials/Strang, Introduction to Linear Algebra.ts'
import '@/data/materials/GATech, Interactive Linear Algebra.ts'
import '@/data/materials/S. Axler, Linear Algebra Done Right.ts'
import '@/data/materials/S. R. Treil, Linear Algebra Done Wrong.ts'
import '@/data/materials/C. D. Meyer, Matrix Analysis and Applied Linear Algebra.ts'
import '@/data/materials/P. D. Lax, Linear Algebra and Its Applications.ts'
import '@/data/materials/R. A. Horn & C. R. Johnson, Matrix Analysis.ts'
import '@/data/materials/S. R. Garcia & R. A. Horn, Matrix Mathematics.ts'
import '@/data/materials/L. N. Trefethen & D. Bau, Numerical Linear Algebra.ts'
import '@/data/materials/T. S. Shores, Applied Linear Algebra and Matrix Analysis.ts'
import '@/data/materials/E. B. Saff & A. D. Snider, Matrix Fundamentals.ts'
import '@/data/materials/Jun Lu, Matrix Decomposition and Applications.ts'
import '@/data/materials/蓝以中 高代.ts'
import '@/data/materials/丘维声 高代.ts'
import '@/data/materials/分析学爱好者 我为什么推荐你使用丘维声学习高等代数.ts'

export const I_info = {
  canonical_name: '线性代数I',
  name: [ '线性代数I', ],
  tag: [ '基础必修', ],
  material: {
    text: [
      catalog.get('蓝以中 高代上'),
      catalog.get('丘维声 高代1版上'),
      catalog.get('丘维声 高代上'),
      catalog.get('丘维声 高代指导书 上'),
      catalog.get('ILA6'),
      catalog.get('LADW'),
      catalog.get('Interactive Linear Algebra'),
      catalog.get('T. S. Shores, Applied Linear Algebra and Matrix Analysis'),
      catalog.get('E. B. Saff and A. D. Snider, Matrix Fundamentals'),
    ],
    video: [
      catalog.get('丘维声 高代 公开课'),
    ],
    problem_set: [],
    other: [
      catalog.get('我为什么推荐你使用丘维声学习高等代数'),
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
      catalog.get('丘维声 高代1版下'),
      catalog.get('丘维声 高代下'),
      catalog.get('丘维声 高代指导书 下'),
      catalog.get('LADR'),
      catalog.get('C. D. Meyer, Matrix Analysis and Applied Linear Algebra'),
      catalog.get('R. A. Horn and C. R. Johnson, Matrix Analysis'),
      catalog.get('S. R. Garcia and R. A. Horn, Matrix Mathematics'),
      catalog.get('Lloyd N. Trefethen and David Bau III, Numerical Linear Algebra'),
    ],
    video: [
      catalog.get('丘维声 高代 公开课'),
    ],
    problem_set: [],
    other: [
      catalog.get('P. D. Lax, Linear Algebra and Its Applications'),
      catalog.get('C. D. Meyer, Matrix Analysis and Applied Linear Algebra: Study and Solutions Guide'),
      catalog.get('Jun Lu, Matrix Decomposition and Applications'),
      catalog.get('我为什么推荐你使用丘维声学习高等代数'),
    ],
  }
} satisfies data_type.Course

export const I_bib = docs_base.print_bibliography(I_info.material!)
export const II_bib = docs_base.print_bibliography(II_info.material!)