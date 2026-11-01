import * as types_data from '@cs-first-aid/bibkit/types/data'

export const entries = [
  {
    id: [],
    material: {
      type: 'webpage',
      title: 'Qt Widgets',
      author: [ { literal: 'The Qt Company' } ],
      'container-title': 'Qt 6 Documentation',
      language: 'en',
      URL: 'https://doc.qt.io/qt-6/qtwidgets-index.html',
      accessed: { 'date-parts': [ [ 2026, 11, 1 ] ] },
    } satisfies types_data.Material,
  },
] satisfies types_data.Entry[]
