import * as catalog from './catalog.ts'
import * as base from '../base.ts'

const books = [
  {
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
  {
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
  {
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
] satisfies base.Course_Material[]

for (const book of books) {
  catalog.add([
    book.id,
  ], book)
}