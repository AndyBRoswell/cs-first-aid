import * as catalog from './catalog.ts'

const items = [
  {
    id: [
      '张筑生 数分1',
      { unordered_author: [ '张筑生' ], title: '数学分析新讲（重排本）（第一册）' },
      { unordered_author: [ '张筑生' ], title: '数学分析新讲（重排本）（第一册）', date: 2021 },
    ],
    material: {
      type: 'book',
      id: '张筑生 数分1',
      language: 'zh-CN',
      author: [ { given: '筑生', family: '张' } ],
      title: '数学分析新讲（重排本）（第一册）',
      publisher: '北京大学出版社',
      'collection-title': '21世纪数学规划教材·数学基础课系列',
      volume: 1,
      'number-of-pages': 296,
      issued: { 'date-parts': [ [ 2021, 9 ] ] },
      ISBN: '9787301322796',
      URL: 'https://book.douban.com/subject/35597851/',
    },
  },
  {
    id: [
      '张筑生 数分2',
      { unordered_author: [ '张筑生' ], title: '数学分析新讲（重排本）（第二册）' },
      { unordered_author: [ '张筑生' ], title: '数学分析新讲（重排本）（第二册）', date: 2021 },
    ],
    material: {
      type: 'book',
      id: '张筑生 数分2',
      language: 'zh-CN',
      author: [ { given: '筑生', family: '张' } ],
      title: '数学分析新讲（重排本）（第二册）',
      publisher: '北京大学出版社',
      'collection-title': '21世纪数学规划教材·数学基础课系列',
      volume: 2,
      issued: { 'date-parts': [ [ 2021, 8 ] ] },
      ISBN: '9787301323373',
      URL: 'https://book.douban.com/subject/35601300/',
    },
  },
  {
    id: [
      '张筑生 数分3',
      { unordered_author: [ '张筑生' ], title: '数学分析新讲（重排本）（第三册）' },
      { unordered_author: [ '张筑生' ], title: '数学分析新讲（重排本）（第三册）', date: 2021 },
    ],
    material: {
      type: 'book',
      id: '张筑生 数分3',
      language: 'zh-CN',
      author: [ { given: '筑生', family: '张' } ],
      title: '数学分析新讲（重排本）（第三册）',
      publisher: '北京大学出版社',
      'collection-title': '21世纪数学规划教材·数学基础课系列',
      volume: 3,
      'number-of-pages': 372,
      issued: { 'date-parts': [ [ 2021, 10 ] ] },
      ISBN: '9787301323724',
      URL: 'https://book.douban.com/subject/35632006/',
    },
  },
] satisfies catalog.Item[]

catalog.add_items(items)