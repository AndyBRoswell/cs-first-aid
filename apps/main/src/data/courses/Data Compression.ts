import * as types_data from '@cs-first-aid/bibkit/types/data'
import * as catalog from '@cs-first-aid/bibkit/catalog'
import '@/data/materials/import materials.ts'

export const info = {
  canonical_name: '数据压缩',
  name: [ '数据压缩', 'Data Compression' ],
  material: {
    reference: {
      en: [
        ...catalog.filter(item => item.type === 'book' && item.title === 'Data Compression Explained' && item.author?.some(author => author.family === 'Mahoney' && author.given === 'Matt'), { count: 1 }),
      ],
    },
  },
} satisfies types_data.Course
