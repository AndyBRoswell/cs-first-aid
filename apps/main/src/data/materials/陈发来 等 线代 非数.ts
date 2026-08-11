import * as catalog from '@cs-first-aid/bibkit/catalog'
import * as types_data from '@cs-first-aid/bibkit/types/data'
import * as CSL from '@cs-first-aid/bibkit/CSL'

const items = [
  {
    id: [],
    material: {
      type: 'book',
      title: '线性代数 I',
      author: [ { family: '陈', given: '发来', }, { family: '王', given: '新茂', }, { family: '陈', given: '效群', }, { family: '李', given: '思敏', }, ],
      language: 'zh-CN',
      issued: { 'date-parts': [ [ 2026, 3, 23, ], ], },
      publisher: '高等教育出版社',
      "publisher-place": '北京',
      'number-of-pages': 280,
      ISBN: '978-7-04-066015-9' as CSL.ISBN,
      URL: 'https://www.hep.com.cn/book/show/ee16c973-3251-4641-a183-0eaac5d19b0c',
      accessed: { "date-parts": [ [ 2026, 5, 6 ] ] },
    },
  },
] satisfies types_data.Entry[]

catalog.add_items(items)