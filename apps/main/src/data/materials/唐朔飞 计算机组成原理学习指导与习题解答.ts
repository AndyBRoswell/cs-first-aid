import * as types_data from '@cs-first-aid/bibkit/types/data'
import * as CSL from '@cs-first-aid/bibkit/CSL'

export const entries = [
  {
    id: [],
    material: {
      type: 'book',
      title: '计算机组成原理——学习指导与习题解答',
      author: [ { family: '唐', given: '朔飞' } ],
      edition: 2,
      "collection-title": '面向21世纪课程教材',
      publisher: '高等教育出版社',
      issued: { 'date-parts': [ [ 2012, 7, 6 ] ] },
      ISBN: '9787040354119',
      language: 'zh-CN',
      URL: 'https://xuanshu.hep.com.cn/front/book/findBookDetails?bookId=59cd4f52ba9eb884cf819d2a',
      accessed: { 'date-parts': [ [ 2026, 10, 4 ] ] },
      medium: '平装',
      custom: {
        'printing-date': { 'date-parts': [[2025, 1]] }
      } satisfies CSL.Custom,
    } satisfies types_data.Material,
  },
] satisfies types_data.Entry[]
