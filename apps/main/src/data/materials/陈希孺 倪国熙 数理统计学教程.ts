import * as types_data from '@cs-first-aid/bibkit/types/data'

export const entries = [
  {
    id: [],
    material: {
      type: 'book',
      title: '数理统计学教程',
      author: [ { family: '陈', given: '希孺' }, { family: '倪', given: '国熙' } ],
      edition: 1,
      publisher: '中国科学技术大学出版社',
      'publisher-place': '合肥',
      issued: { 'date-parts': [ [ 2009, 7, 1 ] ] },
      ISBN: '9787312022821',
      'collection-title': '陈希孺文集',
      'number-of-pages': 379,
      language: 'zh-CN',
      URL: 'https://www.clcindex.com/book/view/FB09A4FE040E7D7FF5552C055CE08301/',
      accessed: { 'date-parts': [ [ 2026, 10, 7 ] ] },
    } satisfies types_data.Material,
  },
] satisfies types_data.Entry[]
