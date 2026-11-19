import * as catalog from '@cs-first-aid/bibkit/catalog'
import '@/data/materials/import materials.ts'

export const references = [
  catalog.get('HTML Living Standard'),
  ...catalog.filter(
    m => m.title === 'Should we remove XSLT from the web platform?'
      && m.author?.some(a => a.family === 'Freed'),
    { count: 1 },
  ),
  ...catalog.filter(
    m => m.title === 'XSLTProcessor'
      && m['container-title'] === 'MDN Web Docs',
    { count: 1 },
  ),
  ...catalog.filter(
    m => m.title === 'Removing XSLT for a more secure browser'
      && m['container-title'] === 'Chrome for Developers',
    { count: 1 },
  ),
  ...catalog.filter(
    m => m.title === 'Deprecate and remove XSLT'
      && m['container-title'] === 'Chrome Platform Status',
    { count: 1 },
  ),
  ...catalog.filter(
    m => m.title === 'Chapter 1: Software & Software Engineering'
      && m.edition === 7
      && m.author?.some(a => a.family === 'Pressman'),
    { count: 1 },
  ),
]
