import * as types_data from '@cs-first-aid/bibkit/types/data'
import * as CSL from '@cs-first-aid/bibkit/CSL'

export const entries = [
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
      ISBN: '978-1-61197-716-5' as CSL.ISBN,
      custom: {
        Softcover: {
          type: 'book',
          ISBN: '978-1-61197-715-8' as CSL.ISBN,
        } satisfies types_data.Material,
      } satisfies CSL.Custom,
    } satisfies types_data.Material,
  },
] satisfies types_data.Entry[]