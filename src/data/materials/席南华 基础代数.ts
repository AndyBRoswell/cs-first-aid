import * as catalog from './catalog.ts'
import * as Data_Type from '@/types/data.ts'
import * as CSL_Data from '@/types/CSL_data.ts'

const items = [
  {
    id: [
      '席南华 基础代数1',
      { unordered_author: '席南华', title: '基础代数', volume: 1 },
    ],
    material: {
      type: 'book',
      id: '席南华 基础代数1',
      author: [ { family: '席', given: '南华' } ],
      title: '基础代数',
      volume: 1,
      "number-of-volumes": 3,
      'number-of-pages': 200,
      issued: { 'date-parts': [ [ 2016, 9, 1 ] ] },
      accessed: { 'date-parts': [ [ 2026, 5, 6 ] ] },
      publisher: '科学出版社',
      'publisher-place': '北京',
      language: 'zh-CN',
      ISBN: '978-7-03-049843-4' as CSL_Data.ISBN,
      URL: 'https://www.ecsponline.com/goods.php?id=172616',
    },
  } satisfies Data_Type.Entry,
  {
    id: [
      '席南华 基础代数2',
      { unordered_author: '席南华', title: '基础代数', volume: 2 },
    ],
    material: {
      type: 'book',
      id: '席南华 基础代数2',
      author: [ { family: '席', given: '南华' } ],
      title: '基础代数',
      volume: 2,
      "number-of-volumes": 3,
      issued: { 'date-parts': [ [ 2018, 1, 1 ] ] },
      accessed: { 'date-parts': [ [ 2026, 5, 6 ] ] },
      publisher: '科学出版社',
      'publisher-place': '北京',
      language: 'zh-CN',
      ISBN: '978-7-03-056033-9' as CSL_Data.ISBN,
      URL: 'https://www.ecsponline.com/goods.php?id=189397',
    },
  } satisfies Data_Type.Entry,
  {
    id: [
      '席南华 基础代数3',
      { unordered_author: '席南华', title: '基础代数', volume: 3 },
    ],
    material: {
      type: 'book',
      id: '席南华 基础代数3',
      author: [ { family: '席', given: '南华' } ],
      title: '基础代数',
      volume: 3,
      "number-of-volumes": 3,
      'number-of-pages': 353,
      issued: { 'date-parts': [ [ 2021 ] ] },
      accessed: { 'date-parts': [ [ 2026, 5, 6 ] ] },
      publisher: '科学出版社',
      'publisher-place': '北京',
      language: 'zh-CN',
      ISBN: '978-7-03-068342-7' as CSL_Data.ISBN,
      URL: 'https://www.ecsponline.com/goods.php?id=210418',
    },
  } satisfies Data_Type.Entry,
] satisfies Data_Type.Entry[]

catalog.add_items(items)