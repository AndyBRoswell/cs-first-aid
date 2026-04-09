import * as catalog from './catalog.ts'
import * as base from '../base.ts'

const book = {
  type: 'book',
  id: 'G. Strang, Calculus',
  author: [ { given: 'William Gilbert', family: 'Strang' }, ],
  title: 'Calculus',
  edition: 3,
  publisher: 'WELLESLEY-CAMBRIDGE PRESS',
  "publisher-place": 'Wellesley, MA',
  issued: { "date-parts": [ [ 2026, 4, 3 ], ], },
  ISBN: '978-09802327-5-2',
  URL: 'https://ocw.mit.edu/courses/res-18-001-calculus-fall-2023/resources/mitres_18_001_f17_full_book_pdf/',
  accessed: { "date-parts": [ [ 2026, 4, 3 ], ], },
} satisfies base.Course_Material

catalog.add([
  'Strang Calculus',
], book)