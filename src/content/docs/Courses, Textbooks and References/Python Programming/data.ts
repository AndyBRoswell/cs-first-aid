import * as docs_base from '@/content/docs/base.ts'
import * as data_type from '@/types/data.ts'
import * as catalog from '@/data/materials/catalog.ts'
import '@/data/materials/PSF, The Python Tutorial.ts'
import '@/data/materials/E. Matthes, Python Crash Course.ts'

export const info = {
  canonical_name: 'Python 程序设计',
  name: [ 'Python 程序设计', 'Python', ],
  tag: [ '基础选修' ],
  material: {
    text: [
      catalog.get({ unordered_author: 'Python Software Foundation', title: 'The Python Tutorial' }),
    ],
    other: [
      catalog.get({ unordered_author: 'E. Matthes', title: 'Python Crash Course', }),
    ],
  }
} satisfies data_type.Course

export const bib = docs_base.print_bibliography(info.material!)