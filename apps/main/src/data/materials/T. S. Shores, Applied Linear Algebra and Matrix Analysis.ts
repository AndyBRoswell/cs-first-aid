import * as catalog from '../../../../../packages/bibkit/src/catalog.ts'
import * as Data_Type from '../../../../../packages/bibkit/src/types/data.ts'
import * as CSL_Data from '../../../../../packages/bibkit/src/CSL_data.ts'

const items = [
  {
    id: [
    ],
    material: {
      type: 'book',
      title: 'Applied Linear Algebra and Matrix Analysis',
      author: [ { given: 'Thomas S.', family: 'Shores' } ],
      edition: 2,
      issued: { 'date-parts': [ [ 2018, 5, 2 ] ] },
      publisher: 'Springer',
      'publisher-place': 'Cham',
      'collection-title': 'Undergraduate Texts in Mathematics',
      "number-of-pages": 'XII, 479',
      language: 'en-US',
      DOI: '10.1007/978-3-319-74748-4',
      ISBN: '978-3-319-74748-4' as CSL_Data.ISBN,
      URL: 'https://link.springer.com/book/10.1007/978-3-319-74748-4',
      accessed: { 'date-parts': [ [ 2026, 5, 6 ] ] },
      custom: {
        Hardcover: {
          type: 'book',
          ISBN: '978-3-319-74747-7' as CSL_Data.ISBN,
          issued: { 'date-parts': [ [ 2018, 5, 18 ] ] },
        } satisfies Data_Type.Material,
        Softcover: {
          type: 'book',
          ISBN: '978-3-030-09067-8' as CSL_Data.ISBN,
          issued: { 'date-parts': [ [ 2019, 1, 12 ] ] },
        } satisfies Data_Type.Material,
        "collection-title-short": 'UTM',
      } satisfies CSL_Data.Custom,
    } satisfies Data_Type.Material,
  },
] satisfies Data_Type.Entry[]

catalog.add_items(items)