// import Cite from 'citation-js'

import * as base from './base.ts'

export const info: base.Course = {
  canonical_name: '微积分',
  names: [ '微积分', '高等数学', ],
  tags: [ '基础必修', ],
  materials: {
    textbooks: [
      {
        type: 'book',
        id: 'Calculus: A Complete Course',
        author: [
          {
            family: 'Adams',
            given: 'Robert A.',
          },
          {
            family: 'Essex',
            given: 'Christopher',
          },
        ],
        title: 'Calculus: A Complete Course',
        edition: 10,
        publisher: 'Pearson',
        "publisher-place": 'Toronto, ON',
        issued: {
          "date-parts": [ [ 2021, ], ],
        },
        "number-of-pages": 1200,
        ISBN: '9780135766781',
        language: 'en-CA',
        URL: 'https://www.pearson.com/en-ca/subject-catalog/p/calculus-a-complete-course/P200000002479/9780135766781',
        accessed: {
          "date-parts": [ [ 2026, 4, 2 ], ],
        },
        note: 'Printed ver 9780135732588',
      },
      {
        type: 'book',
        id: '简明微积分',
        author: [
          {
            literal: '龚昇',
          }
        ],
        title: '简明微积分',
        edition: 4,
        publisher: '高等教育出版社',
        "publisher-place": '北京',
        issued: {
          "date-parts": [ [ 2006, ], ],
        },
        "number-of-pages": 565,
        ISBN: '9787040186932',
        "collection-title": "普通高等教育“十五”国家级规划教材",
        language: "zh-CN",
        URL: 'https://book.douban.com/subject/2025549/',
        accessed: {
          "date-parts": [ [ 2026, 4, 2 ], ],
        },
      },
    ]
  }
}

export const References = base.print_bibliography(info.materials!)