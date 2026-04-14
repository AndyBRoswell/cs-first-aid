import * as catalog from './catalog.ts'

const items = [
  {
    id: [
      '我为何不建议初学者用清华丘班数分讲义学数分',
      '分析学爱好者, 我为何不建议初学者用清华丘班数分讲义学数分',
      '王宇鹏, 我为何不建议初学者用清华丘班数分讲义学数分',
      { unordered_author: '分析学爱好者', title: '我为何不建议初学者用清华丘班数分讲义学数分', },
      { unordered_author: '王宇鹏', title: '我为何不建议初学者用清华丘班数分讲义学数分', },
      { unordered_author: '分析学爱好者', title: '我为何不建议初学者用清华丘班数分讲义学数分', date: 2025, },
      { unordered_author: '王宇鹏', title: '我为何不建议初学者用清华丘班数分讲义学数分', date: 2025, },
    ],
    material: {
      type: 'motion_picture',
      id: '我为何不建议初学者用清华丘班数分讲义学数分',
      author: [ { literal: '分析学爱好者' } ],
      title: '我为何不建议初学者用清华丘班数分讲义学数分',
      issued: { "date-parts": [ [ 2025, 9, 15 ] ] },
      language: 'zh-CN',
      URL: 'https://www.bilibili.com/video/BV1dxpqzzEyi/',
      accessed: { "date-parts": [ [ 2026, 4, 9 ] ] },
    }
  }
] satisfies catalog.pair[]

for (const item of items) { catalog.add(item.id, item.material) }