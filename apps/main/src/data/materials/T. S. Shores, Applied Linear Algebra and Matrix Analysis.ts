import * as types_data from '@cs-first-aid/bibkit/types/data'
import * as CSL from '@cs-first-aid/bibkit/CSL'

export const entries = [
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
      ISBN: '978-3-319-74748-4',
      URL: 'https://link.springer.com/book/10.1007/978-3-319-74748-4',
      accessed: { 'date-parts': [ [ 2026, 5, 6 ] ] },
      custom: {
        Hardcover: {
          type: 'book',
          ISBN: '978-3-319-74747-7',
          issued: { 'date-parts': [ [ 2018, 5, 18 ] ] },
        } satisfies types_data.Material,
        Softcover: {
          type: 'book',
          ISBN: '978-3-030-09067-8',
          issued: { 'date-parts': [ [ 2019, 1, 12 ] ] },
        } satisfies types_data.Material,
        "collection-title-short": 'UTM',
      } satisfies CSL.Custom,
    } satisfies types_data.Material,
  },
] satisfies types_data.Entry[]
