import * as types_data from '@cs-first-aid/bibkit/types/data'

export const entries = [
  {
    id: [],
    material: {
      type: 'book',
      title: '线性代数',
      author: [ { literal: '中国人民大学数学学院' } ],
      edition: 7,
      publisher: '中国人民大学出版社',
      issued: { 'date-parts': [ [ 2026, 4 ] ] },
      ISBN: '9787300349213',
      'collection-title': '经济应用数学基础',
      note: '名誉主编：赵树嫄',
      language: 'zh-CN',
      URL: 'https://se-office.ruc.edu.cn/xwdt/1066a7d116d34959b9c494a892e39432.htm',
      accessed: { 'date-parts': [ [ 2026, 9, 29 ] ] },
    } satisfies types_data.Material,
  },
] satisfies types_data.Entry[]
