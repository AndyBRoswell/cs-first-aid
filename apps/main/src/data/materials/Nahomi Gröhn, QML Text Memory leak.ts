import * as types_data from '@cs-first-aid/bibkit/types/data'

export const entries = [
  {
    id: [],
    material: {
      id: 'QTBUG-107214',
      type: 'webpage',
      title: 'QML Text Memory leak',
      author: [ { given: 'Nahomi', family: 'Gröhn' } ],
      'container-title': 'Qt Bug Tracker',
      genre: 'Bug report',
      number: 'QTBUG-107214',
      language: 'en',
      URL: 'https://bugreports.qt.io/browse/QTBUG-107214',
      issued: { 'date-parts': [ [ 2022, 10, 5 ] ] },
      accessed: { 'date-parts': [ [ 2026, 11, 11 ] ] },
    } satisfies types_data.Material,
  },
] satisfies types_data.Entry[]
