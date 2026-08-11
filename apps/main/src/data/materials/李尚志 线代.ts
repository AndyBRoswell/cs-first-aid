import * as catalog from './catalog.ts'
import * as Data_Type from '@/types/data.ts'
import * as CSL_Data from '@/types/CSL_data.ts'

const items = [
  {
    id: [],
    material: {
      type: 'book',
      title: '线性代数（数学专业用）',
      author: [ { family: '李', given: '尚志' } ],
      issued: { 'date-parts': [ [ 2006, 5, 1 ] ] },
      accessed: { 'date-parts': [ [ 2026, 5, 6 ] ] },
      publisher: '高等教育出版社',
      'publisher-place': '北京',
      "collection-title": '"十五"国家规划教材',
      language: 'zh-CN',
      'number-of-pages': 555,
      ISBN: '978-7-04-019870-6' as CSL_Data.ISBN,
      URL: 'https://www.hep.com.cn/book/show/9b998ecf-0298-4031-8d38-fa5e9187cbb3',
    },
  },
  {
    id: [],
    material: {
      type: 'book',
      title: '线性代数学习指导',
      author: [ { family: '李', given: '尚志' } ],
      issued: { 'date-parts': [ [ 2015, 1 ] ] },
      accessed: { 'date-parts': [ [ 2026, 5, 6 ] ] },
      publisher: '中国科学技术大学出版社',
      'publisher-place': '合肥',
      language: 'zh-CN',
      'number-of-pages': 519,
      ISBN: '9787312034268' as CSL_Data.ISBN,
      'collection-title': '高校核心课程学习指导丛书',
      URL: 'https://book.douban.com/subject/26390093',
    },
  },
] satisfies Data_Type.Entry[]

catalog.add_items(items)