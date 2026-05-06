import * as docs_base from '@/content/docs/base.ts'
import * as data_type from '@/types/data.ts'
import * as catalog from '@/data/materials/catalog.ts'
import '@/data/materials/屈婉玲 离散数学.ts'
import '@/data/materials/屈婉玲 离散数学教程.ts'

export const Mathematical_Logic = {
  canonical_name: '数理逻辑',
  name: [ '数理逻辑' ],
  tag: [ '基础必修' ],
  material: {
    text: [
      catalog.get('屈婉玲 离散数学'),
      catalog.get('屈婉玲 离散数学教程'),
    ],
    problem_set: [
      catalog.get('屈婉玲 离散数学习题解析'),
      catalog.get('屈婉玲 离散数学学习指导与习题解析'),
    ],
    video: [
      catalog.get('北京大学 离散数学 公开课'),
    ],
    other: [],
  }
} satisfies data_type.Course

export const Set_Theory = {
  canonical_name: '集合论',
  name: [ '集合论' ],
  tag: [ '基础必修' ],
  material: {
    text: [
      catalog.get('屈婉玲 离散数学'),
      catalog.get('屈婉玲 离散数学教程'),
    ],
    problem_set: [
      catalog.get('屈婉玲 离散数学习题解析'),
      catalog.get('屈婉玲 离散数学学习指导与习题解析'),
    ],
    video: [
      catalog.get('北京大学 离散数学 公开课'),
    ],
    other: [],
  }
} satisfies data_type.Course

export const Graph_Theory = {
  canonical_name: '图论',
  name: [ '图论' ],
  tag: [ '基础必修' ],
  material: {
    text: [
      catalog.get('屈婉玲 离散数学'),
      catalog.get('屈婉玲 离散数学教程'),
    ],
    problem_set: [
      catalog.get('屈婉玲 离散数学习题解析'),
      catalog.get('屈婉玲 离散数学学习指导与习题解析'),
    ],
    video: [
      catalog.get('北京大学 离散数学 公开课'),
    ],
    other: [],
  }
} satisfies data_type.Course

export const Abstract_Algebra = {
  canonical_name: '抽象代数',
  name: [ '抽象代数', '近世代数', '现代代数', ],
  tag: [ '基础选修' ],
  material: {
    text: [
      catalog.get('屈婉玲 离散数学'),
      catalog.get('屈婉玲 离散数学教程'),
    ],
    problem_set: [
      catalog.get('屈婉玲 离散数学习题解析'),
      catalog.get('屈婉玲 离散数学学习指导与习题解析'),
    ],
    video: [
      catalog.get('北京大学 离散数学 公开课'),
    ],
    other: [],
  }
} satisfies data_type.Course

export const Combinatorics = {
  canonical_name: '组合学',
  name: [ '组合学', '组合数学', ],
  tag: [ '基础选修' ],
  material: {
    text: [
      catalog.get('屈婉玲 离散数学'),
      catalog.get('屈婉玲 离散数学教程'),
    ],
    problem_set: [
      catalog.get('屈婉玲 离散数学习题解析'),
      catalog.get('屈婉玲 离散数学学习指导与习题解析'),
    ],
    video: [
      catalog.get('北京大学 离散数学 公开课'),
    ],
    other: [],
  }
} satisfies data_type.Course

export const Number_Theory = {
  canonical_name: '数论',
  name: [ '数论' ],
  tag: [ '基础选修' ],
  material: {
    text: [
      catalog.get('屈婉玲 离散数学'),
    ],
    problem_set: [
      catalog.get('屈婉玲 离散数学学习指导与习题解析')
    ],
    video: [],
    other: [],
  }
} satisfies data_type.Course

export const bib = {
  Mathematical_Logic: docs_base.print_bibliography(Mathematical_Logic.material!),
  Set_Theory: docs_base.print_bibliography(Set_Theory.material!),
  Graph_Theory: docs_base.print_bibliography(Graph_Theory.material!),
  Abstract_Algebra: docs_base.print_bibliography(Abstract_Algebra.material!),
  Combinatorics: docs_base.print_bibliography(Combinatorics.material!),
  Number_Theory: docs_base.print_bibliography(Number_Theory.material!),
}