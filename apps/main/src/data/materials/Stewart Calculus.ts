import * as types_data from '@cs-first-aid/bibkit/types/data'
import * as CSL from '@cs-first-aid/bibkit/CSL'

export const entries = [
  {
    id: [],
    material: {
      type: 'book',
      author: [
        { given: 'James', family: 'Stewart', }, { given: 'Saleem', family: 'Watson' },
        { given: 'Daniel K.', family: 'Clegg' },
      ],
      title: 'Stewart Calculus',
      edition: 9,
      publisher: 'Cengage Learning',
      "publisher-place": 'Boston, MA',
      issued: { "date-parts": [ [ 2020, 4, 30 ], ], },
      ISBN: '9780357711491' as CSL.ISBN,
      URL: 'https://www.cengage.com/c/calculus-9e-stewart-clegg-watson/9781337624183/',
      accessed: { "date-parts": [ [ 2026, 4, 3 ], ], },
    },
  },
  {
    id: [],
    material: {
      type: 'book',
      author: [
        { given: 'James', family: 'Stewart', }, { given: 'Saleem', family: 'Watson' },
        { given: 'Daniel K.', family: 'Clegg' },
      ],
      title: 'Stewart Calculus: Early Transcendentals',
      edition: 9,
      publisher: 'Cengage Learning',
      "publisher-place": 'Boston, MA',
      issued: { "date-parts": [ [ 2020, 1, 9 ], ], },
      ISBN: '9780357687901' as CSL.ISBN,
      URL: 'https://www.cengage.com/c/calculus-early-transcendentals-9e-stewart-clegg-watson/9781337613927/',
      accessed: { "date-parts": [ [ 2026, 4, 3 ], ], },
    },
  }
] satisfies types_data.Entry[]