import * as types_data from '@cs-first-aid/bibkit/types/data'

export const entries = [
  {
    id: [],
    material: {
      type: 'book',
      title: '编码理论',
      author: [ { family: '周', given: '武旸' } ],
      publisher: '中国科学技术大学出版社',
      issued: { 'date-parts': [ [ 2025, 2, 1 ] ] },
      ISBN: '9787312062087',
      'number-of-pages': 212,
      'collection-title': '中国科学技术大学双一流规划教材',
      language: 'zh-CN',
      URL: 'https://www.megbook.com.hk/mall/detail.jsp?proID=4115699',
      accessed: { 'date-parts': [ [ 2026, 9, 29 ] ] },
    } satisfies types_data.Material,
  },
] satisfies types_data.Entry[]
