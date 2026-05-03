import * as catalog from './catalog.ts'
import * as Data_Type from '@/types/data.ts'

const items = [
  {
    id: [
      'Calculus: A Complete Course',
      'Adams Calculus',
      `Adams' Calculus`,
      'Adams, Calculus: A Complete Course',
      'Adams, Calculus: A Complete Course, 10e',
      'Adams, Calculus: A Complete Course, 2021',
      { unordered_author: 'Adams', title: 'Calculus: A Complete Course', },
      { unordered_author: 'Adams', title: 'Calculus: A Complete Course', edition: 10, },
      { unordered_author: 'Adams', title: 'Calculus: A Complete Course', date: 2021, },
    ],
    material: {
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
    }
  }
] satisfies Data_Type.Item[]

catalog.add_items(items)