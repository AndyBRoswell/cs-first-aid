import * as types_data from '@cs-first-aid/bibkit/types/data'

export const entries = [
  {
    id: [],
    material: {
      type: 'book',
      title: '数据结构习题解析与实验指导',
      author: [ { family: '李', given: '冬梅' } ],
      publisher: '人民邮电出版社',
      issued: { 'date-parts': [ [ 2022, 5, 1 ] ] },
      ISBN: '9787115579560',
      'number-of-pages': 280,
      language: 'zh-CN',
      URL: 'https://www.ryjiaoyu.com/book/details/43313',
      accessed: { 'date-parts': [ [ 2026, 9, 29 ] ] },
    } satisfies types_data.Material,
  },
] satisfies types_data.Entry[]
