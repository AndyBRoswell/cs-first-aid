import * as types_data from '@cs-first-aid/bibkit/types/data'

export const entries = [
  {
    id: [],
    material: {
      type: 'book',
      title: '计算机网络',
      author: [ { family: '谢', given: '希仁' }, { family: '谢', given: '钧' }, { family: '邢', given: '长友' } ],
      edition: 9,
      medium: '平装',
      publisher: '电子工业出版社',
      issued: { 'date-parts': [ [ 2026, 6 ] ] },
      ISBN: '9787121527852',
      'number-of-pages': 436,
      "printing-number": '01-01',
      language: 'zh-CN',
      URL: 'https://www.phei.com.cn/module/goods/wssd_content.jsp?bookid=70139',
      accessed: { 'date-parts': [ [ 2026, 9, 29 ] ] },
    } satisfies types_data.Material,
  },
] satisfies types_data.Entry[]
