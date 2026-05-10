import * as catalog from './catalog.ts'
import * as Data_Type from '@/types/data.ts'
import * as CSL_Data from '@/types/CSL_data.ts'

const items = [
  {
    id: [
      '张贤科 许甫华 高代',
      '张贤科 许甫华 高等代数学',
      '张贤科 许甫华 高等代数学 第2版',
      '张贤科 许甫华 高等代数学 2004',
      { unordered_author: [ '张贤科', '许甫华' ], title: '高等代数学', edition: 2 },
    ],
    material: {
      type: 'book',
      id: '张贤科 许甫华 高等代数学 2004',
      author: [ { family: '张', given: '贤科' }, { family: '许', given: '甫华' } ],
      editor: [ { family: '刘', given: '颖' } ],
      title: '高等代数学',
      edition: 2,
      issued: { 'date-parts': [ [ 2004, 7, 1 ] ] },
      publisher: '清华大学出版社',
      'publisher-place': '北京',
      "number-of-pages": 441,
      language: 'zh-CN',
      ISBN: '9787302082279' as CSL_Data.ISBN,
      URL: 'https://www.tup.com.cn/booksCenter/book_00937505.html',
      accessed: { 'date-parts': [ [ 2026, 5, 11 ] ] },
      custom: {
        URL: [
          { display_text: '豆瓣读书', link: 'https://book.douban.com/subject/1231135/', },
        ],
      }
    } satisfies Data_Type.Material,
  },
] satisfies Data_Type.Entry[]

catalog.add_items(items)