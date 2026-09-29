import * as types_data from '@cs-first-aid/bibkit/types/data'

export const entries = [
  {
    id: [],
    material: {
      type: 'book',
      title: "Computer Systems: A Programmer's Perspective",
      author: [ { given: 'Randal E.', family: 'Bryant' }, { given: 'David R.', family: "O'Hallaron" } ],
      edition: 3,
      publisher: 'Pearson',
      issued: { 'date-parts': [ [ 2015, 3, 2 ] ] },
      ISBN: '9780134092669',
      language: 'en-US',
      URL: 'https://www.pearson.com/en-us/subject-catalog/p/computer-systems-a-programmers-perspective/P200000003479/9780134092669',
      accessed: { 'date-parts': [ [ 2026, 9, 29 ] ] },
    } satisfies types_data.Material,
  },
] satisfies types_data.Entry[]
