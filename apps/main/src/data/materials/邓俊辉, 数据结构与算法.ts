import * as types_data from '@cs-first-aid/bibkit/types/data'
import * as CSL from '@cs-first-aid/bibkit/CSL'

export const entries = [
  {
    id: [],
    material: {
      type: 'book',
      title: '数据结构与算法',
      author: [ { family: '邓', given: '俊辉' } ],
      edition: 1,
      'number-of-volumes': 2,
      'printing-number': '1-1',
      publisher: '清华大学出版社',
      'publisher-place': '北京',
      issued: { 'date-parts': [ [ 2026, 10, 1 ] ] },
      ISBN: '9787302729150',
      'collection-title': '清华大学计算机系列教材',
      language: 'zh-CN',
      URL: 'https://www.tup.tsinghua.edu.cn/bookscenter/book_11860701.html',
      accessed: { 'date-parts': [ [ 2026, 11, 11 ] ] },
      custom: {
        'printing-date': { 'date-parts': [ [ 2026, 10, 13 ] ] },
        free_material: [
          {
            link: 'https://www.tup.tsinghua.edu.cn/upload/books/yz/118607-01.pdf',
            display_text: '出版社样章（第3章：列表，PDF）',
            'Content-Type': 'application/pdf',
            accessed: { 'date-parts': [ [ 2026, 11, 11 ] ] },
          },
          {
            link: 'https://cloud.tsinghua.edu.cn/f/f2ef2568780e47a38a82/?dl=1',
            display_text: '勘误表（XLSX）',
            'Content-Type': 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
            accessed: { 'date-parts': [ [ 2026, 11, 11 ] ] },
          },
          {
            link: 'https://cloud.tsinghua.edu.cn/d/3097126da2ab4e84b2c2/',
            display_text: '清华大学讲义（最新版）',
            accessed: { 'date-parts': [ [ 2026, 11, 11 ] ] },
          },
          {
            link: 'https://cloud.tsinghua.edu.cn/d/92a0694dee2242c88466/',
            display_text: 'VS2022版示例代码包',
            accessed: { 'date-parts': [ [ 2026, 11, 11 ] ] },
          },
          {
            link: 'https://dsa.cs.tsinghua.edu.cn/~deng/ds/src_2026/',
            display_text: '示例代码（在线浏览）',
            accessed: { 'date-parts': [ [ 2026, 11, 11 ] ] },
          },
          {
            link: 'https://cloud.tsinghua.edu.cn/d/c013555272124a36ae32/',
            display_text: 'Excel版算法演示',
            accessed: { 'date-parts': [ [ 2026, 11, 11 ] ] },
          },
          {
            link: 'https://dsa.cs.tsinghua.edu.cn/~deng/ds/lm/',
            display_text: 'LectureMate课堂展示工具',
            accessed: { 'date-parts': [ [ 2026, 11, 11 ] ] },
          },
        ],
        URL: [
          { link: 'https://dsa.cs.tsinghua.edu.cn/~deng/ds/dsa26/index.htm', display_text: '作者教材主页（2026版）', accessed: { 'date-parts': [ [ 2026, 11, 11 ] ] } }, // custom.free_material
        ],
      } satisfies CSL.Custom,
    } satisfies types_data.Material,
  },
] satisfies types_data.Entry[]
