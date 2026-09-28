import * as types_data from '@cs-first-aid/bibkit/types/data'

export const entries = [
  {
    id: [],
    material: {
      type: 'book',
      title: '概率论与数理统计',
      author: [ { family: '缪', given: '柏其' }, { family: '张', given: '伟平' } ],
      edition: 1,
      publisher: '高等教育出版社',
      'publisher-place': '北京',
      issued: { 'date-parts': [ [ 2022, 9, 2 ] ] },
      ISBN: '9787040591620',
      'collection-title': '高等学校教材',
      'number-of-pages': 420,
      language: 'zh-CN',
      URL: 'https://xuanshu.hep.com.cn/front/book/findBookDetails?bookId=62e95c75938b7cc2960eefe1',
      accessed: { 'date-parts': [ [ 2026, 9, 28 ] ] },
    } satisfies types_data.Material,
  },
] satisfies types_data.Entry[]
