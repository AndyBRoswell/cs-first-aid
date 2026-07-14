import { expect, type Locator } from '@playwright/test'
import * as util from '@tests/util.ts'
import * as src_util from '@tests/src/util.ts'
import * as course_util from '@tests/src/content/docs/Courses, Textbooks and References/util.ts'

src_util.test('Calculus', { tag: [ '@Courses, Textbooks and References', '@Calculus' ] }, async ({ page }) => {
  await page.goto(`${util.test_server}/courses-textbooks-and-references/calculus`)

  const main = page.getByRole('main')

  await course_util.check_references(main)

  await expect(main.locator('#_top')).toHaveText('微积分')

  let section: Locator, heading: Locator, References: Locator

  heading = main.getByRole('heading', { level: 1, name: '学习材料' })
  await expect(heading).toHaveCount(1)

  References = await course_util.locate_references(main, [ 'text', 'selected' ])
  section = References.locator('..')
  heading = section.getByRole('heading', { level: 2, name: '教科书' })
  await expect(heading).toHaveCount(1)
  section = section.locator('section', { has: page.getByRole('heading', { level: 3, name: '说明' }) }) // NOTE: the `Locator` passed to `has` must stem from `page`
  await expect(section).toHaveCount(1)
  await src_util.everyone_occurs(section, [
    /《Calculus: A Complete Course》/,
    /Single Variable Calculus/,
    /《简明微积分》/,
  ])

  References = await course_util.locate_references(main, [ 'text', 'excluded' ])
  section = References.locator('..')
  heading = section.getByRole('heading', { level: 3, name: '未被选择的书目' })
  await expect(heading).toHaveCount(1)
  await src_util.everyone_occurs(section, [
    /不低于同济大学数学系主编《高等数学》/,
    /荣誉.*ECE.+EECS/,
  ])

  References = await course_util.locate_references(main, [ 'other', 'text', ])
  section = References.locator('..')
  heading = section.getByRole('heading', { level: 2, name: '其它参考' })
  await expect(heading).toHaveCount(1)
  section = section.locator('section', { has: page.getByRole('heading', { level: 3, name: '说明' }) })
  await expect(section).toHaveCount(1)
  await src_util.everyone_occurs(section, [
    /同济/,
    /Thomas/,
    /Apostol/,
  ])

  heading = main.getByRole('heading', { level: 1, name: '院校开课情况选讲' })
  await expect(heading).toHaveCount(1)
  section = heading.locator('xpath=ancestor::section[1]')
  await src_util.everyone_occurs(section, [
    /学期/,
    /单变量微积分/,
    /多变量微积分/,
    /(矢量|向量)微积分/,
  ])
})