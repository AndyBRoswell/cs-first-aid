import * as types_data from '@cs-first-aid/bibkit/types/data'
import * as catalog from '@cs-first-aid/bibkit/catalog'
import '@/data/materials/import materials.ts'

export const info = {
  canonical_name: '软件架构',
  name: [ '软件架构', '软件体系结构' ],
  material: {
    reference: {
      lecture_notes_and_slides: {
        en: [
          ...catalog.filter(item => item.type === 'document' && item.title === 'CSSE6400: Software Architecture' && item.version === 'Semester 1, 2026', { count: 1 }),
          ...catalog.filter(item => item.type === 'document' && item.title === 'Software Architecture Course' && item.publisher === 'Universidad de Oviedo' && item.version === '2025–2026', { count: 1 }),
          ...catalog.filter(item => item.type === 'document' && item.title === 'CS446: Software Design and Architecture' && item.version === 'Winter 2026', { count: 1 }),
          ...catalog.filter(item => item.type === 'document' && item.title === 'IN4315: Software Architecture' && item.version === '2022', { count: 1 }),
          ...catalog.filter(item => item.type === 'document' && item.title === 'Software Architecture' && item.author?.some(author => author.family === 'Taylor'), { count: 1 }),
          ...catalog.filter(item => item.type === 'document' && item.title === 'Advanced Software Engineering' && item.author?.some(author => author.family === 'Gall') && item.version === 'Spring 2012', { count: 1 }),
        ],
      },
      book: {
        en: [
          ...catalog.filter(item => item.type === 'book' && item.title === 'The Architecture of Open Source Applications' && item.volume === 1, { count: 1 }),
          ...catalog.filter(item => item.type === 'book' && item.title === 'The Architecture of Open Source Applications' && item.volume === 2, { count: 1 }),
        ],
      },
      topic: {
        architecture_case_studies: {
          en: [
            ...catalog.filter(item => item.type === 'webpage' && item.title === 'Delft Students on Software Architecture' && item.version === '2022', { count: 1 }),
          ],
        },
      },
    },
  },
} satisfies types_data.Course
