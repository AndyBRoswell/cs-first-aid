import { expect, type Locator } from '@playwright/test'
import * as util from '@/util.ts'
import * as src_util from '@tests/e2e/src/util.ts'
import * as docs_util from '@tests/e2e/src/content/docs/util.ts'
import * as course_util from '@tests/e2e/src/content/docs/Courses, Textbooks and References/util.ts'

src_util.test('Linear Algebra I', { tag: [ '@Courses, Textbooks and References', '@Linear Algebra I', '@Linear Algebra', '@LinAlg', ] }, async ({ page }) => {
  await page.goto(`${util.test_server}/courses-textbooks-and-references/linear-algebra/i`)

  const main = page.getByRole('main')

  await course_util.check_references(main)

  await docs_util.check_title(main, /线性代数\s*I/)

  let section: Locator, heading: Locator, References: Locator

  heading = main.getByRole('heading', { level: 1, name: '学习材料' })
  await expect(heading).toHaveCount(1)

  References = course_util.locate_references(main, [ 'text', 'zh' ])
  await src_util.everyone_occurs(References, [
    /蓝以中/,
    /丘维声/,
    /谢启鸿/,
    /陈发来/,
    /简明线性代数/,
    /高等代数简明教程/,
    /高等代数学习指导书/,
  ])

  References = course_util.locate_references(main, [ 'text', 'en' ])
  await src_util.everyone_occurs(References, [
    /G. Strang/,
    /D. C. Lay/,
    /S. R. Treil/,
    /S. J. Leon/,
    /Introduction to Linear Algebra/,
    /Linear Algebra and Its Applications/,
    /Linear Algebra Done Wrong/,
    /Interactive Linear Algebra/,
    /Linear Algebra with Applications/
  ])

  section = src_util.locate_parent(References, 'section', 2)
  await src_util.everyone_occurs(section, [
    /基准/,
    /D. C. Lay.+Linear Algebra and Its Applications/,
  ])

  References = course_util.locate_references(main, [ 'guide', 'zh' ])
  await src_util.everyone_occurs(References, [
    /线性代数的几何意义/
  ])

  References = course_util.locate_references(main, [ 'open_course', 'zh' ])
  await src_util.everyone_occurs(References, [
    /丘维声/,
    /陈发来/,
    /谢启鸿/,
  ])
})