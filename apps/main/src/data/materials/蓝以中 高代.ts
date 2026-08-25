import * as types_data from '@cs-first-aid/bibkit/types/data'
import * as CSL from '@cs-first-aid/bibkit/CSL'

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
      ISBN: '9787301342237' as CSL.ISBN,
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
      } satisfies CSL.Custom,
    } satisfies CSL.Item,
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
      ISBN: '9787301343159' as CSL.ISBN,
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
      } satisfies CSL.Custom,
    } satisfies CSL.Item,
  },
] satisfies types_data.Entry[]

export { items as entries }