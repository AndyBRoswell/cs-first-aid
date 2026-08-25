import * as types_data from '@cs-first-aid/bibkit/types/data'

const items = [
  {
    id: [
      '对常见数分课本&习题集的快速版点评',
    ],
    material: {
      type: 'motion_picture',
      author: [ { literal: '分析学爱好者' } ],
      title: '对常见数分课本&习题集的快速版点评',
      issued: { "date-parts": [ [ 2022, 8, 18 ] ] },
      language: 'zh-CN',
      URL: 'https://www.bilibili.com/video/BV1mG411x7Kw',
      accessed: { "date-parts": [ [ 2026, 5, 5 ] ] },
    },
  },
] satisfies types_data.Entry[]

export { items as entries }