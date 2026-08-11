import * as catalog from '@cs-first-aid/bibkit/catalog'
import * as types_data from '@cs-first-aid/bibkit/types/data'

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
] satisfies types_data.Entry[]

catalog.add_items(items)