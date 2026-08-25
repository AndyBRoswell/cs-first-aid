import * as catalog from '@cs-first-aid/bibkit/catalog'
import * as types_data from '@cs-first-aid/bibkit/types/data'
import * as CSL from '@cs-first-aid/bibkit/CSL'
import * as util from '@cs-first-aid/util'

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
      ISBN: '9787301053669' as CSL.ISBN,
      "collection-title": '高等教育精品教材',
      language: 'zh-CN',
      custom: {
        "collection-title": [ '高等院校计算机专业及专业基础课系列教材', ],
      } satisfies CSL.Custom,
    } satisfies types_data.Material,
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
      ISBN: '9787301098011' as CSL.ISBN,
      language: 'zh-CN',
      custom: {
        "collection-title": [ '高等院校计算机专业及专业基础课系列教材', ],
      } satisfies CSL.Custom,
    } satisfies types_data.Material,
  },
] satisfies types_data.Entry[]

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
      } satisfies CSL.Custom,
    } satisfies types_data.Video,
  },
]

export const entries = [ ...books, ...open_courses ] satisfies types_data.Entry[]

export function resolveRelations(): void {
  const material: types_data.Material = open_courses[0]!.material
  material.custom!.companion = catalog.filter(
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
}
