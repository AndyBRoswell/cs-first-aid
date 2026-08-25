import * as types_data from '@cs-first-aid/bibkit/types/data'

export const entries = [
  {
    id: [
    ],
    material: {
      type: 'book',
      title: 'Abstract Algebra',
      author: [ { given: 'David Steven', family: 'Dummit' }, { given: 'Richard M.', family: 'Foote' } ],
      publisher: 'Wiley',
      edition: 3,
      issued: { 'date-parts': [ [ 2003, 7, ] ] },
      language: 'en-US',
      ISBN: '9780471433347',
      URL: 'https://www.wiley.com/en-us/Abstract+Algebra%2C+3rd+Edition-p-9780471433347',
      accessed: { 'date-parts': [ [ 2026, 5, 7 ] ] },
    },
  },
] satisfies types_data.Entry[]
