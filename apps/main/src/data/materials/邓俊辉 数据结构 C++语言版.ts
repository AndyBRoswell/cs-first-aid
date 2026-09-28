import * as types_data from '@cs-first-aid/bibkit/types/data'
import * as CSL from '@cs-first-aid/bibkit/CSL'

export const entries = [
  {
    id: [],
    material: {
      type: 'book',
      title: '数据结构（C++语言版）',
      author: [ { family: '邓', given: '俊辉' } ],
      edition: 3,
      'printing-number': '3-28',
      publisher: '清华大学出版社',
      'publisher-place': '北京',
      issued: { 'date-parts': [ [ 2013, 8, 1 ] ] },
      ISBN: '9787302330646',
      'number-of-pages': 389,
      'collection-title': '清华大学计算机系列教材',
      language: 'zh-CN',
      URL: 'https://www.tup.tsinghua.edu.cn/bookscenter/book_05358102.html',
      accessed: { 'date-parts': [ [ 2026, 9, 28 ] ] },
      custom: {
        'printing-date': { 'date-parts': [ [ 2026, 8, 5 ] ] },
        URL: [ { link: 'https://book.douban.com/subject/25859528/', display_text: '豆瓣读书' } ],
      } satisfies CSL.Custom,
    } satisfies types_data.Material,
  },
] satisfies types_data.Entry[]
