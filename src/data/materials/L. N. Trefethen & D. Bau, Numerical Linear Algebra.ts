import * as catalog from './catalog.ts'
import * as Data_Type from '@/types/data.ts'
import * as CSL_Data from '@/types/CSL_data.ts'

const items = [
  {
    id: [
      'Lloyd N. Trefethen and David Bau III, Numerical Linear Algebra',
      'Lloyd N. Trefethen and David Bau III, Numerical Linear Algebra, 2022',
      { unordered_author: [ 'L. N. Trefethen', 'D. Bau III' ], title: 'Numerical Linear Algebra' },
      { unordered_author: [ 'L. N. Trefethen', 'D. Bau III' ], title: 'Numerical Linear Algebra', date: 2023 },
      { unordered_author: [ 'L. N. Trefethen', 'D. Bau III' ], title: 'Numerical Linear Algebra', edition: '25th Anniversary' },
    ],
    material: {
      type: 'book',
      id: 'Lloyd N. Trefethen and David Bau III, Numerical Linear Algebra, 2022',
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
          id: '[Softcover] Lloyd N. Trefethen and David Bau III, Numerical Linear Algebra, 2022',
          ISBN: '978-1-61197-715-8' as CSL_Data.ISBN,
        } satisfies Data_Type.Material,
      } satisfies CSL_Data.Custom,
    } satisfies Data_Type.Material,
  },
] satisfies Data_Type.Entry[]

catalog.add_items(items)