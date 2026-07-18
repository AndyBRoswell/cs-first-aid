import { expect, type Locator } from '@playwright/test'
import * as util from '@tests/util.ts'
import * as src_util from '@tests/e2e/src/util.ts'
import * as docs_util from '@tests/e2e/src/content/docs/util.ts'
import * as course_util from '@tests/e2e/src/content/docs/Courses, Textbooks and References/util.ts'

src_util.test('Python Programming', { tag: [ '@Courses, Textbooks and References', '@Python Programming' ] }, async ({ page }) => {
  await page.goto(`${util.test_server}/courses-textbooks-and-references/python-programming`)

  const main = page.getByRole('main')

  await course_util.check_references(main)

  await docs_util.check_title(main, /Python\s*程序设计/)

  let section: Locator, heading: Locator, References: Locator

  heading = main.getByRole('heading', { level: 1, name: '学习材料' })
  await expect(heading).toHaveCount(1)

  await src_util.test.step('教科书', async () => {
    References = course_util.locate_references(main, [ 'text' ])
    await src_util.everyone_occurs(References, [
      /Python Software Foundation/,
      /The Python Tutorial/,
    ])
  })

  await src_util.test.step('参考资料', async () => {
    References = course_util.locate_references(main, [ 'reference' ])
    await src_util.everyone_occurs(References, [
      /E. Matthes/,
      /嵩天/,
      /Python Crash Course/,
      /Python\s*语言程序设计基础/,
    ])
  })
})