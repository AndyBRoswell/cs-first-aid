import * as types_data from '@cs-first-aid/bibkit/types/data'

export const entries = [
  {
    id: [
    ],
    material: {
      type: 'book',
      title: '代数学习题集',
      edition: 4,
      'number-of-pages': 456,
      author: [ { given: 'Алексей Иванович', family: 'Костри́кин' } ],
      translator: [ { family: '丘', given: '维声' } ],
      issued: { 'date-parts': [ [ 2018, 8, 20 ] ] },
      publisher: '高等教育出版社',
      medium: '平装',
      'publisher-place': '北京',
      'collection-title': '俄罗斯数学教材选译',
      ISBN: '978-7-04-050234-3',
      language: 'zh-CN',
      URL: 'https://www.hep.com.cn/book/show/df4ba4fe-893d-4400-888e-311125e975a4',
      accessed: { "date-parts": [ [ 2026, 5, 6 ] ] },
    } satisfies types_data.Material,
  },
] satisfies types_data.Entry[]
