import * as catalog from './catalog.ts'

const items = [
  {
    id: [
      'Strang Calculus',
      `Strang's Calculus`,
      'Strang, Calculus',
      'Strang, Calculus, 3e',
      'Strang, Calculus, 2017',
      { unordered_author: 'Strang', title: 'Calculus', },
      { unordered_author: 'Strang', title: 'Calculus', edition: 3, },
      { unordered_author: 'Strang', title: 'Calculus', date: 2017, },
    ],
    material: {
      type: 'book',
      id: 'G. Strang, Calculus',
      author: [ { given: 'William Gilbert', family: 'Strang' }, ],
      title: 'Calculus',
      edition: 3,
      publisher: 'WELLESLEY-CAMBRIDGE PRESS',
      "publisher-place": 'Wellesley, MA',
      issued: { "date-parts": [ [ 2017, 9, 14 ], ], },
      ISBN: '978-09802327-5-2',
      URL: 'https://ocw.mit.edu/courses/res-18-001-calculus-fall-2023/resources/mitres_18_001_f17_full_book_pdf/',
      accessed: { "date-parts": [ [ 2026, 4, 3 ], ], },
    }
  },
] satisfies catalog.pair[]

for (const item of items) { catalog.add(item.id, item.material) }