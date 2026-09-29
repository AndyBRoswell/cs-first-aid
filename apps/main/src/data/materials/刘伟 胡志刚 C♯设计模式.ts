import * as types_data from '@cs-first-aid/bibkit/types/data'
import * as CSL from '@cs-first-aid/bibkit/CSL'

export const entries = [
  {
    id: [],
    material: {
      type: 'book',
      title: 'C#设计模式',
      author: [ { family: '刘', given: '伟' }, { family: '胡', given: '志刚' } ],
      edition: 2,
      'printing-number': '2-7',
      medium: 'Paperback',
      publisher: '清华大学出版社',
      issued: { 'date-parts': [ [ 2018, 1, 1 ] ] },
      ISBN: '9787302485704',
      'number-of-pages': 416,
      'collection-title': '高等学校设计模式课程系列教材',
      language: 'zh-CN',
      URL: 'https://www.tup.com.cn/booksCenter/book_07261701.html',
      accessed: { 'date-parts': [ [ 2026, 9, 29 ] ] },
      custom: {
        'printing-date': { 'date-parts': [ [ 2023, 2, 17 ] ] },
        URL: [ { link: 'https://www.tenlong.com.tw/products/9787302485704', display_text: '天瓏網路書店' } ],
      } satisfies CSL.Custom,
    } satisfies types_data.Material,
  },
] satisfies types_data.Entry[]
