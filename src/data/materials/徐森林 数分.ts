import * as catalog from './catalog.ts'
import * as Data_Type from '@/types/data.ts'

const items = [
  {
    id: [
      '徐森林 数分1',
      '徐森林 数分 2021 1',
      { unordered_author: [ '薛春华', '徐森林' ], title: '数学分析', volume: 1, },
      { unordered_author: [ '薛春华', '徐森林' ], title: '数学分析', date: 2021, volume: 1, },
      { unordered_author: [ '薛春华', '徐森林' ], title: '数学分析（第1册）', },
      { unordered_author: [ '薛春华', '徐森林' ], title: '数学分析（第1册）', date: 2021, },
    ],
    material: {
      type: 'book',
      id: '徐森林 数分1',
      author: [ { family: '徐', given: '森林' }, { family: '薛', given: '春华' } ],
      title: '数学分析',
      volume: 1,
      "number-of-volumes": 3,
      publisher: '哈尔滨工业大学出版社',
      "publisher-place": '黑龙江省 哈尔滨市',
      issued: { "date-parts": [ [ 2021, 3, ] ], },
      ISBN: '978-7-5603-8050-6',
      language: 'zh-CN',
    },
  },
  {
    id: [
      '徐森林 数分2',
      '徐森林 数分 2021 2',
      { unordered_author: [ '薛春华', '徐森林' ], title: '数学分析', volume: 2, },
      { unordered_author: [ '薛春华', '徐森林' ], title: '数学分析', date: 2021, volume: 2, },
      { unordered_author: [ '薛春华', '徐森林' ], title: '数学分析（第2册）', },
      { unordered_author: [ '薛春华', '徐森林' ], title: '数学分析（第2册）', date: 2021, },
    ],
    material: {
      type: 'book',
      id: '徐森林 数分2',
      author: [ { family: '徐', given: '森林' }, { family: '薛', given: '春华' } ],
      title: '数学分析',
      volume: 2,
      "number-of-volumes": 3,
      publisher: '哈尔滨工业大学出版社',
      "publisher-place": '黑龙江省 哈尔滨市',
      issued: { "date-parts": [ [ 2021, 3, ] ], },
      ISBN: '978-7-5603-8172-5',
      language: 'zh-CN',
    },
  },
  {
    id: [
      '徐森林 数分3',
      '徐森林 数分 2021 3',
      { unordered_author: [ '薛春华', '徐森林', '金亚东' ], title: '数学分析', volume: 3, },
      { unordered_author: [ '薛春华', '徐森林', '金亚东' ], title: '数学分析', date: 2021, volume: 3, },
      { unordered_author: [ '薛春华', '徐森林', '金亚东' ], title: '数学分析（第3册）', },
      { unordered_author: [ '薛春华', '徐森林', '金亚东' ], title: '数学分析（第3册）', date: 2021, },
    ],
    material: {
      type: 'book',
      id: '徐森林 数分3',
      author: [ { family: '徐', given: '森林' }, { literal: '金亚东' }, { family: '薛', given: '春华' } ],
      title: '数学分析',
      volume: 3,
      "number-of-volumes": 3,
      publisher: '哈尔滨工业大学出版社',
      "publisher-place": '黑龙江省 哈尔滨市',
      issued: { "date-parts": [ [ 2021, 3, ] ], },
      ISBN: '978-7-5603-8073-5',
      language: 'zh-CN',
    },
  },
] satisfies Data_Type.Entry[]

catalog.add_items(items)