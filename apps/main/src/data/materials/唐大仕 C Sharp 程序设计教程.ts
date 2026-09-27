import * as types_data from '@cs-first-aid/bibkit/types/data'

export const entries = [
  {
    id: [ '唐大仕 C#程序设计教程', ],
    material: {
      type: 'book',
      title: 'C#程序设计教程',
      author: [ { family: '唐', given: '大仕' } ],
      edition: 2,
      publisher: '清华大学出版社；北京交通大学出版社',
      'publisher-place': '北京',
      issued: { 'date-parts': [ [ 2018 ] ] },
      ISBN: '9787512133969',
      language: 'zh-CN',
      URL: 'https://press.bjtu.edu.cn/library/bookdetail/3069/',
      accessed: { 'date-parts': [ [ 2026, 9, 27 ] ] },
    } satisfies types_data.Material,
  },
] satisfies types_data.Entry[]
