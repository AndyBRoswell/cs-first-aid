import * as types_data from '@cs-first-aid/bibkit/types/data'

export const entries = [
  {
    id: [],
    material: {
      type: 'webpage',
      title: 'Qt Quick',
      author: [ { literal: 'The Qt Company' } ],
      language: 'en',
      URL: 'https://doc.qt.io/qt-6/qtquick-index.html',
      accessed: { 'date-parts': [ [ 2026, 11, 12 ] ] },
    } satisfies types_data.Material,
  },
] satisfies types_data.Entry[]
