import * as types_data from '@cs-first-aid/bibkit/types/data'
import * as CSL from '@cs-first-aid/bibkit/CSL'

const items = [
  {
    id: [
    ],
    material: {
      type: 'book',
      author: [ { given: 'William Gilbert', family: 'Strang' }, ],
      title: 'Calculus',
      edition: 3,
      publisher: 'WELLESLEY-CAMBRIDGE PRESS',
      "publisher-place": 'Wellesley, MA',
      issued: { "date-parts": [ [ 2017, 9, 14 ], ], },
      ISBN: '978-09802327-5-2' as CSL.ISBN,
      URL: 'https://ocw.mit.edu/courses/res-18-001-calculus-fall-2023/resources/mitres_18_001_f17_full_book_pdf/',
      accessed: { "date-parts": [ [ 2026, 4, 3 ], ], },
      note: 'https://ocw.mit.edu/courses/res-18-001-calculus-fall-2023/pages/about/',
      custom: {
        free_material: [
          {
            display_text: 'Calculus Open Textbook',
            link: 'https://ocw.mit.edu/courses/res-18-001-calculus-fall-2023/resources/mitres_18_001_f17_full_book_pdf/'
          }
        ]
      } satisfies CSL.Custom,
    }
  },
] satisfies types_data.Entry[]

export { items as entries }