import * as types_data from '@cs-first-aid/bibkit/types/data'

const items = [
  {
    id: [
      'cppref',
      'cppreference',
      'cppreference.com',
    ],
    material: {
      type: 'webpage',
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
] satisfies types_data.Entry[]

export { items as entries }