import * as types_data from '@cs-first-aid/bibkit/types/data'

export const entries = [
  {
    id: [],
    material: {
      type: 'book',
      title: '数据结构',
      author: [ { family: '李', given: '冬梅' }, { family: '严', given: '蔚敏' }, { family: '吴', given: '伟民' } ],
      edition: '（C语言版 第3版）',
      publisher: '人民邮电出版社',
      issued: { 'date-parts': [ [ 2024, 10, 1 ] ] },
      ISBN: '9787115651259',
      'number-of-pages': 329,
      'collection-title': '“十四五”普通高等教育本科国家级规划教材',
      language: 'zh-CN',
      URL: 'https://www.ryjiaoyu.com/book/details/51806',
      accessed: { 'date-parts': [ [ 2026, 9, 29 ] ] },
    } satisfies types_data.Material,
  },
] satisfies types_data.Entry[]
