import * as docs_base from '@/content/docs/base.ts'
import * as data_type from '@/types/data.ts'
import * as catalog from '@/data/materials/catalog.ts'
import '@/data/materials/Microsoft C++ Docs.ts'

export const info = {
  canonical_name: '程序设计入门（C++）',
  name: [ '程序设计入门（C++）', 'C++ 程序设计', ],
  tag: [ '基础必修' ],
  material: {
    text: [
      catalog.get({ unordered_author: 'Microsoft', title: 'C++ Language Reference' }),
    ],
  }
} satisfies data_type.Course

export const bib = docs_base.print_bibliography(info.material!)