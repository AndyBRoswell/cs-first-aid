import * as types_data from '@cs-first-aid/bibkit/types/data'
import * as CSL from '@cs-first-aid/bibkit/CSL'

export const entries = [
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
      custom: {
        URL: [ { link: 'https://zhuanlan.zhihu.com/p/563317174', display_text: '知乎：要点整理' } ],
      } satisfies CSL.Custom,
    }
  }
] satisfies types_data.Entry[]
