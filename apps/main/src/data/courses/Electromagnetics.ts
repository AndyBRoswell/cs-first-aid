import * as types_data from '@cs-first-aid/bibkit/types/data'
import * as catalog from '@cs-first-aid/bibkit/catalog'
import '@/data/materials/import materials.ts'

export const info = {
  canonical_name: '电磁场与电磁波',
  name: [ '电磁场与电磁波', '电磁场', '工程电磁场', '电磁场与波', 'Electromagnetics' ],
  material: {
    reference: {
      text: {
        en: [
          ...catalog.filter(item => item.type === 'book' && item.title === 'Engineering Electromagnetics' && item.author?.some(author => author.family === 'Hayt'), { count: 1 }),
          ...catalog.filter(item => item.type === 'book' && item.title === 'Fundamentals of Applied Electromagnetics' && item.author?.some(author => author.family === 'Ulaby'), { count: 1 }),
          ...catalog.filter(item => item.type === 'book' && item.title === 'Field and Wave Electromagnetics' && item.author?.some(author => author.family === 'Cheng'), { count: 1 }),
        ],
      },
    },
  },
} satisfies types_data.Course
