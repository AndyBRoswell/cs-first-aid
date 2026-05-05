import * as docs_base from '../../base.ts'
import * as data_type from '@/types/data.ts'
import * as catalog from '@/data/materials/catalog.ts'
import '@/data/materials/R. A. Adams & C. Essex, Calculus.ts'
import '@/data/materials/龚昇 简明微积分.ts'
import '@/data/materials/同济高数.ts'
import '@/data/materials/T. M. Apostol, Calculus.ts'
import '@/data/materials/Thomas Calculus.ts'
import '@/data/materials/Strang Calculus.ts'
import '@/data/materials/Stewart Calculus.ts'
import '@/data/materials/Princeton Calculus Reader.ts'

export const info = {
  canonical_name: '微积分',
  name: [ '微积分', '高等数学', ],
  tag: [ '基础必修', ],
  material: {
    text: [
      catalog.get('Adams Calculus'),
      catalog.get('简明微积分'),
    ],
    other: [
      catalog.get('同济高数上'),
      catalog.get('同济高数下'),
      catalog.get('Apostol Calculus I'),
      catalog.get('Apostol Calculus II'),
      catalog.get('Thomas Calculus'),
      catalog.get('Thomas Calculus Early Transcendentals'),
      catalog.get('Strang Calculus'),
    ],
    excluded: [
      catalog.get('Stewart Calculus'),
      catalog.get('Stewart Calculus Early Transcendentals'),
      catalog.get('Princeton Calculus Reader'),
    ]
  }
} satisfies data_type.Course

export const bib = docs_base.print_bibliography(info.material!)
