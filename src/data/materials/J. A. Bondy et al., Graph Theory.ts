import * as catalog from './catalog.ts'
import * as Data_Type from '@/types/data.ts'
import * as CSL_Data from '@/types/CSL_data.ts'

const items = [
  {
    id: [
      'J. A. Bondy and U. S. R. Murty, Graph Theory',
      'J. A. Bondy and U. S. R. Murty, Graph Theory, 2008',
      { unordered_author: [ 'J. A. Bondy', 'U. S. R. Murty', ], title: 'Graph Theory', date: 2008, },
    ],
    material: {
      type: 'book',
      id: 'J. A. Bondy and U. S. R. Murty, Graph Theory, 2008',
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
          id: '[Hardcover] J. A. Bondy and U. S. R. Murty, Graph Theory, 2008',
          issued: { 'date-parts': [ [ 2008, 1, 10 ], ], },
          ISBN: '9781846289699' as CSL_Data.ISBN,
        } satisfies Data_Type.Material,
        "collection-title-short": 'GTM',
      } satisfies CSL_Data.Custom,
    } satisfies Data_Type.Material,
  },
] satisfies Data_Type.Entry[]

catalog.add_items(items)