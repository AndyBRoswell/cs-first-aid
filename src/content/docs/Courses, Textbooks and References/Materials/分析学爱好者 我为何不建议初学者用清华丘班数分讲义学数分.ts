import * as catalog from './catalog.ts'
import * as base from '../base.ts'

const lecture = {
  type: 'motion_picture',
  id: '我为何不建议初学者用清华丘班数分讲义学数分',
  author: [ { literal: '分析学爱好者' } ],
  title: '我为何不建议初学者用清华丘班数分讲义学数分',
  issued: { "date-parts": [ [ 2025, 9, 15 ] ] },
  language: 'zh-CN',
  URL: 'https://www.bilibili.com/video/BV1dxpqzzEyi/',
  accessed: { "date-parts": [ [ 2026, 4, 9 ] ] },
} satisfies base.Course_Material

catalog.add([
  lecture.id,
], lecture)