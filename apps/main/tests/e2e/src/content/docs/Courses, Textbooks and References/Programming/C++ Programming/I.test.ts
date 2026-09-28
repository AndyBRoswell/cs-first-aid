import { expect, type Locator } from '@playwright/test'
import * as util from '@tests/util.ts'
import * as src_util from '@tests/util/e2e.ts'
import * as docs_util from '@tests/util/content/docs.ts'
import * as course_util from '@tests/util/content/docs/Courses, Textbooks and References.ts'
import { I_course_material } from '@/content/docs/Courses, Textbooks and References/Programming/CPP Programming/data.ts'

src_util.test('C++ Programming I', { tag: [ '@Courses, Textbooks and References', '@C++ Programming I', '@C++ Programming', '@Introduction to Programming', ] }, async ({ page }) => {
  await page.goto(`${util.test_server}/courses-textbooks-and-references/programming/cpp-programming/i`)

  const main = page.getByRole('main')

  await course_util.check_references(main, I_course_material)

  await docs_util.check_title(main, /程序设计入门（C\+\+\s*程序设计\s*I）/)

  let heading: Locator, References: Locator

  heading = main.getByRole('heading', { level: 1, name: '学习材料' })
  await expect(heading).toHaveCount(1)
  await expect(main.getByRole('heading', { level: 2 })).toHaveText([
    '教科书', '其它参考', '未被选择的书目',
  ])

  await src_util.test.step('教科书', async () => {
    References = course_util.locate_references(main, [ 'text', 'selected' ])
    await expect(References.locator('.entry.CSL')).toHaveCount(1)
    await src_util.everyone_occurs(References, [
      /B. Stroustrup/,
      /Programming: Principles and Practice Using C\+\+/,
    ])
  })

  await src_util.test.step('其它参考', async () => {
    References = course_util.locate_references(main, [ 'reference' ])
    await src_util.everyone_occurs(References, [
      /Microsoft/,
      /C\+\+ Language Reference/,
      /cppreference/,
      /The Definitive C\+\+ Book Guide and List/,
    ])
  })

  await src_util.test.step('未被选择的书目', async () => {
    References = course_util.locate_references(main, [ 'excluded' ])
    await expect(References.locator('.entry.CSL')).toHaveCount(2)
    await src_util.everyone_occurs(References, [
      /C\+\+ Primer,/, /C\+\+ Primer Plus,/,
    ])
  })
})
