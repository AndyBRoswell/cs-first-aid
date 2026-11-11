import * as types_data from '@cs-first-aid/bibkit/types/data'

export const entries = [
  {
    id: [],
    material: {
      type: 'post-weblog',
      title: 'Parser generators vs. handwritten parsers: surveying major language implementations in 2021',
      author: [ { given: 'Phil', family: 'Eaton' } ],
      'container-title': 'notes.eatonphil.com',
      issued: { 'date-parts': [ [ 2021, 8, 21 ] ] },
      language: 'en',
      URL: 'https://notes.eatonphil.com/parser-generators-vs-handwritten-parsers-survey-2021.html',
      accessed: { 'date-parts': [ [ 2026, 11, 11 ] ] },
    } satisfies types_data.Material,
  },
] satisfies types_data.Entry[]
