import * as catalog from './catalog.ts'
import * as Data_Type from '@/types/data.ts'
import * as CSL_Data from '@/types/CSL_data.ts'

const items = [
  {
    id: [],
    material: {
      type: 'book',
      id: '张筑生 数分1',
      language: 'zh-CN',
      author: [ { given: '筑生', family: '张' } ],
      title: '数学分析新讲（重排本）',
      publisher: '北京大学出版社',
      'collection-title': '21世纪数学规划教材·数学基础课系列',
      volume: 1,
      "number-of-volumes": 3,
      'number-of-pages': 296,
      issued: { 'date-parts': [ [ 2021, 9 ] ] },
      ISBN: '9787301322796' as CSL_Data.ISBN,
      URL: 'https://book.douban.com/subject/35597851/',
    },
  },
  {
    id: [],
    material: {
      type: 'book',
      id: '张筑生 数分2',
      language: 'zh-CN',
      author: [ { given: '筑生', family: '张' } ],
      title: '数学分析新讲（重排本）',
      publisher: '北京大学出版社',
      'collection-title': '21世纪数学规划教材·数学基础课系列',
      volume: 2,
      "number-of-volumes": 3,
      issued: { 'date-parts': [ [ 2021, 8 ] ] },
      ISBN: '9787301323373' as CSL_Data.ISBN,
      URL: 'https://book.douban.com/subject/35601300/',
    },
  },
  {
    id: [],
    material: {
      type: 'book',
      id: '张筑生 数分3',
      language: 'zh-CN',
      author: [ { given: '筑生', family: '张' } ],
      title: '数学分析新讲（重排本）',
      publisher: '北京大学出版社',
      'collection-title': '21世纪数学规划教材·数学基础课系列',
      volume: 3,
      "number-of-volumes": 3,
      'number-of-pages': 372,
      issued: { 'date-parts': [ [ 2021, 10 ] ] },
      ISBN: '9787301323724' as CSL_Data.ISBN,
      URL: 'https://book.douban.com/subject/35632006/',
    },
  },
] satisfies Data_Type.Entry[]

catalog.add_items(items)