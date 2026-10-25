import * as types_data from '@cs-first-aid/bibkit/types/data'

export const entries = [
  {
    id: [],
    material: {
      type: 'book',
      title: '电路',
      author: [ { family: '邱', given: '关源' } ],
      editor: [ { family: '罗', given: '先觉' } ],
      edition: 6,
      medium: '平装',
      publisher: '高等教育出版社',
      'publisher-place': '北京',
      issued: { 'date-parts': [ [ 2022, 6, 17 ] ] },
      ISBN: '978-7-04-056553-9',
      'number-of-pages': 548,
      'collection-title': '“十二五”普通高等教育本科国家级规划教材',
      language: 'zh-CN',
      note: '邱关源原著，罗先觉主编。',
      URL: 'https://xuanshu.hep.com.cn/front/book/findBookDetails?bookId=60f7238badb85dae6a2f4523',
      accessed: { 'date-parts': [ [ 2026, 10, 25 ] ] },
    } satisfies types_data.Material,
  },
] satisfies types_data.Entry[]
