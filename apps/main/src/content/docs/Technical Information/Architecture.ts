import * as catalog from '@cs-first-aid/bibkit/catalog'
import '@/data/materials/import materials.ts'

export const references = catalog.filter(
  m => m.title === 'Chapter 1: Software & Software Engineering'
    && m.edition === 7
    && m.author?.some(a => a.family === 'Pressman'),
  { count: 1 },
)
