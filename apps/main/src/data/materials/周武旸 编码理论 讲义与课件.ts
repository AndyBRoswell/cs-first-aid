import * as types_data from '@cs-first-aid/bibkit/types/data'
import * as CSL from '@cs-first-aid/bibkit/CSL'

export const entries = [
  {
    id: [],
    material: {
      type: 'document',
      title: '编码理论',
      author: [ { family: '周', given: '武旸' } ],
      genre: 'Lecture notes and slides',
      medium: 'PDF',
      publisher: '中国科学技术大学',
      'number-of-pages': 371,
      language: 'zh-CN',
      URL: 'http://staff.ustc.edu.cn/~wyzhou/course.htm',
      accessed: { 'date-parts': [ [ 2026, 10, 18 ] ] },
      custom: {
        free_material: [
          {
            link: 'http://staff.ustc.edu.cn/~wyzhou/ct_chapter1.pdf',
            display_text: '1 (PDF)',
            'Content-Type': 'application/pdf',
            accessed: { 'date-parts': [ [ 2026, 10, 18 ] ] },
          },
          {
            link: 'http://staff.ustc.edu.cn/~wyzhou/ct_chapter2.pdf',
            display_text: '2 (PDF)',
            'Content-Type': 'application/pdf',
            accessed: { 'date-parts': [ [ 2026, 10, 18 ] ] },
          },
          {
            link: 'http://staff.ustc.edu.cn/~wyzhou/ct_chapter3.pdf',
            display_text: '3 (PDF)',
            'Content-Type': 'application/pdf',
            accessed: { 'date-parts': [ [ 2026, 10, 18 ] ] },
          },
          {
            link: 'http://staff.ustc.edu.cn/~wyzhou/ct_chapter4.pdf',
            display_text: '4 (PDF)',
            'Content-Type': 'application/pdf',
            accessed: { 'date-parts': [ [ 2026, 10, 18 ] ] },
          },
          {
            link: 'http://staff.ustc.edu.cn/~wyzhou/ct_chapter5.pdf',
            display_text: '5 (PDF)',
            'Content-Type': 'application/pdf',
            accessed: { 'date-parts': [ [ 2026, 10, 18 ] ] },
          },
          {
            link: 'http://staff.ustc.edu.cn/~wyzhou/chapter6.pdf',
            display_text: '6 (PDF)',
            'Content-Type': 'application/pdf',
            accessed: { 'date-parts': [ [ 2026, 10, 18 ] ] },
          },
          {
            link: 'http://staff.ustc.edu.cn/~wyzhou/chapter7.pdf',
            display_text: '7 (PDF)',
            'Content-Type': 'application/pdf',
            accessed: { 'date-parts': [ [ 2026, 10, 18 ] ] },
          },
          {
            link: 'http://staff.ustc.edu.cn/~wyzhou/chapter8.pdf',
            display_text: '8 (PDF)',
            'Content-Type': 'application/pdf',
            accessed: { 'date-parts': [ [ 2026, 10, 18 ] ] },
          },
          {
            link: 'http://staff.ustc.edu.cn/~wyzhou/chapter9.pdf',
            display_text: '9 (PDF)',
            'Content-Type': 'application/pdf',
            accessed: { 'date-parts': [ [ 2026, 10, 18 ] ] },
          },
        ],
      } satisfies CSL.Custom,
    } satisfies types_data.Material,
  },
] satisfies types_data.Entry[]
