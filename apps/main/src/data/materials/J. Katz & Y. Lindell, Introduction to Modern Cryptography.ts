import * as types_data from '@cs-first-aid/bibkit/types/data'
import * as CSL from '@cs-first-aid/bibkit/CSL'

export const entries = [
  {
    id: [],
    material: {
      type: 'book',
      title: 'Introduction to Modern Cryptography',
      author: [ { given: 'Jonathan', family: 'Katz' }, { given: 'Yehuda', family: 'Lindell' } ],
      edition: 3,
      medium: 'Hardcover',
      publisher: 'Chapman & Hall',
      'publisher-place': 'Boca Raton, FL',
      issued: { 'date-parts': [ [ 2025, 8, 18 ] ] },
      ISBN: '9781032496795',
      'collection-title': 'Chapman & Hall/CRC Cryptography and Network Security',
      'number-of-pages': 640,
      language: 'en',
      URL: 'https://www.routledge.com/Introduction-to-Modern-Cryptography-Revised-Third-Edition/Katz-Lindell/p/book/9781032496795',
      accessed: { 'date-parts': [ [ 2026, 10, 4 ] ] },
      custom: {
        edition: 'Revised',
        variant: [
          {
            type: 'book',
            medium: 'eBook',
            ISBN: '9781003398134',
            'number-of-pages': 640,
            DOI: '10.1201/9781003398134',
            issued: { 'date-parts': [ [ 2025, 8, 17 ] ] },
          },
          {
            type: 'book',
            medium: 'Paperback',
            ISBN: '9781032503592',
          },
        ],
      } satisfies CSL.Custom,
    } satisfies types_data.Material,
  },
] satisfies types_data.Entry[]
