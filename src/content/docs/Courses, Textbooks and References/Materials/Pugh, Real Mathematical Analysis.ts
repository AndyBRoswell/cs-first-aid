import * as catalog from './catalog.ts'
import * as base from '../base.ts'

const book = {
  type: 'book',
  id: 'Pugh, Real Mathematical Analysis',
  author: [ { given: 'Charles Chapman', family: 'Pugh' } ],
  title: 'Real Mathematical Analysis',
  edition: 2,
  publisher: 'Springer',
  "publisher-place": 'New York, NY',
  issued: { "date-parts": [ [ 2015, ], ], },
  "number-of-pages": 478,
  ISBN: '978-3-319-17771-7',
  "collection-title": 'Undergraduate Texts in Mathematics',
  "collection-editor": [ { given: 'Sheldon Jay', family: 'Axler' }, { given: 'Kenneth Alan', family: 'Ribet' }, ],
  language: 'en-US',
  URL: 'https://link.springer.com/book/10.1007/978-3-319-17771-7',
  accessed: { "date-parts": [ [ 2026, 4, 10 ], ], },
} satisfies base.Course_Material

catalog.add([
  book.id,
], book)