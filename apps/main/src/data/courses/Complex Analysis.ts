import * as types_data from '@cs-first-aid/bibkit/types/data'
import * as catalog from '@cs-first-aid/bibkit/catalog'
import '@/data/materials/import materials.ts'

export const info = {
  canonical_name: '复变函数',
  name: [ '复变函数', '复分析', 'Complex Analysis' ],
  material: {
    reference: {
      en: [
        ...catalog.filter(item => item.type === 'book' && item.title === 'Fundamentals of Complex Analysis with Applications to Engineering, Science, and Mathematics' && item.author?.some(author => author.family === 'Saff'), { count: 1 }),
        ...catalog.filter(item => item.type === 'book' && item.title === 'Complex Variables and Applications' && item.author?.some(author => author.family === 'Brown'), { count: 1 }),
        ...catalog.filter(item => item.type === 'book' && item.title === 'Visual Complex Analysis' && item.author?.some(author => author.family === 'Needham'), { count: 1 }),
        ...catalog.filter(item => item.type === 'book' && item.title === 'Complex Variables: Introduction and Applications' && item.author?.some(author => author.family === 'Ablowitz'), { count: 1 }),
        ...catalog.filter(item => item.type === 'book' && item.title === 'Complex Analysis' && item.author?.some(author => author.family === 'Stein'), { count: 1 }),
        ...catalog.filter(item => item.type === 'book' && item.title === 'Complex Analysis' && item.author?.some(author => author.family === 'Lang'), { count: 1 }),
      ],
    },
  },
} satisfies types_data.Course
