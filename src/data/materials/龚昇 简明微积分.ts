import * as catalog from './catalog.ts'
import * as Data_Type from '@/types/data.ts'

const items = [
  {
    id: [
      '简明微积分',
      '龚昇 简明微积分',
      '龚昇 简明微积分 第4版',
      { unordered_author: '龚昇', title: '简明微积分', },
      { unordered_author: '龚昇', title: '简明微积分', edition: 4, },
      { unordered_author: '龚昇', title: '简明微积分', date: 2006, },
    ],
    material: {
      type: 'book',
      id: '简明微积分',
      author: [ { given: '昇', family: '龚' } ],
      title: '简明微积分',
      edition: 4,
      publisher: '高等教育出版社',
      "publisher-place": '北京市',
      issued: { "date-parts": [ [ 2006, 4, 28 ], ], },
      "number-of-pages": 565,
      ISBN: '978-7-04-018693-2',
      "collection-title": "普通高等教育“十五”国家级规划教材",
      language: "zh-CN",
      URL: 'https://www.hep.com.cn/book/show/4fbfa3b9-aa86-41c2-be72-84ac7d0b87b2',
      accessed: { "date-parts": [ [ 2026, 4, 3 ], ], },
    }
  },
] satisfies Data_Type.Item[]

catalog.add_items(items)