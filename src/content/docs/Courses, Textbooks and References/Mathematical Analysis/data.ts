import * as docs_base from '../../base.ts'
import * as data_type from '@/types/data.ts'
import * as catalog from '../../../../data/materials/catalog.ts'
import '../../../../data/materials/史济怀 数分.ts'
import '../../../../data/materials/陈纪修 数分.ts'
import '../../../../data/materials/徐森林 数分.ts'
import '../../../../data/materials/何琛 史济怀 徐森林 数分.ts'
import '../../../../data/materials/陈纪修 数分习题.ts'
import '../../../../data/materials/徐森林 数分习题.ts'
import '../../../../data/materials/程艺 数分.ts'
import '../../../../data/materials/张筑生 数分.ts'
import '../../../../data/materials/H&N Applied Analysis.ts'
import '../../../../data/materials/Abbott, Understanding Analysis.ts'
import '../../../../data/materials/Pugh, Real Mathematical Analysis.ts'
import '../../../../data/materials/Apostol, Math Anal.ts'
import '../../../../data/materials/Rudin PMA.ts'
import '../../../../data/materials/Zorich, Math Anal.ts'
import "../../../../data/materials/Fikhtengol'ts, Calculus.ts"
import '../../../../data/materials/刘思齐 数分选书.ts'
import '../../../../data/materials/分析学爱好者 我为何不建议初学者用清华丘班数分讲义学数分.ts'

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
    videos: [
      catalog.get('史济怀 数分 公开课') as data_type.Course_Videos,
      catalog.get('陈纪修 数分 公开课') as data_type.Course_Videos,
      catalog.get('程艺 数分B1 公开课') as data_type.Course_Videos,
      catalog.get('程艺 数分B2 公开课') as data_type.Course_Videos,
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
