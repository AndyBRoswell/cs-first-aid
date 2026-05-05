import * as catalog from './catalog.ts'
import * as Data_Type from '@/types/data.ts'

const items = [
  {
    id: [
      'LADW',
      'Treil, Linear Algebra Done Wrong',
      'S. R. Treil, Linear Algebra Done Wrong',
      { unordered_author: 'Treil', title: 'Linear Algebra Done Wrong' },
      { unordered_author: 'S. R. Treil', title: 'Linear Algebra Done Wrong' },
    ],
    material: {
      type: 'book',
      id: 'S. Treil, Linear Algebra Done Wrong',
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