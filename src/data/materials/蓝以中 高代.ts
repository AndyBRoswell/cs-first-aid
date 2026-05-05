import * as catalog from './catalog.ts'
import * as Data_Type from '@/types/data.ts'
import * as CSL_Data from '@/types/CSL_data.ts'

const items = [
  {
    id: [
      '蓝以中 高代上',
      '蓝以中 高代3版上',
      '蓝以中 高代 2023上',
      '蓝以中, 高等代数简明教程 上册（第三版）, 2023',
      { unordered_author: '蓝以中', title: '高等代数简明教程', volume: 1 },
      { unordered_author: '蓝以中', title: '高等代数简明教程', date: 2023, volume: 1 },
      { unordered_author: '蓝以中', title: '高等代数简明教程', edition: 3, volume: 1 },
    ],
    material: {
      type: 'book',
      id: '蓝以中, 高等代数简明教程 上册（第三版）, 2023',
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
    id: [
      '蓝以中 高代下',
      '蓝以中 高代3版下',
      '蓝以中 高代 2023下',
      '蓝以中, 高等代数简明教程 下册（第三版）, 2023',
      { unordered_author: '蓝以中', title: '高等代数简明教程', volume: 2 },
      { unordered_author: '蓝以中', title: '高等代数简明教程', date: 2023, volume: 2 },
      { unordered_author: '蓝以中', title: '高等代数简明教程', edition: 3, volume: 2 },
    ],
    material: {
      type: 'book',
      id: '蓝以中, 高等代数简明教程 下册（第三版）, 2023',
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