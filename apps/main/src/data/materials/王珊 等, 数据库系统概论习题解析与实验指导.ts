import * as types_data from '@cs-first-aid/bibkit/types/data'
import * as CSL from '@cs-first-aid/bibkit/CSL'

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
      URL: 'https://xuanshu.hep.com.cn/front/book/findBookDetails?bookId=66e4cb88e4efbc722ba4840a',
      accessed: { 'date-parts': [ [ 2026, 9, 29 ] ] },
      custom: {
        'printing-date': { 'date-parts': [ [ 2026, 8 ] ] },
      } satisfies CSL.Custom,
    } satisfies types_data.Material,
  },
] satisfies types_data.Entry[]
