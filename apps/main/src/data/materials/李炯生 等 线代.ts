import * as catalog from '../../../../../packages/bibkit/src/catalog.ts'
import * as Data_Type from '../../../../../packages/bibkit/src/types/data.ts'
import * as CSL_Data from '../../../../../packages/bibkit/src/CSL_data.ts'

const items = [
  {
    id: [] satisfies Data_Type.ID_t[],
    material: {
      type: 'book',
      title: '线性代数',
      author: [ { family: '李', given: '炯生' }, { family: '查', given: '建国' }, { family: '王', given: '新茂' } ],
      edition: 2,
      issued: { 'date-parts': [ [ 2010, 1 ] ] },
      publisher: '中国科学技术大学出版社',
      'publisher-place': '安徽 合肥',
      'collection-title': '中国科学技术大学精品教材',
      'number-of-pages': 447,
      language: 'zh-CN',
      ISBN: '978-7-312-02298-2' as CSL_Data.ISBN,
      URL: 'https://book.douban.com/subject/4200433/',
      accessed: { 'date-parts': [ [ 2026, 5, 6 ] ] },
    } satisfies Data_Type.Material,
  },
] satisfies Data_Type.Entry[]

catalog.add_items(items)