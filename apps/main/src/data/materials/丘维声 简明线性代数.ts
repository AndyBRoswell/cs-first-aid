import * as types_data from '@cs-first-aid/bibkit/types/data'
import * as CSL from '@cs-first-aid/bibkit/CSL'

const items = [
  {
    id: [
    ],
    material: {
      type: 'book',
      title: '简明线性代数',
      'collection-title': '普通高等教育十一五国家级规划教材',
      author: [ { family: '丘', given: '维声', }, ],
      publisher: '北京大学出版社',
      "publisher-place": '北京',
      issued: { 'date-parts': [ [ 2024, 10, ], ], },
      edition: 2,
      ISBN: '9787301356784' as CSL.ISBN,
      'number-of-pages': 332,
      language: 'zh-CN',
      URL: 'https://book.douban.com/subject/37101517/',
      accessed: { 'date-parts': [ [ 2026, 5, 6, ], ], },
    },
  } satisfies types_data.Entry,
] satisfies types_data.Entry[]

export { items as entries }