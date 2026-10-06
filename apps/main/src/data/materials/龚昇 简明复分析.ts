import * as types_data from '@cs-first-aid/bibkit/types/data'
import * as CSL from '@cs-first-aid/bibkit/CSL'

export const entries = [
  {
    id: [],
    material: {
      type: 'book',
      author: [ { family: '龚', given: '昇' } ],
      title: '简明复分析',
      edition: 2,
      medium: '平装',
      publisher: '中国科学技术大学出版社',
      'publisher-place': '安徽省 合肥市',
      'collection-title': '中国科学技术大学精品教材',
      issued: { 'date-parts': [ [ 2009, 5 ] ] },
      'number-of-pages': 159,
      ISBN: '978-7-312-02169-5',
      language: 'zh-CN',
      URL: 'https://book.douban.com/subject/3797737/',
      accessed: { 'date-parts': [ [ 2026, 10, 6 ] ] },
      custom: {
        URL: [
          { link: 'https://www.taaze.tw/products/12100121571.html', display_text: '讀冊生活' },
        ],
      } satisfies CSL.Custom,
    } satisfies types_data.Material,
  },
] satisfies types_data.Entry[]
