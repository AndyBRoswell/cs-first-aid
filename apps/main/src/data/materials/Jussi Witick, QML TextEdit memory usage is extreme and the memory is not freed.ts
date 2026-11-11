import * as types_data from '@cs-first-aid/bibkit/types/data'

export const entries = [
  {
    id: [],
    material: {
      id: 'QTBUG-103819',
      type: 'webpage',
      title: 'QML TextEdit memory usage is extreme and the memory is not freed',
      author: [ { given: 'Jussi', family: 'Witick' } ],
      'container-title': 'Qt Bug Tracker',
      genre: 'Bug report',
      number: 'QTBUG-103819',
      language: 'en',
      URL: 'https://bugreports.qt.io/browse/QTBUG-103819',
      issued: { 'date-parts': [ [ 2022, 5, 25 ] ] },
      accessed: { 'date-parts': [ [ 2026, 11, 11 ] ] },
    } satisfies types_data.Material,
  },
] satisfies types_data.Entry[]
