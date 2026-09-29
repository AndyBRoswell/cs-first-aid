import * as types_data from '@cs-first-aid/bibkit/types/data'

export const entries = [
  {
    id: [],
    material: {
      type: 'book',
      title: 'Computer Organization and Design ARM Edition: The Hardware Software Interface',
      author: [ { given: 'David A.', family: 'Patterson' }, { given: 'John L.', family: 'Hennessy' } ],
      edition: 1,
      publisher: 'Morgan Kaufmann',
      issued: { 'date-parts': [ [ 2016, 3, 2 ] ] },
      ISBN: '9780128017333',
      language: 'en-US',
      URL: 'https://shop.elsevier.com/books/computer-organization-and-design-arm-edition/patterson/978-0-12-801733-3',
      accessed: { 'date-parts': [ [ 2026, 9, 29 ] ] },
    } satisfies types_data.Material,
  },
  {
    id: [],
    material: {
      type: 'book',
      title: 'Computer Organization and Design MIPS Edition: The Hardware/Software Interface',
      author: [ { given: 'David A.', family: 'Patterson' }, { given: 'John L.', family: 'Hennessy' } ],
      edition: 6,
      publisher: 'Morgan Kaufmann',
      issued: { 'date-parts': [ [ 2020, 11, 20 ] ] },
      ISBN: '9780128201091',
      language: 'en-US',
      URL: 'https://shop.elsevier.com/books/computer-organization-and-design-mips-edition/patterson/978-0-12-820109-1',
      accessed: { 'date-parts': [ [ 2026, 9, 29 ] ] },
    } satisfies types_data.Material,
  },
  {
    id: [],
    material: {
      type: 'book',
      title: 'Computer Organization and Design RISC-V Edition: The Hardware Software Interface',
      author: [ { given: 'David A.', family: 'Patterson' }, { given: 'John L.', family: 'Hennessy' } ],
      edition: 1,
      publisher: 'Morgan Kaufmann',
      issued: { 'date-parts': [ [ 2017, 4, 13 ] ] },
      ISBN: '9780128122754',
      language: 'en-US',
      URL: 'https://shop.elsevier.com/books/computer-organization-and-design-risc-v-edition/patterson/978-0-12-812275-4',
      accessed: { 'date-parts': [ [ 2026, 9, 29 ] ] },
    } satisfies types_data.Material,
  },
  {
    id: [],
    material: {
      type: 'book',
      title: 'Computer Organization and Design RISC-V Edition: The Hardware Software Interface',
      author: [ { given: 'David A.', family: 'Patterson' }, { given: 'John L.', family: 'Hennessy' } ],
      edition: 2,
      publisher: 'Morgan Kaufmann',
      issued: { 'date-parts': [ [ 2020, 12, 11 ] ] },
      ISBN: '9780128203316',
      language: 'en-US',
      URL: 'https://shop.elsevier.com/books/computer-organization-and-design-risc-v-edition/patterson/978-0-12-820331-6',
      accessed: { 'date-parts': [ [ 2026, 9, 29 ] ] },
    } satisfies types_data.Material,
  },
] satisfies types_data.Entry[]
