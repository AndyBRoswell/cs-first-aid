import * as types_data from '@cs-first-aid/bibkit/types/data'

export const entries = [
  {
    id: [],
    material: {
      type: 'book',
      title: '计算机网络综合实验教程——协议分析与应用（第2版）',
      author: [ { family: '李', given: '志远' } ],
      publisher: '电子工业出版社',
      issued: { 'date-parts': [ [ 2026, 6 ] ] },
      ISBN: '9787121529450',
      edition: 2,
      "printing-number": '01-01',
      'number-of-pages': 284,
      language: 'zh-CN',
      URL: 'https://www.phei.com.cn/module/goods/wssd_content.jsp?bookid=70153',
      accessed: { 'date-parts': [ [ 2026, 9, 29 ] ] },
    } satisfies types_data.Material,
  },
] satisfies types_data.Entry[]
