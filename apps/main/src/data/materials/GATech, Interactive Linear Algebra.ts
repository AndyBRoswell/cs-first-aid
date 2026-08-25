import * as types_data from '@cs-first-aid/bibkit/types/data'

export const entries = [
  {
    id: [
      'GATech ILA',
      'Interactive Linear Algebra',
    ],
    material: {
      type: 'book',
      author: [ { given: 'Dan', family: 'Margalit' }, { given: 'Joseph', family: 'Rabinoff' } ],
      title: 'Interactive Linear Algebra',
      issued: { 'date-parts': [ [ 2019, 6, 3 ] ] },
      publisher: 'Georgia Institute of Technology',
      language: 'en-US',
      URL: 'https://textbooks.math.gatech.edu/ila/',
      accessed: { 'date-parts': [ [ 2026, 5, 5 ] ] },
    },
  },
] satisfies types_data.Entry[]