import * as types_data from '@cs-first-aid/bibkit/types/data'
import * as CSL from '@cs-first-aid/bibkit/CSL'

export const entries = [
  {
    id: [
      'ILA',
      'ILA6',
      'Introduction to Linear Algebra',
    ],
    material: {
      type: 'book',
      author: [ { given: 'William Gilbert', family: 'Strang' } ],
      title: 'Introduction to Linear Algebra',
      edition: 6,
      issued: { 'date-parts': [ [ 2023 ] ] },
      publisher: 'Wellesley-Cambridge Press',
      ISBN: '978-1-7331466-7-8' as CSL.ISBN,
      language: 'en-US',
      URL: 'https://math.mit.edu/~gs/linearalgebra/ila6/indexila6.html',
      accessed: { 'date-parts': [ [ 2026, 5, 5 ] ] },
    },
  },
] satisfies types_data.Entry[]