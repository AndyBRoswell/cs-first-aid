import * as catalog from './catalog.ts'
import * as Data_Type from '@/types/data.ts'

const items = [
  {
    id: [
      'PSF, The Python Tutorial',
      'Python Software Foundation, The Python Tutorial',
      { unordered_author: 'Python Software Foundation', title: 'The Python Tutorial', },
    ],
    material: {
      type: 'webpage',
      id: 'Python Software Foundation, The Python Tutorial',
      title: 'The Python Tutorial',
      author: [ { literal: 'Python Software Foundation' } ],
      issued: { 'date-parts': [ [ 2026, 3, 17 ] ] },
      accessed: { 'date-parts': [ [ 2026, 5, 14 ] ] },
      URL: 'https://docs.python.org/3/tutorial/index.html',
      language: 'en-US',
      publisher: 'Python Software Foundation',
    } satisfies Data_Type.Material,
  },
] satisfies Data_Type.Entry[]

catalog.add_items(items)