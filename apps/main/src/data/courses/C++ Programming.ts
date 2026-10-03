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
      selected: {
        en: [
          catalog.get('PPP3'),
        ],
      },
    },
    reference: {
      en: [
        ...catalog.filter(item => item.author?.length === 1 && item.author![0]!.literal === 'Microsoft' && item.title?.match(/C\+\+.+Reference/)),
        catalog.get('cppreference'),
        ...catalog.filter(item => util.ieq(item.title!, 'The Definitive C++ Book Guide and List')),
        ...catalog.filter(item => item.type === 'webpage' && item.title === 'Guides' && item['container-title'] === 'CMake Reference Documentation', { count: 1 }),
        catalog.get('Mastering CMake'),
        catalog.get('Professional CMake'),
      ],
    },
    excluded: {
      en: [
        ...catalog.filter(item => item.type === 'book' && util.ieq(item.title!, 'C++ Primer') && item.edition === 5, { count: 1 }),
        ...catalog.filter(item => item.type === 'book' && util.ieq(item.title!, 'C++ Primer Plus') && item.edition === 6, { count: 1 }),
      ],
    },
  }
} satisfies types_data.Course

export const II_info = {
  canonical_name: 'C++ 程序设计 II',
  name: [ 'C++ 程序设计 II', 'C++程序设计II', 'C++ II', ],
  material: {
    text: {
      en: [
        ...catalog.filter(item => util.ieq(item.title!, 'A Tour of C++'), { count: 1 }),
      ],
    },
    reference: {
      book: {
        en: [
          ...catalog.filter(item => util.ieq(item.title!, 'Professional C++'), { count: 1 }),
        ],
      },
      other: {
        en: [
          ...catalog.filter(item => item.author?.length === 1 && item.author![0]!.literal === 'Microsoft' && item.title?.match(/C\+\+.+Reference/)),
          catalog.get('cppreference'),
          ...catalog.filter(item => util.ieq(item.title!, 'The Definitive C++ Book Guide and List')),
        ],
      },
    },
  },
} satisfies types_data.Course
