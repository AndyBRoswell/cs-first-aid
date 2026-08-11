import * as catalog from '@cs-first-aid/bibkit/catalog'
import * as types_data from '@cs-first-aid/bibkit/types/data'

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
] satisfies types_data.Entry[]

catalog.add_items(items)