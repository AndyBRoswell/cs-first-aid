import * as catalog from './catalog.ts'
import * as Data_Type from '@/types/data.ts'

const items = [
  {
    id: [
      'cppref',
      'cppreference',
      'cppreference.com',
    ],
    material: {
      type: 'webpage',
      id: 'cppreference.com',
      title: 'cppreference.com',
      URL: 'https://cppreference.com/',
      accessed: { 'date-parts': [ [ 2026, 5, 13, ], ], },
      custom: {
        URL: [
          { link: 'https://zh.cppreference.com/%E9%A6%96%E9%A1%B5', display_text: '中文（简体）', },
        ],
      },
    },
  },
] satisfies Data_Type.Entry[]

catalog.add_items(items)