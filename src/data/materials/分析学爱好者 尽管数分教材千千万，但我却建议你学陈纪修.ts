import * as catalog from './catalog.ts'
import * as Data_Type from '@/types/data.ts'

const items = [
  {
    id: [
      '尽管数分教材千千万，但我却建议你学陈纪修',
      '分析学爱好者, 尽管数分教材千千万，但我却建议你学陈纪修',
      '王宇鹏, 尽管数分教材千千万，但我却建议你学陈纪修',
      { unordered_author: '分析学爱好者', title: '尽管数分教材千千万，但我却建议你学陈纪修', },
      { unordered_author: '王宇鹏', title: '尽管数分教材千千万，但我却建议你学陈纪修', },
      { unordered_author: '分析学爱好者', title: '尽管数分教材千千万，但我却建议你学陈纪修', date: 2025, },
      { unordered_author: '王宇鹏', title: '尽管数分教材千千万，但我却建议你学陈纪修', date: 2025, },
    ],
    material: {
      type: 'motion_picture',
      id: '分析学爱好者, 尽管数分教材千千万，但我却建议你学陈纪修',
      author: [ { literal: '分析学爱好者' } ],
      title: '尽管数分教材千千万，但我却建议你学陈纪修',
      issued: { "date-parts": [ [ 2025, 9, 14 ] ] },
      language: 'zh-CN',
      URL: 'https://www.bilibili.com/video/BV1pbpwzDEnF',
      accessed: { "date-parts": [ [ 2026, 5, 5 ] ] },
    },
  },
] satisfies Data_Type.Entry[]

catalog.add_items(items)