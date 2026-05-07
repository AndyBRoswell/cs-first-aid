import * as catalog from './catalog.ts'
import * as Data_Type from '@/types/data.ts'
import * as CSL_Data from '@/types/CSL_data.ts'

const items = [
  {
    id: [
      '王树禾 图论',
      '王树禾, 图论',
      '王树禾, 图论, 第2版',
      '王树禾, 图论, 2009',
      { unordered_author: '王树禾', title: '图论', edition: 2 },
      { unordered_author: '王树禾', title: '图论', date: 2009 },
      { unordered_author: '王树禾', title: '图论' },
    ],
    material: {
      type: 'book',
      id: '王树禾, 图论, 第2版',
      title: '图论',
      author: [ { family: '王', given: '树禾' } ],
      edition: 2,
      publisher: '科学出版社',
      'publisher-place': '北京',
      "collection-title": '普通高等教育“十一五”国家级规划教材',
      issued: { 'date-parts': [ [ 2009, 8, 1 ] ], },
      'number-of-pages': 238,
      language: 'zh-CN',
      ISBN: '9787030245953' as CSL_Data.ISBN,
      accessed: { 'date-parts': [ [ 2026, 5, 7 ] ], },
      URL: 'https://www.ecsponline.com/goods.php?id=45315',
    },
  },
] satisfies Data_Type.Entry[]

catalog.add_items(items)