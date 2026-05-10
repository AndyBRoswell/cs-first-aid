import * as catalog from './catalog.ts'
import * as Data_Type from '@/types/data.ts'
import * as CSL_Data from '@/types/CSL_data.ts'

const items = [
  {
    id: [
      '程艺 数分1',
      { unordered_author: [ '程艺', '陈卿', '李平' ], title: '数学分析讲义（第一册）' },
      { unordered_author: [ '程艺', '陈卿', '李平' ], title: '数学分析讲义（第一册）', date: 2019 },
    ],
    material: {
      id: '程艺 数分1',
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
      { unordered_author: [ '程艺', '陈卿', '李平' ], title: '数学分析讲义（第二册）' },
      { unordered_author: [ '程艺', '陈卿', '李平' ], title: '数学分析讲义（第二册）', date: 2020 },
    ],
    material: {
      id: '程艺 数分2',
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
    id: [
      '程艺 数分3',
      { unordered_author: [ '程艺', '陈卿', '李平', '许斌' ], title: '数学分析讲义（第三册）' },
      { unordered_author: [ '程艺', '陈卿', '李平', '许斌' ], title: '数学分析讲义（第三册）', date: 2020 },
    ],
    material: {
      id: '程艺 数分3',
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
  {
    id: [
      '程艺 数分B1 公开课',
      { unordered_author: [ '程艺' ], title: '数学分析', part: 'B1', type: '公开课', },
    ],
    material: {
      type: 'motion_picture',
      id: '程艺 数分B1 公开课',
      author: [ { literal: '中国科大少年班学院', } ],
      title: '高等数学-微积分 《数学分析B1》【中科大少年班精品课】 程艺教授（104讲）',
      "event-place": '中国科学技术大学少年班学院',
      issued: { "date-parts": [ [ 2020, 11, 10 ] ] },
      language: 'zh-CN',
      URL: 'https://www.bilibili.com/video/BV1Lv411r7wa',
      accessed: { 'date-parts': [ [ 2026, 5, 3 ] ] },
      custom: {
        lecturer: [ { family: '程', given: '艺' } ],
        companion: [ '程艺 数分1' ],
      }
    } satisfies Data_Type.Video,
  },
  {
    id: [
      '程艺 数分B2 公开课',
      { unordered_author: [ '程艺' ], title: '数学分析', part: 'B2', type: '公开课', },
    ],
    material: {
      type: 'motion_picture',
      id: '程艺 数分B2 公开课',
      author: [ { literal: '中国科大少年班学院', } ],
      title: '高等数学-微积分 《数学分析B2》 【中科大少年班精品课】 程艺教授 （94讲）',
      "event-place": '中国科学技术大学少年班学院',
      issued: { "date-parts": [ [ 2021, 4, 19 ] ] },
      language: 'zh-CN',
      URL: 'https://www.bilibili.com/video/BV1HV411J7sH',
      accessed: { 'date-parts': [ [ 2026, 5, 3 ] ] },
      custom: {
        lecturer: [ { family: '程', given: '艺' } ],
        companion: [ '程艺 数分2' ],
      }
    } satisfies Data_Type.Video,
  },
] satisfies Data_Type.Entry[]

catalog.add_items(items)