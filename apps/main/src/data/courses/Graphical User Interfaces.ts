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
          ...catalog.filter(item => item.type === 'webpage' && item.title === 'Qt Widgets' && item.author?.some(author => author.literal === 'The Qt Company'), { count: 1 }),
          ...catalog.filter(item => item.type === 'webpage' && item.title === 'Qt Quick' && item.author?.some(author => author.literal === 'The Qt Company'), { count: 1 }),
          ...catalog.filter(item => item.type === 'webpage' && item.title === 'Windows Presentation Foundation documentation' && item.author?.some(author => author.literal === 'Microsoft'), { count: 1 }),
          ...catalog.filter(item => item.type === 'webpage' && item.title === 'Avalonia documentation' && item.author?.some(author => author.literal === 'AvaloniaUI'), { count: 1 }),
        ],
      },
      article: {
        en: [
          ...catalog.filter(item => item.type === 'post' && item.title === 'TextArea memory leak - QML' && item.author?.some(author => author.literal === 'Mohammadsm'), { count: 1 }),
          ...catalog.filter(item => item.number === 'QTBUG-95329', { count: 1 }),
          ...catalog.filter(item => item.number === 'QTBUG-103819', { count: 1 }),
          ...catalog.filter(item => item.number === 'QTBUG-107214', { count: 1 }),
          ...catalog.filter(item => item.type === 'post' && item.title === 'QML TextArea performance with large data buffers' && item.author?.some(author => author.literal === 'preiter'), { count: 1 }),
        ],
      },
    },
  },
} satisfies types_data.Course
