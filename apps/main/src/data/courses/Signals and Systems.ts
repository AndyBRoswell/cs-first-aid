import * as types_data from '@cs-first-aid/bibkit/types/data'
import * as catalog from '@cs-first-aid/bibkit/catalog'
import '@/data/materials/import materials.ts'
import * as util from '@cs-first-aid/util'

export const info = {
  canonical_name: '信号与系统',
  name: [ '信号与系统', ],
  material: {
    reference: [
      ...catalog.filter(item => item.type === 'book' && util.ieq(item.title!, 'Signals and Systems') && item.author?.some(author => author.family === 'Adams') && item.edition === '6.0', { count: 1 }),
      ...catalog.filter(item => item.type === 'book' && util.ieq(item.title!, 'Signals and Systems, Pearson New International Edition') && item.author?.some(author => author.family === 'Oppenheim') && item.edition === 2, { count: 1 }),
    ],
  },
} satisfies types_data.Course
