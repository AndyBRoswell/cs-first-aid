import * as catalog from './catalog.ts'

const items = [
  {
    id: [
      'Stewart Calculus',
      'Stewart, Calculus',
      'Stewart, Calculus, 9e',
      'Stewart, Calculus, 2020',
      { unordered_author: 'Stewart', title: 'Calculus', },
      { unordered_author: 'Stewart', title: 'Calculus', edition: 9, },
      { unordered_author: 'Stewart', title: 'Calculus', date: 2020, },
    ],
    material: {
      type: 'book',
      id: 'Stewart Calculus',
      author: [
        { given: 'James', family: 'Stewart', }, { given: 'Saleem', family: 'Watson' },
        { given: 'Daniel K.', family: 'Clegg' },
      ],
      title: 'Stewart Calculus',
      edition: 9,
      publisher: 'Cengage Learning',
      "publisher-place": 'Boston, MA',
      issued: { "date-parts": [ [ 2020, 4, 30 ], ], },
      ISBN: '9780357711491',
      URL: 'https://www.cengage.com/c/calculus-9e-stewart-clegg-watson/9781337624183/',
      accessed: { "date-parts": [ [ 2026, 4, 3 ], ], },
    },
  },
  {
    id: [
      'Stewart Calculus Early Transcendentals',
      'Stewart, Calculus: Early Transcendentals',
      'Stewart, Calculus: Early Transcendentals, 9e',
      'Stewart, Calculus: Early Transcendentals, 2020',
      { unordered_author: 'Stewart', title: 'Calculus', },
      { unordered_author: 'Stewart', title: 'Calculus', edition: 9, },
      { unordered_author: 'Stewart', title: 'Calculus', date: 2020, },
    ],
    material: {
      type: 'book',
      id: 'Stewart Calculus Early Transcendentals',
      author: [
        { given: 'James', family: 'Stewart', }, { given: 'Saleem', family: 'Watson' },
        { given: 'Daniel K.', family: 'Clegg' },
      ],
      title: 'Stewart Calculus: Early Transcendentals',
      edition: 9,
      publisher: 'Cengage Learning',
      "publisher-place": 'Boston, MA',
      issued: { "date-parts": [ [ 2020, 1, 9 ], ], },
      ISBN: '9780357687901',
      URL: 'https://www.cengage.com/c/calculus-early-transcendentals-9e-stewart-clegg-watson/9781337613927/',
      accessed: { "date-parts": [ [ 2026, 4, 3 ], ], },
    },
  }
] satisfies catalog.pair[]

for (const item of items) { catalog.add(item.id, item.material) }