import * as catalog from './catalog.ts'
import * as Data_Type from '@/types/data.ts'

const items = [
  {
    id: [
      'The Definitive C++ Book Guide and List',
      'Stack Overflow Community, The Definitive C++ Book Guide and List',
      { unordered_author: 'Stack Overflow Community', title: 'The Definitive C++ Book Guide and List', },
    ],
    material: {
      type: 'webpage',
      id: 'Stack Overflow Community, The Definitive C++ Book Guide and List',
      title: 'The Definitive C++ Book Guide and List',
      author: [ { literal: 'Stack Overflow Community' } ],
      issued: { 'date-parts': [ [ 2025, 1, 21 ] ] },
      accessed: { 'date-parts': [ [ 2026, 5, 18 ] ] },
      URL: 'https://stackoverflow.com/questions/388242/the-definitive-c-book-guide-and-list',
      language: 'en-US',
    },
  },
] satisfies Data_Type.Entry[]

catalog.add_items(items)