import * as catalog from '@cs-first-aid/bibkit/catalog'
import * as types_data from '@cs-first-aid/bibkit/types/data'

const items = [
  {
    id: [
      '我为何不建议初学者用清华丘班数分讲义学数分',
    ],
    material: {
      type: 'motion_picture',
      author: [ { literal: '分析学爱好者' } ],
      title: '我为何不建议初学者用清华丘班数分讲义学数分',
      issued: { "date-parts": [ [ 2025, 9, 15 ] ] },
      language: 'zh-CN',
      URL: 'https://www.bilibili.com/video/BV1dxpqzzEyi/',
      accessed: { "date-parts": [ [ 2026, 4, 9 ] ] },
    }
  }
] satisfies types_data.Entry[]

catalog.add_items(items)