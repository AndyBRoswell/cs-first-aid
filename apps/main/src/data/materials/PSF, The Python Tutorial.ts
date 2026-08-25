import * as types_data from '@cs-first-aid/bibkit/types/data'

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
    } satisfies types_data.Material,
  },
] satisfies types_data.Entry[]

export { items as entries }