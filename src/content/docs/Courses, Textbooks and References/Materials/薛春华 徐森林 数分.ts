import * as catalog from './catalog.ts'

const items = [
  {
    id: [
      '薛春华 徐森林 数分1',
      '薛春华 徐森林 数分 2021 1',
      { unordered_author: [ '薛春华', '徐森林' ], title: '数学分析（第1册）', },
      { unordered_author: [ '薛春华', '徐森林' ], title: '数学分析（第1册）', date: 2021, },
    ],
    material: {
      type: 'book',
      id: '薛春华 徐森林 数分1',
      author: [ { literal: '徐森林' }, { literal: '薛春华' } ],
      title: '数学分析（第1册）',
      volume: 1,
      publisher: '哈尔滨工业大学出版社',
      "publisher-place": '黑龙江省 哈尔滨市',
      issued: { "date-parts": [ [ 2021, 3, ] ], },
      ISBN: '978-7-5603-8050-6',
      language: 'zh-CN',
    },
  },
  {
    id: [
      '薛春华 徐森林 数分2',
      '薛春华 徐森林 数分 2021 2',
      { unordered_author: [ '薛春华', '徐森林' ], title: '数学分析（第2册）', },
      { unordered_author: [ '薛春华', '徐森林' ], title: '数学分析（第2册）', date: 2021, },
    ],
    material: {
      type: 'book',
      id: '薛春华 徐森林 数分2',
      author: [ { literal: '徐森林' }, { literal: '薛春华' } ],
      title: '数学分析（第2册）',
      volume: 2,
      publisher: '哈尔滨工业大学出版社',
      "publisher-place": '黑龙江省 哈尔滨市',
      issued: { "date-parts": [ [ 2021, 3, ] ], },
      ISBN: '978-7-5603-8172-5',
      language: 'zh-CN',
    },
  },
  {
    id: [
      '薛春华 徐森林 金亚东 数分3',
      '薛春华 徐森林 金亚东 数分 2021 3',
      { unordered_author: [ '薛春华', '徐森林', '金亚东' ], title: '数学分析（第3册）', },
      { unordered_author: [ '薛春华', '徐森林', '金亚东' ], title: '数学分析（第3册）', date: 2021, },
    ],
    material: {
      type: 'book',
      id: '薛春华 徐森林 金亚东 数分3',
      author: [ { literal: '徐森林' }, { literal: '金亚东' }, { literal: '薛春华' } ],
      title: '数学分析（第3册）',
      volume: 3,
      publisher: '哈尔滨工业大学出版社',
      "publisher-place": '黑龙江省 哈尔滨市',
      issued: { "date-parts": [ [ 2021, 3, ] ], },
      ISBN: '978-7-5603-8073-5',
      language: 'zh-CN',
    },
  }
] satisfies catalog.pair[]

for (const { id, material } of items) { catalog.add(id, material) }