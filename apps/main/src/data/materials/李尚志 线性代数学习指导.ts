import * as types_data from '@cs-first-aid/bibkit/types/data'

export const entries = [
  {
    id: [],
    material: {
      type: 'book',
      title: '线性代数学习指导',
      author: [ { family: '李', given: '尚志' } ],
      issued: { 'date-parts': [ [ 2015, 1 ] ] },
      accessed: { 'date-parts': [ [ 2026, 5, 6 ] ] },
      publisher: '中国科学技术大学出版社',
      'publisher-place': '合肥',
      language: 'zh-CN',
      'number-of-pages': 519,
      ISBN: '9787312034268',
      'collection-title': '高校核心课程学习指导丛书',
      URL: 'https://book.douban.com/subject/26390093',
    },
  },
] satisfies types_data.Entry[]
