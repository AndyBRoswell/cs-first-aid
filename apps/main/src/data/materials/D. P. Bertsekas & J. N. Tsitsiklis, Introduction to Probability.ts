import * as types_data from '@cs-first-aid/bibkit/types/data'

export const entries = [
  {
    id: [],
    material: {
      type: 'book',
      title: 'Introduction to Probability',
      author: [ { given: 'Dimitri P.', family: 'Bertsekas' }, { given: 'John N.', family: 'Tsitsiklis' } ],
      edition: 2,
      medium: 'Hardcover',
      publisher: 'Athena Scientific',
      'publisher-place': 'Belmont, MA',
      issued: { 'date-parts': [ [ 2008, 7 ] ] },
      ISBN: '9781886529236',
      'number-of-pages': 544,
      language: 'en',
      URL: 'https://web.mit.edu/dimitrib/www/probbook.html',
      accessed: { 'date-parts': [ [ 2026, 10, 7 ] ] },
    } satisfies types_data.Material,
  },
] satisfies types_data.Entry[]
