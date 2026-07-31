import * as catalog from './catalog.ts'
import * as Data_Type from '@/types/data.ts'
import * as CSL_Data from '@/types/CSL_data.ts'

const items = [
  {
    id: [],
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
      ISBN: '978-7-5603-8050-6' as CSL_Data.ISBN,
      language: 'zh-CN',
    },
  },
  {
    id: [],
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
      ISBN: '978-7-5603-8172-5' as CSL_Data.ISBN,
      language: 'zh-CN',
    },
  },
  {
    id: [],
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
      ISBN: '978-7-5603-8073-5' as CSL_Data.ISBN,
      language: 'zh-CN',
    },
  },
] satisfies Data_Type.Entry[]

catalog.add_items(items)