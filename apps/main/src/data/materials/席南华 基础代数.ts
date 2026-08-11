import * as catalog from '@cs-first-aid/bibkit/catalog'
import * as types_data from '@cs-first-aid/bibkit/types/data'
import * as CSL from '@cs-first-aid/bibkit/CSL'

const items = [
  {
    id: [],
    material: {
      type: 'book',
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
      ISBN: '978-7-03-049843-4' as CSL.ISBN,
      URL: 'https://www.ecsponline.com/goods.php?id=172616',
    },
  } satisfies types_data.Entry,
  {
    id: [],
    material: {
      type: 'book',
      author: [ { family: '席', given: '南华' } ],
      title: '基础代数',
      volume: 2,
      "number-of-volumes": 3,
      issued: { 'date-parts': [ [ 2018, 1, 1 ] ] },
      accessed: { 'date-parts': [ [ 2026, 5, 6 ] ] },
      publisher: '科学出版社',
      'publisher-place': '北京',
      language: 'zh-CN',
      ISBN: '978-7-03-056033-9' as CSL.ISBN,
      URL: 'https://www.ecsponline.com/goods.php?id=189397',
    },
  } satisfies types_data.Entry,
  {
    id: [],
    material: {
      type: 'book',
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
      ISBN: '978-7-03-068342-7' as CSL.ISBN,
      URL: 'https://www.ecsponline.com/goods.php?id=210418',
    },
  } satisfies types_data.Entry,
] satisfies types_data.Entry[]

catalog.add_items(items)