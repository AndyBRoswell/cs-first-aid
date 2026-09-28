import * as types_data from '@cs-first-aid/bibkit/types/data'
import * as CSL from '@cs-first-aid/bibkit/CSL'

export const entries = [
  {
    id: [],
    material: {
      type: 'book',
      title: '数据结构题集',
      author: [ { family: '严', given: '蔚敏' }, { family: '吴', given: '伟民' }, { family: '米', given: '宁' } ],
      edition: 'C语言版·第2版',
      'printing-number': '2-4',
      publisher: '清华大学出版社',
      'publisher-place': '北京',
      issued: { 'date-parts': [ [ 2025, 10, 1 ] ] },
      ISBN: '9787302703402',
      'number-of-pages': 320,
      'collection-title': '清华大学计算机系列教材',
      language: 'zh-CN',
      URL: 'https://www.tup.com.cn/bookscenter/book_10848901.html',
      accessed: { 'date-parts': [ [ 2026, 9, 28 ] ] },
      custom: {
        'printing-date': { 'date-parts': [ [ 2026, 8, 28 ] ] },
        URL: [ { link: 'https://search.megbook.com.tw/mall/detail.jsp?proID=4164136', display_text: '台湾大书城' } ],
      } satisfies CSL.Custom,
    } satisfies types_data.Material,
  },
] satisfies types_data.Entry[]
