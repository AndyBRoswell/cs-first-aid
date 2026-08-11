import * as types_data from '@cs-first-aid/bibkit/types/data'
import * as catalog from '@cs-first-aid/bibkit/catalog'
import '@/data/courses/import course materials.ts'

export const info = {
  canonical_name: 'C 程序设计',
  name: [ 'C 程序设计', 'C 语言程序设计', 'C', 'C 语言', ],
  tag: [ '基础选修' ],
  material: {
    text: [
      ...catalog.filter(item => item.title === 'Modern C' && item.issued!["date-parts"]![0][0] as number >= 2024)
    ],
    reference: [
      catalog.get('cppreference.com/c'),
    ],
  }
} satisfies types_data.Course
