import { test, expect } from '@playwright/test';
import pino from 'pino'
import * as util from '../../../util.ts'

const pino_arg = util.pino_arg
pino_arg.level = 'debug'

const logger = pino(pino_arg)

test('course list', { tag: [ '@course list' ] }, async ({ page, context }) => {
  const prefix: string = 'http://localhost:4321/courses-textbooks-and-references'
  await page.goto(`${prefix}/#%E8%AF%BE%E7%A8%8B%E5%88%97%E8%A1%A8`)
  const course_list = page.getByTestId('course list')
  const links = await course_list.locator('[href]').all()
  const tmp_page = await context.newPage()
  for (const link of links) {
    const href = await link.getAttribute('href')
    const target_link = `${prefix}/${href}`
    await tmp_page.goto(target_link)
    const main_404 = tmp_page.getByTestId('404')
    await expect(main_404).toHaveCount(0)
  }
})