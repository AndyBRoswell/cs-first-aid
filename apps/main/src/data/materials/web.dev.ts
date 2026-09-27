import * as types_data from '@cs-first-aid/bibkit/types/data'

export const entries = [
  {
    id: [],
    material: {
      type: 'webpage',
      title: 'Learn web development',
      author: [ { literal: 'Google' } ],
      'container-title': 'web.dev',
      language: 'en-US',
      URL: 'https://web.dev/learn/',
      accessed: { 'date-parts': [ [ 2026, 9, 27 ] ] },
    } satisfies types_data.Material,
  },
] satisfies types_data.Entry[]
