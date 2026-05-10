import * as catalog from './catalog.ts'
import * as Data_Type from '@/types/data.ts'
import * as CSL_Data from '@/types/CSL_data.ts'

const items = [
  {
    id: [
      '徐森林 数分习题上',
      '徐森林 数分习题 2021上',
      { unordered_author: [ '薛春华', '徐森林' ], title: '数学分析精选习题全解', volume: 1, },
      { unordered_author: [ '薛春华', '徐森林' ], title: '数学分析精选习题全解', date: 2021, volume: 1, },
      { unordered_author: [ '薛春华', '徐森林' ], title: '数学分析精选习题全解（上册）', },
      { unordered_author: [ '薛春华', '徐森林' ], title: '数学分析精选习题全解（上册）', date: 2021, },
    ],
    material: {
      type: 'book',
      id: '徐森林 数分习题上',
      author: [ { family: '薛', given: '春华' }, { family: '徐', given: '森林' } ],
      title: '数学分析精选习题全解',
      volume: 1,
      "number-of-volumes": 2,
      publisher: '哈尔滨工业大学出版社',
      "publisher-place": '黑龙江省 哈尔滨市',
      issued: { "date-parts": [ [ 2021, 7, ] ] },
      ISBN: '9787560380094' as CSL_Data.ISBN,
      language: 'zh-CN',
    },
  },
  {
    id: [
      '徐森林 数分习题下',
      '徐森林 数分习题 2021下',
      { unordered_author: [ '薛春华', '徐森林' ], title: '数学分析精选习题全解', volume: 2, },
      { unordered_author: [ '薛春华', '徐森林' ], title: '数学分析精选习题全解', date: 2021, volume: 2, },
      { unordered_author: [ '薛春华', '徐森林' ], title: '数学分析精选习题全解（下册）', },
      { unordered_author: [ '薛春华', '徐森林' ], title: '数学分析精选习题全解（下册）', date: 2021, },
    ],
    material: {
      type: 'book',
      id: '徐森林 数分习题下',
      author: [ { family: '薛', given: '春华' }, { family: '徐', given: '森林' } ],
      title: '数学分析精选习题全解',
      volume: 2,
      "number-of-volumes": 2,
      publisher: '哈尔滨工业大学出版社',
      "publisher-place": '黑龙江省 哈尔滨市',
      issued: { "date-parts": [ [ 2021, 7, ] ] },
      ISBN: '9787560383309' as CSL_Data.ISBN,
      language: 'zh-CN',
    },
  },
] satisfies Data_Type.Entry[]

catalog.add_items(items)