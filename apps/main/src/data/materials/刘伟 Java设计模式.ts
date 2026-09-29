import * as types_data from '@cs-first-aid/bibkit/types/data'
import * as CSL from '@cs-first-aid/bibkit/CSL'

export const entries = [
  {
    id: [],
    material: {
      type: 'book',
      title: 'Java设计模式',
      author: [ { family: '刘', given: '伟' } ],
      edition: 2,
      'printing-number': '2-6',
      medium: 'Paperback',
      publisher: '清华大学出版社',
      issued: { 'date-parts': [ [ 2024, 10, 1 ] ] },
      ISBN: '9787302663386',
      'number-of-pages': 359,
      'collection-title': '高等学校设计模式课程系列教材',
      language: 'zh-CN',
      URL: 'https://www.tup.com.cn/booksCenter/book_10519001.html',
      accessed: { 'date-parts': [ [ 2026, 9, 29 ] ] },
      custom: {
        'printing-date': { 'date-parts': [ [ 2026, 8, 3 ] ] },
        URL: [ { link: 'https://www.sanmin.com.tw/product/index/013636365', display_text: '三民網路書店' } ],
      } satisfies CSL.Custom,
    } satisfies types_data.Material,
  },
] satisfies types_data.Entry[]
