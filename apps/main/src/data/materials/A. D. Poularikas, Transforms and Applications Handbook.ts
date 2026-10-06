import * as types_data from '@cs-first-aid/bibkit/types/data'
import * as CSL from '@cs-first-aid/bibkit/CSL'

export const entries = [
  {
    id: [],
    material: {
      type: 'book',
      editor: [ { given: 'Alexander D.', family: 'Poularikas' } ],
      title: 'Transforms and Applications Handbook',
      edition: 3,
      medium: 'Hardback',
      publisher: 'CRC Press',
      issued: { 'date-parts': [ [ 2010, 1, 20 ] ] },
      'number-of-pages': 912,
      ISBN: '9781420066524',
      language: 'en-US',
      URL: 'https://www.routledge.com/Transforms-and-Applications-Handbook/Poularikas/p/book/9781420066524',
      accessed: { 'date-parts': [ [ 2026, 10, 6 ] ] },
      custom: {
        variant: [
          {
            type: 'book',
            medium: 'eBook',
            "number-of-pages": 911,
            issued: { 'date-parts': [ [ 2018, 9, 3 ] ] },
            ISBN: '9781315218915',
            URL: 'https://www.routledge.com/Transforms-and-Applications-Handbook/Poularikas/p/book/9781315218915',
          },
        ],
      } satisfies CSL.Custom,
    } satisfies types_data.Material,
  },
] satisfies types_data.Entry[]
