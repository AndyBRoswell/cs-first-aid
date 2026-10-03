import * as types_data from '@cs-first-aid/bibkit/types/data'
import * as CSL from '@cs-first-aid/bibkit/CSL'

export const entries = [
  {
    id: [],
    material: {
      type: 'book',
      title: '计算机组成原理',
      author: [ { family: '唐', given: '朔飞' } ],
      edition: 3,
      publisher: '高等教育出版社',
      issued: { 'date-parts': [ [ 2020, 10, 16 ] ] },
      ISBN: '9787040545180',
      'number-of-pages': 444,
      language: 'zh-CN',
      URL: 'https://xuanshu.hep.com.cn/front/book/findBookDetails?bookId=62d19e6a938b7cc2960eede1',
      accessed: { 'date-parts': [ [ 2026, 9, 29 ] ] },
      custom: { 'printing-date': { 'date-parts': [ [ 2026, 7 ] ] } } satisfies CSL.Custom,
    } satisfies types_data.Material,
  },
] satisfies types_data.Entry[]
