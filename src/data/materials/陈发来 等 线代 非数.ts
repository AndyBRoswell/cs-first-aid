import * as catalog from './catalog.ts'
import * as Data_Type from '@/types/data.ts'
import * as CSL_Data from '@/types/CSL_data.ts'

const items = [
  {
    id: [
      '陈发来 线代1',
      '陈发来 线代1 2026',
      '陈发来 线代I',
      '陈发来 线代I 2026',
      '陈发来, 王新茂, 陈效群, 李思敏, 线性代数 I, 2026',
      {
        unordered_author: [ '陈发来', '王新茂', '陈效群', '李思敏', ],
        title: '线性代数 I',
      },
      {
        unordered_author: [ '陈发来', '王新茂', '陈效群', '李思敏', ],
        title: '线性代数 I',
        date: 2026,
      },
    ],
    material: {
      id: '陈发来, 王新茂, 陈效群, 李思敏, 线性代数 I, 2026',
      type: 'book',
      title: '线性代数 I',
      author: [ { family: '陈', given: '发来', }, { family: '王', given: '新茂', }, { family: '陈', given: '效群', }, { family: '李', given: '思敏', }, ],
      language: 'zh-CN',
      issued: { 'date-parts': [ [ 2026, 3, 23, ], ], },
      publisher: '高等教育出版社',
      "publisher-place": '北京',
      'number-of-pages': 280,
      ISBN: '978-7-04-066015-9' as CSL_Data.ISBN,
      URL: 'https://www.hep.com.cn/book/show/ee16c973-3251-4641-a183-0eaac5d19b0c',
      accessed: { "date-parts": [ [ 2026, 5, 6 ] ] },
    },
  },
] satisfies Data_Type.Entry[]

catalog.add_items(items)