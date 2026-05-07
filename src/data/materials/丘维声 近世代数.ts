import * as catalog from './catalog.ts'
import * as Data_Type from '@/types/data.ts'
import * as CSL_Data from '@/types/CSL_data.ts'

const items = [
  {
    id: [
      '丘维声 近世代数',
      '丘维声 近世代数 2015',
      { unordered_author: '丘维声', title: '近世代数', date: 2015, },
    ],
    material: {
      type: 'book',
      id: '丘维声 近世代数 2015',
      title: '近世代数',
      author: [ { family: '丘', given: '维声' } ],
      editor: [ { family: '潘', given: '丽娜' } ],
      publisher: '北京大学出版社',
      issued: { 'date-parts': [ [ 2015, 3 ] ] },
      'number-of-pages': 308,
      language: 'zh-CN',
      ISBN: '9787301255803' as CSL_Data.ISBN,
      accessed: { 'date-parts': [ [ 2026, 5, 7 ] ] },
      "collection-title": '大学生基础课教材',
      URL: 'https://book.douban.com/subject/26368286',
    },
  },
] satisfies Data_Type.Entry[]

catalog.add_items(items)