import * as types_data from '@cs-first-aid/bibkit/types/data'
import * as catalog from '@cs-first-aid/bibkit/catalog'
import '@/data/materials/import materials.ts'

export const info = {
  canonical_name: '数字电路',
  name: [ '数字电路', '数字电子技术', '数字电子学', '数字逻辑', '数字逻辑电路', ],
  material: {
    reference: {
      text: {
        en: [
          ...catalog.filter(item => item.type === 'book' && item.title === 'Digital Design, Global Edition' && item.author?.some(author => author.family === 'Mano'), { count: 1 }),
        ],
      },
    },
  },
} satisfies types_data.Course
