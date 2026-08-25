import * as types_data from '@cs-first-aid/bibkit/types/data'
import * as CSL from '@cs-first-aid/bibkit/CSL'

const items = [
  {
    id: [],
    material: {
      type: 'book',
      title: '图论',
      author: [ { family: '王', given: '树禾' } ],
      edition: 2,
      publisher: '科学出版社',
      'publisher-place': '北京',
      "collection-title": '普通高等教育“十一五”国家级规划教材',
      issued: { 'date-parts': [ [ 2009, 8, 1 ] ], },
      'number-of-pages': 238,
      language: 'zh-CN',
      ISBN: '9787030245953' as CSL.ISBN,
      accessed: { 'date-parts': [ [ 2026, 5, 7 ] ], },
      URL: 'https://www.ecsponline.com/goods.php?id=45315',
    },
  },
] satisfies types_data.Entry[]

export { items as entries }