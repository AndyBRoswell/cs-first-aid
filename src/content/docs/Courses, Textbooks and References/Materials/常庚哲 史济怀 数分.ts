import * as catalog from './catalog.ts'
import * as base from '../base.ts'

const books = [
  {
    type: 'book',
    id: `常庚哲 史济怀 数分 2003 上`,
    author: [ { literal: '常庚哲' }, { literal: '史济怀' } ],
    title: '数学分析教程',
    volume: 1,
    edition: 2,
    publisher: '高等教育出版社',
    "publisher-place": '北京市',
    issued: { "date-parts": [ [ 2003, 5, 15 ] ], },
    "number-of-pages": 493,
    ISBN: '978-7-04-011920-6',
    "collection-title": '普通高等教育“十五”国家级规划教材',
    language: 'zh-CN',
    URL: 'https://www.hep.com.cn/book/show/2b102125-85ba-4748-9e7f-5942069d19ef',
    accessed: { "date-parts": [ [ 2026, 4, 9 ] ], },
  },
  {
    type: 'book',
    id: `常庚哲 史济怀 数分 2003 下`,
    author: [ { literal: '常庚哲' }, { literal: '史济怀' } ],
    title: '数学分析教程',
    volume: 2,
    edition: 2,
    publisher: '高等教育出版社',
    "publisher-place": '北京市',
    issued: { "date-parts": [ [ 2003, 5, 15 ] ], },
    "number-of-pages": 402,
    ISBN: '978-7-04-011921-3',
    "collection-title": '普通高等教育“十五”国家级规划教材',
    language: 'zh-CN',
    URL: 'https://www.hep.com.cn/book/show/957740b1-218e-45b7-847d-b0c3d0c711eb',
    accessed: { "date-parts": [ [ 2026, 4, 9 ] ], },
  },
  {
    type: 'book',
    id: '常庚哲 史济怀 数分 2026 上',
    author: [ { literal: '常庚哲' }, { literal: '史济怀' } ],
    title: '数学分析教程（上册）',
    volume: 1,
    edition: 4,
    publisher: '中国科学技术大学出版社',
    "publisher-place": "安徽省 合肥市",
    issued: { "date-parts": [ [ 2026, 1, ] ], },
    ISBN: '978-7-312-06521-7',
    URL: 'https://press.ustc.edu.cn/2026/0407/c29280a725832/page.htm',
    accessed: { "date-parts": [ [ 2026, 4, 9 ] ], },
  },
  {
    type: 'book',
    id: '常庚哲 史济怀 数分 2026 下',
    author: [ { literal: '常庚哲' }, { literal: '史济怀' } ],
    title: '数学分析教程（下册）',
    volume: 2,
    edition: 4,
    publisher: '中国科学技术大学出版社',
    "publisher-place": "安徽省 合肥市",
    issued: { "date-parts": [ [ 2026, 1, ] ], },
    ISBN: '978-7-312-06514-9',
    URL: 'https://press.ustc.edu.cn/2026/0407/c29280a725832/page.htm',
    accessed: { "date-parts": [ [ 2026, 4, 9 ] ], },
  },
] satisfies base.Course_Material[]

for (const book of books) {
  catalog.add([
    book.id,
  ], book)
}