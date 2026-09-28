import * as types_data from '@cs-first-aid/bibkit/types/data'
import * as CSL from '@cs-first-aid/bibkit/CSL'

export const entries = [
  {
    id: [],
    material: {
      type: 'book',
      title: '操作系统：原理与实现',
      author: [ { family: '陈', given: '海波' }, { family: '夏', given: '虞斌' } ],
      publisher: '机械工业出版社',
      issued: { 'date-parts': [ [ 2023, 2, 13 ] ] },
      'printing-number': '1-7',
      language: 'zh-CN',
      ISBN: '9787111722489',
      URL: 'https://www.cmpedu.com/books/book/5610210.htm',
      accessed: { 'date-parts': [ [ 2026, 9, 29 ] ] },
      custom: {
        'printing-date': { 'date-parts': [ [ 2026, 2, 3 ] ] },
      } satisfies CSL.Custom,
    },
  },
] satisfies types_data.Entry[]
