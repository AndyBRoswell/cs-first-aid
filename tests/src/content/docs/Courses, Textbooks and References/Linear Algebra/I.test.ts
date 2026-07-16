import { expect, type Locator } from '@playwright/test'
import * as util from '@tests/util.ts'
import * as src_util from '@tests/src/util.ts'
import * as course_util from '@tests/src/content/docs/Courses, Textbooks and References/util.ts'

src_util.test('Linear Algebra I', { tag: [ '@Courses, Textbooks and References', '@Linear Algebra I', '@Linear Algebra', '@LinAlg', ] }, async ({ page }) => {
  await page.goto(`${util.test_server}/courses-textbooks-and-references/linear-algebra/i`)

  const main = page.getByRole('main')

  await course_util.check_references(main)

  await expect(main.locator('#_top')).toHaveText(/线性代数\s*I/)

  let section: Locator, heading: Locator, References: Locator

  section = main.locator('section', { has: page.getByRole('heading', { level: 1, name: '学习材料' }) })
  await expect(section).toHaveCount(1)

  section = section.locator('section', { has: page.getByRole('heading', { level: 2, name: '教科书' }) })
  await expect(section).toHaveCount(1)
  section = section.locator('section', { has: page.getByRole('heading', { level: 3, name: /中文/ }) })
  await expect(section).toHaveCount(1)
  References = course_util.locate_references(section, [ 'text', 'zh' ])
  await expect(References).toHaveCount(1)
  section = src_util.locate_parent(section, 'section')
  heading = section.getByRole('heading', { level: 3, name: '英文' })
  await expect(heading).toHaveCount(1)
  References = course_util.locate_references(section, [ 'text', 'en' ])
  await expect(References).toHaveCount(1)
  section = section.locator('section', { has: page.getByRole('heading', { level: 3, name: '说明' }) })
  await expect(section).toHaveCount(1)
  await src_util.everyone_occurs(section, [
    /基准/,
    /D.\s*C.\s*Lay/,
    /Linear Algebra and Its Applications/
  ])

  section = src_util.locate_parent(section, 'section', 2)

  section = section.locator('section', { has: page.getByRole('heading', { level: 2, name: /指导/ }) })
  await expect(section).toHaveCount(1)
  section = section.locator('section', { has: page.getByRole('heading', { level: 3, name: /中文/ }) })
  await expect(section).toHaveCount(1)
  References = course_util.locate_references(section, [ 'guide', 'zh' ])
  await expect(References).toHaveCount(1)

  section = src_util.locate_parent(section, 'section', 2)

  section = section.locator('section', { has: page.getByRole('heading', { level: 2, name: /参考/ }) })
  await expect(section).toHaveCount(1)
  section = section.locator('section', { has: page.getByRole('heading', { level: 3, name: '教科书' }) })
  await expect(section).toHaveCount(1)
  section = section.locator('section', { has: page.getByRole('heading', { level: 4, name: /中文/ }) })
  await expect(section).toHaveCount(1)
  References = course_util.locate_references(section, [ 'reference', 'text', 'zh' ])
  await expect(References).toHaveCount(1)
  section = src_util.locate_parent(section, 'section')
  heading = section.getByRole('heading', { level: 4, name: '英文' })
  await expect(heading).toHaveCount(1)
  References = course_util.locate_references(section, [ 'reference', 'text', 'en' ])
  await expect(References).toHaveCount(1)

})