import * as base from '../../base.ts'
import * as catalog from '../../Materials/catalog.ts'
import '../../Materials/常庚哲 史济怀 数分.ts'
import '../../Materials/H&N Applied Analysis.ts'
import '../../Materials/Abbott, Understanding Analysis.ts'
import '../../Materials/Pugh, Real Mathematical Analysis.ts'
import '../../Materials/刘思齐 数分选书.ts'
import '../../Materials/分析学爱好者 我为何不建议初学者用清华丘班数分讲义学数分.ts'

export const info = {
  canonical_name: '数学分析',
  names: [ '数学分析', ],
  tags: [ '基础选修', ],
  materials: {
    textbooks: [
      catalog.get('常庚哲 史济怀 数分 2003 上'),
      catalog.get('常庚哲 史济怀 数分 2003 下'),
      catalog.get('常庚哲 史济怀 数分 2026 上'),
      catalog.get('常庚哲 史济怀 数分 2026 下'),
      catalog.get('H&N Applied Analysis'),
      catalog.get('Abbott, Understanding Analysis'),
      catalog.get('Pugh, Real Mathematical Analysis'),
    ],
    other: [
      catalog.get('刘思齐 数分选书'),
      catalog.get('我为何不建议初学者用清华丘班数分讲义学数分'),
    ],
  }
} satisfies base.Course

export const bib = base.print_bibliography(info.materials!)
