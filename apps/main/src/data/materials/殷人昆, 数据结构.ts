import * as types_data from '@cs-first-aid/bibkit/types/data'
import * as CSL from '@cs-first-aid/bibkit/CSL'

export const entries = [
  {
    id: [],
    material: {
      type: 'book',
      title: '数据结构（用面向对象方法与C++语言描述）',
      author: [ { family: '殷', given: '人昆' } ],
      edition: 3,
      'printing-number': '3-7',
      publisher: '清华大学出版社',
      'publisher-place': '北京',
      issued: { 'date-parts': [ [ 2021, 9, 1 ] ] },
      ISBN: '9787302586623',
      'number-of-pages': 516,
      'collection-title': '清华大学计算机系列教材',
      language: 'zh-CN',
      URL: 'https://www.tup.com.cn/bookscenter/book_05066401.html',
      accessed: { 'date-parts': [ [ 2026, 11, 11 ] ] },
      custom: {
        'printing-date': { 'date-parts': [ [ 2026, 9, 28 ] ] },
        URL: [
          { link: 'https://chineselibrary.store/index.php?product_id=380942&route=product%2Fproduct', display_text: 'Chinese Library Store', accessed: { 'date-parts': [ [ 2026, 11, 11 ] ] } }, // number-of-pages
        ],
      } satisfies CSL.Custom,
    } satisfies types_data.Material,
  },
] satisfies types_data.Entry[]
