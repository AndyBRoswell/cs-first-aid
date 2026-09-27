import * as types_data from '@cs-first-aid/bibkit/types/data'

export const entries = [
  {
    id: [],
    material: {
      type: 'book',
      title: '概率论与数理统计',
      author: [ { family: '徐', given: '全智' }, { family: '吕', given: '恕' } ],
      edition: 4,
      publisher: '高等教育出版社',
      issued: { 'date-parts': [ [ 2021, 8, 16 ] ] },
      ISBN: '9787040564358',
      language: 'zh-CN',
      URL: 'https://xuanshu.hep.com.cn/front/h5Mobile/bookDetails?bookId=60dee093adb85dae6a2f4381',
      accessed: { 'date-parts': [ [ 2026, 9, 27 ] ] },
    } satisfies types_data.Material,
  },
] satisfies types_data.Entry[]
