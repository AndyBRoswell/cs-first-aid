import * as catalog from './catalog.ts'

const items = [
  {
    id: [
      '程艺 数分1',
      { unordered_author: [ '程艺', '陈卿', '李平' ], title: '数学分析讲义（第一册）'},
      { unordered_author: [ '程艺', '陈卿', '李平' ], title: '数学分析讲义（第一册）', date: 2019 },
    ],
    material: {
      id: '程艺 数分1',
      type: 'book',
      title: '数学分析讲义（第一册）',
      author: [ { family: '程', given: '艺' }, { family: '陈', given: '卿' }, { family: '李', given: '平' } ],
      'collection-title': '中国科学技术大学数学丛书',
      publisher: '高等教育出版社',
      'publisher-place': '北京',
      issued: { 'date-parts': [ [ 2019, 3, 13 ] ] },
      ISBN: '978-7-04-051033-1',
      volume: 1,
      language: 'zh-CN',
      URL: 'https://www.hep.com.cn/book/show/9cbdd043-61c7-4e03-a527-642ad8d94e3f'
    },
  },
  {
    id: [
      '程艺 数分2',
      { unordered_author: [ '程艺', '陈卿', '李平' ], title: '数学分析讲义（第二册）'},
      { unordered_author: [ '程艺', '陈卿', '李平' ], title: '数学分析讲义（第二册）', date: 2020 },
    ],
    material: {
      id: '程艺 数分2',
      type: 'book',
      title: '数学分析讲义（第二册）',
      author: [ { family: '程', given: '艺' }, { family: '陈', given: '卿' }, { family: '李', given: '平' } ],
      'collection-title': '中国科学技术大学数学丛书',
      publisher: '高等教育出版社',
      'publisher-place': '北京',
      issued: { 'date-parts': [ [ 2020, 1, 15 ] ] },
      ISBN: '978-7-04-053309-5',
      volume: 2,
      language: 'zh-CN',
      URL: 'https://www.hep.com.cn/book/show/96840e55-1b0a-4b04-926e-860295ce0ce5'
    },
  },
  {
    id: [
      '程艺 数分3',
      { unordered_author: [ '程艺', '陈卿', '李平', '许斌' ], title: '数学分析讲义（第三册）'},
      { unordered_author: [ '程艺', '陈卿', '李平', '许斌' ], title: '数学分析讲义（第三册）', date: 2020 },
    ],
    material: {
      id: '程艺 数分3',
      type: 'book',
      title: '数学分析讲义（第三册）',
      author: [ { family: '程', given: '艺' }, { family: '陈', given: '卿' }, { family: '李', given: '平' }, { family: '许', given: '斌' } ],
      'collection-title': '中国科学技术大学数学丛书',
      publisher: '高等教育出版社',
      'publisher-place': '北京',
      issued: { 'date-parts': [ [ 2020, 8, 20 ] ] },
      ISBN: '978-7-04-054247-9',
      volume: 3,
      language: 'zh-CN',
      URL: 'https://www.hep.com.cn/book/show/a5fc1e0f-5469-414a-a804-a577bdb8aa55'
    }
  },
] satisfies catalog.Item[]

catalog.add_items(items)