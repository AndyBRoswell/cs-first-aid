import * as catalog from './catalog.ts'
import * as Data_Type from '@/types/data.ts'

const items = [
  {
    id: [
      'Apostol Calculus I',
      `Apostol's Calculus I`,
      'Apostol, Calculus Vol I',
      'Apostol, Calculus Vol I, 2e',
      'Apostol, Calculus Vol I, 1967',
      { unordered_author: 'Apostol', title: 'Calculus Vol I', },
      { unordered_author: 'Apostol', title: 'Calculus Vol I', edition: 2, },
      { unordered_author: 'Apostol', title: 'Calculus Vol I', date: 1967, },
    ],
    material: {
      type: 'book',
      id: 'Apostol Calculus I',
      author: [ { given: 'Tom Mike', family: 'Apostol', }, ],
      title: 'CALCULUS',
      "number-of-volumes": 2,
      volume: 1,
      "volume-title": 'One-Variable Calculus, with an Introduction to Linear Algebra',
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
  },
  {
    id: [
      'Apostol Calculus II',
      `Apostol's Calculus II`,
      'Apostol, Calculus Vol II',
      'Apostol, Calculus Vol II, 2e',
      'Apostol, Calculus Vol II, 1969',
      { unordered_author: 'Apostol', title: 'Calculus Vol II', },
      { unordered_author: 'Apostol', title: 'Calculus Vol II', edition: 2, },
      { unordered_author: 'Apostol', title: 'Calculus Vol II', date: 1969, },
    ],
    material: {
      type: 'book',
      id: 'Apostol Calculus II',
      author: [ { given: 'Tom Mike', family: 'Apostol', }, ],
      title: 'CALCULUS',
      "number-of-volumes": 2,
      volume: 2,
      "volume-title": 'Multi Variable Calculus and Linear Algebra, with Applications to Differential Equations and Probability',
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
  },
] satisfies Data_Type.Entry[]

catalog.add_items(items)