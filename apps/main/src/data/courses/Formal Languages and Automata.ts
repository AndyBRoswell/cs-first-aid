import * as types_data from '@cs-first-aid/bibkit/types/data'
import * as catalog from '@cs-first-aid/bibkit/catalog'
import '@/data/materials/import materials.ts'

export const info = {
  canonical_name: '形式语言与自动机',
  name: [ '形式语言与自动机', 'Formal Languages and Automata' ],
  material: {
    reference: {
      text: {
        en: [
          ...catalog.filter(item => item.type === 'book' && item.title === 'Introduction to the Theory of Computation' && item.author?.some(author => author.family === 'Sipser'), { count: 1 }),
          ...catalog.filter(item => item.type === 'book' && item.title === 'Introduction to Automata Theory, Languages, and Computation' && item.author?.some(author => author.family === 'Hopcroft'), { count: 1 }),
          ...catalog.filter(item => item.type === 'book' && item.title === 'An Introduction to Formal Languages and Automata' && item.author?.some(author => author.family === 'Linz'), { count: 1 }),
        ],
      },
    },
  },
} satisfies types_data.Course
