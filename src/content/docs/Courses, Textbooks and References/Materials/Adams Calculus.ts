import * as catalog from './catalog.ts'
import * as base from '../base.ts'

const book = {
  type: 'book',
  id: 'Calculus: A Complete Course',
  author: [ { given: 'Robert A.', family: 'Adams', }, { given: 'Christopher', family: 'Essex', }, ],
  title: 'Calculus: A Complete Course',
  edition: 10,
  publisher: 'Pearson',
  "publisher-place": 'Toronto, ON',
  issued: { "date-parts": [ [ 2021, ], ], },
  "number-of-pages": 1200,
  ISBN: '9780135766781',
  language: 'en-CA',
  URL: 'https://www.pearson.com/en-ca/subject-catalog/p/calculus-a-complete-course/P200000002479/9780135766781',
  accessed: { "date-parts": [ [ 2026, 4, 2 ], ], },
  note: 'Printed ver 9780135732588',
} satisfies base.Course_Material

catalog.add([
  'Adams Calculus',
  book.id,
], book)