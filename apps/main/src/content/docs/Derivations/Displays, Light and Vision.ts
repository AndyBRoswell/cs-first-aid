import * as catalog from '@cs-first-aid/bibkit/catalog'
import * as util from '@cs-first-aid/util'
import '@/data/materials/import materials.ts'

export const references = [
  ...catalog.filter(m => m.type === 'paper-conference' && util.ieq(m.title!, 'Optimal Rendering for Colour Matrix Displays'), { count: 1 }),
]

