import * as types_data from '@cs-first-aid/bibkit/types/data'

export const entries = [
  {
    id: [],
    material: {
      type: 'book',
      title: 'Logic and Computer Design Fundamentals, Global Edition',
      author: [ { given: 'M. Morris', family: 'Mano' }, { given: 'Charles R.', family: 'Kime' }, { given: 'Tom', family: 'Martin' } ],
      edition: 5,
      medium: 'Paperback',
      publisher: 'Pearson',
      issued: { 'date-parts': [ [ 2015, 8, 28 ] ] },
      ISBN: '9781292096070',
      language: 'en',
      URL: 'https://www.pearson.com/en-gb/subject-catalog/p/logic-and-computer-design-fundamentals-global-edition/P200000004917/9781292096070',
      accessed: { 'date-parts': [ [ 2026, 11, 21 ] ] },
      custom: {
        variant: [
          { type: 'book', medium: 'eBook', ISBN: '9781292096124', issued: { 'date-parts': [ [ 2016, 9, 12 ] ] } },
          {
            type: 'book',
            title: 'Logic & Computer Design Fundamentals',
            medium: 'Hardcover',
            issued: { 'date-parts': [ [ 2015, 3, 4 ] ] },
            ISBN: '9780133760637',
            URL: 'https://www.pearson.com/en-ca/subject-catalog/p/logic-computer-design-fundamentals/P200000003256/9780133760637',
          },
        ],
      },
    } satisfies types_data.Material,
  },
] satisfies types_data.Entry[]
