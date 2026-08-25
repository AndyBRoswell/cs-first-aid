import * as types_data from '@cs-first-aid/bibkit/types/data'
import * as CSL from '@cs-first-aid/bibkit/CSL'

export const entries = [
  {
    id: [],
    material: {
      type: 'book',
      language: 'zh-CN',
      author: [ { given: '筑生', family: '张' } ],
      title: '数学分析新讲（重排本）',
      publisher: '北京大学出版社',
      'collection-title': '21世纪数学规划教材·数学基础课系列',
      volume: 1,
      "number-of-volumes": 3,
      'number-of-pages': 296,
      issued: { 'date-parts': [ [ 2021, 9 ] ] },
      ISBN: '9787301322796' as CSL.ISBN,
      URL: 'https://book.douban.com/subject/35597851/',
    },
  },
  {
    id: [],
    material: {
      type: 'book',
      language: 'zh-CN',
      author: [ { given: '筑生', family: '张' } ],
      title: '数学分析新讲（重排本）',
      publisher: '北京大学出版社',
      'collection-title': '21世纪数学规划教材·数学基础课系列',
      volume: 2,
      "number-of-volumes": 3,
      issued: { 'date-parts': [ [ 2021, 8 ] ] },
      ISBN: '9787301323373' as CSL.ISBN,
      URL: 'https://book.douban.com/subject/35601300/',
    },
  },
  {
    id: [],
    material: {
      type: 'book',
      language: 'zh-CN',
      author: [ { given: '筑生', family: '张' } ],
      title: '数学分析新讲（重排本）',
      publisher: '北京大学出版社',
      'collection-title': '21世纪数学规划教材·数学基础课系列',
      volume: 3,
      "number-of-volumes": 3,
      'number-of-pages': 372,
      issued: { 'date-parts': [ [ 2021, 10 ] ] },
      ISBN: '9787301323724' as CSL.ISBN,
      URL: 'https://book.douban.com/subject/35632006/',
    },
  },
] satisfies types_data.Entry[]