import * as catalog from './catalog.ts'
import * as base from '../base.ts'

const books = [
  {
    id: "陈纪修 於崇华 金路 数分2版上",
    type: "book",
    title: "数学分析 第二版 上册",
    author: [ { literal: "陈纪修" }, { literal: "於崇华" }, { literal: "金路" } ],
    publisher: "高等教育出版社",
    "publisher-place": "北京",
    edition: 2,
    issued: { "date-parts": [ [ 2004, 6, 1 ] ] },
    "number-of-pages": 419,
    ISBN: "9787040138528",
    "collection-title": "面向21世纪课程教材（数学类）",
    language: "zh-CN",
    URL: "https://book.douban.com/subject/1231379/"
  },
  {
    id: "陈纪修 於崇华 金路 数分2版下",
    type: "book",
    title: "数学分析 第二版 下册",
    author: [ { literal: "陈纪修" }, { literal: "於崇华" }, { literal: "金路" } ],
    publisher: "高等教育出版社",
    "publisher-place": "北京",
    edition: 2,
    issued: { "date-parts": [ [ 2004, 10, 1 ] ] },
    ISBN: "9787040155495",
    "collection-title": "面向21世纪课程教材（数学类）",
    language: "zh-CN",
    URL: "https://book.douban.com/subject/1239801/"
  },
] satisfies base.Course_Material[]

for (const book of books) {
  catalog.add([
    book.id,
  ], book)
}