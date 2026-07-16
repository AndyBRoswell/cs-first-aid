import { expect, type Locator } from '@playwright/test'
import * as util from '@tests/util.ts'
import * as src_util from '@tests/src/util.ts'
import * as course_util from '@tests/src/content/docs/Courses, Textbooks and References/util.ts'

src_util.test('Calculus', { tag: [ '@Courses, Textbooks and References', '@Calculus', '@Calc' ] }, async ({ page }) => {
  await page.goto(`${util.test_server}/courses-textbooks-and-references/calculus`)

  const main = page.getByRole('main')

  await course_util.check_references(main)

  await expect(main.locator('#_top')).toHaveText('微积分')

  let section: Locator, heading: Locator, References: Locator

  heading = main.getByRole('heading', { level: 1, name: '学习材料' })
  await expect(heading).toHaveCount(1)

  References = course_util.locate_references(main, [ 'text', 'selected' ])
  await src_util.everyone_occurs(References, [
    /R. A. Adams/,
    /龚昇/,
    /Calculus: A Complete Course/,
    /简明微积分/,
  ])
  section = src_util.locate_parent(References, 'section')
  section = section.locator('section', { has: page.getByRole('heading', { level: 3, name: '说明' }) })
  await expect(section).toHaveCount(1)
  await src_util.everyone_occurs(section, [
    /《Calculus: A Complete Course》/,
    /Single Variable Calculus/,
    /《简明微积分》/,
  ])

  References = course_util.locate_references(main, [ 'text', 'excluded' ])
  section = src_util.locate_parent(References, 'section')
  section = section.locator('section', { has: page.getByRole('heading', { level: 4, name: '说明' }) })
  await expect(section).toHaveCount(1)
  await src_util.everyone_occurs(section, [
    /基准/,
    /同济/,
    /ECE/,
    /EECS/,
    /荣誉/,
  ])

  References = course_util.locate_references(main, [ 'other', 'text', ])
  section = src_util.locate_parent(References, 'section')
  section = section.locator('section', { has: page.getByRole('heading', { level: 3, name: '说明' }) })
  await expect(section).toHaveCount(1)
  await src_util.everyone_occurs(section, [
    /同济/,
    /Thomas/,
    /Apostol/,
  ])

  heading = main.getByRole('heading', { level: 1, name: /开课/ })
  await expect(heading).toHaveCount(1)
  section = src_util.locate_parent(heading, 'section')
  await src_util.everyone_occurs(section, [
    /学期/,
    /单变量/,
    /多变量/,
    /(矢量|向量)微积分/,
  ])
})