import * as catalog from './catalog.ts'
import * as Data_Type from '@/types/data.ts'
import * as CSL_Data from '@/types/CSL_data.ts'

const items = [
  {
    id: [
      '陈发来, 王新茂, 陈效群, 李思敏, 线性代数与解析几何',
      '陈发来, 王新茂, 陈效群, 李思敏, 线性代数与解析几何, 第2版',
      '陈发来, 王新茂, 陈效群, 李思敏, 线性代数与解析几何, 2015',
      { unordered_author: [ '陈发来', '陈效群', '李思敏', '王新茂' ], title: '线性代数与解析几何' },
      { unordered_author: [ '陈发来', '陈效群', '李思敏', '王新茂' ], title: '线性代数与解析几何', edition: 2 },
      { unordered_author: [ '陈发来', '陈效群', '李思敏', '王新茂' ], title: '线性代数与解析几何', date: 2015 },
    ],
    material: {
      type: 'book',
      id: '陈发来, 王新茂, 陈效群, 李思敏, 线性代数与解析几何, 第2版',
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
  {
    id: [
      '陈发来 线性代数B1 2021级',
      '陈发来 线性代数B1 2022',
      '陈发来 线性代数B1 公开课',
      '陈发来 线性代数B1 公开课 2021级',
      '陈发来 线性代数B1 公开课 2022',
      { unordered_author: '陈发来', title: '高等数学《线性代数B1》 【中科大少年班精品课】 陈发来教授（51讲）', date: 2022 },
    ],
    material: {
      type: 'motion_picture',
      id: '陈发来 线性代数B1 2021',
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
        companion: [
          { unordered_author: [ '陈发来', '陈效群', '李思敏', '王新茂' ], title: '线性代数与解析几何', edition: 2 }
        ],
      } satisfies CSL_Data.Custom,
    },
  },
] satisfies Data_Type.Entry[]

catalog.add_items(items)