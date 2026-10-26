import * as types_data from '@cs-first-aid/bibkit/types/data'
import * as catalog from '@cs-first-aid/bibkit/catalog'
import '@/data/materials/import materials.ts'

export const info = {
  canonical_name: '电路分析',
  name: [ '电路分析', 'Circuit Analysis' ],
  material: {
    reference: {
      text: {
        zh: [
          ...catalog.filter(item => item.type === 'book' && /^电路(?:（第6版）)?$/u.test(item.title ?? '') && item.edition === 6 && item.author?.some(author => author.family === '邱' && author.given === '关源'), { count: 1 }),
        ],
        en: [
          ...catalog.filter(item => item.type === 'book' && item.title === 'Engineering Circuit Analysis' && item.author?.some(author => author.family === 'Hayt'), { count: 1 }),
          ...catalog.filter(item => item.type === 'book' && item.title === 'Electric Circuits' && item.author?.some(author => author.family === 'Nilsson'), { count: 1 }),
          ...catalog.filter(item => item.type === 'book' && item.ISBN === '9780137594115', { count: 1 }),
        ],
      },
      guide: {
        zh: [
          ...catalog.filter(item => item.type === 'book' && /^电路(?:（第6版）)?学习指导与习题分析$/u.test(item.title ?? '') && item.edition === 1 && item.author?.some(author => author.family === '刘' && author.given === '崇新'), { count: 1 }),
          ...catalog.filter(item => item.type === 'book' && /^电路高效学习指导(?:（第2版）)?$/u.test(item.title ?? '') && item.edition === 2 && item.author?.some(author => author.family === '王' && author.given === '竹萍'), { count: 1 }),
        ],
        en: [
          ...catalog.filter(item => item.type === 'book' && item.ISBN === '9780134739342', { count: 1 }),
          ...catalog.filter(item => item.type === 'book' && item.ISBN === '9780134739335', { count: 1 }),
        ],
      },
      lab: {
        zh: [
          ...catalog.filter(item => item.type === 'book' && item.title === '电路实验' && item.author?.some(author => author.family === '邹' && author.given === '建龙'), { count: 1 }),
        ],
        en: [
          ...catalog.filter(item => item.type === 'book' && item.ISBN === '9780137283644', { count: 1 }),
        ],
      },
    },
  },
} satisfies types_data.Course
