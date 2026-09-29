import * as types_data from '@cs-first-aid/bibkit/types/data'
import * as catalog from '@cs-first-aid/bibkit/catalog'
import '@/data/materials/import materials.ts'

export const info = {
  canonical_name: '电路分析',
  name: [ '电路分析', 'Circuit Analysis' ],
  material: {
    reference: {
      text: {
        en: [
          ...catalog.filter(item => item.type === 'book' && item.title === 'Engineering Circuit Analysis' && item.author?.some(author => author.family === 'Hayt'), { count: 1 }),
          ...catalog.filter(item => item.type === 'book' && item.title === 'Electric Circuits' && item.author?.some(author => author.family === 'Nilsson'), { count: 1 }),
        ],
      },
    },
  },
} satisfies types_data.Course
