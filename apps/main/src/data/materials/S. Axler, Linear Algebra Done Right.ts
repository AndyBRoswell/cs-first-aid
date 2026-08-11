import * as catalog from './catalog.ts'
import * as Data_Type from '@/types/data.ts'

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
] satisfies Data_Type.Entry[]

catalog.add_items(items)