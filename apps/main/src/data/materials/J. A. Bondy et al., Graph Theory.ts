import * as catalog from '../../../../../packages/bibkit/src/catalog.ts'
import * as Data_Type from '../../../../../packages/bibkit/src/types/data.ts'
import * as CSL_Data from '../../../../../packages/bibkit/src/CSL_data.ts'

const items = [
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
      ISBN: '978-1-84996-690-0' as CSL_Data.ISBN,
      language: 'en-US',
      custom: {
        Hardcover: {
          type: 'book',
          issued: { 'date-parts': [ [ 2008, 1, 10 ], ], },
          ISBN: '9781846289699' as CSL_Data.ISBN,
        } satisfies Data_Type.Material,
        "collection-title-short": 'GTM',
      } satisfies CSL_Data.Custom,
    } satisfies Data_Type.Material,
  },
] satisfies Data_Type.Entry[]

catalog.add_items(items)