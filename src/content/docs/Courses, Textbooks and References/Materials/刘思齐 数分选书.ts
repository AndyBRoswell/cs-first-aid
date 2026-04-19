import * as catalog from './catalog.ts'

const items = [
  {
    id: [
      '刘思齐 数分选书',
      '如何选择一本适合你的《数学分析》教科书？',
      '我真的不懂分析, 如何选择一本适合你的《数学分析》教科书？',
      '刘思齐, 如何选择一本适合你的《数学分析》教科书？',
      { unordered_author: '我真的不懂分析', title: '如何选择一本适合你的《数学分析》教科书？', },
      { unordered_author: '刘思齐', title: '如何选择一本适合你的《数学分析》教科书？', },
      { unordered_author: '我真的不懂分析', title: '如何选择一本适合你的《数学分析》教科书？', date: 2020, },
      { unordered_author: '刘思齐', title: '如何选择一本适合你的《数学分析》教科书？', date: 2020, },
    ],
    material: {
      type: 'motion_picture',
      id: '刘思齐 数分选书',
      author: [ { literal: '我真的不懂分析' } ],
      title: '如何选择一本适合你的《数学分析》教科书？',
      issued: { "date-parts": [ [ 2020, 9, 12 ] ] },
      language: 'zh-CN',
      URL: 'https://www.bilibili.com/video/BV1xp4y1e7Nh',
      accessed: { "date-parts": [ [ 2026, 4, 9 ] ] },
      note: 'https://zhuanlan.zhihu.com/p/563317174',
    }
  }
] satisfies catalog.Item[]

catalog.add_items(items)