import * as types_data from '@cs-first-aid/bibkit/types/data'
import * as catalog from '@cs-first-aid/bibkit/catalog'
import '@/data/materials/import materials.ts'

export const info = {
  canonical_name: 'C 程序设计',
  name: [ 'C 程序设计', 'C 语言程序设计', 'C', 'C 语言', ],
  tag: [ '基础选修' ],
  material: {
    text: {
      en: [
        ...catalog.filter(item => item.title === 'Modern C' && item.issued!["date-parts"]![0][0] as number >= 2024)
      ],
    },
    reference: {
      en: [
        catalog.get('cppreference.com/c'),
      ],
    },
    excluded: {
      en: [
        catalog.get('K&R C'),
        catalog.get('C Primer Plus'),
      ],
    },
  }
} satisfies types_data.Course
