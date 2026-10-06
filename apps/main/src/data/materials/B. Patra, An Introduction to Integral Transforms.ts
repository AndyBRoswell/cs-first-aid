import * as types_data from '@cs-first-aid/bibkit/types/data'
import * as CSL from '@cs-first-aid/bibkit/CSL'

export const entries = [
  {
    id: [],
    material: {
      type: 'book',
      author: [ { given: 'Baidyanath', family: 'Patra' } ],
      title: 'An Introduction to Integral Transforms',
      edition: 1,
      medium: 'Paperback',
      publisher: 'CRC Press',
      issued: { 'date-parts': [ [ 2024, 6, 25 ] ] },
      'number-of-pages': 428,
      ISBN: '9781032653358',
      language: 'en-US',
      URL: 'https://www.routledge.com/An-Introduction-to-Integral-Transforms/Patra/p/book/9781032653358',
      accessed: { 'date-parts': [ [ 2026, 10, 6 ] ] },
      custom: {
        variant: [
          {
            type: 'book',
            medium: 'Hardback',
            ISBN: '9781138588035',
            issued: { 'date-parts': [ [ 2018, 2, 16 ] ] },
            URL: 'https://www.routledge.com/An-Introduction-to-Integral-Transforms/Patra/p/book/9781138588035',
          },
          {
            type: 'book',
            medium: 'eBook',
            ISBN: '9780429503580',
            issued: { 'date-parts': [ [ 2018, 2, 13 ] ] },
            URL: 'https://www.routledge.com/An-Introduction-to-Integral-Transforms/Patra/p/book/9780429503580',
          },
        ],
      } satisfies CSL.Custom,
    } satisfies types_data.Material,
  },
] satisfies types_data.Entry[]
