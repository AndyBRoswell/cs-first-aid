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
        author: [ { given: 'Robert A.', family: 'Adams', }, { given: 'Christopher', family: 'Essex', }, ],
        title: 'Calculus: A Complete Course',
        edition: 10,
        publisher: 'Pearson',
        "publisher-place": 'Toronto, ON',
        issued: { "date-parts": [ [ 2021, ], ], },
        "number-of-pages": 1200,
        ISBN: '9780135766781',
        language: 'en-CA',
        URL: 'https://www.pearson.com/en-ca/subject-catalog/p/calculus-a-complete-course/P200000002479/9780135766781',
        accessed: { "date-parts": [ [ 2026, 4, 2 ], ], },
        note: 'Printed ver 9780135732588',
      },
      {
        type: 'book',
        id: '简明微积分',
        author: [ { literal: '龚昇', } ],
        title: '简明微积分',
        edition: 4,
        publisher: '高等教育出版社',
        "publisher-place": '北京',
        issued: { "date-parts": [ [ 2006, ], ], },
        "number-of-pages": 565,
        ISBN: '9787040186932',
        "collection-title": "普通高等教育“十五”国家级规划教材",
        language: "zh-CN",
        URL: 'https://book.douban.com/subject/2025549/',
        accessed: { "date-parts": [ [ 2026, 4, 2 ], ], },
      },
      {
        type: 'book',
        id: `Apostol's Calculus I`,
        author: [ { given: 'Tom Mike', family: 'Apostol', }, ],
        title: 'CALCULUS VOLUME I: One-Variable Calculus, with an Introductino to Linear Algebra',
        volume: 1,
        edition: 2,
        editor: [ { given: 'George', family: 'Springer', }, ],
        publisher: 'John Wiley & Sons, Inc.',
        "publisher-place": 'US',
        issued: { "date-parts": [ [ 1967, ] ], },
        ISBN: '0471000051',
        language: 'en-US',
        URL: 'https://www.wiley.com/en-us/Calculus%2C+Volume+1%2C+2nd+Edition-p-9781119496731',
        accessed: { "date-parts": [ [ 2026, 4, 3 ], ], },
      },
      {
        type: 'book',
        id: `Apostol's Calculus II`,
        author: [ { given: 'Tom Mike', family: 'Apostol', }, ],
        title: 'CALCULUS VOLUME II: Multi Variable Calculus and Linear Algebra, with Applications to Differential Equations and Probability',
        volume: 2,
        edition: 2,
        editor: [ { given: 'George', family: 'Springer', }, ],
        publisher: 'John Wiley & Sons, Inc.',
        "publisher-place": 'US',
        issued: { "date-parts": [ [ 1969, ], ], },
        ISBN: '0471000078',
        language: 'en-US',
        URL: 'https://www.wiley.com/en-us/Calculus%2C+Volume+2%2C+2nd+Edition-p-9781119496762',
        accessed: { "date-parts": [ [ 2026, 4, 3 ], ], },
      },
    ]
  }
}

export const bib = base.print_bibliography(info.materials!)