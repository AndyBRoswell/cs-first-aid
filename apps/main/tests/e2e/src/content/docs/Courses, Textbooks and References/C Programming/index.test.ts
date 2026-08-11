import { expect, type Locator } from '@playwright/test'
import * as test_util from '@tests/util.ts'
import * as test_src_util from '@tests/e2e/src/util.ts'
import * as test_docs_util from '@tests/e2e/src/content/docs/util.ts'
import * as test_course_util from '@tests/e2e/src/content/docs/Courses, Textbooks and References/util.ts'

test_src_util.test('C Programming', { tag: [ '@Courses, Textbooks and References', '@C Programming' ] }, async ({ page }) => {
  await page.goto(`${test_util.test_server}/courses-textbooks-and-references/c-programming`)

  const main = page.getByRole('main')

  await test_course_util.check_references(main)

  await test_docs_util.check_title(main, /C\s*(语言)?程序设计/)

  let section: Locator, heading: Locator, References: Locator

  heading = main.getByRole('heading', { level: 1, name: '学习材料' })
  await expect(heading).toHaveCount(1)

  await test_src_util.test.step('教科书', async () => {
    References = test_course_util.locate_references(main, [ 'text' ])
    await test_src_util.everyone_occurs(References, [
      /J. Gustedt/,
      /Modern C/,
    ])
  })

  await test_src_util.test.step('参考资料', async () => {
    References = test_course_util.locate_references(main, [ 'reference' ])
    await test_src_util.everyone_occurs(References, [
      /C reference/i,
    ])
  })
})