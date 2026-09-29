import * as types_data from '@cs-first-aid/bibkit/types/data'
import * as CSL from '@cs-first-aid/bibkit/CSL'

export const entries = [
  {
    id: [],
    material: {
      type: 'book',
      title: '机器学习方法',
      author: [ { family: '李', given: '航' } ],
      edition: 2,
      'printing-number': '2-3',
      publisher: '清华大学出版社',
      issued: { 'date-parts': [ [ 2025, 7, 1 ] ] },
      ISBN: '9787302696469',
      language: 'zh-CN',
      URL: 'https://www.tup.com.cn/bookscenter/book_10948801.html',
      accessed: { 'date-parts': [ [ 2026, 9, 29 ] ] },
      custom: {
        'printing-date': { 'date-parts': [ [ 2026, 3, 26 ] ] },
      } satisfies CSL.Custom,
    } satisfies types_data.Material,
  },
] satisfies types_data.Entry[]
