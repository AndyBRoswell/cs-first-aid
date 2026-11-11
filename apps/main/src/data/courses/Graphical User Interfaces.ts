import * as types_data from '@cs-first-aid/bibkit/types/data'
import * as catalog from '@cs-first-aid/bibkit/catalog'
import '@/data/materials/import materials.ts'

export const info = {
  canonical_name: '图形用户界面',
  name: [ '图形用户界面', 'Graphical User Interfaces', 'GUI' ],
  material: {
    reference: {
      lecture_notes_and_slides: {
        en: [
          ...catalog.filter(item => item.type === 'document' && item.title === 'Programming in Graphical Environment' && item.custom?.institution?.includes('Politechnika Warszawska') && item.version === '2025/26', { count: 1 }),
          ...catalog.filter(item => item.type === 'document' && item.title === 'COMP2811 Exercises' && item.custom?.institution?.includes('University of Leeds'), { count: 1 }),
        ],
      },
      documentation: {
        en: [
          ...catalog.filter(item => item.type === 'webpage' && item.URL === 'https://doc.qt.io/qt-6/qtwidgets-index.html', { count: 1 }),
          ...catalog.filter(item => item.type === 'webpage' && item.URL === 'https://learn.microsoft.com/en-us/dotnet/desktop/wpf/', { count: 1 }),
          ...catalog.filter(item => item.type === 'webpage' && item.URL === 'https://docs.avaloniaui.net/docs/welcome', { count: 1 }),
        ],
      },
      article: {
        en: [
          ...catalog.filter(item => item.URL === 'https://forum.qt.io/topic/112772/textarea-memory-leak-qml', { count: 1 }),
          ...catalog.filter(item => item.number === 'QTBUG-95329', { count: 1 }),
          ...catalog.filter(item => item.number === 'QTBUG-103819', { count: 1 }),
          ...catalog.filter(item => item.number === 'QTBUG-107214', { count: 1 }),
          ...catalog.filter(item => item.URL === 'https://forum.qt.io/topic/160753/qml-textarea-performance-with-large-data-buffers', { count: 1 }),
        ],
      },
    },
  },
} satisfies types_data.Course
