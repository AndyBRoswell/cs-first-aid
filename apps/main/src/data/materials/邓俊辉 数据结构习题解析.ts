import * as types_data from '@cs-first-aid/bibkit/types/data'
import * as CSL from '@cs-first-aid/bibkit/CSL'

export const entries = [
  {
    id: [],
    material: {
      type: 'book',
      title: '数据结构习题解析',
      author: [ { family: '邓', given: '俊辉' } ],
      edition: 3,
      'printing-number': '3-23',
      publisher: '清华大学出版社',
      'publisher-place': '北京',
      issued: { 'date-parts': [ [ 2013, 8, 1 ] ] },
      ISBN: '9787302330653',
      'number-of-pages': 246,
      'collection-title': '清华大学计算机系列教材',
      language: 'zh-CN',
      URL: 'https://www.tup.tsinghua.edu.cn/bookscenter/book_05358002.html',
      accessed: { 'date-parts': [ [ 2026, 11, 11 ] ] },
      custom: {
        'printing-date': { 'date-parts': [ [ 2026, 1, 8 ] ] },
        free_material: [
          {
            link: 'https://cloud.tsinghua.edu.cn/d/76cbab99574046698804/',
            display_text: '第3版主教材与习题集合体 PDF（作者提供，清华大学云盘）',
            accessed: { 'date-parts': [ [ 2026, 11, 11 ] ] },
          },
        ],
        URL: [
          { link: 'https://book.douban.com/subject/26365845/', display_text: '豆瓣读书' },
          { link: 'https://dsa.cs.tsinghua.edu.cn/~deng/ds/dsacpp/', display_text: '作者教材主页', accessed: { 'date-parts': [ [ 2026, 11, 11 ] ] } }, // custom.free_material
        ],
      } satisfies CSL.Custom,
    } satisfies types_data.Material,
  },
] satisfies types_data.Entry[]
