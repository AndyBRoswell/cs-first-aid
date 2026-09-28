import { expect, type Locator } from '@playwright/test'
import * as util from '@tests/util.ts'
import * as src_util from '@tests/util/e2e.ts'
import * as docs_util from '@tests/util/content/docs.ts'
import * as course_util from '@tests/util/content/docs/Courses, Textbooks and References.ts'
import { course_material } from '@/content/docs/Courses, Textbooks and References/Programming/Python Programming/data.ts'

src_util.test('Python Programming', { tag: [ '@Courses, Textbooks and References', '@Python Programming' ] }, async ({ page }) => {
  await page.goto(`${util.test_server}/courses-textbooks-and-references/programming/python-programming`)

  const main = page.getByRole('main')

  await course_util.check_references(main, course_material)

  await docs_util.check_title(main, /Python\s*程序设计/)

  let section: Locator, heading: Locator, References: Locator

  heading = main.getByRole('heading', { level: 1, name: '学习材料' })
  await expect(heading).toHaveCount(1)

  await src_util.test.step('教科书', async () => {
    References = course_util.locate_references(main, [ 'text', 'en' ])
    await src_util.everyone_occurs(References, [
      /Python Software Foundation/,
      /The Python Tutorial/,
    ])
    section = src_util.locate_parent(References, 'section')
    await expect(section.getByRole('heading', { level: 3, name: '英文' })).toHaveCount(1)
  })

  await src_util.test.step('参考资料', async () => {
    References = course_util.locate_references(main, [ 'reference', 'en' ])
    await src_util.everyone_occurs(References, [
      /E. Matthes/,
      /Python Crash Course/,
    ])
    section = src_util.locate_parent(References, 'section')
    await expect(section.getByRole('heading', { level: 3, name: '英文' })).toHaveCount(1)

    References = course_util.locate_references(main, [ 'reference', 'zh' ])
    await src_util.everyone_occurs(References, [
      /嵩天/,
      /Python\s*语言程序设计基础/,
    ])
    section = src_util.locate_parent(References, 'section')
    await expect(section.getByRole('heading', { level: 3, name: '中文' })).toHaveCount(1)
  })

  await src_util.test.step('未被选择的书目', async () => {
    References = course_util.locate_references(main, [ 'excluded', 'en' ])
    await src_util.everyone_occurs(References, [ /Python Cookbook/ ])
    section = src_util.locate_parent(References, 'section')
    await expect(section.getByRole('heading', { level: 3, name: '英文' })).toHaveCount(1)
  })
})
