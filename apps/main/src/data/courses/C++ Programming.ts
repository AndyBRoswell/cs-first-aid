import * as types_data from '@cs-first-aid/bibkit/types/data'
import * as catalog from '@cs-first-aid/bibkit/catalog'
import '@/data/materials/import materials.ts'
import * as util from '@cs-first-aid/util'

export const I_info = {
  canonical_name: '程序设计入门（C++）',
  name: [ '程序设计入门（C++）', 'C++程序设计I', 'C++ I', ],
  tag: [ '基础必修' ],
  material: {
    text: {
      selected: [
        catalog.get('PPP3'),
      ],
    },
    reference: [
      ...catalog.filter(item => item.author?.length === 1 && item.author![0]!.literal === 'Microsoft' && item.title?.match(/C\+\+.+Reference/)),
      catalog.get('cppreference'),
      ...catalog.filter(item => util.ieq(item.title!, 'The Definitive C++ Book Guide and List')),
    ],
    excluded: [
      ...catalog.filter(item => item.type === 'book' && util.ieq(item.title!, 'C++ Primer') && item.edition === 5, { count: 1 }),
      ...catalog.filter(item => item.type === 'book' && util.ieq(item.title!, 'C++ Primer Plus') && item.edition === 6, { count: 1 }),
    ],
  }
} satisfies types_data.Course

export const II_info = {
  canonical_name: 'C++ 程序设计 II',
  name: [ 'C++ 程序设计 II', 'C++程序设计II', 'C++ II', ],
  material: {
    text: [
      ...catalog.filter(item => util.ieq(item.title!, 'A Tour of C++'), { count: 1 }),
    ],
    reference: [
      ...catalog.filter(item => util.ieq(item.title!, 'Professional C++'), { count: 1 }),
    ],
  },
} satisfies types_data.Course
