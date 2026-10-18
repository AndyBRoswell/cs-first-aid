import * as types_data from '@cs-first-aid/bibkit/types/data'
import * as catalog from '@cs-first-aid/bibkit/catalog'
import '@/data/materials/import materials.ts'

export const info = {
  canonical_name: '编码理论',
  name: [ '编码理论', 'Coding Theory' ],
  material: {
    reference: {
      text: {
        zh: [
          ...catalog.filter(item => item.type === 'book' && item.title === '编码理论' && item.author?.some(author => author.family === '周' && author.given === '武旸'), { count: 1 }),
        ],
        en: [
          ...catalog.filter(item => item.type === 'book' && item.title === 'Fundamentals of Classical and Modern Error-Correcting Codes' && item.author?.some(author => author.family === 'Lin' && author.given === 'Shu'), { count: 1 }),
          ...catalog.filter(item => item.type === 'book' && item.title === 'Channel Codes' && item.edition === 2 && item.author?.some(author => author.family === 'Ryan' && author.given === 'William E.'), { count: 1 }),
        ],
      },
      lecture_notes_and_slides: {
        zh: [
          ...catalog.filter(item => item.type === 'document' && item.title === '编码理论' && item.author?.some(author => author.family === '周' && author.given === '武旸'), { count: 1 }),
        ],
      },
    },
    excluded: {
      en: [
        ...catalog.filter(item => item.type === 'book' && item.title === 'Coding Theory and Cryptography' && item.edition === 2 && item.author?.some(author => author.family === 'Hankerson'), { count: 1 }),
      ],
    },
  },
} satisfies types_data.Course
