import * as docs_base from '../../base.ts'
import * as data_type from '@/types/data.ts'
import * as catalog from '@/data/Materials/catalog.ts'
import '@/data/Materials/Adams Calculus.ts'
import '@/data/Materials/龚昇 简明微积分.ts'
import '@/data/Materials/同济高数.ts'
import '@/data/Materials/Apostol Calculus.ts'
import '@/data/Materials/Thomas Calculus.ts'
import '@/data/Materials/Strang Calculus.ts'
import '@/data/Materials/Stewart Calculus.ts'
import '@/data/Materials/Princeton Calculus Reader.ts'

export const info = {
  canonical_name: '微积分',
  names: [ '微积分', '高等数学', ],
  tags: [ '基础必修', ],
  materials: {
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

export const bib = docs_base.print_bibliography(info.materials!)
