import * as catalog from './catalog.ts'
import * as Data_Type from '@/types/data.ts'

const items = [
  {
    id: [
      'dev.java/learn',
      { unordered_author: 'Oracle', title: 'Learn Java' },
    ],
    material: {
      type: 'webpage',
      id: 'dev.java/learn',
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