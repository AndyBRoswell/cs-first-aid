import * as catalog from './catalog.ts'
import * as Data_Type from '@/types/data.ts'
import * as CSL_Data from '@/types/CSL_data.ts'

const items = [
  {
    id: [
      '冯克勤 近世代数引论',
      '冯克勤 等 近世代数引论',
      '冯克勤 李尚志 章璞 近世代数引论',
      '冯克勤, 李尚志, 章璞, 近世代数引论',
      '冯克勤, 李尚志, 章璞, 近世代数引论, 第4版',
      { unordered_author: [ '冯克勤', '李尚志', '章璞' ], title: '近世代数引论', edition: 4, },
      { unordered_author: [ '冯克勤', '李尚志', '章璞' ], title: '近世代数引论', date: 2018, },
    ],
    material: {
      type: 'book',
      id: '冯克勤, 李尚志, 章璞, 近世代数引论, 第4版',
      language: 'zh-CN',
      author: [ { family: '冯', given: '克勤' }, { family: '李', given: '尚志' }, { family: '章', given: '璞' } ],
      issued: { 'date-parts': [ [ 2018, 12, 1 ] ] },
      accessed: { 'date-parts': [ [ 2026, 5, 11 ] ] },
      title: '近世代数引论',
      edition: 4,
      'number-of-pages': 204,
      publisher: '中国科学技术大学出版社',
      'publisher-place': '合肥',
      'collection-title': '中国科学技术大学精品教材',
      ISBN: '9787312045141' as CSL_Data.ISBN,
      URL: 'https://book.douban.com/subject/30743397/',
    } satisfies Data_Type.Material,
  },
] satisfies Data_Type.Entry[]

catalog.add_items(items)