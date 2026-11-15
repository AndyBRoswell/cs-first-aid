import * as types_data from '@cs-first-aid/bibkit/types/data'

export const entries = [
  {
    id: [],
    material: {
      type: 'webpage',
      author: [ { literal: '广州市招生考试委员会办公室' } ],
      title: '广东省2018年本科理科优先投档分数线上投档情况',
      language: 'zh-CN',
      publisher: '广州市招生考试委员会办公室',
      issued: { 'date-parts': [ [ 2018, 7, 16 ] ] },
      accessed: { 'date-parts': [ [ 2026, 11, 15 ] ] },
      URL: 'https://gzzk.gz.gov.cn/gkck/gkckxx/gkzx/content/post_5086841.html',
    } satisfies types_data.Material,
  },
] satisfies types_data.Entry[]
