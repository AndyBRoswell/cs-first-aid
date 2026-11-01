import { expect } from '@playwright/test'
import * as util from '@tests/util.ts'
import * as src_util from '@tests/util/e2e.ts'
import * as course_util from '@tests/util/content/docs/Courses, Textbooks and References.ts'
import { course_material } from '@/content/docs/Courses, Textbooks and References/Data Privacy/data.ts'

for (const { language, prefix } of [
  { language: 'zh-CN', prefix: '' },
  { language: 'en', prefix: '/en' },
]) {
  src_util.test(`Data Privacy (${language})`, { tag: [ '@Courses, Textbooks and References', '@Data Privacy' ] }, async ({ page }) => {
    await page.goto(`${util.test_server}${prefix}/courses-textbooks-and-references/data-privacy/`)
    await expect(page.locator('html')).toHaveAttribute('lang', language)

    const main = page.getByRole('main')
    await course_util.check_references(main, course_material)
    await course_util.check_cites(main)

    const books = course_util.locate_references(main, [ 'reference', 'text', 'en' ])
    await expect(books.locator('.Bibliography > .entry.CSL')).toHaveCount(4)
    for (const title of [
      'Database Anonymization',
      'Programming Differential Privacy',
      'The Algorithmic Foundations of Differential Privacy',
      'Hands-On Differential Privacy',
    ]) {
      await expect(books).toContainText(title)
    }

    const courses = course_util.locate_references(main, [ 'reference', 'lecture_notes_and_slides', 'en' ])
    await expect(courses.locator('.Bibliography > .entry.CSL')).toHaveCount(1)
    await expect(courses).toContainText('CS590 DSP: Data Security and Privacy')
    await expect(courses.locator('.institution > .list > li')).toHaveText([ 'Purdue University' ])
  })
}
