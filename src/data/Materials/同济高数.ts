import * as catalog from './catalog.ts'

const items = [
  {
    id: [
      '同济高数上',
      '同济八版高数上',
      '同济8版高数上',
      { unordered_author: '同济大学数学科学学院', title: '高等数学 第八版 上册', },
      { unordered_author: '同济大学数学科学学院', title: '高等数学 第八版 上册', date: 2023 },
    ],
    material: {
      type: 'book',
      id: '同济高数上',
      author: [ { literal: '同济大学数学科学学院' } ],
      title: '高等数学 第八版 上册',
      volume: 1,
      edition: 8,
      publisher: '高等教育出版社',
      "publisher-place": '北京市',
      issued: { "date-parts": [ [ 2023, ], ], },
      ISBN: '978-7-04-058981-8',
      "number-of-pages": 440,
      language: 'zh-CN',
      URL: 'https://www.hep.com.cn/book/show/9bbb9470-3576-4736-8bf7-018b8b5fb298',
      accessed: { "date-parts": [ [ 2026, 4, 3 ], ], },
    },
  },
  {
    id: [
      '同济高数下',
      '同济八版高数下',
      '同济8版高数下',
      { unordered_author: '同济大学数学科学学院', title: '高等数学 第八版 下册', },
      { unordered_author: '同济大学数学科学学院', title: '高等数学 第八版 下册', date: 2023 },
    ],
    material: {
      type: 'book',
      id: '同济高数下',
      author: [ { literal: '同济大学数学科学学院' } ],
      title: '高等数学 第八版 下册',
      volume: 2,
      edition: 8,
      publisher: '高等教育出版社',
      "publisher-place": '北京市',
      issued: { "date-parts": [ [ 2023, ], ], },
      ISBN: '978-7-04-058868-2',
      "number-of-pages": 480,
      language: 'zh-CN',
      URL: 'https://www.hep.com.cn/book/show/3c03343f-fa8a-4fbc-94aa-15ff4e23b964',
      accessed: { "date-parts": [ [ 2026, 4, 3 ], ], },
    },
  },
] satisfies catalog.Item[]

catalog.add_items(items)