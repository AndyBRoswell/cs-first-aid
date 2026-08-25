import * as catalog from '@cs-first-aid/bibkit/catalog'
import * as types_data from '@cs-first-aid/bibkit/types/data'
import * as CSL from '@cs-first-aid/bibkit/CSL'
import * as util from '@cs-first-aid/util'
import * as _ from '@cs-first-aid/util/lib/lodash-es'

const books = [
  {
    id: [],
    material: {
      type: 'book',
      title: '高等代数学',
      author: [ { family: '谢', given: '启鸿' }, { family: '姚', given: '慕生' }, { family: '吴', given: '泉水' } ],
      edition: 4,
      issued: { 'date-parts': [ [ 2022, 10 ] ] },
      publisher: '复旦大学出版社',
      "number-of-pages": 474,
      ISBN: '978-7-309-16336-0' as CSL.ISBN,
      language: 'zh-CN',
      "collection-title": '普通高等教育“十二五”国家级规划教材',
      URL: 'https://www.fudanpress.com/505429541603282944/detail/book?bookId=387892&bookIdentifier=352220686345d7&company_id=569&company_identifier=2959846655452a&navGuid=505756482248159232',
      accessed: { 'date-parts': [ [ 2026, 5, 11 ] ] },
    },
  },
  {
    id: [],
    material: {
      type: 'book',
      title: '高等代数',
      author: [ { family: '谢', given: '启鸿' }, { family: '姚', given: '慕生' } ],
      edition: 4,
      issued: { 'date-parts': [ [ 2022, 10 ] ] },
      publisher: '复旦大学出版社',
      "number-of-pages": 627,
      ISBN: '978-7-309-16352-0' as CSL.ISBN,
      language: 'zh-CN',
      URL: 'https://www.fudanpress.com/505429541603282944/detail/book?bookId=387893&bookIdentifier=550759686345d8&company_id=569&company_identifier=2959846655452a&navGuid=505756482248159232',
      accessed: { 'date-parts': [ [ 2026, 5, 11 ] ] },
    },
  },
  {
    id: [],
    material: {
      type: 'book',
      title: '高等代数学',
      author: [ { family: '姚', given: '慕生' }, { family: '吴', given: '泉水' }, { family: '谢', given: '启鸿' } ],
      edition: 3,
      issued: { 'date-parts': [ [ 2014, 9 ] ] },
      publisher: '复旦大学出版社',
      ISBN: '978-7-309-10989-4' as CSL.ISBN,
      "collection-title": '普通高等教育“十二五”国家级规划教材',
      language: 'zh-CN',
      URL: 'https://www.fudanpress.com/505429541603282944/detail/book?bookId=382947&bookIdentifier=7829146863320f&company_id=569&company_identifier=2959846655452a&navGuid=505756482248159232',
      accessed: { 'date-parts': [ [ 2026, 5, 11 ] ] },
    },
  },
  {
    id: [],
    material: {
      type: 'book',
      title: '高等代数',
      author: [ { family: '姚', given: '慕生' }, { family: '谢', given: '启鸿' } ],
      edition: 3,
      issued: { 'date-parts': [ [ 2015, 8 ] ] },
      publisher: '复旦大学出版社',
      ISBN: '978-7-309-11776-9' as CSL.ISBN,
      language: 'zh-CN',
      URL: 'https://www.fudanpress.com/505429541603282944/detail/book?bookId=383616&bookIdentifier=7410686863349d&company_id=569&company_identifier=2959846655452a&navGuid=505756482248159232',
      accessed: { 'date-parts': [ [ 2026, 5, 11 ] ] },
    },
  },
] satisfies types_data.Entry[]

const open_courses = [
  {
    id: [],
    material: {
      type: 'motion_picture',
      title: '【数学专业课】高等代数学-复旦大学-谢启鸿-高清',
      author: [ { family: '谢', given: '启鸿' } ],
      publisher: 'bilibili',
      "event-place": '复旦大学',
      issued: { 'date-parts': [ [ 2019, 12, 14 ] ] },
      language: 'zh-CN',
      URL: 'https://www.bilibili.com/video/BV1mJ411r7ZB/',
      accessed: { 'date-parts': [ [ 2026, 5, 11 ] ] },
      custom: {
        lecturer: [ { family: '谢', given: '启鸿' } ],
      } satisfies CSL.Custom,
    } satisfies types_data.Video,
  },
]

export const entries = [ ...books, ...open_courses ] satisfies types_data.Entry[]

export function resolveRelations(): void {
  const material: types_data.Material = open_courses[0]!.material
  material.custom!.companion = catalog.filter(
    m =>
      util.ieq(m.title!, '高等代数学')
      &&
      m.author?.some(a => _.isEqual(a, { family: '谢', given: '启鸿' }))
      &&
      m.edition === 3
    , { count: 1 }
  )
}
