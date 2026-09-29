import * as types_data from '@cs-first-aid/bibkit/types/data'

export const entries = [
  {
    id: [],
    material: {
      type: 'book',
      title: 'Algorithms',
      author: [
        { given: 'Robert', family: 'Sedgewick' },
        { given: 'Kevin', family: 'Wayne' },
      ],
      edition: 4,
      medium: 'Hardcover',
      publisher: 'Addison-Wesley Professional',
      issued: { 'date-parts': [ [ 2011, 3, 24 ] ] },
      ISBN: '9780321573513',
      'number-of-pages': 976,
      language: 'en-US',
      URL: 'https://www.informit.com/store/algorithms-9780321573513',
      accessed: { 'date-parts': [ [ 2026, 9, 29 ] ] },
    } satisfies types_data.Material,
  },
] satisfies types_data.Entry[]
