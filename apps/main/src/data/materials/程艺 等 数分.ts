import * as catalog from './catalog.ts'
import * as Data_Type from '@/types/data.ts'
import * as CSL_Data from '@/types/CSL_data.ts'
import * as _ from '@/libraries/lodash-es.ts'
import * as util from '@/util.ts'

const books = [
  {
    id: [
      '程艺 数分1',
    ],
    material: {
      type: 'book',
      title: '数学分析讲义',
      author: [ { family: '程', given: '艺' }, { family: '陈', given: '卿' }, { family: '李', given: '平' } ],
      'collection-title': '中国科学技术大学数学丛书',
      publisher: '高等教育出版社',
      'publisher-place': '北京',
      issued: { 'date-parts': [ [ 2019, 3, 13 ] ] },
      ISBN: '978-7-04-051033-1' as CSL_Data.ISBN,
      volume: 1,
      "number-of-volumes": 3,
      language: 'zh-CN',
      URL: 'https://www.hep.com.cn/book/show/9cbdd043-61c7-4e03-a527-642ad8d94e3f'
    },
  },
  {
    id: [
      '程艺 数分2',
    ],
    material: {
      type: 'book',
      title: '数学分析讲义',
      author: [ { family: '程', given: '艺' }, { family: '陈', given: '卿' }, { family: '李', given: '平' } ],
      'collection-title': '中国科学技术大学数学丛书',
      publisher: '高等教育出版社',
      'publisher-place': '北京',
      issued: { 'date-parts': [ [ 2020, 1, 15 ] ] },
      ISBN: '978-7-04-053309-5' as CSL_Data.ISBN,
      volume: 2,
      "number-of-volumes": 3,
      language: 'zh-CN',
      URL: 'https://www.hep.com.cn/book/show/96840e55-1b0a-4b04-926e-860295ce0ce5'
    },
  },
  {
    id: [],
    material: {
      type: 'book',
      title: '数学分析讲义',
      author: [ { family: '程', given: '艺' }, { family: '陈', given: '卿' }, { family: '李', given: '平' }, { family: '许', given: '斌' } ],
      'collection-title': '中国科学技术大学数学丛书',
      publisher: '高等教育出版社',
      'publisher-place': '北京',
      issued: { 'date-parts': [ [ 2020, 8, 20 ] ] },
      ISBN: '978-7-04-054247-9' as CSL_Data.ISBN,
      volume: 3,
      "number-of-volumes": 3,
      language: 'zh-CN',
      URL: 'https://www.hep.com.cn/book/show/a5fc1e0f-5469-414a-a804-a577bdb8aa55'
    }
  },
] satisfies Data_Type.Entry[]

catalog.add_items(books)

const open_courses = [
  {
    id: [],
    material: {
      type: 'motion_picture',
      author: [ { literal: '中国科大少年班学院', } ],
      title: '高等数学-微积分 《数学分析B1》【中科大少年班精品课】 程艺教授（104讲）',
      "event-place": '中国科学技术大学少年班学院',
      issued: { "date-parts": [ [ 2020, 11, 10 ] ] },
      language: 'zh-CN',
      URL: 'https://www.bilibili.com/video/BV1Lv411r7wa',
      accessed: { 'date-parts': [ [ 2026, 5, 3 ] ] },
      custom: {
        lecturer: [ { family: '程', given: '艺' } ],
        companion: catalog.filter(
          m =>
            m.author?.some(a => _.isEqual(a, { family: '程', given: '艺' }))
            &&
            util.ieq(m.title!, '数学分析讲义')
            &&
            m.volume === 1
          , { count: 1 }
        ),
      }
    } satisfies Data_Type.Video,
  },
  {
    id: [],
    material: {
      type: 'motion_picture',
      author: [ { literal: '中国科大少年班学院', } ],
      title: '高等数学-微积分 《数学分析B2》 【中科大少年班精品课】 程艺教授 （94讲）',
      "event-place": '中国科学技术大学少年班学院',
      issued: { "date-parts": [ [ 2021, 4, 19 ] ] },
      language: 'zh-CN',
      URL: 'https://www.bilibili.com/video/BV1HV411J7sH',
      accessed: { 'date-parts': [ [ 2026, 5, 3 ] ] },
      custom: {
        lecturer: [ { family: '程', given: '艺' } ],
        companion: catalog.filter(
          m =>
            util.ieq(m.title!, '数学分析讲义')
            &&
            m.author?.some(a => _.isEqual(a, { family: '程', given: '艺' }))
            &&
            m.volume === 2
          , { count: 1 }
        ),
      }
    } satisfies Data_Type.Video,
  },
]

catalog.add_items(open_courses)