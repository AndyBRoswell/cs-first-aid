import * as types_data from '@cs-first-aid/bibkit/types/data'

export const entries = [
  {
    id: [
      '学位〔2025〕23号',
      '国务院学位委员会关于印发《“博士+硕士”双学位项目试点设置管理办法》的通知',
    ],
    material: {
      type: 'regulation',
      author: [ { literal: '国务院学位委员会' } ],
      title: '国务院学位委员会关于印发《“博士+硕士”双学位项目试点设置管理办法》的通知',
      genre: '通知',
      number: '学位〔2025〕23号',
      publisher: '中华人民共和国教育部',
      issued: { 'date-parts': [ [ 2025, 12, 4 ] ] },
      'available-date': { 'date-parts': [ [ 2025, 12, 29 ] ] },
      accessed: { 'date-parts': [ [ 2026, 9, 23 ] ] },
      language: 'zh-CN',
      URL: 'https://www.moe.gov.cn/srcsite/A22/yjss_xwgl/xwgl_xwsy/202512/t20251229_1424852.html',
    },
  },
] satisfies types_data.Entry[]