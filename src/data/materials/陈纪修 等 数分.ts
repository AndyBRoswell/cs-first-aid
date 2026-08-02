import * as catalog from './catalog.ts'
import * as Data_Type from '@/types/data.ts'
import * as CSL_Data from '@/types/CSL_data.ts'
import * as _ from '@/libraries/lodash-es.ts'
import * as util from '@/util.ts'

const books = [
  {
    id: [
      "陈纪修 数分 2004上",
    ],
    material: {
      id: "陈纪修 数分2版上",
      type: "book",
      title: "数学分析",
      author: [ { family: '陈', given: '纪修' }, { family: '於', given: '崇华' }, { family: '金', given: '路' } ],
      publisher: "高等教育出版社",
      "publisher-place": "北京",
      volume: 1,
      "number-of-volumes": 2,
      edition: 2,
      issued: { "date-parts": [ [ 2004, 6, 1 ] ] },
      "number-of-pages": 419,
      ISBN: "9787040138528" as CSL_Data.ISBN,
      "collection-title": "面向21世纪课程教材（数学类）",
      language: "zh-CN",
      URL: "https://book.douban.com/subject/1231379/"
    },
  },
  {
    id: [
      "陈纪修 数分 2004下",
    ],
    material: {
      id: "陈纪修 数分2版下",
      type: "book",
      title: "数学分析",
      author: [ { family: '陈', given: '纪修' }, { family: '於', given: '崇华' }, { family: '金', given: '路' } ],
      publisher: "高等教育出版社",
      "publisher-place": "北京",
      volume: 2,
      "number-of-volumes": 2,
      edition: 2,
      issued: { "date-parts": [ [ 2004, 10, 1 ] ] },
      ISBN: "9787040155495" as CSL_Data.ISBN,
      "collection-title": "面向21世纪课程教材（数学类）",
      language: "zh-CN",
      URL: "https://book.douban.com/subject/1239801/"
    },
  },
  {
    id: [],
    material: {
      id: '陈纪修 数分上',
      type: 'book',
      title: '数学分析',
      author: [ { family: '陈', given: '纪修' }, { family: '於', given: '崇华' }, { family: '金', given: '路' } ],
      volume: 1,
      "number-of-volumes": 2,
      edition: 3,
      ISBN: '978-7-04-051571-8' as CSL_Data.ISBN,
      publisher: '高等教育出版社',
      "publisher-place": '北京市',
      issued: { 'date-parts': [ [ 2019, 4, 30 ] ] },
      "collection-title": '高等教育百门课程精品项目',
      language: 'zh-CN',
      URL: 'https://www.hep.com.cn/book/show/0a11ff88-10f2-4a3a-8780-c45c4cbe2187'
    },
  },
  {
    id: [],
    material: {
      id: '陈纪修 数分下',
      type: 'book',
      title: '数学分析',
      author: [ { family: '陈', given: '纪修' }, { family: '於', given: '崇华' }, { family: '金', given: '路' } ],
      volume: 2,
      "number-of-volumes": 2,
      edition: 3,
      ISBN: '978-7-04-051630-2' as CSL_Data.ISBN,
      publisher: '高等教育出版社',
      "publisher-place": '北京市',
      issued: { 'date-parts': [ [ 2019, 5, 30 ] ] },
      "collection-title": '高等教育百门课程精品项目',
      language: 'zh-CN',
      URL: 'https://www.hep.com.cn/book/show/c02b721f-7269-462e-9af2-8e5d12af173e'
    },
  },
] satisfies Data_Type.Entry[]

catalog.add_items(books)

const open_courses = [
  {
    id: [],
    material: {
      type: 'motion_picture',
      id: '陈纪修 数分 2008 公开课',
      title: '数学分析 复旦 陈纪修',
      issued: { "date-parts": [ [ 2017, 1, 16 ] ] },
      "event-date": { "date-parts": [ [ 2008, 9, 1 ] ] },
      "event-place": '复旦大学',
      language: 'zh-CN',
      URL: 'https://www.bilibili.com/video/BV12s411h7v4',
      accessed: { "date-parts": [ [ 2026, 5, 3 ] ] },
      custom: {
        lecturer: [ { family: '陈', given: '纪修' } ],
        companion: catalog.filter(
          m =>
            util.ieq(m.title!, '数学分析')
            &&
            m.author?.some(a => _.isEqual(a, { family: '陈', given: '纪修' }))
            &&
            m.edition === 2
          , { count: 2 }
        ),
        suggested_playback_speed: [ 1.5, 2, ],
      } satisfies CSL_Data.Custom
    } satisfies Data_Type.Video,
  },
]

catalog.add_items(open_courses)