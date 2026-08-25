import * as types_data from '@cs-first-aid/bibkit/types/data'

export const entries = [
  {
    id: [
    ],
    material: {
      type: 'book',
      author: [ { given: 'Douglas Brent', family: 'West', }, ],
      title: 'Introduction to Graph Theory',
      edition: 2,
      issued: { 'date-parts': [ [ 2017, 2, 14 ], ], },
      "original-publisher": 'Prentice Hall',
      "original-date": { 'date-parts': [ [ 2001, ], ], },
      language: 'en-US',
      publisher: 'Pearson',
      ISBN: '9780131437371',
      note: '3ed under development. See https://dwest.web.illinois.edu/ .'
    },
  },
] satisfies types_data.Entry[]
