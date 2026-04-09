import * as catalog from './catalog.ts'
import * as base from '../base.ts'

const books = [
  {
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
  {
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
] satisfies base.Course_Material[]

for (const book of books) {
  catalog.add([
    book.id,
  ], book)
}