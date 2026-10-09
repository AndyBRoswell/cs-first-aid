import * as types_data from '@cs-first-aid/bibkit/types/data'
import * as CSL from '@cs-first-aid/bibkit/CSL'

export const entries = [
  {
    id: [],
    material: {
      type: 'motion_picture',
      title: 'Essence of Calculus',
      author: [ { given: 'Grant', family: 'Sanderson' } ],
      publisher: '3Blue1Brown',
      issued: { 'date-parts': [ [ 2017, 4, 28 ] ] },
      language: 'en',
      medium: 'Online video',
      genre: 'Educational video series',
      // abstract: '通过几何与动画解释一元微积分的核心概念：导数、求导公式、乘积法则与链式法则、自然常数 e、隐函数求导、极限与 ε–δ 定义、洛必达法则、积分与微积分基本定理、高阶导数和泰勒级数，并补充导数作为局部伸缩的可视化。',
      // note: '12 集，合计 3 小时 11 分 06 秒；按 2026-10-10 官方 YouTube 播放列表的逐集时长统计，包含补充篇。',
      URL: 'https://www.youtube.com/playlist?list=PLZHQObOWTQDMsr9K-rj53DwVRMYO3t5Yr',
      accessed: { 'date-parts': [ [ 2026, 10, 10 ] ] },
      custom: {
        lecturer: [ { given: 'Grant', family: 'Sanderson' } ],
        'number-of-episodes': 12,
        duration: 'PT3H11M6S',
        free_material: [
          {
            link: 'https://www.bilibili.com/video/BV1qW411N7FU/',
            display_text: 'Bilibili',
            // note: '集数、章节编排和时长与 YouTube 合集不同。',
            issued: { 'date-parts': [ [ 2018, 6, 3 ] ] },
            accessed: { 'date-parts': [ [ 2026, 10, 10 ] ] },
          },
          {
            link: 'https://www.3blue1brown.com/lessons/essence-of-calculus/',
            display_text: '3Blue1Brown',
            // note: '官方英文图文版，从第一章开始。',
            accessed: { 'date-parts': [ [ 2026, 10, 10 ] ] },
          },
        ],
      } satisfies CSL.Custom,
    } satisfies types_data.Video,
  },
] satisfies types_data.Entry[]
