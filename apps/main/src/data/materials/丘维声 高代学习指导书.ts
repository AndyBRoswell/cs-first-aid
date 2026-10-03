import * as types_data from '@cs-first-aid/bibkit/types/data'
import * as CSL from '@cs-first-aid/bibkit/CSL'

export const entries = [
  {
    id: [],
    material: {
      type: 'book',
      author: [ { family: '丘', given: '维声' } ],
      issued: { 'date-parts': [ [ 2017, 12, 1 ] ] },
      title: '高等代数学习指导书',
      'volume-title': '上册',
      edition: 2,
      volume: 1,
      "number-of-volumes": 2,
      publisher: '清华大学出版社',
      'publisher-place': '北京',
      ISBN: '9787302483670',
      language: 'zh-CN',
      "printing-number": '2-17',
      URL: 'https://www.tup.com.cn/booksCenter/book_05702703.html',
      accessed: { 'date-parts': [ [ 2026, 10, 4 ] ] },
      custom: {
        "printing-date": { 'date-parts': [ [ 2026, 9, 16 ] ] },
        URL: [ 'https://www.wqbook.com/books/booksn/057027-03' ],
      } satisfies CSL.Custom,
    },
  },
  {
    id: [],
    material: {
      type: 'book',
      author: [ { family: '丘', given: '维声' } ],
      issued: { 'date-parts': [ [ 2016, 8, 1 ] ] },
      title: '高等代数学习指导书',
      'volume-title': '下册',
      edition: 2,
      volume: 2,
      "number-of-volumes": 2,
      publisher: '清华大学出版社',
      'publisher-place': '北京',
      "printing-number": '2-18',
      ISBN: '9787302446040',
      language: 'zh-CN',
      URL: 'https://www.tup.com.cn/booksCenter/book_05702804.html',
      accessed: { 'date-parts': [ [ 2026, 10, 4 ] ] },
      custom: {
        "printing-date": { 'date-parts': [ [ 2025, 12, 1 ] ] },
        URL: [ 'https://www.wqbook.com/books/booksn/057028-04' ],
        free_material: [ 'https://www.tup.com.cn/upload/books/yz/057028-04.pdf' ],
      } satisfies CSL.Custom,
    },
  },
] satisfies types_data.Entry[]
