import * as catalog from './catalog.ts'
import * as Data_Type from '@/types/data.ts'
import * as CSL_Data from '@/types/CSL_data.ts'

const items = [
  {
    id: [],
    material: {
      type: "book",
      title: "数学分析习题全解指南",
      author: [
        { literal: "陈纪修" }, { literal: "徐惠平" }, { literal: '周渊' },
        { literal: '金路', }, { literal: '邱维元' }
      ],
      publisher: "高等教育出版社",
      "publisher-place": "北京",
      volume: 1,
      "number-of-volumes": 2,
      edition: 2,
      issued: { "date-parts": [ [ 2005, 7 ] ] },
      "number-of-pages": 262,
      ISBN: "9787040166187" as CSL_Data.ISBN,
      "collection-title": "数学类专业学习辅导丛书",
      language: "zh-CN",
      URL: "https://book.douban.com/subject/1704531/"
    },
  },
  {
    id: [],
    material: {
      type: "book",
      title: "数学分析习题全解指南",
      author: [
        { literal: "陈纪修" }, { literal: "徐惠平" }, { literal: '周渊' },
        { literal: '金路', }, { literal: '邱维元' }
      ],
      publisher: "高等教育出版社",
      "publisher-place": "北京",
      volume: 2,
      "number-of-volumes": 2,
      edition: 2,
      issued: { "date-parts": [ [ 2005 ] ] },
      ISBN: "9787040173857" as CSL_Data.ISBN,
      "collection-title": "数学类专业学习辅导丛书",
      language: "zh-CN",
      URL: "https://book.douban.com/subject/1721588/"
    },
  },
  {
    id: [],
    material: {
      type: 'book',
      title: '数学分析习题全解指南',
      author: [ { family: '陈', given: '纪修' }, { literal: '徐惠平' }, { literal: '周渊' }, { family: '金', given: '路' }, { literal: '邱维元' } ],
      ISBN: '978-7-04-053442-9' as CSL_Data.ISBN,
      publisher: '高等教育出版社',
      "publisher-place": '北京市',
      issued: { 'date-parts': [ [ 2020, 4, 27 ] ] },
      volume: 1,
      "number-of-volumes": 2,
      edition: 3,
      "number-of-pages": 244,
      language: 'zh-CN',
      URL: 'https://www.hep.com.cn/book/show/4decb70b-04fd-49c5-8364-3c61721aa8d9'
    },
  },
  {
    id: [],
    material: {
      type: 'book',
      title: '数学分析习题全解指南',
      author: [ { family: '陈', given: '纪修' }, { literal: '徐惠平' }, { literal: '周渊' }, { family: '金', given: '路' }, { literal: '邱维元' } ],
      ISBN: '978-7-04-053911-0' as CSL_Data.ISBN,
      publisher: '高等教育出版社',
      "publisher-place": '北京市',
      issued: { 'date-parts': [ [ 2020, 6, 17 ] ] },
      volume: 2,
      "number-of-volumes": 2,
      edition: 3,
      "number-of-pages": 260,
      language: 'zh-CN',
      URL: 'https://www.hep.com.cn/book/show/1a6e300d-e88f-4fbc-9948-70086231c265'
    },
  },
] satisfies Data_Type.Entry[]

catalog.add_items(items)