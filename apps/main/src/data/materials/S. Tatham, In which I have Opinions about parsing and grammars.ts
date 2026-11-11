import * as types_data from '@cs-first-aid/bibkit/types/data'

export const entries = [
  {
    id: [],
    material: {
      type: 'post-weblog',
      title: 'In which I have Opinions about parsing and grammars',
      author: [ { given: 'Simon', family: 'Tatham' } ],
      issued: { 'date-parts': [ [ 2025, 6, 5 ] ] },
      language: 'en',
      URL: 'https://www.chiark.greenend.org.uk/~sgtatham/quasiblog/parsing/',
      accessed: { 'date-parts': [ [ 2026, 11, 11 ] ] },
    } satisfies types_data.Material,
  },
] satisfies types_data.Entry[]
