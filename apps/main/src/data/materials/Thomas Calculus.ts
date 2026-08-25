import * as types_data from '@cs-first-aid/bibkit/types/data'
import * as CSL from '@cs-first-aid/bibkit/CSL'

export const entries = [
  {
    id: [
      'Thomas Calculus',
    ],
    material: {
      type: 'book',
      author: [
        { given: 'Joel R.', family: 'Hass' }, { given: 'Christopher E.', family: 'Heil' },
        { given: 'Maurice D.', family: 'Weir' }, { given: 'Przemyslaw', family: 'Bogacki' },
      ],
      title: `Thomas Calculus`,
      edition: 15,
      publisher: 'Pearson',
      "publisher-place": 'US',
      issued: { "date-parts": [ [ 2022, 12, 29 ], ], },
      ISBN: '9780137616077' as CSL.ISBN,
      URL: 'https://www.pearson.com/en-us/subject-catalog/p/thomas-calculus/P200000007103/9780137616077?format=eTextbook_lifetime',
      accessed: { "date-parts": [ [ 2026, 4, 3 ], ], },
    },
  },
  {
    id: [
      'Thomas Calculus Early Transcendentals',
    ],
    material: {
      type: 'book',
      author: [
        { given: 'Joel R.', family: 'Hass' }, { given: 'Christopher E.', family: 'Heil' },
        { given: 'Maurice D.', family: 'Weir' }, { given: 'Przemyslaw', family: 'Bogacki' },
      ],
      title: `Thomas Calculus: Early Transcendentals`,
      edition: 15,
      publisher: 'Pearson',
      "publisher-place": 'US',
      issued: { "date-parts": [ [ 2022, 2, 28 ], ], },
      ISBN: '9780137559824' as CSL.ISBN,
      URL: 'https://www.pearson.com/en-us/subject-catalog/p/thomas-calculus-early-transcendentals/P200000007104/9780137559824?format=eTextbook_lifetime',
      accessed: { "date-parts": [ [ 2026, 4, 3 ], ], },
    },
  }
] satisfies types_data.Entry[]