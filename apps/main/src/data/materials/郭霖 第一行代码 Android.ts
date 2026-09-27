import * as types_data from '@cs-first-aid/bibkit/types/data'

export const entries = [
  {
    id: [],
    material: {
      type: 'book',
      title: '第一行代码：Android',
      author: [ { family: '郭', given: '霖' } ],
      edition: 3,
      publisher: '人民邮电出版社',
      issued: { 'date-parts': [ [ 2020, 4 ] ] },
      ISBN: '9787115524836',
      language: 'zh-CN',
      URL: 'https://read.douban.com/ebook/337721450/',
      accessed: { 'date-parts': [ [ 2026, 9, 27 ] ] },
    } satisfies types_data.Material,
  },
] satisfies types_data.Entry[]
