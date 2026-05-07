import * as catalog from './catalog.ts'
import * as Data_Type from '@/types/data.ts'
import * as CSL_Data from '@/types/CSL_data.ts'

const items = [
  {
    id: [
      '李尚志 线代',
      '李尚志 线性代数（数学专业用）',
      '李尚志 线性代数（数学专业用） 2006',
      { unordered_author: '李尚志', title: '线性代数（数学专业用）' },
      { unordered_author: '李尚志', title: '线性代数（数学专业用）', date: 2006 },
    ],
    material: {
      type: 'book',
      id: '李尚志 线性代数（数学专业用） 2006',
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
    id: [
      '李尚志 线代指导',
      '李尚志 线性学习指导',
      '李尚志 线性代数学习指导',
      '李尚志 线性代数学习指导 2015',
      { unordered_author: '李尚志', title: '线性代数学习指导' },
      { unordered_author: '李尚志', title: '线性代数学习指导', date: 2015 },
    ],
    material: {
      type: 'book',
      id: '李尚志 线性代数学习指导 2015',
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