import * as types_data from '@cs-first-aid/bibkit/types/data'
import * as catalog from '@cs-first-aid/bibkit/catalog'
import '@/data/materials/import materials.ts'

export const info = {
  canonical_name: '密码学',
  name: [ '密码学', 'Cryptography' ],
  material: {
    reference: {
      en: [
        ...catalog.filter(item => item.type === 'book' && item.title === 'A Graduate Course in Applied Cryptography' && item.author?.some(author => author.family === 'Boneh'), { count: 1 }),
        ...catalog.filter(item => item.type === 'book' && item.title === 'The Joy of Cryptography' && item.author?.some(author => author.family === 'Rosulek'), { count: 1 }),
        ...catalog.filter(item => item.type === 'book' && item.title === 'Understanding Cryptography' && item.author?.some(author => author.family === 'Paar'), { count: 1 }),
        ...catalog.filter(item => item.type === 'book' && item.title === 'Introduction to Modern Cryptography' && item.author?.some(author => author.family === 'Katz'), { count: 1 }),
      ],
    },
  },
} satisfies types_data.Course
