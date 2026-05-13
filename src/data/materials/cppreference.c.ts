import * as catalog from './catalog.ts'
import * as Data_Type from '@/types/data.ts'
import * as CSL_Data from '@/types/CSL_data.ts'

const items = [
  {
    id: [
      'cppreference.com/c',
      { unordered_author: 'cppreference.com', title: 'C reference', },
    ],
    material: {
      type: 'webpage',
      id: 'cppreference.com/c',
      title: 'C reference',
      'container-title': 'cppreference.com',
      language: 'en-US',
      URL: 'https://cppreference.com/c',
      accessed: { 'date-parts': [ [ 2026, 5, 13 ], ], },
      custom: {
        URL: [
          { link: 'https://zh.cppreference.com/c', display_text: '中文（简体）', },
        ],
      } satisfies CSL_Data.Custom,
    },
  },
] satisfies Data_Type.Entry[]

catalog.add_items(items)