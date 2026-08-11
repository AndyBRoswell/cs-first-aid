import { expect, type Locator } from '@playwright/test'
import * as util from '@tests/util.ts'
import * as src_util from '@tests/e2e/src/util.ts'
import * as docs_util from '@tests/e2e/src/content/docs/util.ts'
import * as course_util from '@tests/e2e/src/content/docs/Courses, Textbooks and References/util.ts'

src_util.test('Mathematical Analysis', { tag: [ '@Courses, Textbooks and References', '@Mathematical Analysis', '@MathAnal' ] }, async ({ page }) => {
  await page.goto(`${util.test_server}/courses-textbooks-and-references/mathematical-analysis`)

  const main = page.getByRole('main')

  await course_util.check_references(main)

  await docs_util.check_title(main, /数学分析/)

  let heading: Locator, References: Locator

  heading = main.getByRole('heading', { level: 1, name: '学习材料' })
  await expect(heading).toHaveCount(1)

  References = course_util.locate_references(main, [ 'text', 'zh' ])
  await src_util.everyone_occurs(References, [
    /史济怀/,
    /陈纪修/,
    /徐森林/,
    /程艺/,
    /张筑生/,
    /数学分析教程/,
    /数学分析讲义/,
    /数学分析新讲/,
  ])

  References = course_util.locate_references(main, [ 'text', 'en' ])
  await src_util.everyone_occurs(References, [
    /Hunter/,
    /Abbott/,
    /Pugh/,
    /Applied Analysis/,
    /Understanding Analysis/,
    /Real Mathematical Analysis/,
  ])

  References = course_util.locate_references(main, [ 'open_course', 'zh' ])
  await src_util.everyone_occurs(References, [
    /史济怀/,
    /陈纪修/,
    /程艺/,
  ])

  References = course_util.locate_references(main, [ 'problem_set', 'zh' ])
  await src_util.everyone_occurs(References, [
    /陈纪修/,
    /徐森林/,
  ])

  References = course_util.locate_references(main, [ 'reference', 'video', 'zh' ])
  await src_util.everyone_occurs(References, [
    /我真的不懂分析/,
    /分析学爱好者/,
    /选择/,
    /常见/,
    /丘班/,
  ])
})
