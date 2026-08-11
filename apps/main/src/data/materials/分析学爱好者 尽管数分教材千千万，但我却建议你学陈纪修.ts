import * as catalog from '@cs-first-aid/bibkit/catalog'
import * as types_data from '@cs-first-aid/bibkit/types/data'

const items = [
  {
    id: [
      '尽管数分教材千千万，但我却建议你学陈纪修',
    ],
    material: {
      type: 'motion_picture',
      author: [ { literal: '分析学爱好者' } ],
      title: '尽管数分教材千千万，但我却建议你学陈纪修',
      issued: { "date-parts": [ [ 2025, 9, 14 ] ] },
      language: 'zh-CN',
      URL: 'https://www.bilibili.com/video/BV1pbpwzDEnF',
      accessed: { "date-parts": [ [ 2026, 5, 5 ] ] },
    },
  },
] satisfies types_data.Entry[]

catalog.add_items(items)