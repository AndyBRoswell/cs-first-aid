import * as types_data from '@cs-first-aid/bibkit/types/data'
import * as CSL from '@cs-first-aid/bibkit/CSL'

export const entries = [
  {
    id: [],
    material: {
      type: 'motion_picture',
      title: 'Essence of Linear Algebra',
      author: [ { given: 'Grant', family: 'Sanderson' } ],
      publisher: '3Blue1Brown',
      issued: { 'date-parts': [ [ 2016, 8, 6 ] ] },
      language: 'en',
      medium: 'Online video',
      genre: 'Educational video series',
      // abstract: '通过几何与动画解释线性代数的核心概念：向量、线性组合、张成空间与基、矩阵与线性变换、矩阵乘法、行列式、逆矩阵、列空间与零空间、非方阵、点积与对偶、叉积、克拉默法则、换基、特征值与特征向量，以及抽象向量空间。',
      // note: '16 集，合计 3 小时 00 分 53 秒；按 2026-10-10 官方 YouTube 播放列表的逐集时长统计，包含补充篇，不另计预告片。',
      URL: 'https://www.youtube.com/playlist?list=PLZHQObOWTQDPD3MizzM2xVFitgF8hE_ab',
      accessed: { 'date-parts': [[2026, 10, 10]] },
      custom: {
        lecturer: [ { given: 'Grant', family: 'Sanderson' } ],
        'number-of-episodes': 16,
        duration: '3h0m53s',
        free_material: [
          {
            link: 'https://www.bilibili.com/video/av6731067/',
            display_text: 'Bilibili',
            // note: '集数、章节编排和时长与 YouTube 合集不同。',
            issued: { 'date-parts': [ [ 2016, 10, 18 ] ] },
            accessed: { 'date-parts': [ [ 2026, 10, 10 ] ] },
          },
          {
            link: 'https://www.3blue1brown.com/lessons/vectors/',
            display_text: '3Blue1Brown',
            // note: '官方英文图文版，从第一章开始。',
            accessed: { 'date-parts': [ [ 2026, 10, 10 ] ] },
          },
        ],
      } satisfies CSL.Custom,
    } satisfies types_data.Video,
  },
] satisfies types_data.Entry[]
