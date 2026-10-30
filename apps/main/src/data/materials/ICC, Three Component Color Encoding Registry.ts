import * as types_data from '@cs-first-aid/bibkit/types/data'

export const entries = [
  {
    id: [],
    material: {
      type: 'webpage',
      title: 'Three Component Color Encoding Registry',
      author: [ { literal: 'International Color Consortium' } ],
      language: 'en',
      URL: 'https://registry.color.org/rgb-registry/',
      accessed: { 'date-parts': [ [ 2026, 10, 30 ] ] },
    } satisfies types_data.Material,
  },
] satisfies types_data.Entry[]
