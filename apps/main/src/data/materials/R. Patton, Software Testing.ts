import * as types_data from '@cs-first-aid/bibkit/types/data'

export const entries = [
  {
    id: [],
    material: {
      type: 'book',
      title: 'Software Testing',
      author: [ { given: 'Ron', family: 'Patton' } ],
      edition: 2,
      publisher: 'Sams',
      issued: { 'date-parts': [ [ 2005, 7, 26 ] ] },
      ISBN: '9780672327988',
      'number-of-pages': 416,
      language: 'en-US',
      URL: 'https://www.informit.com/store/software-testing-9780672327988',
      accessed: { 'date-parts': [ [ 2026, 10, 10 ] ] },
    } satisfies types_data.Material,
  },
] satisfies types_data.Entry[]
