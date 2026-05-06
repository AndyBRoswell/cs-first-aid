import * as catalog from './catalog.ts'
import * as Data_Type from '@/types/data.ts'
import * as CSL_Data from '@/types/CSL_data.ts'

const items = [
  {
    id: [
      '屈婉玲 离散数学教程',
      '耿素云 屈婉玲 王捍贫 离散数学教程',
      { unordered_author: [ '耿素云', '屈婉玲', '王捍贫' ], title: '离散数学教程', date: 2002 },
    ],
    material: {
      id: '耿素云 屈婉玲 王捍贫 离散数学教程',
      type: 'book',
      author: [ { family: '耿', given: '素云' }, { family: '屈', given: '婉玲' }, { family: '王', given: '捍贫' }, ],
      title: '离散数学教程',
      editor: [ { family: '王', given: '华' }, ],
      issued: { 'date-parts': [ [ 2002, 6 ] ] },
      publisher: '北京大学出版社',
      "publisher-place": '北京',
      ISBN: '9787301053669' as CSL_Data.ISBN,
      "collection-title": '高等教育精品教材',
      language: 'zh-CN',
      custom: {
        "collection-title": [ '高等院校计算机专业及专业基础课系列教材', ],
      } satisfies CSL_Data.Custom,
    } satisfies Data_Type.Material,
  },
  {
    id: [
      '北京大学 离散数学 公开课',
      '刘田 屈婉玲 王捍贫 离散数学 公开课',
    ],
    material: {
      type: 'motion_picture',
      id: '刘田 屈婉玲 王捍贫 离散数学 公开课',
      title: '离散数学（全）-北京大学',
      "event-place": '北京大学',
      issued: { 'date-parts': [ [ 2018, 5, 24 ] ], },
      accessed: { 'date-parts': [ [ 2026, 5, 7 ] ], },
      URL: 'https://www.bilibili.com/video/BV1BW411n7gw',
      language: 'zh-CN',
      custom: {
        lecturer: [ { family: '刘', given: '田' }, { family: '屈', given: '婉玲' }, { family: '王', given: '捍贫' }, ],
        companion: [
          '耿素云 屈婉玲 王捍贫 离散数学教程',
        ]
      } satisfies CSL_Data.Custom,
    } satisfies Data_Type.Material,
  },
  {
    id: [
      '屈婉玲 离散数学习题解析',
      '屈婉玲 耿素云 王捍贫 刘田 离散数学习题解析',
      { unordered_author: [ '屈婉玲', '耿素云', '王捍贫', '刘田' ], title: '离散数学习题解析', date: 2008 },
    ],
    material: {
      id: '屈婉玲 耿素云 王捍贫 刘田 离散数学习题解析',
      type: 'book',
      author: [ { family: '屈', given: '婉玲' }, { family: '耿', given: '素云' }, { family: '王', given: '捍贫' }, { family: '刘', given: '田' }, ],
      title: '离散数学习题解析',
      editor: [ { family: '沈', given: '承凤' } ],
      publisher: '北京大学出版社',
      "publisher-place": '北京',
      issued: { 'date-parts': [ [ 2008, 1 ] ] },
      ISBN: '9787301098011' as CSL_Data.ISBN,
      language: 'zh-CN',
      custom: {
        "collection-title": [ '高等院校计算机专业及专业基础课系列教材', ],
      } satisfies CSL_Data.Custom,
    } satisfies Data_Type.Material,
  },
] satisfies Data_Type.Entry[]

catalog.add_items(items)