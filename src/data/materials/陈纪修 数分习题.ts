import * as catalog from './catalog.ts'
import * as Data_Type from '@/types/data.ts'

const items = [
  {
    id: [
      '陈纪修 数分习题2版上',
      '陈纪修 数分习题 2005上',
      '陈纪修 数分习题上 2005',
      { unordered_author: [ '陈纪修', '徐惠平', '周渊', '金路', '邱维元' ], title: '数学分析习题全解指南 上册', },
      { unordered_author: [ '陈纪修', '徐惠平', '周渊', '金路', '邱维元' ], title: '数学分析习题全解指南 上册', edition: 2, },
      { unordered_author: [ '陈纪修', '徐惠平', '周渊', '金路', '邱维元' ], title: '数学分析习题全解指南 上册', date: 2005, },
    ],
    material: {
      id: "陈纪修 数分习题2版上",
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
      ISBN: "9787040166187",
      "collection-title": "数学类专业学习辅导丛书",
      language: "zh-CN",
      URL: "https://book.douban.com/subject/1704531/"
    },
  },
  {
    id: [
      '陈纪修 数分习题2版下',
      '陈纪修 数分习题 2005下',
      '陈纪修 数分习题下 2005',
      { unordered_author: [ '陈纪修', '徐惠平', '周渊', '金路', '邱维元' ], title: '数学分析习题全解指南 下册', },
      { unordered_author: [ '陈纪修', '徐惠平', '周渊', '金路', '邱维元' ], title: '数学分析习题全解指南 下册', edition: 2, },
      { unordered_author: [ '陈纪修', '徐惠平', '周渊', '金路', '邱维元' ], title: '数学分析习题全解指南 下册', date: 2005, },
    ],
    material: {
      id: "陈纪修 数分习题2版下",
      type: "book",
      title: "数学分析习题全解指南",
      author: [
        { literal: "陈纪修" }, { literal: "徐惠平" }, { literal: '周渊' },
        { literal: '金路', }, { literal: '邱维元' }
      ],
      publisher: "高等教育出版社",
      "publisher-place": "北京",
      volume: 1,
      edition: 2,
      issued: { "date-parts": [ [ 2005 ] ] },
      ISBN: "9787040173857",
      "collection-title": "数学类专业学习辅导丛书",
      language: "zh-CN",
      URL: "https://book.douban.com/subject/1721588/"
    },
  },
  {
    id: [
      '陈纪修 数分习题上',
      '陈纪修 数分习题3版上',
      '陈纪修 数分习题 2020上',
      '陈纪修 数分习题上 2020',
      { unordered_author: [ '陈纪修', '徐惠平', '周渊', '金路', '邱维元' ], title: '数学分析（第三版）习题全解指南 上册', },
      { unordered_author: [ '陈纪修', '徐惠平', '周渊', '金路', '邱维元' ], title: '数学分析（第三版）习题全解指南 上册', edition: 3, },
      { unordered_author: [ '陈纪修', '徐惠平', '周渊', '金路', '邱维元' ], title: '数学分析（第三版）习题全解指南 上册', date: 2020, },
    ],
    material: {
      id: '陈纪修 数分习题上',
      type: 'book',
      title: '数学分析习题全解指南',
      author: [ { family: '陈', given: '纪修' }, { literal: '徐惠平' }, { literal: '周渊' }, { family: '金', given: '路' }, { literal: '邱维元' } ],
      ISBN: '978-7-04-053442-9',
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
    id: [
      '陈纪修 数分习题下',
      '陈纪修 数分习题3版下',
      '陈纪修 数分习题 2020下',
      '陈纪修 数分习题下 2020',
      { unordered_author: [ '陈纪修', '徐惠平', '周渊', '金路', '邱维元' ], title: '数学分析（第三版）习题全解指南 下册', },
      { unordered_author: [ '陈纪修', '徐惠平', '周渊', '金路', '邱维元' ], title: '数学分析（第三版）习题全解指南 下册', edition: 3, },
      { unordered_author: [ '陈纪修', '徐惠平', '周渊', '金路', '邱维元' ], title: '数学分析（第三版）习题全解指南 下册', date: 2020, },
    ],
    material: {
      id: '陈纪修 数分习题下',
      type: 'book',
      title: '数学分析习题全解指南',
      author: [ { family: '陈', given: '纪修' }, { literal: '徐惠平' }, { literal: '周渊' }, { family: '金', given: '路' }, { literal: '邱维元' } ],
      ISBN: '978-7-04-053911-0',
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
] satisfies Data_Type.Item[]

catalog.add_items(items)