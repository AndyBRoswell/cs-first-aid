import * as types_data from '@cs-first-aid/bibkit/types/data'
import * as CSL from '@cs-first-aid/bibkit/CSL'

export const entries = [
  {
    id: [
      'cppreference.com/c',
    ],
    material: {
      type: 'webpage',
      title: 'C reference',
      'container-title': 'cppreference.com',
      language: 'en-US',
      URL: 'https://cppreference.com/c',
      accessed: { 'date-parts': [ [ 2026, 5, 13 ], ], },
      custom: {
        URL: [
          { link: 'https://zh.cppreference.com/c', display_text: '中文（简体）', },
        ],
      } satisfies CSL.Custom,
    },
  },
] satisfies types_data.Entry[]