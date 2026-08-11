import * as catalog from './catalog.ts'
import * as Data_Type from '@/types/data.ts'
import * as CSL_Data from '@/types/CSL_data.ts'
import * as _ from '@/libraries/lodash-es.ts'
import * as util from '@/util.ts'

const books = [
  {
    id: [],
    material: {
      type: 'book',
      language: 'zh-CN',
      title: '线性代数与解析几何',
      author: [ { family: '陈', given: '发来' }, { family: '陈', given: '效群' }, { family: '李', given: '思敏' }, { family: '王', given: '新茂' } ],
      publisher: '高等教育出版社',
      issued: { 'date-parts': [ [ 2015, 8, 7 ] ] },
      edition: 2,
      'number-of-pages': 247,
      ISBN: '9787040433128' as CSL_Data.ISBN,
      URL: 'https://team.ustc.edu.cn/Chen_Reaserch_Lab/en/zzcg/1025606/content/3661.htm',
      accessed: { 'date-parts': [ [ 2026, 5, 6 ] ] },
      custom: {
        URL: [
          {
            link: 'https://book.douban.com/subject/26764522/',
            display_text: '豆瓣读书',
          },
        ],
      } satisfies CSL_Data.Custom,
    },
  },
] satisfies Data_Type.Entry[]

catalog.add_items(books)

const open_course = [
  {
    id: [],
    material: {
      type: 'motion_picture',
      title: '高等数学《线性代数B1》 【中科大少年班精品课】 陈发来教授（51讲）',
      "event-date": { "date-parts": [ [ 2022, 2, 22 ] ] },
      author: [ { literal: '中国科大少年班学院' } ],
      publisher: 'Bilibili',
      language: 'zh-CN',
      URL: 'https://www.bilibili.com/video/BV1WF411b7EW',
      issued: { "date-parts": [ [ 2022, 3, 8 ] ] },
      accessed: { 'date-parts': [ [ 2026, 5, 6 ], ], },
      custom: {
        lecturer: [ { family: '陈', given: '发来' } ],
        institution: [ '中国科学技术大学' ],
        companion: catalog.filter(
          m =>
            util.ieq(m.title!, '线性代数与解析几何')
            &&
            m.author?.some(a => _.isEqual(a, { family: '陈', given: '发来' }))
            &&
            m.edition === 2
          , { count: 1 }
        )
      } satisfies CSL_Data.Custom,
    } satisfies Data_Type.Video,
  },
]

catalog.add_items(open_course)