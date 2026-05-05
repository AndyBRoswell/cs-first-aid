import * as catalog from './catalog.ts'
import * as Data_Type from '@/types/data.ts'

const items = [
  {
    id: [
      '对常见数分课本&习题集的快速版点评',
      '分析学爱好者, 对常见数分课本&习题集的快速版点评',
      '王宇鹏, 对常见数分课本&习题集的快速版点评',
      { unordered_author: '分析学爱好者', title: '对常见数分课本&习题集的快速版点评', },
      { unordered_author: '王宇鹏', title: '对常见数分课本&习题集的快速版点评', },
      { unordered_author: '分析学爱好者', title: '对常见数分课本&习题集的快速版点评', date: 2022, },
      { unordered_author: '王宇鹏', title: '对常见数分课本&习题集的快速版点评', date: 2022, },
    ],
    material: {
      type: 'motion_picture',
      id: '分析学爱好者, 对常见数分课本&习题集的快速版点评',
      author: [ { literal: '分析学爱好者' } ],
      title: '对常见数分课本&习题集的快速版点评',
      issued: { "date-parts": [ [ 2022, 8, 18 ] ] },
      language: 'zh-CN',
      URL: 'https://www.bilibili.com/video/BV1mG411x7Kw',
      accessed: { "date-parts": [ [ 2026, 5, 5 ] ] },
    },
  },
] satisfies Data_Type.Entry[]

catalog.add_items(items)