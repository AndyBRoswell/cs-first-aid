import * as types_data from '@cs-first-aid/bibkit/types/data'

export const entries = [
  {
    id: [],
    material: {
      type: 'book',
      title: 'Signals and Systems',
      author: [
        { given: 'Alan V.', family: 'Oppenheim' },
        { given: 'Alan S.', family: 'Willsky' },
        { given: 'S. Hamid', family: 'Nawab' },
      ],
      edition: 2,
      issued: { 'date-parts': [ [ 1996, 8, 6 ] ] },
      publisher: 'Prentice Hall',
      ISBN: '9780138147570',
      language: 'en-US',
      URL: 'https://www.pearson.com/en-us/subject-catalog/p/signals-and-systems/P200000003155',
      accessed: { 'date-parts': [ [ 2026, 9, 27 ] ] },
    } satisfies types_data.Material,
  },
] satisfies types_data.Entry[]
