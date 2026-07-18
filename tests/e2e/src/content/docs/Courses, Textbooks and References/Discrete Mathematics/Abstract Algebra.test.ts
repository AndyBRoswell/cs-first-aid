import { expect, type Locator } from '@playwright/test'
import * as util from '@tests/util.ts'
import * as src_util from '@tests/e2e/src/util.ts'
import * as course_util from '@tests/e2e/src/content/docs/Courses, Textbooks and References/util.ts'

src_util.test('Abstract Algebra', { tag: [ '@Courses, Textbooks and References', '@Discrete Mathematics', '@Abstract Algebra' ] }, async ({ page }) => {
  await page.goto(`${util.test_server}/courses-textbooks-and-references/discrete-mathematics/abstract-algebra`)

  const main = page.getByRole('main')

  await course_util.check_references(main)

  await expect(main.locator('#_top')).toHaveText(/抽象代数/)

  let section: Locator, heading: Locator, References: Locator

  heading = main.getByRole('heading', { level: 1, name: '学习材料' })
  await expect(heading).toHaveCount(1)

  await src_util.test.step('学习材料/教科书/中文', async () => {
    References = course_util.locate_references(main, [ 'text', 'zh' ])
    await src_util.everyone_occurs(References, [
      /王捍贫/,
      /张立昂/,
      /丘维声/,
      /离散数学教程/,
      /近世代数/,
    ])
  })

  await src_util.test.step('学习材料/教科书/英文', async () => {
    References = course_util.locate_references(main, [ 'text', 'en' ])
    await src_util.everyone_occurs(References, [
      /J. A. Beachy/,
      /T. W. Judson/,
      /Abstract Algebra: Theory and Applications/,
    ])
  })

  await src_util.test.step('学习材料/公开课/中文', async () => {
    References = course_util.locate_references(main, [ 'open_course', 'zh' ])
    await src_util.everyone_occurs(References, [
      /离散数学/,
      /北京大学/,
    ])
  })

  await src_util.test.step('学习材料/学习指导/中文', async () => {
    References = course_util.locate_references(main, [ 'guide', 'zh' ])
    await src_util.everyone_occurs(References, [
      /屈婉玲/,
      /刘田/,
      /离散数学习题解析/,
      /离散数学学习指导与习题解析/,
    ])
  })

  await src_util.test.step('参考资料/教科书/英文', async () => {
    References = course_util.locate_references(main, [ 'reference', 'text', 'en' ])
    await src_util.everyone_occurs(References, [
      /D. S. Dummit/,
      /R. M. Foote/,
      /Abstract Algebra/,
    ])
  })
})