import { expect, type Locator } from '@playwright/test'
import pino from 'pino'
import * as util from '@tests/util.ts'
import * as src_util from '@tests/src/util.ts'
import * as data from "@/types/data.ts"
// @ts-ignore [css.escape doesn't have ts support]
import cssesc from 'cssesc'

const logger = pino(util.pino_arg)

src_util.test('Calculus', { tag: [ '@Courses, Textbooks and References', '@Calculus' ] }, async ({ page }) => {
  await page.goto(`${util.test_server}/courses-textbooks-and-references/calculus`)

  const main = page.getByRole('main')

  const References_locators = await main.locator('.References').all()
  for (const locator of References_locators) {
    const csl_entries = await locator.locator('[data-csl-entry-id]').all()
    await expect(locator).toHaveAttribute('data-scope_name')
    const material_segment = JSON.parse((await locator.getAttribute('data-material_segment'))!) as Array<data.Material>
    expect(material_segment.length).toEqual(csl_entries.length)
  }

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
  await expect(section).toHaveText(/《Calculus: A Complete Course》/)
  await expect(section).toHaveText(/Single Variable Calculus/)
  await expect(section).toHaveText(/《简明微积分》/)

  CSS_escaped_scope_name = cssesc(JSON.stringify([ 'text', 'excluded', ]), util.cssesc_options)
  References = main.locator(`.References[data-scope_name="${CSS_escaped_scope_name}"]`)
  section = References.locator('..')
  heading = section.getByRole('heading', { level: 3, name: '未被选择的书目' })
  await expect(heading).toHaveCount(1)
  await expect(section).toHaveText(/不低于同济大学数学系主编《高等数学》/)
  await expect(section).toHaveText(/荣誉.*ECE.+EECS/)

  CSS_escaped_scope_name = cssesc(JSON.stringify([ 'other', 'text', ]), util.cssesc_options)
  References = main.locator(`.References[data-scope_name="${CSS_escaped_scope_name}"]`)
  section = References.locator('..')
  heading = section.getByRole('heading', { level: 2, name: '其它参考' })
  await expect(heading).toHaveCount(1)
  section = section.locator('section', { has: page.getByRole('heading', { level: 3, name: '说明' }) }) // NOTE: the `Locator` passed to `has` must stem from `page`
  await expect(section).toHaveCount(1)
  await expect(section).toHaveText(/同济/)
  await expect(section).toHaveText(/Thomas/)
  await expect(section).toHaveText(/Apostol/)

  heading = main.getByRole('heading', { level: 1, name: '院校开课情况选讲' })
  await expect(heading).toHaveCount(1)
})