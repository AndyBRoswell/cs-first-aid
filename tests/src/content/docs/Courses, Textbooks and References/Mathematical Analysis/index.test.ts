import { expect, type Locator } from '@playwright/test'
import * as util from '@tests/util.ts'
import * as src_util from '@tests/src/util.ts'
import * as course_util from '@tests/src/content/docs/Courses, Textbooks and References/util.ts'

src_util.test('Mathematical Analysis', { tag: [ '@Courses, Textbooks and References', '@Mathematical Analysis' ] }, async ({ page }) => {
  await page.goto(`${util.test_server}/courses-textbooks-and-references/mathematical-analysis`)

  const main = page.getByRole('main')

  await course_util.check_references(main)

  await expect(main.locator('#_top')).toHaveText('数学分析')

  let section: Locator, heading: Locator, References: Locator

  heading = main.getByRole('heading', { level: 1, name: '学习材料' })
  await expect(heading).toHaveCount(1)

  References = await course_util.locate_references(main, [ 'text', 'zh' ])
  section = References.locator('..')
  heading = section.getByRole('heading', { level: 3, name: '中文' })
  await expect(heading).toHaveCount(1)
  References = await course_util.locate_references(main, [ 'text', 'en' ])
  section = References.locator('..')
  heading = section.getByRole('heading', { level: 3, name: '英文' })
  await expect(heading).toHaveCount(1)
  section = section.locator('..')
  heading = section.getByRole('heading', { level: 2, name: '教科书' })
  await expect(heading).toHaveCount(1)

  References = await course_util.locate_references(main, [ 'open_course', 'zh' ])
  section = References.locator('..')
  heading = section.getByRole('heading', { level: 3, name: '中文' })
  await expect(heading).toHaveCount(1)
  section = section.locator('..')
  heading = section.getByRole('heading', { level: 2, name: '公开课' })
  await expect(heading).toHaveCount(1)

  References = await course_util.locate_references(main, [ 'problem_set', 'zh' ])
  section = References.locator('..')
  heading = section.getByRole('heading', { level: 3, name: '中文' })
  await expect(heading).toHaveCount(1)
  section = section.locator('..')
  heading = section.getByRole('heading', { level: 2, name: '习题集' })
  await expect(heading).toHaveCount(1)

  References = await course_util.locate_references(main, [ 'reference', 'text', 'zh' ])
  section = References.locator('..')
  heading = section.getByRole('heading', { level: 4, name: '中文' })
  await expect(heading).toHaveCount(1)
  References = await course_util.locate_references(main, [ 'reference', 'text', 'en' ])
  section = References.locator('..')
  heading = section.getByRole('heading', { level: 4, name: '英文' })
  await expect(heading).toHaveCount(1)
  section = section.locator('..')
  heading = section.getByRole('heading', { level: 3, name: '教科书' })
  await expect(heading).toHaveCount(1)
  References = await course_util.locate_references(main, [ 'reference', 'video', 'zh' ])
  section = References.locator('..')
  heading = section.getByRole('heading', { level: 4, name: '中文' })
  await expect(heading).toHaveCount(1)
  section = section.locator('..')
  heading = section.getByRole('heading', { level: 3, name: '视频' })
  await expect(heading).toHaveCount(1)
  section = section.locator('..')
  heading = section.getByRole('heading', { level: 2, name: '参考资料' })
  await expect(heading).toHaveCount(1)

  heading = main.getByRole('heading', { level: 1, name: '院校开课情况选讲' })
  await expect(heading).toHaveCount(1)
})
