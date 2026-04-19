import * as catalog from './catalog.ts'

const items = [
  {
    id: [
      '薛春华 徐森林 数分习题上',
      '薛春华 徐森林 数分习题 2021上',
      { unordered_author: [ '薛春华', '徐森林' ], title: '数学分析精选习题全解（上册）', },
      { unordered_author: [ '薛春华', '徐森林' ], title: '数学分析精选习题全解（上册）', date: 2021, },
    ],
    material: {
      type: 'book',
      id: '薛春华 徐森林 数分习题上',
      author: [ { literal: '薛春华' }, { literal: '徐森林' } ],
      title: '数学分析精选习题全解（上册）',
      volume: 1,
      publisher: '哈尔滨工业大学出版社',
      "publisher-place": '黑龙江省 哈尔滨市',
      issued: { "date-parts": [ [ 2021, 7, ] ] },
      ISBN: '9787560380094',
      language: 'zh-CN',
    },
  },
  {
    id: [
      '薛春华 徐森林 数分习题下',
      '薛春华 徐森林 数分习题 2021下',
      { unordered_author: [ '薛春华', '徐森林' ], title: '数学分析精选习题全解（下册）', },
      { unordered_author: [ '薛春华', '徐森林' ], title: '数学分析精选习题全解（下册）', date: 2021, },
    ],
    material: {
      type: 'book',
      id: '薛春华 徐森林 数分习题下',
      author: [ { literal: '薛春华' }, { literal: '徐森林' } ],
      title: '数学分析精选习题全解（下册）',
      volume: 2,
      publisher: '哈尔滨工业大学出版社',
      "publisher-place": '黑龙江省 哈尔滨市',
      issued: { "date-parts": [ [ 2021, 7, ] ] },
      ISBN: '9787560383309',
      language: 'zh-CN',
    },
  },
] satisfies catalog.Item[]

catalog.add_items(items)