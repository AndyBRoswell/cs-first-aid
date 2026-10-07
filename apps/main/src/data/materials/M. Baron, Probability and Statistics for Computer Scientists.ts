import * as types_data from '@cs-first-aid/bibkit/types/data'

export const entries = [
  {
    id: [],
    material: {
      type: 'book',
      title: 'Probability and Statistics for Computer Scientists',
      author: [ { given: 'Michael', family: 'Baron' } ],
      edition: 3,
      medium: 'Hardback',
      publisher: 'Chapman and Hall/CRC',
      issued: { 'date-parts': [ [ 2019, 7, 2 ] ] },
      ISBN: '9781138044487',
      DOI: '10.1201/9781315172286',
      'number-of-pages': 486,
      language: 'en',
      URL: 'https://www.routledge.com/Probability-and-Statistics-for-Computer-Scientists/Baron/p/book/9781138044487',
      accessed: { 'date-parts': [ [ 2026, 10, 8 ] ] },
    } satisfies types_data.Material,
  },
] satisfies types_data.Entry[]
