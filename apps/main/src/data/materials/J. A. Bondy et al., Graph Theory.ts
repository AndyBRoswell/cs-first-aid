import * as types_data from '@cs-first-aid/bibkit/types/data'
import * as CSL from '@cs-first-aid/bibkit/CSL'

export const entries = [
  {
    id: [
    ],
    material: {
      type: 'book',
      title: 'Graph Theory',
      author: [ { given: 'John. Adrian', family: 'Bondy' }, { given: 'Uppaluri Siva Ramachandra', family: 'Murty' }, ],
      issued: { 'date-parts': [ [ 2010, 10, 19 ], ], },
      "original-date": { "date-parts": [ [ 2008, 1, 10 ], ] },
      "original-publisher": 'Springer',
      publisher: 'Springer',
      'publisher-place': 'London',
      "collection-title": "Graduate Texts in Mathematics",
      "number-of-pages": 'XII, 663',
      ISBN: '978-1-84996-690-0',
      language: 'en-US',
      custom: {
        Hardcover: {
          type: 'book',
          issued: { 'date-parts': [ [ 2008, 1, 10 ], ], },
          ISBN: '9781846289699',
        } satisfies types_data.Material,
        "collection-title-short": 'GTM',
      } satisfies CSL.Custom,
    } satisfies types_data.Material,
  },
] satisfies types_data.Entry[]
