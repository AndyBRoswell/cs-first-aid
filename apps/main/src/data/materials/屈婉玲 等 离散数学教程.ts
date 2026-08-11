import * as catalog from '../../../../../packages/bibkit/src/catalog.ts'
import * as Data_Type from '../../../../../packages/bibkit/src/types/data.ts'
import * as CSL_Data from '../../../../../packages/bibkit/src/CSL_data.ts'
import * as util from '../../../../../packages/common/util.ts'

const books = [
  {
    id: [],
    material: {
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
    id: [],
    material: {
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

catalog.add_items(books)

const open_courses = [
  {
    id: [],
    material: {
      type: 'motion_picture',
      title: '离散数学（全）-北京大学',
      "event-place": '北京大学',
      issued: { 'date-parts': [ [ 2018, 5, 24 ] ], },
      accessed: { 'date-parts': [ [ 2026, 5, 7 ] ], },
      URL: 'https://www.bilibili.com/video/BV1BW411n7gw',
      language: 'zh-CN',
      custom: {
        lecturer: [ { family: '刘', given: '田' }, { family: '屈', given: '婉玲' }, { family: '王', given: '捍贫' }, ],
        companion: catalog.filter(
          m =>
            util.ieq(m.title!, '离散数学教程')
            &&
            util.ieq(m.publisher!, '北京大学出版社')
            &&
            'issued' in m
            &&
            'date-parts' in m.issued
            &&
            m.issued['date-parts'][0][0] === 2002
          , { count: 1 }
        )
      } satisfies CSL_Data.Custom,
    } satisfies Data_Type.Video,
  },
]

catalog.add_items(open_courses)