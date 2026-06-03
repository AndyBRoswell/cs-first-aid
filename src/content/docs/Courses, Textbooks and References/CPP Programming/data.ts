import * as docs_base from '@/content/docs/base.ts'
import * as data_type from '@/types/data.ts'
import * as catalog from '@/data/materials/catalog.ts'
import '@/content/docs/Courses, Textbooks and References/import course materials.ts'

export const I_info = {
  canonical_name: '程序设计入门（C++）',
  name: [ '程序设计入门（C++）', 'C++程序设计I', 'C++ I', ],
  tag: [ '基础必修' ],
  material: {
    text: [
      catalog.get('PPP3'),
      catalog.get({ unordered_author: 'B. Stroustrup', title: 'A Tour of C++', }),
      catalog.get({ unordered_author: 'M. Gregoire', title: 'Professional C++', }),
    ],
    other: [
      catalog.get({ unordered_author: 'Microsoft', title: 'C++ Language Reference' }),
      catalog.get('cppreference'),
      catalog.get('The Definitive C++ Book Guide and List'),
    ],
  }
} satisfies data_type.Course

export const I_bib = docs_base.print_bibliography(I_info.material!)