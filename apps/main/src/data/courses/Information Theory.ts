import * as types_data from '@cs-first-aid/bibkit/types/data'
import * as catalog from '@cs-first-aid/bibkit/catalog'
import '@/data/materials/import materials.ts'

export const info = {
  canonical_name: '信息论',
  name: [ '信息论', 'Information Theory' ],
  material: {
    reference: {
      en: [
        ...catalog.filter(item => item.type === 'book' && item.title === 'Elements of Information Theory' && item.author?.some(author => author.family === 'Cover'), { count: 1 }),
        ...catalog.filter(item => item.type === 'book' && item.title === 'Information Theory, Inference, and Learning Algorithms' && item.author?.some(author => author.family === 'MacKay'), { count: 1 }),
        ...catalog.filter(item => item.type === 'book' && item.title === 'Information Theory and Network Coding' && item.author?.some(author => author.family === 'Yeung'), { count: 1 }),
      ],
    },
  },
} satisfies types_data.Course
