import * as types_data from '@cs-first-aid/bibkit/types/data'
import * as CSL from '@cs-first-aid/bibkit/CSL'

export const entries = [
  {
    id: [],
    material: {
      type: 'book',
      author: [ { family: '张', given: '贤科' } ],
      title: '高等线性代数',
      publisher: '高等教育出版社',
      'publisher-place': '北京',
      issued: { 'date-parts': [ [ 2012, 8, 10 ] ] },
      accessed: { 'date-parts': [ [ 2026, 5, 11 ] ] },
      ISBN: '978-7-04-035199-6',
      language: 'zh-CN',
      'number-of-pages': 501,
      URL: 'https://www.hep.com.cn/book/show/327efefa-8d7a-44af-83a1-a08c18e1421d',
      custom: {
        URL: [
          {
            link: 'https://book.douban.com/subject/11611593/',
            display_text: '豆瓣读书',
          },
        ],
      } satisfies CSL.Custom,
    } satisfies types_data.Material,
  },
] satisfies types_data.Entry[]
