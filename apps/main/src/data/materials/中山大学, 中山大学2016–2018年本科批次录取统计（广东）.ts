import * as types_data from '@cs-first-aid/bibkit/types/data'

export const entries = [
  {
    id: [],
    material: {
      type: 'report',
      author: [ { literal: '中山大学' } ],
      title: '中山大学2016–2018年本科批次录取统计（广东）',
      language: 'zh-CN',
      publisher: '中山大学',
      'number-of-pages': 1,
      accessed: { 'date-parts': [ [ 2026, 11, 15 ] ] },
      URL: 'https://dgyjy.sysu.edu.cn/sites/default/files/2019-06/%E4%B8%AD%E5%B1%B1%E5%A4%A7%E5%AD%A62016-2018%E5%B9%B4%E6%9C%AC%E7%A7%91%E6%89%B9%E6%AC%A1%E5%BD%95%E5%8F%96%E7%BB%9F%E8%AE%A1%28%E5%B9%BF%E4%B8%9C%29.pdf',
    } satisfies types_data.Material,
  },
] satisfies types_data.Entry[]
