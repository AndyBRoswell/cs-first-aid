import * as types_data from '@cs-first-aid/bibkit/types/data'
import * as CSL from '@cs-first-aid/bibkit/CSL'

export const entries = [
  {
    id: [],
    material: {
      type: 'book',
      title: '算法设计与分析',
      author: [ { family: '李', given: '春葆' }, { family: '刘', given: '娟' }, { family: '喻', given: '丹丹' }, { family: '刘', given: '斌' } ],
      edition: 3,
      'printing-number': '3-10',
      medium: 'Paperback',
      publisher: '清华大学出版社',
      'publisher-place': '北京',
      issued: { 'date-parts': [ [ 2024, 1, 1 ] ] },
      ISBN: '9787302641155',
      'number-of-pages': 361,
      'collection-title': '高等学校算法类课程系列教材',
      language: 'zh-CN',
      URL: 'https://www.tup.tsinghua.edu.cn/booksCenter/book_10113601.html',
      accessed: { 'date-parts': [ [ 2026, 10, 18 ] ] },
      custom: {
        edition: '微课视频·题库版',
        'printing-date': { 'date-parts': [ [ 2026, 7, 20 ] ] },
        URL: [
          {
            link: 'https://www.sanmin.com.tw/product/index/012994353',
            display_text: 'Sanmin',
            accessed: { 'date-parts': [ [ 2026, 10, 18 ] ] },
          },
        ],
        free_material: [
          {
            link: 'https://www.tup.tsinghua.edu.cn/upload/books/yz/101136-01.pdf',
            display_text: 'PDF [CH3]',
            'Content-Type': 'application/pdf',
            accessed: { 'date-parts': [ [ 2026, 10, 18 ] ] },
          },
        ],
      } satisfies CSL.Custom,
    } satisfies types_data.Material,
  },
] satisfies types_data.Entry[]
