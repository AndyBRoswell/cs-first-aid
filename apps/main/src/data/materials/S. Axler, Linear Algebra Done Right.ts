import * as catalog from '@cs-first-aid/bibkit/catalog'
import * as types_data from '@cs-first-aid/bibkit/types/data'

const items = [
  {
    id: [
      'LADR',
    ],
    material: {
      type: 'book',
      author: [ { given: 'Sheldon', family: 'Axler' } ],
      title: 'Linear Algebra Done Right',
      edition: 4,
      issued: { 'date-parts': [ [ 2026, 4, 26 ] ] },
      publisher: 'Springer',
      language: 'en-US',
      URL: 'https://linear.axler.net/LADR4e.pdf',
      accessed: { 'date-parts': [ [ 2026, 5, 5 ] ] },
    },
  },
] satisfies types_data.Entry[]

catalog.add_items(items)