import * as types_data from '@cs-first-aid/bibkit/types/data'

export const entries = [
  {
    id: [],
    material: {
      type: 'book',
      title: 'Signals and Systems, Pearson New International Edition',
      author: [
        { given: 'Alan V.', family: 'Oppenheim' },
        { given: 'Alan S.', family: 'Willsky' },
        { given: 'S. Hamid', family: 'Nawab' },
      ],
      edition: 2,
      issued: { 'date-parts': [ [ 2013, 7, 29 ] ] },
      publisher: 'Pearson Education Limited',
      ISBN: '9781292025902',
      language: 'en-US',
      URL: 'https://www.pearson.com/en-gb/subject-catalog/p/signals-and-systems-pearson-new-international-edition/P200000005151',
      accessed: { 'date-parts': [ [ 2026, 9, 27 ] ] },
    } satisfies types_data.Material,
  },
] satisfies types_data.Entry[]
