import * as catalog from '@cs-first-aid/bibkit/catalog'
import * as types_data from '@cs-first-aid/bibkit/types/data'
import * as CSL from '@cs-first-aid/bibkit/CSL'

const items = [
  {
    id: [
    ],
    material: {
      type: 'book',
      title: 'Matrix Mathematics',
      author: [ { given: 'Stephan Ramon', family: 'Garcia' }, { given: 'Roger Alan', family: 'Horn' } ],
      edition: 2,
      issued: { 'date-parts': [ [ 2023, 9, 29 ] ] },
      accessed: { 'date-parts': [ [ 2026, 5, 6 ] ] },
      publisher: 'Cambridge University Press',
      'publisher-place': 'Cambridge',
      'collection-title': 'Cambridge Mathematical Textbooks',
      'number-of-pages': 490,
      DOI: '10.1017/9781108938426',
      URL: 'https://www.cambridge.org/highereducation/books/matrix-mathematics/3BBCFAFD942BAF6A0813763297D69E65',
      ISBN: '9781108938426' as CSL.ISBN,
      language: 'en-GB',
      custom: {
        subtitle: 'A Second Course in Linear Algebra',
        Hardback: {
          type: 'book',
          issued: { 'date-parts': [ [ 2023, 5, 23 ] ] },
          ISBN: '9781108837101' as CSL.ISBN,
        } satisfies types_data.Material,
      } satisfies CSL_Data.Custom,
    } satisfies types_data.Material,
  },
] satisfies types_data.Entry[]

catalog.add_items(items)