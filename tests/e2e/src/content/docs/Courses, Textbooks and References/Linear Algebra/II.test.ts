import { expect, type Locator } from '@playwright/test'
import * as util from '@tests/util.ts'
import * as src_util from '@tests/e2e/src/util.ts'
import * as course_util from '@tests/e2e/src/content/docs/Courses, Textbooks and References/util.ts'

src_util.test('Linear Algebra II', { tag: [ '@Courses, Textbooks and References', '@Linear Algebra', '@LA' ] }, async ({ page }) => {
  await page.goto(`${util.test_server}/courses-textbooks-and-references/linear-algebra/ii`)

  const main = page.getByRole('main')

  await course_util.check_references(main)

  await expect(main.locator('#_top')).toHaveText(/线性代数\s*II/)

  let section: Locator, heading: Locator, References: Locator

  heading = main.getByRole('heading', { level: 1, name: '学习材料' })
  await expect(heading).toHaveCount(1)

  await src_util.test.step('学习材料/教科书/中文', async () => {
    References = course_util.locate_references(main, [ 'text', 'zh' ])
    await src_util.everyone_occurs(References, [
      /蓝以中/,
      /丘维声/,
      /谢启鸿/,
      /简明线性代数/,
      /高等代数简明教程/,
      /高等代数学习指导书/,
    ])
  })

  await src_util.test.step('学习材料/教科书/英文', async () => {
    References = course_util.locate_references(main, [ 'text', 'en' ])
    await src_util.everyone_occurs(References, [
      /S. Axler/,
      /C. D. Meyer/,
      /Linear Algebra Done Right/,
      /Matrix Analysis and Applied Linear Algebra/,
    ])
  })

  await src_util.test.step('学习材料/指导书/中文', async () => {
    References = course_util.locate_references(main, [ 'guide', 'zh' ])
    await src_util.everyone_occurs(References, [
      /线性代数的几何意义/
    ])
  })

  await src_util.test.step('学习材料/公开课/中文', async () => {
    References = course_util.locate_references(main, [ 'open_course', 'zh' ])
    await src_util.everyone_occurs(References, [
      /丘维声/,
      /谢启鸿/,
    ])
  })
})