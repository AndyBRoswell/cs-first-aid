import * as types_data from '@cs-first-aid/bibkit/types/data'

export const entries = [
  {
    id: [],
    material: {
      type: 'book',
      author: [ { family: '屈', given: '婉玲' }, { family: '曹', given: '永知' }, { family: '耿', given: '素云' }, { family: '张', given: '立昂' } ],
      title: '离散数学学习指导与习题解析',
      edition: 3,
      issued: { 'date-parts': [ [ 2024, 12, 20 ] ] },
      publisher: '高等教育出版社',
      ISBN: '978-7-04-062926-2',
      "number-of-pages": 580,
      medium: '平装',
      "collection-title": '普通高等教育“十一五”国家级规划教材配套参考书',
      language: 'zh-CN',
      URL: 'https://www.hep.com.cn/book/show/14b2a634-b12a-41f3-ba25-31ca845f4429',
      accessed: { 'date-parts': [ [ 2026, 10, 4 ] ] },
    } satisfies types_data.Material,
  },
] satisfies types_data.Entry[]
