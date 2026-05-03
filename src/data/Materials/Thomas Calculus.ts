import * as catalog from './catalog.ts'
import * as Data_Type from '@/types/data.ts'

const items = [
  {
    id: [
      'Thomas Calculus',
      'Thomas Calculus, 15e',
      'Thomas Calculus, 2022',
      { unordered_author: [ 'Hass', 'Heil', 'Weir', 'Bogacki' ], title: 'Thomas Calculus', },
      { unordered_author: [ 'Hass', 'Heil', 'Weir', 'Bogacki' ], title: 'Thomas Calculus', edition: 15, },
      { unordered_author: [ 'Hass', 'Heil', 'Weir', 'Bogacki' ], title: 'Thomas Calculus', date: 2022, },
    ],
    material: {
      type: 'book',
      id: `Thomas Calculus`,
      author: [
        { given: 'Joel R.', family: 'Hass' }, { given: 'Christopher E.', family: 'Heil' },
        { given: 'Maurice D.', family: 'Weir' }, { given: 'Przemyslaw', family: 'Bogacki' },
      ],
      title: `Thomas Calculus`,
      edition: 15,
      publisher: 'Pearson',
      "publisher-place": 'US',
      issued: { "date-parts": [ [ 2022, 12, 29 ], ], },
      ISBN: '9780137616077',
      URL: 'https://www.pearson.com/en-us/subject-catalog/p/thomas-calculus/P200000007103/9780137616077?format=eTextbook_lifetime',
      accessed: { "date-parts": [ [ 2026, 4, 3 ], ], },
    },
  },
  {
    id: [
      'Thomas Calculus Early Transcendentals',
      'Thomas Calculus: Early Transcendentals, 15e',
      'Thomas Calculus: Early Transcendentals, 2022',
      { unordered_author: [ 'Hass', 'Heil', 'Weir', 'Bogacki' ], title: 'Thomas Calculus: Early Transcendentals', },
      { unordered_author: [ 'Hass', 'Heil', 'Weir', 'Bogacki' ], title: 'Thomas Calculus: Early Transcendentals', edition: 15, },
      { unordered_author: [ 'Hass', 'Heil', 'Weir', 'Bogacki' ], title: 'Thomas Calculus: Early Transcendentals', date: 2022, },
    ],
    material: {
      type: 'book',
      id: `Thomas Calculus Early Transcendentals`,
      author: [
        { given: 'Joel R.', family: 'Hass' }, { given: 'Christopher E.', family: 'Heil' },
        { given: 'Maurice D.', family: 'Weir' }, { given: 'Przemyslaw', family: 'Bogacki' },
      ],
      title: `Thomas Calculus: Early Transcendentals`,
      edition: 15,
      publisher: 'Pearson',
      "publisher-place": 'US',
      issued: { "date-parts": [ [ 2022, 2, 28 ], ], },
      ISBN: '9780137559824',
      URL: 'https://www.pearson.com/en-us/subject-catalog/p/thomas-calculus-early-transcendentals/P200000007104/9780137559824?format=eTextbook_lifetime',
      accessed: { "date-parts": [ [ 2026, 4, 3 ], ], },
    },
  }
] satisfies Data_Type.Item[]

catalog.add_items(items)