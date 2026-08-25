import * as types_data from '@cs-first-aid/bibkit/types/data'
import * as CSL from '@cs-first-aid/bibkit/CSL'

export const entries = [
  {
    id: [
      '线性代数的几何意义',
    ] satisfies types_data.ID_t[],
    material: {
      type: 'book',
      title: '线性代数的几何意义',
      author: [ { family: '任', given: '广千' }, { family: '谢', given: '聪' }, { family: '胡', given: '翠芳' } ],
      issued: { 'date-parts': [ [ 2015, 8 ] ] },
      publisher: '西安电子科技大学出版社',
      'publisher-place': '西安',
      ISBN: '978-7-5606-3454-8' as CSL.ISBN,
      language: 'zh-CN',
      URL: 'https://www.xduph.com/Pages/BookDetail.aspx?doi=13bc748f-fbb6-426a-9a59-1cab34fa991e',
      accessed: { 'date-parts': [ [ 2026, 5, 6 ] ] },
    } satisfies types_data.Material,
  },
] satisfies types_data.Entry[]