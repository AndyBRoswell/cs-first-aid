import * as types_data from '@cs-first-aid/bibkit/types/data'

export const entries = [
  {
    id: [],
    material: {
      type: 'book',
      title: '概率论与数理统计',
      author: [ { family: '陈', given: '希孺' } ],
      edition: 1,
      publisher: '中国科学技术大学出版社',
      'publisher-place': '合肥',
      issued: { 'date-parts': [ [ 2009, 2 ] ] },
      ISBN: '9787312018381',
      'collection-title': '陈希孺文集',
      'number-of-pages': 385,
      language: 'zh-CN',
      URL: 'https://book.douban.com/subject/2201479/',
      accessed: { 'date-parts': [ [ 2026, 9, 28 ] ] },
    } satisfies types_data.Material,
  },
] satisfies types_data.Entry[]
