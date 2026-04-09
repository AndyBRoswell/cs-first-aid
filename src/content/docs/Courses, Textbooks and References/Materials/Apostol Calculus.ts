import * as catalog from './catalog.ts'
import * as base from '../base.ts'

const books = [
  {
    type: 'book',
    id: `Apostol Calculus I`,
    author: [ { given: 'Tom Mike', family: 'Apostol', }, ],
    title: 'CALCULUS VOLUME I: One-Variable Calculus, with an Introduction to Linear Algebra',
    volume: 1,
    edition: 2,
    editor: [ { given: 'George', family: 'Springer', }, ],
    publisher: 'John Wiley & Sons, Inc.',
    "publisher-place": 'US',
    issued: { "date-parts": [ [ 1967, ] ], },
    ISBN: '0471000051',
    language: 'en-US',
    URL: 'https://www.wiley.com/en-us/Calculus%2C+Volume+1%2C+2nd+Edition-p-9781119496731',
    accessed: { "date-parts": [ [ 2026, 4, 3 ], ], },
  },
  {
    type: 'book',
    id: `Apostol Calculus II`,
    author: [ { given: 'Tom Mike', family: 'Apostol', }, ],
    title: 'CALCULUS VOLUME II: Multi Variable Calculus and Linear Algebra, with Applications to Differential Equations and Probability',
    volume: 2,
    edition: 2,
    editor: [ { given: 'George', family: 'Springer', }, ],
    publisher: 'John Wiley & Sons, Inc.',
    "publisher-place": 'US',
    issued: { "date-parts": [ [ 1969, ], ], },
    ISBN: '0471000078',
    language: 'en-US',
    URL: 'https://www.wiley.com/en-us/Calculus%2C+Volume+2%2C+2nd+Edition-p-9781119496762',
    accessed: { "date-parts": [ [ 2026, 4, 3 ], ], },
  },
] satisfies base.Course_Material[]

for (const book of books) {
  catalog.add([
    book.id,
  ], book)
}