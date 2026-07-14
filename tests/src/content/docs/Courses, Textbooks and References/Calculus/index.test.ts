import { expect, type Locator } from '@playwright/test'
import pino from 'pino'
import * as util from '@tests/util.ts'
import * as src_util from '@tests/src/util.ts'
import * as course_util from '@tests/src/content/docs/Courses, Textbooks and References/util.ts'
// @ts-ignore [css.escape doesn't have ts support]
import cssesc from 'cssesc'

const logger = pino(util.pino_arg)

src_util.test('Calculus', { tag: [ '@Courses, Textbooks and References', '@Calculus' ] }, async ({ page }) => {
  await page.goto(`${util.test_server}/courses-textbooks-and-references/calculus`)

  const main = page.getByRole('main')

  await course_util.check_references(main)

  await expect(main.locator('#_top')).toHaveText('微积分')

  let section: Locator, heading: Locator, References: Locator, CSS_escaped_scope_name: string

  heading = main.getByRole('heading', { level: 1, name: '学习材料' })
  await expect(heading).toHaveCount(1)

  CSS_escaped_scope_name = cssesc(JSON.stringify([ 'text', 'selected', ]), util.cssesc_options)
  References = main.locator(`.References[data-scope_name="${CSS_escaped_scope_name}"]`)
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

  CSS_escaped_scope_name = cssesc(JSON.stringify([ 'text', 'excluded', ]), util.cssesc_options)
  References = main.locator(`.References[data-scope_name="${CSS_escaped_scope_name}"]`)
  section = References.locator('..')
  heading = section.getByRole('heading', { level: 3, name: '未被选择的书目' })
  await expect(heading).toHaveCount(1)
  await src_util.everyone_occurs(section, [
    /不低于同济大学数学系主编《高等数学》/,
    /荣誉.*ECE.+EECS/,
  ])

  CSS_escaped_scope_name = cssesc(JSON.stringify([ 'other', 'text', ]), util.cssesc_options)
  References = main.locator(`.References[data-scope_name="${CSS_escaped_scope_name}"]`)
  section = References.locator('..')
  heading = section.getByRole('heading', { level: 2, name: '其它参考' })
  await expect(heading).toHaveCount(1)
  section = section.locator('section', { has: page.getByRole('heading', { level: 3, name: '说明' }) }) // NOTE: the `Locator` passed to `has` must stem from `page`
  await expect(section).toHaveCount(1)
  await src_util.everyone_occurs(section, [
    /同济/,
    /Thomas/,
    /Apostol/,
  ])

  heading = main.getByRole('heading', { level: 1, name: '院校开课情况选讲' })
  await expect(heading).toHaveCount(1)
})