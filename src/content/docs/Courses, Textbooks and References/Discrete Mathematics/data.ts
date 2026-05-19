import * as docs_base from '@/content/docs/base.ts'
import * as data_type from '@/types/data.ts'
import * as catalog from '@/data/materials/catalog.ts'
import '@/content/docs/Courses, Textbooks and References/import course material.ts'

export const Mathematical_Logic = {
  canonical_name: '数理逻辑',
  name: [ '数理逻辑' ],
  tag: [ '基础必修' ],
  material: {
    text: [
      catalog.get('屈婉玲 离散数学'),
      catalog.get('屈婉玲 离散数学教程'),
      catalog.get('Logic and Proof'),
    ],
    video: [
      catalog.get('北京大学 离散数学 公开课'),
    ],
    problem_set: [
      catalog.get('屈婉玲 离散数学习题解析'),
      catalog.get('屈婉玲 离散数学学习指导与习题解析'),
    ],
    other: [
      catalog.get('K. H. Rosen, Discrete Mathematics and Its Applications'),
      catalog.get('K. H. Rosen, Student\'s Solutions Guide for Discrete Mathematics and Its Applications'),
      catalog.get('M. Huth and M. Ryan, Logic in Computer Science'),
    ],
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
      catalog.get('Logic and Proof'),
    ],
    video: [
      catalog.get('北京大学 离散数学 公开课'),
    ],
    problem_set: [
      catalog.get('屈婉玲 离散数学习题解析'),
      catalog.get('屈婉玲 离散数学学习指导与习题解析'),
    ],
    other: [
      catalog.get('K. H. Rosen, Discrete Mathematics and Its Applications'),
      catalog.get('K. H. Rosen, Student\'s Solutions Guide for Discrete Mathematics and Its Applications'),
    ],
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
      catalog.get('D. B. West, Introduction to Graph Theory'),
      catalog.get('J. M. Harris et al., Combinatorics and Graph Theory'),
    ],
    video: [
      catalog.get('北京大学 离散数学 公开课'),
    ],
    problem_set: [
      catalog.get('屈婉玲 离散数学习题解析'),
      catalog.get('屈婉玲 离散数学学习指导与习题解析'),
    ],
    other: [
      catalog.get('K. H. Rosen, Discrete Mathematics and Its Applications'),
      catalog.get('K. H. Rosen, Student\'s Solutions Guide for Discrete Mathematics and Its Applications'),
      catalog.get('J. A. Bondy and U. S. R. Murty, Graph Theory'),
      catalog.get('王树禾 图论'),
    ],
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
      catalog.get('丘维声 近世代数'),
      catalog.get('J. A. Beachy and W. D. Blair, Abstract Algebra'),
      catalog.get('T. W. Judson, AATA'),
    ],
    video: [
      catalog.get('北京大学 离散数学 公开课'),
    ],
    problem_set: [
      catalog.get('屈婉玲 离散数学习题解析'),
      catalog.get('屈婉玲 离散数学学习指导与习题解析'),
    ],
    other: [
      catalog.get('席南华 基础代数3'),
      catalog.get('冯克勤 等 近世代数引论'),
      catalog.get('Kostrikin, 代数学引论3'),
      catalog.get('Kostrikin, 代数学习题集'),
      catalog.get('D. S. Dummit and R. M. Foote, Abstract Algebra'),
      catalog.get('S. Lang, Undergraduate Algebra'),
      catalog.get('S. Lang, Algebra'),
    ],
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
      catalog.get('J. M. Harris et al., Combinatorics and Graph Theory'),
    ],
    video: [
      catalog.get('北京大学 离散数学 公开课'),
    ],
    problem_set: [
      catalog.get('屈婉玲 离散数学习题解析'),
      catalog.get('屈婉玲 离散数学学习指导与习题解析'),
    ],
    other: [
      catalog.get('K. H. Rosen, Discrete Mathematics and Its Applications'),
      catalog.get('K. H. Rosen, Student\'s Solutions Guide for Discrete Mathematics and Its Applications'),
    ],
  }
} satisfies data_type.Course

export const Number_Theory = {
  canonical_name: '数论',
  name: [ '数论' ],
  tag: [ '基础选修' ],
  material: {
    text: [
      catalog.get('屈婉玲 离散数学'),
      catalog.get('Logic and Proof'),
    ],
    video: [],
    problem_set: [
      catalog.get('屈婉玲 离散数学学习指导与习题解析')
    ],
    other: [
      catalog.get('K. H. Rosen, Discrete Mathematics and Its Applications'),
      catalog.get('K. H. Rosen, Student\'s Solutions Guide for Discrete Mathematics and Its Applications'),
    ],
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