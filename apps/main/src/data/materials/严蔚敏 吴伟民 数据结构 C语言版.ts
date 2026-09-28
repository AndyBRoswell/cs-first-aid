import * as types_data from '@cs-first-aid/bibkit/types/data'
import * as CSL from '@cs-first-aid/bibkit/CSL'

export const entries = [
  {
    id: [],
    material: {
      type: 'book',
      title: '数据结构',
      author: [ { family: '严', given: '蔚敏' }, { family: '吴', given: '伟民' } ],
      edition: 'C语言版·第2版',
      'printing-number': '2-4',
      publisher: '清华大学出版社',
      'publisher-place': '北京',
      issued: { 'date-parts': [ [ 2025, 10, 1 ] ] },
      ISBN: '9787302703396',
      'number-of-pages': 438,
      'collection-title': '清华大学计算机系列教材',
      language: 'zh-CN',
      URL: 'https://www.tup.com.cn/bookscenter/book_10848801.html',
      accessed: { 'date-parts': [ [ 2026, 9, 28 ] ] },
      custom: {
        'printing-date': { 'date-parts': [ [ 2026, 7, 27 ] ] },
        URL: [ { link: 'https://www.zxhsd.com/kgsm/ts/2025/10/24/6703123.shtml', display_text: '浙江新华书店' } ],
      } satisfies CSL.Custom,
    } satisfies types_data.Material,
  },
] satisfies types_data.Entry[]
