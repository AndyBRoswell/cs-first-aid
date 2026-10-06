import * as types_data from '@cs-first-aid/bibkit/types/data'
import * as CSL from '@cs-first-aid/bibkit/CSL'

export const entries = [
  {
    id: [],
    material: {
      type: 'book',
      author: [ { family: '史', given: '济怀' }, { family: '刘', given: '太顺' } ],
      title: '复变函数',
      edition: 1,
      medium: '平装',
      publisher: '中国科学技术大学出版社',
      'publisher-place': '安徽省 合肥市',
      issued: { 'date-parts': [ [ 1998, 12 ] ] },
      'number-of-pages': 358,
      ISBN: '978-7-312-00999-0',
      language: 'zh-CN',
      URL: 'https://book.douban.com/subject/4860746/',
      accessed: { 'date-parts': [ [ 2026, 10, 6 ] ] },
      custom: {
        URL: [
          { link: 'https://opac.lib.uibe.edu.cn/opac/book/765f329cebff7ce54a23f292798ca20c', display_text: '对外经济贸易大学图书馆' },
        ],
      } satisfies CSL.Custom,
    } satisfies types_data.Material,
  },
] satisfies types_data.Entry[]
