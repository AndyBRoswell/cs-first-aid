import * as types_data from '@cs-first-aid/bibkit/types/data'
import * as CSL from '@cs-first-aid/bibkit/CSL'

export const entries = [
  {
    id: [],
    material: {
      type: 'book',
      title: '数据结构与算法',
      author: [
        { family: '张', given: '铭' },
        { family: '王', given: '腾蛟' },
        { family: '赵', given: '海燕' },
      ],
      edition: 1,
      publisher: '高等教育出版社',
      issued: { 'date-parts': [ [ 2008, 6 ] ] }, // 高教社原始物料23961-00实时页面记6月；A0/B0实时页面记5月，尚未找到可公开访问的版权页并核对。
      ISBN: '9787040239614',
      'number-of-pages': 400,
      language: 'zh-CN',
      URL: 'https://xuanshu.hep.com.cn/front/book/findBookDetails?bookId=59cd1396ba9eb884cf818d56',
      accessed: { 'date-parts': [ [ 2026, 11, 11 ] ] },
      custom: {
        'printing-date': { 'date-parts': [ [ 2025, 2 ] ] },
        URL: [
          { link: 'https://xuanshu.hep.com.cn/front/book/findBookDetails?bookId=65e0b8ef74ce561611bd9cfe', accessed: { 'date-parts': [ [ 2026, 11, 11 ] ] } }, // number-of-pages, custom.printing-date
          { link: 'https://aijiaocai.com/textbook/details?textbook_id=592778', display_text: '全国大中专教材网络采选系统', accessed: { 'date-parts': [ [ 2026, 11, 11 ] ] } }, // edition
        ],
      } satisfies CSL.Custom,
    } satisfies types_data.Material,
  },
] satisfies types_data.Entry[]
