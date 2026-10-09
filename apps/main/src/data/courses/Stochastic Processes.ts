import * as types_data from '@cs-first-aid/bibkit/types/data'
import * as catalog from '@cs-first-aid/bibkit/catalog'
import '@/data/materials/import materials.ts'

export const info = {
  canonical_name: '随机过程',
  name: [ '随机过程' ],
  material: {
    reference: {
      en: [
        ...catalog.filter(item => item.type === 'book' && item.title === 'Introduction to Probability, Statistics, and Random Processes' && item.author?.some(author => author.family === 'Pishro-Nik'), { count: 1 }),
        ...catalog.filter(item => item.type === 'book' && item.title === 'Probability: Theory and Examples' && item.author?.some(author => author.family === 'Durrett') && item.edition === 5, { count: 1 }),
        ...catalog.filter(item => item.type === 'book' && item.title === 'Stochastic Processes: Theory for Applications' && item.author?.some(author => author.family === 'Gallager'), { count: 1 }),
        ...catalog.filter(item => item.type === 'book' && item.title === 'Introduction to Modeling and Analysis of Stochastic Systems' && item.author?.some(author => author.family === 'Kulkarni') && item.edition === 2, { count: 1 }),
        ...catalog.filter(item => item.type === 'book' && item.title === 'Queueing Systems' && item.author?.some(author => author.family === 'Adan'), { count: 1 }),
      ],
    },
  },
} satisfies types_data.Course
