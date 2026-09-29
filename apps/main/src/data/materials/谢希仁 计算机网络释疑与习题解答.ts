import * as types_data from '@cs-first-aid/bibkit/types/data'

export const entries = [
  {
    id: [],
    material: {
      type: 'book',
      title: '计算机网络释疑与习题解答',
      author: [ { family: '谢', given: '希仁' } ],
      publisher: '电子工业出版社',
      issued: { 'date-parts': [[2021, 9]] },
      "printing-number": '01-01',
      edition: 8,
      ISBN: '9787121359057',
      'number-of-pages': 304,
      language: 'zh-CN',
      URL: 'https://www.phei.com.cn/module/goods/wssd_content.jsp?bookid=59069',
      accessed: { 'date-parts': [ [ 2026, 9, 29 ] ] },
    } satisfies types_data.Material,
  },
] satisfies types_data.Entry[]
