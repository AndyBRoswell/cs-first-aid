import * as types_data from '@cs-first-aid/bibkit/types/data'
import * as catalog from '@cs-first-aid/bibkit/catalog'
import '@/data/materials/import materials.ts'

export const info = {
  canonical_name: 'TypeScript 程序设计',
  name: [ 'TypeScript 程序设计', 'TypeScript' ],
  tag: [ '基础选修' ],
  material: {
    text: {
      en: [
        ...catalog.filter(material => material.type === 'webpage' && material.URL === 'https://www.typescriptlang.org/docs/handbook/intro.html', { count: 1 }),
      ],
    },
    reference: {
      en: [
        ...catalog.filter(material => material.type === 'webpage' && material.URL === 'https://www.typescriptlang.org/docs/', { count: 1 }),
      ],
    },
  },
} satisfies types_data.Course
