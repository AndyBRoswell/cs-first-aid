import * as base from '../../base.ts'
import * as catalog from '../../Materials/catalog.ts'
import '../../Materials/Adams Calculus.ts'
import '../../Materials/龚昇 简明微积分.ts'
import '../../Materials/同济高数.ts'
import '../../Materials/Apostol Calculus.ts'
import '../../Materials/Thomas Calculus.ts'
import '../../Materials/Strang Calculus.ts'
import '../../Materials/Stewart Calculus.ts'
import '../../Materials/Princeton Calculus Reader.ts'

export const info = {
  canonical_name: '微积分',
  names: [ '微积分', '高等数学', ],
  tags: [ '基础必修', ],
  materials: {
    main: [
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
} satisfies base.Course

export const bib = base.print_bibliography(info.materials!)
