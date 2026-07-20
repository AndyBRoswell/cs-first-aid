import { expect, type Locator } from '@playwright/test'
import * as util from '@/util.ts'
import * as src_util from '@tests/e2e/src/util.ts'
import * as docs_util from '@tests/e2e/src/content/docs/util.ts'
import * as course_util from '@tests/e2e/src/content/docs/Courses, Textbooks and References/util.ts'

src_util.test('Java Programming', { tag: [ '@Courses, Textbooks and References', '@Java Programming' ] }, async ({ page }) => {
  await page.goto(`${util.test_server}/courses-textbooks-and-references/java-programming`)

  const main = page.getByRole('main')

  await course_util.check_references(main)

  await docs_util.check_title(main, /Java\s*程序设计/)

  let section: Locator, heading: Locator, References: Locator

  heading = main.getByRole('heading', { level: 1, name: '学习材料' })
  await expect(heading).toHaveCount(1)

  await src_util.test.step('教科书', async () => {
    References = course_util.locate_references(main, [ 'text' ])
    await src_util.everyone_occurs(References, [
      /Oracle/,
      /Learn Java/,
    ])
  })

  await src_util.test.step('参考资料', async () => {
    References = course_util.locate_references(main, [ 'reference' ])
    await src_util.everyone_occurs(References, [
      /K. Sierra/,
      /Head First Java/,
    ])
  })
})