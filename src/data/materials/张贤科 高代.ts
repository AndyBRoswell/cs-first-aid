import * as catalog from './catalog.ts'
import * as Data_Type from '@/types/data.ts'
import * as CSL_Data from '@/types/CSL_data.ts'

const items = [
  {
    id: [
      '张贤科 高代',
      '张贤科 高等线性代数',
      '张贤科, 高等线性代数',
      '张贤科, 高等线性代数, 2012',
      { unordered_author: '张贤科', title: '高等线性代数' },
      { unordered_author: '张贤科', title: '高等线性代数', date: 2012 },
    ],
    material: {
      type: 'book',
      id: '张贤科, 高等线性代数, 2012',
      author: [ { family: '张', given: '贤科' } ],
      title: '高等线性代数',
      publisher: '高等教育出版社',
      'publisher-place': '北京',
      issued: { 'date-parts': [ [ 2012, 8, 10 ] ] },
      accessed: { 'date-parts': [ [ 2026, 5, 11 ] ] },
      ISBN: '978-7-04-035199-6' as CSL_Data.ISBN,
      language: 'zh-CN',
      'number-of-pages': 501,
      URL: 'https://www.hep.com.cn/book/show/327efefa-8d7a-44af-83a1-a08c18e1421d',
      custom: {
        URL: [
          {
            link: 'https://book.douban.com/subject/11611593/',
            display_text: '豆瓣读书',
          },
        ],
      } satisfies CSL_Data.Custom,
    } satisfies Data_Type.Material,
  },
] satisfies Data_Type.Entry[]

catalog.add_items(items)