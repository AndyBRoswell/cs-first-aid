import * as types_data from '@cs-first-aid/bibkit/types/data'

const items = [
  {
    id: [
      '我为什么推荐你使用丘维声学习高等代数',
    ],
    material: {
      type: 'motion_picture',
      author: [ { literal: '分析学爱好者' } ],
      title: '我为什么推荐你使用丘维声学习高等代数',
      issued: { "date-parts": [ [ 2025, 9, 23 ] ] },
      language: 'zh-CN',
      URL: 'https://www.bilibili.com/video/BV1kkJyzcE4q',
      accessed: { "date-parts": [ [ 2026, 5, 5 ] ] },
    },
  },
] satisfies types_data.Entry[]

export { items as entries }