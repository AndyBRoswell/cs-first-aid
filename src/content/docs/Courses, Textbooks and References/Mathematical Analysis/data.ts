import * as docs_base from '../../base.ts'
import * as data_type from '@/types/data.ts'
import * as catalog from '@/data/Materials/catalog.ts'
import '@/data/Materials/史济怀 数分.ts'
import '@/data/Materials/陈纪修 数分.ts'
import '@/data/Materials/徐森林 数分.ts'
import '@/data/Materials/何琛 史济怀 徐森林 数分.ts'
import '@/data/Materials/陈纪修 数分习题.ts'
import '@/data/Materials/徐森林 数分习题.ts'
import '@/data/Materials/程艺 数分.ts'
import '@/data/Materials/张筑生 数分.ts'
import '@/data/Materials/H&N Applied Analysis.ts'
import '@/data/Materials/Abbott, Understanding Analysis.ts'
import '@/data/Materials/Pugh, Real Mathematical Analysis.ts'
import '@/data/Materials/Apostol, Math Anal.ts'
import '@/data/Materials/Rudin PMA.ts'
import '@/data/Materials/Zorich, Math Anal.ts'
import "@/data/Materials/Fikhtengol'ts, Calculus.ts"
import '@/data/Materials/刘思齐 数分选书.ts'
import '@/data/Materials/分析学爱好者 我为何不建议初学者用清华丘班数分讲义学数分.ts'

export const info = {
  canonical_name: '数学分析',
  names: [ '数学分析', ],
  tags: [ '基础选修', ],
  materials: {
    text: [
      catalog.get('史济怀 数分 2003上'),
      catalog.get('史济怀 数分 2003下'),
      catalog.get('史济怀 数分上'),
      catalog.get('史济怀 数分下'),
      catalog.get('陈纪修 数分2版上'),
      catalog.get('陈纪修 数分2版下'),
      catalog.get('陈纪修 数分上'),
      catalog.get('陈纪修 数分下'),
      catalog.get('徐森林 数分1'),
      catalog.get('徐森林 数分2'),
      catalog.get('徐森林 数分3'),
      catalog.get('程艺 数分1'),
      catalog.get('程艺 数分2'),
      catalog.get('程艺 数分3'),
      catalog.get('张筑生 数分1'),
      catalog.get('张筑生 数分2'),
      catalog.get('张筑生 数分3'),
      catalog.get('H&N Applied Analysis'),
      catalog.get('Abbott, Understanding Analysis'),
      catalog.get('Pugh, Real Mathematical Analysis'),
    ],
    problem_sets: [
      catalog.get('陈纪修 数分习题2版上'),
      catalog.get('陈纪修 数分习题2版下'),
      catalog.get('陈纪修 数分习题上'),
      catalog.get('陈纪修 数分习题下'),
      catalog.get('徐森林 数分习题上'),
      catalog.get('徐森林 数分习题下'),
    ],
    other: [
      catalog.get('何琛 史济怀 徐森林 数分1'),
      catalog.get('何琛 史济怀 徐森林 数分2'),
      catalog.get('何琛 史济怀 徐森林 数分3'),
      catalog.get('Apostol, Math Anal'),
      catalog.get('Rudin PMA'),
      catalog.get('Zorich, 数分1'),
      catalog.get('Zorich, 数分2'),
      catalog.get(`Fikhtengol'ts, 微积分1`),
      catalog.get(`Fikhtengol'ts, 微积分2`),
      catalog.get(`Fikhtengol'ts, 微积分3`),
      catalog.get('刘思齐 数分选书'),
      catalog.get('我为何不建议初学者用清华丘班数分讲义学数分'),
    ],
  }
} satisfies data_type.Course

export const bib = docs_base.print_bibliography(info.materials!)
