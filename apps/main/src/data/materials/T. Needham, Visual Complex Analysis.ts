import * as types_data from '@cs-first-aid/bibkit/types/data'
import * as CSL from '@cs-first-aid/bibkit/CSL'

export const entries = [
  {
    id: [],
    material: {
      type: 'book',
      author: [ { given: 'Tristan', family: 'Needham' } ],
      title: 'Visual Complex Analysis',
      edition: '25th Anniversary Edition',
      medium: 'Paperback',
      publisher: 'Oxford University Press',
      'publisher-place': 'Oxford',
      issued: { 'date-parts': [ [ 2023, 2, 28 ] ] },
      "number-of-pages": 720,
      'original-date': { 'date-parts': [ [ 1997 ] ] },
      DOI: '10.1093/oso/9780192868916.001.0001',
      ISBN: '978-0-19-286892-3',
      language: 'en-GB',
      URL: 'https://academic.oup.com/book/45765',
      accessed: { 'date-parts': [ [ 2026, 10, 5 ] ] },
      custom: {
        variant: [
          {
            type: 'book',
            medium: 'Hardcover',
            ISBN: '978-0-19-286891-6',
            issued: { 'date-parts': [ [ 2023, 6, 21 ] ] },
          },
          {
            type: 'book',
            medium: 'eBook',
            ISBN: '978-0-19-196494-7',
            issued: { 'date-parts': [ [ 2023, 2, 28 ] ] },
          },
        ],
      } satisfies CSL.Custom,
    } satisfies types_data.Material,
  },
] satisfies types_data.Entry[]
