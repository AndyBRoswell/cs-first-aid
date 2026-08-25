import * as catalog from '@cs-first-aid/bibkit/catalog'
import * as CSL from '@cs-first-aid/bibkit/CSL'
import * as types_data from '@cs-first-aid/bibkit/types/data'
import * as _ from '@cs-first-aid/util/lib/lodash-es'
import * as util from '@cs-first-aid/util'

const books = [
  {
    id: [],
    material: {
      type: 'book',
      author: [ { family: '常', given: '庚哲' }, { family: '史', given: '济怀' } ],
      title: '数学分析教程',
      volume: 1,
      "number-of-volumes": 2,
      edition: 2,
      publisher: '高等教育出版社',
      "publisher-place": '北京市',
      issued: { "date-parts": [ [ 2003, 5, 15 ] ], },
      "number-of-pages": 493,
      ISBN: '978-7-04-011920-6',
      "collection-title": '普通高等教育“十五”国家级规划教材',
      language: 'zh-CN',
      URL: 'https://www.hep.com.cn/book/show/2b102125-85ba-4748-9e7f-5942069d19ef',
      accessed: { "date-parts": [ [ 2026, 4, 9 ] ], },
    },
  },
  {
    id: [],
    material: {
      type: 'book',
      author: [ { family: '常', given: '庚哲' }, { family: '史', given: '济怀' } ],
      title: '数学分析教程',
      volume: 2,
      "number-of-volumes": 2,
      edition: 2,
      publisher: '高等教育出版社',
      "publisher-place": '北京市',
      issued: { "date-parts": [ [ 2003, 5, 15 ] ], },
      "number-of-pages": 402,
      ISBN: '978-7-04-011921-3',
      "collection-title": '普通高等教育“十五”国家级规划教材',
      language: 'zh-CN',
      URL: 'https://www.hep.com.cn/book/show/957740b1-218e-45b7-847d-b0c3d0c711eb',
      accessed: { "date-parts": [ [ 2026, 4, 9 ] ], },
    },
  },
  {
    id: [],
    material: {
      type: 'book',
      author: [ { family: '常', given: '庚哲' }, { family: '史', given: '济怀' } ],
      title: '数学分析教程',
      volume: 1,
      "number-of-volumes": 2,
      edition: 4,
      publisher: '中国科学技术大学出版社',
      "publisher-place": "安徽省 合肥市",
      issued: { "date-parts": [ [ 2026, 1, ] ], },
      ISBN: '978-7-312-06521-7',
      URL: 'https://press.ustc.edu.cn/2026/0407/c29280a725832/page.htm',
      accessed: { "date-parts": [ [ 2026, 4, 9 ] ], },
    },
  },
  {
    id: [],
    material: {
      type: 'book',
      author: [ { family: '常', given: '庚哲' }, { family: '史', given: '济怀' } ],
      title: '数学分析教程',
      volume: 2,
      "number-of-volumes": 2,
      edition: 4,
      publisher: '中国科学技术大学出版社',
      "publisher-place": "安徽省 合肥市",
      issued: { "date-parts": [ [ 2026, 1, ] ], },
      ISBN: '978-7-312-06514-9',
      URL: 'https://press.ustc.edu.cn/2026/0407/c29280a725832/page.htm',
      accessed: { "date-parts": [ [ 2026, 4, 9 ] ], },
    },
  },
] satisfies types_data.Entry[]

const open_courses = [
  {
    id: [],
    material: {
      type: 'motion_picture',
      title: '【数学分析】中科大-史济怀',
      "event-date": { "date-parts": [ [ 2003, 9, ] ], },
      "event-place": '中国科学技术大学少年班学院',
      issued: { "date-parts": [ [ 2018, 1, 28 ] ], },
      language: 'zh-CN',
      URL: 'https://www.bilibili.com/video/BV1ZW411e7PF',
      accessed: { "date-parts": [ [ 2026, 5, 3 ] ], },
      custom: {
        lecturer: [ { family: '史', given: '济怀' } ],
        suggested_playback_speed: [ 1.5, 2, ],
      } satisfies CSL.Custom
    } satisfies types_data.Video
  },
]

export const entries = [ ...books, ...open_courses ] satisfies types_data.Entry[]

export function resolveRelations(): void {
  const material: types_data.Material = open_courses[0]!.material
  material.custom!.companion = catalog.filter(
    m =>
      util.ieq(m.title!, '数学分析教程')
      &&
      m.author?.some(a => _.isEqual(a, { family: '史', given: '济怀' }))
      &&
      'issued' in m
      &&
      'date-parts' in m.issued
      &&
      m.issued['date-parts'][0][0] === 2003
    , { count: 2 }
  )
}
