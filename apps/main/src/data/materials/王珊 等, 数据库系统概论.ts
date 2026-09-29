import * as types_data from '@cs-first-aid/bibkit/types/data'

export const entries = [
  {
    id: [],
    material: {
      type: 'book',
      title: '数据库系统概论',
      author: [ { family: '王', given: '珊' }, { family: '杜', given: '小勇' }, { family: '陈', given: '红' } ],
      edition: 6,
      medium: '平装',
      publisher: '高等教育出版社',
      'publisher-place': '北京',
      issued: { 'date-parts': [ [ 2023, 3, 31 ] ] },
      ISBN: '978-7-04-059125-5',
      'number-of-pages': 500,
      'collection-title': '“十二五”普通高等教育本科国家级规划教材',
      language: 'zh-CN',
      URL: 'https://www.hep.com.cn/book/show/2b3ace22-0c3f-4067-b319-3196c29d0744',
      accessed: { 'date-parts': [ [ 2026, 9, 29 ] ] },
    } satisfies types_data.Material,
  },
] satisfies types_data.Entry[]
