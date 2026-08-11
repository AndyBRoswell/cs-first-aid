import * as catalog from '../../../../../packages/bibkit/src/catalog.ts'
import * as Data_Type from '../../../../../packages/bibkit/src/types/data.ts'

const items = [
  {
    id: [
      'dev.java/learn',
    ],
    material: {
      type: 'webpage',
      title: 'Learn Java',
      author: [ { literal: 'Oracle' } ],
      URL: 'https://dev.java/learn/',
      accessed: { 'date-parts': [ [ 2026, 5, 13 ] ] },
      publisher: 'Oracle',
      language: 'en-US',
    },
  },
] satisfies Data_Type.Entry[]

catalog.add_items(items)