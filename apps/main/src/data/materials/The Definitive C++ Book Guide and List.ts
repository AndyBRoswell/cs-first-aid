import * as catalog from '@cs-first-aid/bibkit/catalog'
import * as types_data from '@cs-first-aid/bibkit/types/data'

const items = [
  {
    id: [
      'The Definitive C++ Book Guide and List',
    ],
    material: {
      type: 'webpage',
      title: 'The Definitive C++ Book Guide and List',
      author: [ { literal: 'Stack Overflow Community' } ],
      issued: { 'date-parts': [ [ 2025, 1, 21 ] ] },
      accessed: { 'date-parts': [ [ 2026, 5, 18 ] ] },
      URL: 'https://stackoverflow.com/questions/388242/the-definitive-c-book-guide-and-list',
      language: 'en-US',
    },
  },
] satisfies types_data.Entry[]

catalog.add_items(items)