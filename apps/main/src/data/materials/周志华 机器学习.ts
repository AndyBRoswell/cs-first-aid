import * as types_data from '@cs-first-aid/bibkit/types/data'
import * as CSL from '@cs-first-aid/bibkit/CSL'

export const entries = [
  {
    id: [],
    material: {
      type: 'book',
      title: '机器学习',
      author: [ { family: '周', given: '志华' } ],
      edition: 1,
      'printing-number': '1-40',
      publisher: '清华大学出版社',
      issued: { 'date-parts': [ [ 2016, 1, 1 ] ] },
      ISBN: '9787302423287',
      language: 'zh-CN',
      URL: 'https://www.tup.com.cn/booksCenter/book_06402703.html',
      accessed: { 'date-parts': [ [ 2026, 9, 29 ] ] },
      custom: {
        'printing-date': { 'date-parts': [ [ 2022, 10, 31 ] ] },
      } satisfies CSL.Custom,
    } satisfies types_data.Material,
  },
] satisfies types_data.Entry[]
