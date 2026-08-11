import * as catalog from '@cs-first-aid/bibkit/catalog'
import * as types_data from '@cs-first-aid/bibkit/types/data'
import * as CSL from '@cs-first-aid/bibkit/CSL'

const items = [
  {
    id: [],
    material: {
      type: 'book',
      title: 'Python语言程序设计基础',
      author: [ { family: '嵩', given: '天' }, { family: '黄', given: '天羽' }, { family: '杨', given: '雅婷' } ],
      issued: { 'date-parts': [ [ 2024, 9, 10 ] ] },
      edition: 3,
      publisher: '高等教育出版社',
      language: 'zh-CN',
      'number-of-pages': 424,
      accessed: { 'date-parts': [ [ 2026, 5, 17 ] ] },
      URL: 'https://www.hep.com.cn/book/show/c80f999b-8730-4c39-b454-a88e0fb6adbb',
      ISBN: '9787040622942' as CSL.ISBN,
    },
  },
] satisfies types_data.Entry[]

catalog.add_items(items)