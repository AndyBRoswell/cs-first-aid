import * as catalog from './catalog.ts'

const items = [
  {
    id: [
      '何琛 史济怀 徐森林 数分1',
      { unordered_author: [ '何琛', '史济怀', '徐森林' ], title: '数学分析', volume: 1, },
      { unordered_author: [ '何琛', '史济怀', '徐森林' ], title: '数学分析 第一册', },
      { unordered_author: [ '何琛', '史济怀', '徐森林' ], title: '数学分析 第一册（一元微积分）', },
    ],
    material: {
      type: 'book',
      id: '何琛 史济怀 徐森林 数分1',
      author: [ { family: '何', given: '琛' }, { family: '史', given: '济怀' }, { family: '徐', given: '森林' } ],
      title: '数学分析',
      volume: 1,
      publisher: '高等教育出版社',
      "publisher-place": '北京市',
      issued: { "date-parts": [ [ 1983, 12, ] ] },
      language: 'zh-CN',
    },
  },
  {
    id: [
      '何琛 史济怀 徐森林 数分2',
      { unordered_author: [ '何琛', '史济怀', '徐森林' ], title: '数学分析', volume: 2, },
      { unordered_author: [ '何琛', '史济怀', '徐森林' ], title: '数学分析 第二册', },
      { unordered_author: [ '何琛', '史济怀', '徐森林' ], title: '数学分析 第二册（多元微积分）', },
    ],
    material: {
      type: 'book',
      id: '何琛 史济怀 徐森林 数分2',
      author: [ { family: '何', given: '琛' }, { family: '史', given: '济怀' }, { family: '徐', given: '森林' } ],
      title: '数学分析',
      volume: 2,
      publisher: '高等教育出版社',
      "publisher-place": '北京市',
      issued: { "date-parts": [ [ 1985, 1, ] ] },
      language: 'zh-CN',
    },
  },
  {
    id: [
      '何琛 史济怀 徐森林 数分3',
      { unordered_author: [ '何琛', '史济怀', '徐森林' ], title: '数学分析', volume: 3, },
      { unordered_author: [ '何琛', '史济怀', '徐森林' ], title: '数学分析 第三册', },
      { unordered_author: [ '何琛', '史济怀', '徐森林' ], title: '数学分析 第三册（无穷级数和广义积分）', },
    ],
    material: {
      type: 'book',
      id: '何琛 史济怀 徐森林 数分3',
      author: [ { family: '何', given: '琛' }, { family: '史', given: '济怀' }, { family: '徐', given: '森林' } ],
      title: '数学分析',
      volume: 3,
      publisher: '高等教育出版社',
      "publisher-place": '北京市',
      issued: { "date-parts": [ [ 1985, 1, ] ] },
      language: 'zh-CN',
    },
  }
] satisfies catalog.Item[]

catalog.add_items(items)