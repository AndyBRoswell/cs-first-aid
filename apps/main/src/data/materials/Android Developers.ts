import * as types_data from '@cs-first-aid/bibkit/types/data'

export const entries = [
  {
    id: [],
    material: {
      type: 'webpage',
      title: 'Developer Guides',
      author: [ { literal: 'Google' } ],
      'container-title': 'Android Developers',
      language: 'en-US',
      URL: 'https://developer.android.com/guide',
      accessed: { 'date-parts': [ [ 2026, 9, 27 ] ] },
    } satisfies types_data.Material,
  },
] satisfies types_data.Entry[]
