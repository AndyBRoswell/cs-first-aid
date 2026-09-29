import * as types_data from '@cs-first-aid/bibkit/types/data'

export const entries = [
  {
    id: [],
    material: {
      type: 'book',
      title: '数据库系统概论（第6版）习题解析与实验指导',
      author: [ { family: '王', given: '珊' }, { family: '张', given: '俊' }, { family: '卢', given: '卫' } ],
      medium: '平装',
      publisher: '高等教育出版社',
      'publisher-place': '北京',
      issued: { 'date-parts': [ [ 2024, 11, 25 ] ] },
      ISBN: '978-7-04-063013-8',
      'number-of-pages': 296,
      'collection-title': '面向21世纪课程教材',
      language: 'zh-CN',
      URL: 'https://www.hep.com.cn/book/show/e073e65d-330e-48e7-92e3-a5bb89e954a0',
      accessed: { 'date-parts': [ [ 2026, 9, 29 ] ] },
    } satisfies types_data.Material,
  },
] satisfies types_data.Entry[]
