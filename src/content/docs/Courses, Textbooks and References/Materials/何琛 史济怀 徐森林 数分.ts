import * as catalog from './catalog.ts'

const items = [
  {
    id: [
      '何琛 史济怀 徐森林 数分1',
      { unordered_author: [ '何琛', '史济怀', '徐森林'], title: '数学分析 第一册', },
      { unordered_author: [ '何琛', '史济怀', '徐森林'], title: '数学分析 第一册', date: 1983 },
    ],
    material: {
      type: 'book',
      id: '何琛 史济怀 徐森林 数分1',
      author: [ { literal: '何琛' }, { literal: '史济怀' }, { literal: '徐森林' } ],
      title: '数学分析 第一册（一元微积分）',
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
      { unordered_author: [ '何琛', '史济怀', '徐森林'], title: '数学分析 第二册', },
      { unordered_author: [ '何琛', '史济怀', '徐森林'], title: '数学分析 第二册', date: 1985 },
    ],
    material: {
      type: 'book',
      id: '何琛 史济怀 徐森林 数分2',
      author: [ { literal: '何琛' }, { literal: '史济怀' }, { literal: '徐森林' } ],
      title: '数学分析 第二册（多元微积分）',
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
      { unordered_author: [ '何琛', '史济怀', '徐森林'], title: '数学分析 第三册', },
      { unordered_author: [ '何琛', '史济怀', '徐森林'], title: '数学分析 第三册', date: 1985 },
    ],
    material: {
      type: 'book',
      id: '何琛 史济怀 徐森林 数分3',
      author: [ { literal: '何琛' }, { literal: '史济怀' }, { literal: '徐森林' } ],
      title: '数学分析 第三册（无穷级数和广义积分）',
      volume: 3,
      publisher: '高等教育出版社',
      "publisher-place": '北京市',
      issued: { "date-parts": [ [ 1985, 1, ] ] },
      language: 'zh-CN',
    },
  }
] satisfies catalog.pair[]

for (const item of items) { catalog.add(item.id, item.material) }