import { expect, type Locator } from '@playwright/test'
import * as util from '@tests/util.ts'
import * as src_util from '@tests/e2e/src/util.ts'
import * as docs_util from '@tests/e2e/src/content/docs/util.ts'
import * as course_util from '@tests/e2e/src/content/docs/Courses, Textbooks and References/util.ts'

src_util.test('Mathematical Logic', { tag: [ '@Courses, Textbooks and References', '@Discrete Mathematics', '@Mathematical Logic' ] }, async ({ page }) => {
  await page.goto(`${util.test_server}/courses-textbooks-and-references/discrete-mathematics/mathematical-logic`)

  const main = page.getByRole('main')

  await course_util.check_references(main)

  await docs_util.check_title(main, /数理逻辑/)

  let section: Locator, heading: Locator, References: Locator

  heading = main.getByRole('heading', { level: 1, name: '学习材料' })
  await expect(heading).toHaveCount(1)

  await src_util.test.step('学习材料/教科书/中文', async () => {
    References = course_util.locate_references(main, [ 'text', 'zh' ])
    await src_util.everyone_occurs(References, [
      /王捍贫/,
      /张立昂/,
      /离散数学教程/,
    ])
  })

  await src_util.test.step('学习材料/教科书/英文', async () => {
    References = course_util.locate_references(main, [ 'text', 'en' ])
    await src_util.everyone_occurs(References, [
      /Logic and Proof/,
    ])
  })

  await src_util.test.step('学习材料/公开课/中文', async () => {
    References = course_util.locate_references(main, [ 'open_course', 'zh' ])
    await src_util.everyone_occurs(References, [
      /离散数学/,
      /北京大学/,
    ])
  })

  await src_util.test.step('学习材料/指导书/中文', async () => {
    References = course_util.locate_references(main, [ 'guide', 'zh' ])
    await src_util.everyone_occurs(References, [
      /张立昂/,
      /刘田/,
      /离散数学习题解析/,
      /离散数学学习指导与习题解析/,
    ])
  })

  await src_util.test.step('其它参考/教科书/英文', async () => {
    References = course_util.locate_references(main, [ 'reference', 'text', 'en' ])
    await src_util.everyone_occurs(References, [
      /K. H. Rosen/,
      /Discrete Mathematics and Its Applications/,
    ])
  })

  await src_util.test.step('其它参考/指导书/英文', async () => {
    References = course_util.locate_references(main, [ 'reference', 'guide', 'en' ])
    await src_util.everyone_occurs(References, [
      /K. H. Rosen/,
      /Student['’]s Solutions Guide for Discrete Mathematics and Its Applications/,
    ])
  })
})