import * as types_data from '@cs-first-aid/bibkit/types/data'

export const entries = [
  {
    id: [],
    material: {
      type: 'webpage',
      title: 'Algorithms for Modern Hardware',
      author: [ { given: 'Sergey', family: 'Slotin' } ],
      language: 'en',
      version: 'v3',
      issued: { 'date-parts': [ [ 2022, 12, 11 ] ] },
      URL: 'https://en.algorithmica.org/hpc/',
      accessed: { 'date-parts': [[2026, 10, 10]] },
      custom: {
        free_material: [
          {
            link: 'https://github.com/algorithmica-org/algorithmica',
            display_text: 'Source',
          },
        ],
      },
    },
  },
] satisfies types_data.Entry[]
