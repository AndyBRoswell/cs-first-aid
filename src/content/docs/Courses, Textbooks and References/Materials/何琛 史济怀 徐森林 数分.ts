import * as catalog from './catalog.ts'
import * as base from '../base.ts'

const books = [
  {
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
  {
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
  {
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
] satisfies base.Course_Material[]

for (const book of books) {
  catalog.add([
    book.id,
  ], book)
}