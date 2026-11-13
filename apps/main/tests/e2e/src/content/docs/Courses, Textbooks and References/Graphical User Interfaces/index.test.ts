import { expect } from '@playwright/test'
import * as util from '@tests/util.ts'
import * as src_util from '@tests/util/e2e.ts'
import * as course_util from '@tests/util/content/docs/Courses, Textbooks and References.ts'
import { page_reference } from '@/content/docs/Courses, Textbooks and References/Graphical User Interfaces/data.ts'

for (const { language, prefix, label } of [
  { language: 'zh-CN', prefix: '', label: '机构：' },
  { language: 'en', prefix: '/en', label: 'Institution:' },
]) {
  src_util.test(`Graphical User Interfaces (${language})`, { tag: [ '@Courses, Textbooks and References', '@Graphical User Interfaces' ] }, async ({ page }) => {
    await page.goto(`${util.test_server}${prefix}/courses-textbooks-and-references/graphical-user-interfaces/`)
    await expect(page.locator('html')).toHaveAttribute('lang', language)

    const main = page.getByRole('main')
    await course_util.check_references(main, page_reference)
    await course_util.check_cites(main)

    const course_references = course_util.locate_references(main, [ 'material', 'reference', 'lecture_notes_and_slides', 'en' ])
    await expect(course_references.locator('.institution > .list > li')).toHaveText([ 'Politechnika Warszawska', 'University of Leeds' ])

    const references = course_util.locate_references(main, [ 'reference' ])
    await expect(src_util.locate_parent(references, 'section').getByRole('heading', { level: 1, name: '参考文献' })).toHaveCount(1)
    await expect(references.locator('.Bibliography > .entry.CSL')).toHaveCount(5)
  })
}
