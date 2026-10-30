import * as catalog from '@cs-first-aid/bibkit/catalog'
import '@/data/materials/import materials.ts'

export const references = [
  ...catalog.filter(
    m => m.URL === 'https://aws.amazon.com/cn/what-is/sdlc/',
    { count: 1 },
  ),
  ...catalog.filter(
    m => m.URL === 'https://www.akamai.com/zh/glossary/software-development-lifecycle-sdlc',
    { count: 1 },
  ),
]
