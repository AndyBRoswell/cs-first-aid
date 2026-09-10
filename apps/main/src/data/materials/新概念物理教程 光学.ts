import * as types_data from '@cs-first-aid/bibkit/types/data'

export const entries = [
  {
    id: [],
    material: {
      type: 'book',
      title: '新概念物理教程 光学',
      author: [ { family: '赵', given: '凯华', }, ],
      illustrator: [ { family: '于', given: '博', }, ],
      edition: 2,
      'printing-number': 1,
      publisher: '高等教育出版社',
      'publisher-place': '北京',
      issued: { 'date-parts': [ [ 2021, 2, ], ], },
      'original-date': { 'date-parts': [ [ 2004, 11, ], ], },
      ISBN: '978-7-04-051308-0',
      dimensions: '787mm×1092mm 1/16',
      language: 'zh-CN',
      URL: 'https://xuanshu.hep.com.cn/front/book/findBookDetails?bookId=5c475010f18f967ee7f37d94',
      accessed: { 'date-parts': [ [ 2026, 9, 10 ], ], },
      custom: {
        'printing-date': { 'date-parts': [ [ 2021, 2, ], ], },
        'word-count': 470000,
      },
    },
  },
] satisfies types_data.Entry[]
