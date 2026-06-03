import * as docs_base from '@/content/docs/base.ts'
import * as data_type from '@/types/data.ts'
import * as catalog from '@/data/materials/catalog.ts'
import '@/content/docs/Courses, Textbooks and References/import course materials.ts'

export const I_info = {
  canonical_name: '线性代数I',
  name: [ '线性代数I', ],
  tag: [ '基础必修', ],
  material: {
    text: [
      catalog.get('蓝以中 高代上'),
      catalog.get('丘维声 简明线性代数'),
      catalog.get('丘维声 高代1版上'),
      catalog.get('丘维声 高代上'),
      catalog.get('丘维声 高代指导书 上'),
      catalog.get('陈发来 线代I'),
      catalog.get('陈发来 线性代数与解析几何'),
      catalog.get('谢启鸿 高等代数学 第3版'),
      catalog.get('谢启鸿 高等代数 第3版'),
      catalog.get('谢启鸿 高等代数学'),
      catalog.get('谢启鸿 高等代数'),
      catalog.get('ILA6'),
      catalog.get('D. C. Lay et al., Linear Algebra and Its Applications'),
      catalog.get('LADW'),
      catalog.get('Interactive Linear Algebra'),
      catalog.get('T. S. Shores, Applied Linear Algebra and Matrix Analysis'),
      catalog.get('E. B. Saff and A. D. Snider, Matrix Fundamentals'),
      catalog.get('S. J. Leon et al., Linear Algebra with Applications'),
    ],
    video: [
      catalog.get('丘维声 高代 公开课'),
      catalog.get('陈发来 线性代数B1 公开课 2021级'),
      catalog.get('谢启鸿 高代 公开课'),
    ],
    problem_set: [],
    other: [
      catalog.get('李炯生 线代'),
      catalog.get('席南华 基础代数1'),
      catalog.get('李尚志 线代'),
      catalog.get('李尚志 线代指导'),
      catalog.get('张贤科 许甫华 高代'),
      catalog.get('张贤科 高代'),
      catalog.get('S. Lang, Linear Algebra'),
      catalog.get('M. Artin, Algebra'),
      catalog.get('线性代数的几何意义'),
      catalog.get('Kostrikin, 代数学引论1'),
      catalog.get('Kostrikin, 代数学习题集'),
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
      catalog.get('丘维声 简明线性代数'),
      catalog.get('丘维声 高代1版下'),
      catalog.get('丘维声 高代下'),
      catalog.get('丘维声 高代指导书 下'),
      catalog.get('谢启鸿 高等代数学 第3版'),
      catalog.get('谢启鸿 高等代数 第3版'),
      catalog.get('谢启鸿 高等代数学'),
      catalog.get('谢启鸿 高等代数'),
      catalog.get('LADR'),
      catalog.get('C. D. Meyer, Matrix Analysis and Applied Linear Algebra'),
      catalog.get('R. A. Horn and C. R. Johnson, Matrix Analysis'),
      catalog.get('S. R. Garcia and R. A. Horn, Matrix Mathematics'),
      catalog.get('Lloyd N. Trefethen and David Bau III, Numerical Linear Algebra'),
    ],
    video: [
      catalog.get('丘维声 高代 公开课'),
      catalog.get('谢启鸿 高代 公开课'),
    ],
    problem_set: [
      catalog.get('C. D. Meyer, Matrix Analysis and Applied Linear Algebra: Study and Solutions Guide'),
    ],
    other: [
      catalog.get('李炯生 线代'),
      catalog.get('席南华 基础代数2'),
      catalog.get('李尚志 线代'),
      catalog.get('李尚志 线代指导'),
      catalog.get('张贤科 许甫华 高代'),
      catalog.get('张贤科 高代'),
      catalog.get('S. Lang, Linear Algebra'),
      catalog.get('M. Artin, Algebra'),
      catalog.get('P. D. Lax, Linear Algebra and Its Applications'),
      catalog.get('Jun Lu, Matrix Decomposition and Applications'),
      catalog.get('线性代数的几何意义'),
      catalog.get('Kostrikin, 代数学引论2'),
      catalog.get('Kostrikin, 代数学习题集'),
      catalog.get('我为什么推荐你使用丘维声学习高等代数'),
    ],
  }
} satisfies data_type.Course

export const I_bib = docs_base.print_bibliography(I_info.material!)
export const II_bib = docs_base.print_bibliography(II_info.material!)