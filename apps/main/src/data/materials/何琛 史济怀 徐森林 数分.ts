import * as catalog from '@cs-first-aid/bibkit/catalog'
import * as types_data from '@cs-first-aid/bibkit/types/data'

const items = [
  {
    id: [],
    material: {
      type: 'book',
      author: [ { family: '何', given: '琛' }, { family: '史', given: '济怀' }, { family: '徐', given: '森林' } ],
      title: '数学分析',
      volume: 1,
      "number-of-volumes": 3,
      publisher: '高等教育出版社',
      "publisher-place": '北京市',
      issued: { "date-parts": [ [ 1983, 12, ] ] },
      language: 'zh-CN',
    },
  },
  {
    id: [],
    material: {
      type: 'book',
      author: [ { family: '何', given: '琛' }, { family: '史', given: '济怀' }, { family: '徐', given: '森林' } ],
      title: '数学分析',
      volume: 2,
      "number-of-volumes": 3,
      publisher: '高等教育出版社',
      "publisher-place": '北京市',
      issued: { "date-parts": [ [ 1985, 1, ] ] },
      language: 'zh-CN',
    },
  },
  {
    id: [],
    material: {
      type: 'book',
      author: [ { family: '何', given: '琛' }, { family: '史', given: '济怀' }, { family: '徐', given: '森林' } ],
      title: '数学分析',
      volume: 3,
      "number-of-volumes": 3,
      publisher: '高等教育出版社',
      "publisher-place": '北京市',
      issued: { "date-parts": [ [ 1985, 1, ] ] },
      language: 'zh-CN',
    },
  }
] satisfies types_data.Entry[]

catalog.add_items(items)