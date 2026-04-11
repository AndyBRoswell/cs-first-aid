import * as catalog from './catalog.ts'
import * as base from '../base.ts'

const books = [
  {
    id: "陈纪修 於崇华 金路 数分习题2版上",
    type: "book",
    title: "数学分析习题全解指南 上册",
    author: [
      { literal: "陈纪修" }, { literal: "徐惠平" }, { literal: '周渊'},
      { literal: '金路', }, { literal: '邱维元'}
    ],
    publisher: "高等教育出版社",
    "publisher-place": "北京",
    issued: { "date-parts": [[2005, 7]] },
    "number-of-pages": 262,
    ISBN: "9787040166187",
    "collection-title": "数学类专业学习辅导丛书",
    language: "zh-CN",
    URL: "https://book.douban.com/subject/1704531/"
  },
  {
    id: "陈纪修 於崇华 金路 数分习题2版下",
    type: "book",
    title: "数学分析习题全解指南（下册）",
    author: [
      { literal: "陈纪修" }, { literal: "徐惠平" }, { literal: '周渊'},
      { literal: '金路', }, { literal: '邱维元'}
    ],
    publisher: "高等教育出版社",
    "publisher-place": "北京",
    issued: { "date-parts": [[2005]] },
    ISBN: "9787040173857",
    "collection-title": "数学类专业学习辅导丛书",
    language: "zh-CN",
    URL: "https://book.douban.com/subject/1721588/"
  },
] satisfies base.Course_Material[]

for (const book of books) {
  catalog.add([
    book.id,
  ], book)
}