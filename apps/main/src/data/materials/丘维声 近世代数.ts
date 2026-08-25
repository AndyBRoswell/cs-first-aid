import * as types_data from '@cs-first-aid/bibkit/types/data'
import * as CSL from '@cs-first-aid/bibkit/CSL'

export const entries = [
  {
    id: [
    ],
    material: {
      type: 'book',
      title: '近世代数',
      author: [ { family: '丘', given: '维声' } ],
      editor: [ { family: '潘', given: '丽娜' } ],
      publisher: '北京大学出版社',
      issued: { 'date-parts': [ [ 2015, 3 ] ] },
      'number-of-pages': 308,
      language: 'zh-CN',
      ISBN: '9787301255803' as CSL.ISBN,
      accessed: { 'date-parts': [ [ 2026, 5, 7 ] ] },
      "collection-title": '大学生基础课教材',
      URL: 'https://book.douban.com/subject/26368286',
    },
  },
] satisfies types_data.Entry[]