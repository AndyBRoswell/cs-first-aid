import * as types_data from '@cs-first-aid/bibkit/types/data'

export const entries = [
  {
    id: [],
    material: {
      type: 'webpage',
      title: 'Lightweight markup language',
      author: [ { literal: 'Wikipedia contributors' } ],
      'container-title': 'Wikipedia',
      language: 'en',
      URL: 'https://en.wikipedia.org/wiki/Lightweight_markup_language',
      accessed: { 'date-parts': [ [ 2026, 10, 27 ] ] },
    } satisfies types_data.Material,
  },
] satisfies types_data.Entry[]
