import * as types_data from '@cs-first-aid/bibkit/types/data'

export const entries = [
  {
    id: [],
    material: {
      type: 'book',
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
    id: [],
    material: {
      type: 'book',
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
] satisfies types_data.Entry[]
