import * as catalog from './catalog.ts'
import * as Data_Type from '@/types/data.ts'
import * as CSL_Data from '@/types/CSL_data.ts'

const items = [
  {
    id: [],
    material: {
      type: 'book',
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
    id: [],
    material: {
      type: 'book',
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