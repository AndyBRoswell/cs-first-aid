import { expect, type Locator } from '@playwright/test'
import * as test_util from '@tests/util.ts'
import * as test_src_util from '@tests/util/e2e.ts'
import * as test_docs_util from '@tests/util/content/docs.ts'
import * as test_course_util from '@tests/util/content/docs/Courses, Textbooks and References.ts'
import { page_reference } from '@/content/docs/Courses, Textbooks and References/Programming/C Programming/data.ts'

test_src_util.test('C Programming', { tag: [ '@Courses, Textbooks and References', '@C Programming' ] }, async ({ page }) => {
  await page.goto(`${test_util.test_server}/courses-textbooks-and-references/programming/c-programming`)

  const main = page.getByRole('main')

  await test_course_util.check_references(main, page_reference)
  await test_course_util.check_cites(main)

  await test_docs_util.check_title(main, /C\s*(语言)?程序设计/)

  let section: Locator, heading: Locator, References: Locator

  heading = main.getByRole('heading', { level: 1, name: '学习材料' })
  await expect(heading).toHaveCount(1)

  await test_src_util.test.step('教科书', async () => {
    References = test_course_util.locate_references(main, [ 'material', 'text', 'en' ])
    await test_src_util.everyone_occurs(References, [
      /J. Gustedt/,
      /Modern C/,
    ])
    section = test_src_util.locate_parent(References, 'section')
    await expect(section.getByRole('heading', { level: 3, name: '英文' })).toHaveCount(1)
  })

  await test_src_util.test.step('参考资料', async () => {
    References = test_course_util.locate_references(main, [ 'material', 'reference', 'en' ])
    await test_src_util.everyone_occurs(References, [
      /C reference/i,
    ])
    section = test_src_util.locate_parent(References, 'section')
    await expect(section.getByRole('heading', { level: 3, name: '英文' })).toHaveCount(1)
  })

  await test_src_util.test.step('未选书目', async () => {
    References = test_course_util.locate_references(main, [ 'material', 'excluded', 'en' ])
    await test_src_util.everyone_occurs(References, [
      /The C Programming Language/,
      /C Primer Plus/,
    ])
    section = test_src_util.locate_parent(References, 'section')
    await expect(section.getByRole('heading', { level: 3, name: '英文' })).toHaveCount(1)
  })

  await test_src_util.test.step('参考文献', async () => {
    References = test_course_util.locate_references(main, [ 'reference' ])
    section = test_src_util.locate_parent(References, 'section')
    await expect(section.getByRole('heading', { level: 1, name: '参考文献' })).toHaveCount(1)
    await expect(References.locator('.Bibliography > .entry.CSL')).toHaveCount(2)
    await test_src_util.everyone_occurs(References, [ /A. Bergmann/, /L. Torvalds/, /Kbuild: move to -std=gnu11/, /kbuild-gnu11-v5.18/ ])
    const introduction = main.locator('section').filter({ hasText: 'Arnd Bergmann 提交了' }).first()
    const citations = introduction.locator('.Cite .Citation > .reference > .number')
    await expect(citations).toHaveCount(2)
    const targets = await References.locator('.Bibliography > .entry.CSL').evaluateAll(entries => entries.map(entry => `#${entry.id}`))
    expect(await citations.evaluateAll(links => links.map(link => link.getAttribute('href')))).toEqual(targets)
  })
})
