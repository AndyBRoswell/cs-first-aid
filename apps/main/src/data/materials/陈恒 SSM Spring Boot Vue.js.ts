import * as types_data from '@cs-first-aid/bibkit/types/data'

export const entries = [
  {
    id: [],
    material: {
      type: 'book',
      title: 'SSM + Spring Boot + Vue.js 3全栈开发从入门到实战',
      author: [
        { family: '陈', given: '恒' },
        { family: '蒋', given: '伟' },
        { family: '赵', given: '璘' },
        { family: '赵', given: '志方' },
        { family: '孙', given: '云浩' },
      ],
      edition: 2,
      custom: { edition: '微课视频版' },
      publisher: '清华大学出版社',
      issued: { 'date-parts': [ [ 2025, 7, 1 ] ] },
      ISBN: '9787302691334',
      language: 'zh-CN',
      URL: 'https://www.tup.com.cn/booksCenter/book_10780301.html',
      accessed: { 'date-parts': [ [ 2026, 9, 27 ] ] },
    } satisfies types_data.Material,
  },
] satisfies types_data.Entry[]
