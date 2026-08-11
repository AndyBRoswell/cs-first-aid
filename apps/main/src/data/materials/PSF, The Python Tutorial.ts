import * as catalog from '../../../../../packages/bibkit/src/catalog.ts'
import * as Data_Type from '../../../../../packages/bibkit/src/types/data.ts'

const items = [
  {
    id: [
    ],
    material: {
      type: 'webpage',
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