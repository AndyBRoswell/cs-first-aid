import * as catalog from '@cs-first-aid/bibkit/catalog'
import * as types_data from '@cs-first-aid/bibkit/types/data'
import * as CSL from '@cs-first-aid/bibkit/CSL'
import * as _ from '@cs-first-aid/util/lib/lodash-es'
import * as util from '@cs-first-aid/util'

const books = [
  {
    id: [],
    material: {
      type: 'book',
      author: [ { family: '丘', given: '维声' } ],
      issued: { 'date-parts': [ [ 2010, 5, 1 ] ] },
      title: '高等代数',
      'volume-title': '上册',
      edition: 1,
      volume: 1,
      "number-of-volumes": 2,
      publisher: '清华大学出版社',
      'publisher-place': '北京',
      ISBN: '9787302225188' as CSL.ISBN,
      language: 'zh-CN',
      URL: 'https://www.tup.com.cn/booksCenter/book_03258601.html',
      accessed: { 'date-parts': [ [ 2026, 5, 5 ] ] },
      custom: {
        subtitle: '大学高等代数课程创新教材',
        URL: [ 'https://www.wqbook.com/books/booksn/032586-01' ],
        free_material: {
          sample_chapter: [ 'https://www.tup.com.cn/upload/books/yz/032586-01.pdf' ]
        },
      } satisfies CSL.Custom,
    },
  },
  {
    id: [],
    material: {
      type: 'book',
      author: [ { family: '丘', given: '维声' } ],
      issued: { 'date-parts': [ [ 2010, 9, 1 ] ] },
      title: '高等代数',
      'volume-title': '下册',
      edition: 1,
      volume: 2,
      "number-of-volumes": 2,
      publisher: '清华大学出版社',
      'publisher-place': '北京',
      ISBN: '9787302237594' as CSL.ISBN,
      language: 'zh-CN',
      URL: 'https://www.tup.com.cn/booksCenter/book_03258702.html',
      accessed: { 'date-parts': [ [ 2026, 5, 5 ] ] },
      custom: {
        subtitle: '大学高等代数课程创新教材',
        URL: [ 'https://www.wqbook.com/books/booksn/032587-02' ],
        free_material: {
          sample_chapter: [ 'https://www.tup.com.cn/upload/books/yz/032587-02.pdf' ]
        },
      } satisfies CSL.Custom,
    },
  },
  {
    id: [],
    material: {
      type: 'book',
      author: [ { family: '丘', given: '维声' } ],
      issued: { 'date-parts': [ [ 2019, 6, 1 ] ] },
      title: '高等代数',
      'volume-title': '上册',
      edition: 2,
      volume: 1,
      "number-of-volumes": 2,
      publisher: '清华大学出版社',
      'publisher-place': '北京',
      ISBN: '9787302487630' as CSL.ISBN,
      language: 'zh-CN',
      URL: 'https://www.tup.com.cn/booksCenter/book_07292403.html',
      accessed: { 'date-parts': [ [ 2026, 5, 5 ] ] },
      custom: {
        subtitle: '大学高等代数课程创新教材',
        URL: [ 'https://www.wqbook.com/books/booksn/072924-03' ],
      } satisfies CSL.Custom,
    },
  },
  {
    id: [],
    material: {
      type: 'book',
      author: [ { family: '丘', given: '维声' } ],
      issued: { 'date-parts': [ [ 2019, 12, 1 ] ] },
      title: '高等代数',
      'volume-title': '下册',
      edition: 2,
      volume: 2,
      "number-of-volumes": 2,
      publisher: '清华大学出版社',
      'publisher-place': '北京',
      ISBN: '9787302495130' as CSL.ISBN,
      language: 'zh-CN',
      URL: 'https://www.tup.com.cn/booksCenter/book_07292503.html',
      accessed: { 'date-parts': [ [ 2026, 5, 5 ] ] },
      custom: {
        subtitle: '大学高等代数课程创新教材',
        URL: [ 'https://www.wqbook.com/books/booksn/072925-03' ],
      } satisfies CSL.Custom,
    },
  },
  {
    id: [],
    material: {
      type: 'book',
      author: [ { family: '丘', given: '维声' } ],
      issued: { 'date-parts': [ [ 2017, 12, 1 ] ] },
      title: '高等代数学习指导书',
      'volume-title': '上册',
      edition: 2,
      volume: 1,
      "number-of-volumes": 2,
      publisher: '清华大学出版社',
      'publisher-place': '北京',
      ISBN: '9787302483670' as CSL.ISBN,
      language: 'zh-CN',
      URL: 'https://www.tup.com.cn/booksCenter/book_05702703.html',
      accessed: { 'date-parts': [ [ 2026, 5, 5 ] ] },
      custom: {
        URL: [ 'https://www.wqbook.com/books/booksn/057027-03' ],
      } satisfies CSL.Custom,
    },
  },
  {
    id: [],
    material: {
      type: 'book',
      author: [ { family: '丘', given: '维声' } ],
      issued: { 'date-parts': [ [ 2016, 8, 1 ] ] },
      title: '高等代数学习指导书',
      'volume-title': '下册',
      edition: 2,
      volume: 2,
      "number-of-volumes": 2,
      publisher: '清华大学出版社',
      'publisher-place': '北京',
      ISBN: '9787302446040' as CSL.ISBN,
      language: 'zh-CN',
      URL: 'https://www.tup.com.cn/booksCenter/book_05702804.html',
      accessed: { 'date-parts': [ [ 2026, 5, 5 ] ] },
      custom: {
        URL: [ 'https://www.wqbook.com/books/booksn/057028-04' ],
        free_material: [ 'https://www.tup.com.cn/upload/books/yz/057028-04.pdf' ],
      } satisfies CSL.Custom,
    },
  },
] satisfies types_data.Entry[]

const open_courses = [
  {
    id: [],
    material: {
      type: 'motion_picture',
      title: '北大丘维声教授清华高等代数课程1080P高清修复版(全151集)',
      "event-place": '清华大学',
      "event-date": { "date-parts": [ [ 2011, ] ] },
      language: 'zh-CN',
      URL: 'https://www.bilibili.com/video/BV1jR4y1M78W',
      accessed: { 'date-parts': [ [ 2026, 5, 5 ] ] },
      custom: {
        institution: [ '清华大学' ],
        lecturer: [ { family: '丘', given: '维声' } ],
      } satisfies CSL.Custom,
    } satisfies types_data.Video,
  },
]

export const entries = [ ...books, ...open_courses ] satisfies types_data.Entry[]

export function resolveRelations(): void {
  const material: types_data.Material = open_courses[0]!.material
  material.custom!.companion = catalog.filter(
    m =>
      util.ieq(m.title!, '高等代数')
      &&
      m.author?.length === 1
      &&
      _.isEqual(m.author[0], { family: '丘', given: '维声' })
      &&
      m.edition === 1
    , { count: 2 }
  )
}
