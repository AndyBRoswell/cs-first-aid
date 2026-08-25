import * as types_data from '@cs-first-aid/bibkit/types/data'

const items = [
  {
    id: [
      '如何选择一本适合你的《数学分析》教科书？',
    ],
    material: {
      type: 'motion_picture',
      author: [ { literal: '我真的不懂分析' } ],
      title: '如何选择一本适合你的《数学分析》教科书？',
      issued: { "date-parts": [ [ 2020, 9, 12 ] ] },
      language: 'zh-CN',
      URL: 'https://www.bilibili.com/video/BV1xp4y1e7Nh',
      accessed: { "date-parts": [ [ 2026, 4, 9 ] ] },
      note: 'https://zhuanlan.zhihu.com/p/563317174',
    }
  }
] satisfies types_data.Entry[]

export { items as entries }