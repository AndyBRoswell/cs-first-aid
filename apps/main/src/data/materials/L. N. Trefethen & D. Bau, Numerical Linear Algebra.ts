import * as catalog from '../../../../../packages/bibkit/src/catalog.ts'
import * as Data_Type from '../../../../../packages/bibkit/src/types/data.ts'
import * as CSL_Data from '../../../../../packages/bibkit/src/CSL_data.ts'

const items = [
  {
    id: [
    ],
    material: {
      type: 'book',
      language: 'en-US',
      title: 'Numerical Linear Algebra',
      author: [ { given: 'Lloyd N.', family: 'Trefethen' }, { given: 'David', family: 'Bau', suffix: 'III' } ],
      edition: '25th Anniversary',
      issued: { 'date-parts': [ [ 2022, ] ] },
      accessed: { 'date-parts': [ [ 2026, 5, 6 ] ] },
      publisher: 'Society for Industrial and Applied Mathematics',
      'publisher-place': 'Philadelphia, PA',
      'collection-title': 'Other Titles in Applied Mathematics',
      'number-of-pages': 'xvi + 370',
      DOI: '10.1137/1.9781611977165',
      URL: 'https://epubs.siam.org/doi/book/10.1137/1.9781611977165',
      ISBN: '978-1-61197-716-5' as CSL_Data.ISBN,
      custom: {
        Softcover: {
          type: 'book',
          ISBN: '978-1-61197-715-8' as CSL_Data.ISBN,
        } satisfies Data_Type.Material,
      } satisfies CSL_Data.Custom,
    } satisfies Data_Type.Material,
  },
] satisfies Data_Type.Entry[]

catalog.add_items(items)