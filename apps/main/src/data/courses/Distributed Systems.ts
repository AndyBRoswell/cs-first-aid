import * as types_data from '@cs-first-aid/bibkit/types/data'
import * as catalog from '@cs-first-aid/bibkit/catalog'
import '@/data/materials/import materials.ts'

export const info = {
  canonical_name: '分布式系统',
  name: [ '分布式系统', 'Distributed Systems' ],
  material: {
    reference: {
      text: {
        en: [
          ...catalog.filter(item => item.type === 'book' && item.title === 'Distributed Systems' && item.author?.some(author => author.family === 'van Steen' && author.given === 'Maarten'), { count: 1 }),
        ],
      },
    },
  },
} satisfies types_data.Course
