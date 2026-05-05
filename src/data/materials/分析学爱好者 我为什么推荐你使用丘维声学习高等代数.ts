import * as catalog from './catalog.ts'
import * as Data_Type from '@/types/data.ts'

const items = [
  {
    id: [
      '我为什么推荐你使用丘维声学习高等代数',
      '分析学爱好者, 我为什么推荐你使用丘维声学习高等代数',
      '王宇鹏, 我为什么推荐你使用丘维声学习高等代数',
      { unordered_author: '分析学爱好者', title: '我为什么推荐你使用丘维声学习高等代数', },
      { unordered_author: '王宇鹏', title: '我为什么推荐你使用丘维声学习高等代数', },
      { unordered_author: '分析学爱好者', title: '我为什么推荐你使用丘维声学习高等代数', date: 2025, },
      { unordered_author: '王宇鹏', title: '我为什么推荐你使用丘维声学习高等代数', date: 2025, },
    ],
    material: {
      type: 'motion_picture',
      id: '分析学爱好者, 我为什么推荐你使用丘维声学习高等代数',
      author: [ { literal: '分析学爱好者' } ],
      title: '我为什么推荐你使用丘维声学习高等代数',
      issued: { "date-parts": [ [ 2025, 9, 23 ] ] },
      language: 'zh-CN',
      URL: 'https://www.bilibili.com/video/BV1kkJyzcE4q',
      accessed: { "date-parts": [ [ 2026, 5, 5 ] ] },
    },
  },
] satisfies Data_Type.Entry[]

catalog.add_items(items)