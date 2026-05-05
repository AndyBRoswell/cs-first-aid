import * as catalog from './catalog.ts'
import * as Data_Type from '@/types/data.ts'
import * as CSL_Data from '@/types/CSL_data.ts'

const items = [
  {
    id: [
      "陈纪修 数分2版上",
      "陈纪修 数分 2004上",
      "陈纪修 数分上 2004",
      { unordered_author: [ "陈纪修", "於崇华", "金路" ], title: "数学分析", edition: 2, volume: 1, },
      { unordered_author: [ "陈纪修", "於崇华", "金路" ], title: "数学分析", date: 2004, volume: 1, },
      { unordered_author: [ "陈纪修", "於崇华", "金路" ], title: "数学分析 第二版", volume: 1 },
      { unordered_author: [ "陈纪修", "於崇华", "金路" ], title: "数学分析 第二版 上册", },
    ],
    material: {
      id: "陈纪修 数分2版上",
      type: "book",
      title: "数学分析",
      author: [ { literal: "陈纪修" }, { literal: "於崇华" }, { literal: "金路" } ],
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
      "陈纪修 数分2版下",
      "陈纪修 数分 2004下",
      "陈纪修 数分下 2004",
      { unordered_author: [ "陈纪修", "於崇华", "金路" ], title: "数学分析", edition: 2, volume: 2, },
      { unordered_author: [ "陈纪修", "於崇华", "金路" ], title: "数学分析", date: 2004, volume: 2, },
      { unordered_author: [ "陈纪修", "於崇华", "金路" ], title: "数学分析 第二版", volume: 2, },
      { unordered_author: [ "陈纪修", "於崇华", "金路" ], title: "数学分析 第二版 下册", },
    ],
    material: {
      id: "陈纪修 数分2版下",
      type: "book",
      title: "数学分析",
      author: [ { literal: "陈纪修" }, { literal: "於崇华" }, { literal: "金路" } ],
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
    id: [
      '陈纪修 数分 公开课',
      '陈纪修 数分 2008 公开课',
      '陈纪修 数分 公开课 2008',
      { unordered_author: [ '陈纪修' ], title: '数学分析', type: '公开课', },
      { unordered_author: [ '陈纪修' ], title: '数学分析', date: 2008, type: '公开课', }
    ],
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
        companion: [
          "陈纪修 数分 2004上",
          "陈纪修 数分 2004下",
        ],
        suggested_playback_speed: [ 1.5, 2, ],
      }
    } satisfies Data_Type.Video,
  },
  {
    id: [
      "陈纪修 数分上",
      "陈纪修 数分3版上",
      "陈纪修 数分 2019上",
      "陈纪修 数分上 2019",
      { unordered_author: [ "陈纪修", "於崇华", "金路" ], title: "数学分析", edition: 3, volume: 1, },
      { unordered_author: [ "陈纪修", "於崇华", "金路" ], title: "数学分析", date: 2019, volume: 1, },
      { unordered_author: [ "陈纪修", "於崇华", "金路" ], title: "数学分析 第三版", volume: 1, },
      { unordered_author: [ "陈纪修", "於崇华", "金路" ], title: "数学分析 第三版 上册", },
    ],
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
    id: [
      "陈纪修 数分下",
      "陈纪修 数分3版下",
      "陈纪修 数分 2019下",
      "陈纪修 数分下 2019",
      { unordered_author: [ "陈纪修", "於崇华", "金路" ], title: "数学分析", edition: 3, volume: 2, },
      { unordered_author: [ "陈纪修", "於崇华", "金路" ], title: "数学分析", date: 2019, volume: 2, },
      { unordered_author: [ "陈纪修", "於崇华", "金路" ], title: "数学分析 第三版", volume: 2, },
      { unordered_author: [ "陈纪修", "於崇华", "金路" ], title: "数学分析 第三版 下册", },
    ],
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

catalog.add_items(items)