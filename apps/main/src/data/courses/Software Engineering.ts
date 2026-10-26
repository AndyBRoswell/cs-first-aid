import * as types_data from '@cs-first-aid/bibkit/types/data'
import * as catalog from '@cs-first-aid/bibkit/catalog'
import '@/data/materials/import materials.ts'

export const info = {
  canonical_name: '软件工程',
  name: [ '软件工程' ],
  material: {
    reference: {
      en: [
        ...catalog.filter(item => item.type === 'document' && item.title === 'Software Engineering' && item.author?.some(author => author.family === 'Harle'), { count: 1 }),
        ...catalog.filter(item => item.type === 'document' && item.title === '17-313: Foundations of Software Engineering' && item.version === 'Spring 2026', { count: 1 }),
        ...catalog.filter(item => item.type === 'document' && item.title === '6.102: Software Construction' && item.version === 'Spring 2026', { count: 1 }),
        ...catalog.filter(item => item.type === 'book' && item.title === 'Software Engineering for Self-Directed Learners', { count: 1 }),
        ...catalog.filter(item => item.type === 'book' && item.title === 'Engineering Software as a Service' && item.edition === 2, { count: 1 }),
        ...catalog.filter(item => item.type === 'book' && item.title === 'Software Engineering at Google' && item.author?.some(author => author.family === 'Winters'), { count: 1 }),
        ...catalog.filter(item => item.type === 'book' && item.title === 'Security Engineering' && item.author?.some(author => author.family === 'Anderson') && item.edition === 3, { count: 1 }),
      ],
    },
  },
} satisfies types_data.Course
