import * as docs_base from '@/content/docs/base.ts'
import * as data_type from '@/types/data.ts'
import * as catalog from '@/data/materials/catalog.ts'
import '@/data/materials/Microsoft C++ Docs.ts'
import '@/data/materials/Bjarne Stroustrup, PPP C++.ts'
import '@/data/materials/Bjarne Stroustrup, A Tour of C++.ts'

export const I_info = {
  canonical_name: '程序设计入门（C++）',
  name: [ '程序设计入门（C++）', 'C++程序设计I', ],
  tag: [ '基础必修' ],
  material: {
    text: [
      catalog.get('PPP3'),
      catalog.get({ unordered_author: 'B. Stroustrup', title: 'A Tour of C++', }),
    ],
    other: [
      catalog.get({ unordered_author: 'Microsoft', title: 'C++ Language Reference' }),
    ],
  }
} satisfies data_type.Course

export const I_bib = docs_base.print_bibliography(I_info.material!)