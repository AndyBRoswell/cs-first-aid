import * as types_data from '@cs-first-aid/bibkit/types/data'
import * as catalog from '@cs-first-aid/bibkit/catalog'
import '@/data/materials/import materials.ts'

export const info = {
  canonical_name: '设计模式',
  name: [ '设计模式', 'Design Patterns' ],
  material: {
    reference: {
      text: {
        zh: [
          ...catalog.filter(item => item.type === 'book' && item.title === 'Java设计模式' && item.author?.some(author => author.family === '刘' && author.given === '伟'), { count: 1 }),
          ...catalog.filter(item => item.type === 'book' && item.title === 'C#设计模式' && item.author?.some(author => author.family === '刘' && author.given === '伟'), { count: 1 }),
        ],
        en: [
          ...catalog.filter(item => item.type === 'book' && item.title === 'Head First Design Patterns' && item.edition === 2 && item.author?.some(author => author.family === 'Freeman') && item.author?.some(author => author.family === 'Robson'), { count: 1 }),
        ],
      },
    },
  },
} satisfies types_data.Course
