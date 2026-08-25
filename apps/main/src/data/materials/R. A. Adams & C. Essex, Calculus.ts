import * as types_data from '@cs-first-aid/bibkit/types/data'
import * as CSL from '@cs-first-aid/bibkit/CSL'

const items = [
  {
    id: [
      'Calculus: A Complete Course',
    ],
    material: {
      type: 'book',
      author: [ { given: 'Robert A.', family: 'Adams', }, { given: 'Christopher', family: 'Essex', }, ],
      title: 'Calculus: A Complete Course',
      edition: 10,
      publisher: 'Pearson',
      "publisher-place": 'Toronto, ON',
      issued: { "date-parts": [ [ 2021, 1, 4 ] ] },
      "number-of-pages": 1200,
      ISBN: '9780135766781' as CSL.ISBN,
      language: 'en-CA',
      URL: 'https://www.pearson.com/en-ca/subject-catalog/p/calculus-a-complete-course/P200000002479/9780135766781',
      accessed: { "date-parts": [ [ 2026, 4, 2 ], ], },
      note: 'Printed ver 9780135732588',
      custom: {
        Print: {
          type: 'book',
          issued: { "date-parts": [ [ 2021, 1, 26 ], ], },
          ISBN: '9780135732588' as CSL.ISBN,
        } satisfies types_data.Material,
      } satisfies CSL.Custom,
    }
  }
] satisfies types_data.Entry[]

export { items as entries }