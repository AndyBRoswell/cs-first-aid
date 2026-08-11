import * as catalog from '../../../../../packages/bibkit/src/catalog.ts'
import * as Data_Type from '../../../../../packages/bibkit/src/types/data.ts'
import * as CSL_Data from '../../../../../packages/bibkit/src/CSL_data.ts'

const items = [
  {
    id: [],
    material: {
      type: 'book',
      author: [ { family: '蓝', given: '以中' } ],
      title: '高等代数简明教程',
      edition: 3,
      volume: 1,
      'number-of-volumes': 2,
      ISBN: '9787301342237' as CSL_Data.ISBN,
      issued: { 'date-parts': [ [ 2023, 8 ] ] },
      publisher: '北京大学出版社',
      'publisher-place': '北京',
      'collection-title': '北京大学数学教学系列丛书',
      language: 'zh-CN',
      URL: 'https://book.douban.com/subject/36521986',
      accessed: { "date-parts": [ [ 2026, 5, 5 ] ] },
      custom: {
        'collection-title': [
          '普通高等教育“十一五”国家级规划教材',
          '北京大学数学教学系列丛书',
          '本科生数学基础课教材',
        ],
      } satisfies CSL_Data.Custom,
    } satisfies CSL_Data.Item,
  },
  {
    id: [],
    material: {
      type: 'book',
      author: [ { family: '蓝', given: '以中' } ],
      title: '高等代数简明教程',
      edition: 3,
      volume: 2,
      'number-of-volumes': 2,
      ISBN: '9787301343159' as CSL_Data.ISBN,
      issued: { 'date-parts': [ [ 2023, 8 ] ] },
      publisher: '北京大学出版社',
      'publisher-place': '北京',
      'collection-title': '北京大学数学教学系列丛书',
      language: 'zh-CN',
      URL: 'https://book.douban.com/subject/36553626/',
      accessed: { "date-parts": [ [ 2026, 5, 5 ] ] },
      custom: {
        'collection-title': [
          '普通高等教育“十一五”国家级规划教材',
          '北京大学数学教学系列丛书',
          '本科生数学基础课教材',
        ],
      } satisfies CSL_Data.Custom,
    } satisfies CSL_Data.Item,
  },
] satisfies Data_Type.Entry[]

catalog.add_items(items)