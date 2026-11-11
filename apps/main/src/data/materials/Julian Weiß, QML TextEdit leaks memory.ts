import * as types_data from '@cs-first-aid/bibkit/types/data'

export const entries = [
  {
    id: [],
    material: {
      id: 'QTBUG-95329',
      type: 'webpage',
      title: 'QML TextEdit leaks memory',
      author: [ { given: 'Julian', family: 'Weiß' } ],
      'container-title': 'Qt Bug Tracker',
      genre: 'Bug report',
      number: 'QTBUG-95329',
      language: 'en',
      URL: 'https://bugreports.qt.io/browse/QTBUG-95329',
      issued: { 'date-parts': [ [ 2021, 7, 22 ] ] },
      accessed: { 'date-parts': [ [ 2026, 11, 11 ] ] },
    } satisfies types_data.Material,
  },
] satisfies types_data.Entry[]
