import * as types_data from '@cs-first-aid/bibkit/types/data'
import * as catalog from '@cs-first-aid/bibkit/catalog'
import '@/data/materials/import materials.ts'

export const info = {
  canonical_name: '计算机体系结构',
  name: [ '计算机体系结构', 'Computer Architecture' ],
  material: {
    reference: {
      text: {
        en: [
          ...catalog.filter(item => item.type === 'book' && item.title === 'Computer Architecture' && item.author?.some(author => author.family === 'Hennessy'), { count: 1 }),
          ...catalog.filter(item => item.type === 'book' && item.title === 'Computer Organization and Architecture' && item.author?.some(author => author.family === 'Stallings'), { count: 1 }),
        ],
      },
    },
  },
} satisfies types_data.Course
