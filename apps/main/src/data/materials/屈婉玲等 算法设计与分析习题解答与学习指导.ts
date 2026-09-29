import * as types_data from '@cs-first-aid/bibkit/types/data'
import * as CSL from '@cs-first-aid/bibkit/CSL'

export const entries = [
  {
    id: [],
    material: {
      type: 'book',
      title: '算法设计与分析习题解答与学习指导',
      author: [ { family: '屈', given: '婉玲' }, { family: '刘', given: '田' }, { family: '张', given: '立昂' }, { family: '王', given: '捍贫' } ],
      edition: 3,
      'printing-number': '3-4',
      medium: 'Paperback',
      publisher: '清华大学出版社',
      issued: { 'date-parts': [ [ 2023, 1, 1 ] ] },
      ISBN: '9787302612384',
      'number-of-pages': 179,
      'collection-title': '21世纪大学本科计算机专业系列教材',
      language: 'zh-CN',
      URL: 'https://www.tup.com.cn/booksCenter/book_09719501.html',
      accessed: { 'date-parts': [ [ 2026, 9, 29 ] ] },
      custom: {
        'printing-date': { 'date-parts': [ [ 2025, 3, 4 ] ] },
        URL: [ { link: 'https://www.sanmin.com.tw/product/index/011702357', display_text: '三民網路書店' } ],
      } satisfies CSL.Custom,
    } satisfies types_data.Material,
  },
] satisfies types_data.Entry[]
