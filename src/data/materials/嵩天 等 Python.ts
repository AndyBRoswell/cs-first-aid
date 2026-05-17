import * as catalog from './catalog.ts'
import * as Data_Type from '@/types/data.ts'
import * as CSL_Data from '@/types/CSL_data.ts'

const items = [
  {
    id: [
      '嵩天 Python',
      '嵩天 等 Python',
      '嵩天 等 Python 第3版',
      '嵩天, 黄天羽, 杨雅婷, Python语言程序设计基础, 第3版',
      { unordered_author: [ '嵩天', '黄天羽', '杨雅婷' ], title: 'Python语言程序设计基础', },
      { unordered_author: [ '嵩天', '黄天羽', '杨雅婷' ], title: 'Python语言程序设计基础', edition: 3, },
      { unordered_author: [ '嵩天', '黄天羽', '杨雅婷' ], title: 'Python语言程序设计基础', date: 2024, },
    ],
    material: {
      type: 'book',
      id: '嵩天, 黄天羽, 杨雅婷, Python语言程序设计基础, 第3版',
      title: 'Python语言程序设计基础',
      author: [ { family: '嵩', given: '天' }, { family: '黄', given: '天羽' }, { family: '杨', given: '雅婷' } ],
      issued: { 'date-parts': [ [ 2024, 9, 10 ] ] },
      edition: 3,
      publisher: '高等教育出版社',
      language: 'zh-CN',
      'number-of-pages': 424,
      accessed: { 'date-parts': [ [ 2026, 5, 17 ] ] },
      URL: 'https://www.hep.com.cn/book/show/c80f999b-8730-4c39-b454-a88e0fb6adbb',
      ISBN: '9787040622942' as CSL_Data.ISBN,
    },
  },
] satisfies Data_Type.Entry[]

catalog.add_items(items)