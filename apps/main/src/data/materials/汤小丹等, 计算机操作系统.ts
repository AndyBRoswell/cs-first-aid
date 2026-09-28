import * as types_data from '@cs-first-aid/bibkit/types/data'
import * as CSL from '@cs-first-aid/bibkit/CSL'

export const entries = [
  {
    id: [],
    material: {
      type: 'book',
      title: '计算机操作系统',
      author: [ { family: '汤', given: '小丹' }, { family: '梁', given: '红兵' }, { family: '哲', given: '凤屏' }, { family: '汤', given: '子瀛' } ],
      publisher: '西安电子科技大学出版社',
      issued: { 'date-parts': [ [ 2014, 5 ] ] },
      edition: 4,
      language: 'zh-CN',
      ISBN: '9787560633503',
      URL: 'https://www.xduph.com/pages/BookDetail.aspx?doi=e560378d-83d1-4e43-9bbc-73a3e9b3881d',
      accessed: { 'date-parts': [ [ 2026, 9, 29 ] ] },
      custom: {
        'printing-date': { 'date-parts': [ [ 2022, 10 ] ] },
      } satisfies CSL.Custom,
    },
  },
] satisfies types_data.Entry[]
