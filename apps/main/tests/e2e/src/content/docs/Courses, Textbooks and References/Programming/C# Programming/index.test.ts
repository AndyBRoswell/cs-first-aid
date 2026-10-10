import { expect, type Locator } from '@playwright/test'
import * as util from '@tests/util.ts'
import * as src_util from '@tests/util/e2e.ts'
import * as docs_util from '@tests/util/content/docs.ts'
import * as course_util from '@tests/util/content/docs/Courses, Textbooks and References.ts'
import { course_material } from '@/content/docs/Courses, Textbooks and References/Programming/CSharp Programming/data.ts'

src_util.test('C# Programming', { tag: [ '@Courses, Textbooks and References', '@C# Programming' ] }, async ({ page }) => {
  await page.goto(`${util.test_server}/courses-textbooks-and-references/programming/csharp-programming`)

  const main = page.getByRole('main')

  await course_util.check_references(main, course_material)

  await docs_util.check_title(main, /C#\s*程序设计/)

  let section: Locator, heading: Locator, References: Locator

  heading = main.getByRole('heading', { level: 1, name: '学习材料' })
  await expect(heading).toHaveCount(1)

  await src_util.test.step('教科书', async () => {
    References = course_util.locate_references(main, [ 'text', 'en' ])
    await src_util.everyone_occurs(References, [
      /Microsoft/,
      /A tour of the C# language/i,
    ])
    section = src_util.locate_parent(References, 'section')
    await expect(section.getByRole('heading', { level: 3, name: '英文' })).toHaveCount(1)
  })

  await src_util.test.step('参考资料', async () => {
    References = course_util.locate_references(main, [ 'reference', 'en' ])
    await src_util.everyone_occurs(References, [
      /A. Stellman/,
      /Head First C#/,
    ])
    section = src_util.locate_parent(References, 'section')
    await expect(section.getByRole('heading', { level: 3, name: '英文' })).toHaveCount(1)
  })

  await src_util.test.step('未选书目', async () => {
    References = course_util.locate_references(main, [ 'excluded', 'en' ])
    await src_util.everyone_occurs(References, [ /Illustrated C# 7/ ])
    section = src_util.locate_parent(References, 'section')
    await expect(section.getByRole('heading', { level: 3, name: '英文' })).toHaveCount(1)

    References = course_util.locate_references(main, [ 'excluded', 'zh' ])
    await src_util.everyone_occurs(References, [ /C#程序设计教程/ ])
    section = src_util.locate_parent(References, 'section')
    await expect(section.getByRole('heading', { level: 3, name: '中文' })).toHaveCount(1)
  })
})
