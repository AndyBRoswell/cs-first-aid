import * as catalog from './catalog.ts'
import * as Data_Type from '@/types/data.ts'
import * as CSL_Data from '@/types/CSL_data.ts'

const items = [
  {
    id: [
      '丘维声 简明线性代数',
      '丘维声 简明线性代数 第2版',
      '丘维声 简明线性代数 2024',
      { unordered_author: '丘维声', title: '简明线性代数', },
      { unordered_author: '丘维声', title: '简明线性代数', date: 2024, },
      { unordered_author: '丘维声', title: '简明线性代数', edition: 2, },
    ],
    material: {
      type: 'book',
      id: '丘维声 简明线性代数 第2版',
      title: '简明线性代数',
      'collection-title': '普通高等教育十一五国家级规划教材',
      author: [ { family: '丘', given: '维声', }, ],
      publisher: '北京大学出版社',
      "publisher-place": '北京',
      issued: { 'date-parts': [ [ 2024, 10, ], ], },
      edition: 2,
      ISBN: '9787301356784' as CSL_Data.ISBN,
      'number-of-pages': 332,
      language: 'zh-CN',
      URL: 'https://book.douban.com/subject/37101517/',
      accessed: { 'date-parts': [ [ 2026, 5, 6, ], ], },
    },
  } satisfies Data_Type.Entry,
] satisfies Data_Type.Entry[]

catalog.add_items(items)