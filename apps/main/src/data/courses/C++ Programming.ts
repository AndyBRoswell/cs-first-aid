import * as data_type from '@/types/data.ts'
import * as catalog from '@/data/materials/catalog.ts'
import '@/data/courses/import course materials.ts'
import * as util from '@/util.ts'

export const I_info = {
  canonical_name: '程序设计入门（C++）',
  name: [ '程序设计入门（C++）', 'C++程序设计I', 'C++ I', ],
  tag: [ '基础必修' ],
  material: {
    text: [
      catalog.get('PPP3'),
      ...catalog.filter(item => util.ieq(item.title!, 'A Tour of C++')),
      ...catalog.filter(item => util.ieq(item.title!, 'Professional C++')),
    ],
    reference: [
      ...catalog.filter(item => item.author?.length === 1 && item.author![0]!.literal === 'Microsoft' && item.title?.match(/C\+\+.+Reference/)),
      catalog.get('cppreference'),
      ...catalog.filter(item => util.ieq(item.title!, 'The Definitive C++ Book Guide and List')),
    ],
  }
} satisfies data_type.Course