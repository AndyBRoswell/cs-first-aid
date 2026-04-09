import * as catalog from './catalog.ts'
import * as base from '../base.ts'

const book = {
  type: 'book',
  id: 'H&N Applied Analysis',
  author: [ { given: 'John K.', family: 'Hunter', }, { given: 'Bruno Leo Zulma', family: 'Nachtergaele', }, ],
  title: 'Applied Analysis',
  issued: { "date-parts": [ [ 2005, 7, 21 ] ] },
  language: 'en-US',
  URL: 'https://www.math.ucdavis.edu/%7Ehunter/book/pdfbook.html',
  accessed: { "date-parts": [ [ 2026, 4, 9 ] ] },
  note: 'Postscript ver: https://www.math.ucdavis.edu/%7Ehunter/book/psbook.html',
} satisfies base.Course_Material

catalog.add([
  book.id,
], book)