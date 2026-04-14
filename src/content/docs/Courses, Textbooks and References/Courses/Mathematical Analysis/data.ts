import * as base from '../../base.ts'
import * as catalog from '../../Materials/catalog.ts'
import '../../Materials/常庚哲 史济怀 数分.ts'
import '../../Materials/陈纪修 於崇华 金路 数分.ts'
import '../../Materials/薛春华 徐森林 数分.ts'
import '../../Materials/何琛 史济怀 徐森林 数分.ts'
import '../../Materials/陈纪修 於崇华 金路 数分习题.ts'
import '../../Materials/薛春华 徐森林 数分习题.ts'
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
    main: [
      catalog.get('常庚哲 史济怀 数分 2003上'),
      catalog.get('常庚哲 史济怀 数分 2003下'),
      catalog.get('常庚哲 史济怀 数分 2026上'),
      catalog.get('常庚哲 史济怀 数分 2026下'),
      catalog.get('陈纪修 於崇华 金路 数分2版上'),
      catalog.get('陈纪修 於崇华 金路 数分2版下'),
      catalog.get('陈纪修 於崇华 金路 数分上'),
      catalog.get('陈纪修 於崇华 金路 数分下'),
      catalog.get('薛春华 徐森林 数分1'),
      catalog.get('薛春华 徐森林 数分2'),
      catalog.get('薛春华 徐森林 金亚东 数分3'),
      catalog.get('H&N Applied Analysis'),
      catalog.get('Abbott, Understanding Analysis'),
      catalog.get('Pugh, Real Mathematical Analysis'),
    ],
    problem_sets: [
      catalog.get('陈纪修 於崇华 金路 数分习题2版上'),
      catalog.get('陈纪修 於崇华 金路 数分习题2版下'),
      catalog.get('陈纪修 於崇华 金路 数分习题上'),
      catalog.get('陈纪修 於崇华 金路 数分习题下'),
      catalog.get('薛春华 徐森林 数分习题上'),
      catalog.get('薛春华 徐森林 数分习题下'),
    ],
    other: [
      catalog.get('何琛 史济怀 徐森林 数分1'),
      catalog.get('何琛 史济怀 徐森林 数分2'),
      catalog.get('何琛 史济怀 徐森林 数分3'),
      catalog.get('刘思齐 数分选书'),
      catalog.get('我为何不建议初学者用清华丘班数分讲义学数分'),
    ],
  }
} satisfies base.Course

export const bib = base.print_bibliography(info.materials!)
