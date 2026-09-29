import * as types_data from '@cs-first-aid/bibkit/types/data'
import * as catalog from '@cs-first-aid/bibkit/catalog'
import '@/data/materials/import materials.ts'

export const info = {
  canonical_name: '模拟电路',
  name: [ '模拟电路', '模拟电子技术', 'Analog Circuits' ],
  material: {
    reference: {
      text: {
        en: [
          ...catalog.filter(item => item.type === 'book' && item.title === 'Fundamentals of Microelectronics' && item.author?.some(author => author.family === 'Razavi'), { count: 1 }),
        ],
      },
    },
  },
} satisfies types_data.Course
