import * as types_data from '@cs-first-aid/bibkit/types/data'

export const entries = [
  {
    id: [ 'Thinking in Java', ],
    material: {
      type: 'book',
      title: 'Thinking in Java',
      author: [ { given: 'Bruce', family: 'Eckel' } ],
      edition: 4,
      publisher: 'Pearson',
      issued: { 'date-parts': [ [ 2006, 2, 10 ] ] },
      ISBN: '9780131872486',
      language: 'en-US',
      URL: 'https://www.informit.com/store/thinking-in-java-9780131872486',
      accessed: { 'date-parts': [ [ 2026, 9, 27 ] ] },
    } satisfies types_data.Material,
  },
] satisfies types_data.Entry[]
