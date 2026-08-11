import * as catalog from '../../../../../packages/bibkit/src/catalog.ts'
import * as Data_Type from '../../../../../packages/bibkit/src/types/data.ts'

const items = [
  {
    id: [
      'LADW',
    ],
    material: {
      type: 'book',
      author: [ { given: 'Sergei Raimondovich', family: 'Treil' } ],
      title: 'Linear Algebra Done Wrong',
      language: 'en-US',
      issued: { "date-parts": [ [ 2026, 4, 30 ] ] },
      URL: 'https://www.math.brown.edu/streil/papers/LADW/HTML_2026_04-30/LADW_2026_04-30.html',
      accessed: { 'date-parts': [ [ 2026, 5, 5 ] ] },
    },
  },
] satisfies Data_Type.Entry[]

catalog.add_items(items)