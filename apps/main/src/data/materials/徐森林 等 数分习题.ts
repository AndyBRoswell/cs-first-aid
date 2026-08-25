import * as types_data from '@cs-first-aid/bibkit/types/data'
import * as CSL from '@cs-first-aid/bibkit/CSL'

export const entries = [
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
      ISBN: '9787560380094' as CSL.ISBN,
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
      ISBN: '9787560383309' as CSL.ISBN,
      language: 'zh-CN',
    },
  },
] satisfies types_data.Entry[]