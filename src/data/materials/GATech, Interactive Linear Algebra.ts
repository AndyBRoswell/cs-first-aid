import * as catalog from './catalog.ts'
import * as Data_Type from '@/types/data.ts'

const items = [
  {
    id: [
      'Interactive Linear Algebra',
      'Margalit and Rabinoff, Linear Algebra',
      'D. Margalit and J. Rabinoff, Linear Algebra',
      { unordered_author: [ 'Margalit', 'Rabinoff' ], title: 'Interactive Linear Algebra' },
      { unordered_author: [ 'D. Margalit', 'J. Rabinoff' ], title: 'Interactive Linear Algebra' },
      { unordered_author: [ 'Margalit', 'Rabinoff' ], title: 'Interactive Linear Algebra', date: 2019 },
      { unordered_author: [ 'D. Margalit', 'J. Rabinoff' ], title: 'Interactive Linear Algebra', date: 2019 },
    ],
    material: {
      type: 'book',
      id: 'Margalit and Rabinoff, Linear Algebra',
      author: [ { given: 'Dan', family: 'Margalit' }, { given: 'Joseph', family: 'Rabinoff' } ],
      title: 'Interactive Linear Algebra',
      issued: { 'date-parts': [ [ 2019, 6, 3 ] ] },
      publisher: 'Georgia Institute of Technology',
      language: 'en-US',
      URL: 'https://textbooks.math.gatech.edu/ila/',
      accessed: { 'date-parts': [ [ 2026, 5, 5 ] ] },
    },
  },
] satisfies Data_Type.Entry[]

catalog.add_items(items)