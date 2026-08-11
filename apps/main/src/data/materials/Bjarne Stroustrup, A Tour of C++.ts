import * as catalog from '../../../../../packages/bibkit/src/catalog.ts'
import * as Data_Type from '../../../../../packages/bibkit/src/types/data.ts'
import * as CSL_Data from '../../../../../packages/bibkit/src/CSL_data.ts'

const items = [
  {
    id: [
    ],
    material: {
      type: 'book',
      title: 'A Tour of C++',
      author: [ { given: 'Bjarne', family: 'Stroustrup', }, ],
      language: 'en-US',
      edition: 3,
      "number-of-pages": 254,
      publisher: 'Addison-Wesley Professional',
      issued: { 'date-parts': [ [ 2022, 9, 24, ], ], },
      accessed: { 'date-parts': [ [ 2026, 5, 12, ], ], },
      ISBN: '978-0-13-681648-5' as CSL_Data.ISBN,
      URL: 'https://www.stroustrup.com/tour3.html',
    },
  },
] satisfies Data_Type.Entry[]

catalog.add_items(items)