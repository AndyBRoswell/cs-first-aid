import * as types_data from '@cs-first-aid/bibkit/types/data'

export const entries = [
  {
    id: [
    ],
    material: {
      type: 'book',
      title: 'A Tour of C++',
      author: [ { given: 'Bjarne', family: 'Stroustrup', }, ],
      language: 'en-US',
      edition: 3,
      "number-of-pages": 254,
      publisher: 'Addison-Wesley Professional',
      issued: { 'date-parts': [ [ 2022, 9, 24, ], ], },
      accessed: { 'date-parts': [ [ 2026, 5, 12, ], ], },
      ISBN: '978-0-13-681648-5',
      URL: 'https://www.stroustrup.com/tour3.html',
    },
  },
] satisfies types_data.Entry[]
