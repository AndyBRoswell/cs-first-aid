import * as types_data from '@cs-first-aid/bibkit/types/data'

export const entries = [
  {
    id: [
      'dev.java/learn',
    ],
    material: {
      type: 'webpage',
      title: 'Learn Java',
      author: [ { literal: 'Oracle' } ],
      URL: 'https://dev.java/learn/',
      accessed: { 'date-parts': [ [ 2026, 5, 13 ] ] },
      publisher: 'Oracle',
      language: 'en-US',
    },
  },
] satisfies types_data.Entry[]