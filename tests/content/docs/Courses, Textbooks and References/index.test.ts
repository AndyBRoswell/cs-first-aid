import { test, expect } from '@playwright/test';
import pino from 'pino'
import * as util from '../../../util.ts'

const pino_arg = util.pino_arg
pino_arg.level = process.env.log_level || 'info'

const logger = pino(pino_arg)

function on_pageerror(errors: Error[], error: Error) {
  if (error.message.includes('error loading dynamically imported module')) return
  errors.push(error)
}

test('course list', { tag: [ '@course list' ] }, async ({ page, context }) => {
  const prefix: string = 'http://localhost:4321/courses-textbooks-and-references'
  const errors: Error[] = []
  page.on('pageerror', (error: Error) => on_pageerror(errors, error))
  const response = await page.goto(`${prefix}/#%E8%AF%BE%E7%A8%8B%E5%88%97%E8%A1%A8`)
  expect(response!.status()).toBe(200)
  expect(errors).toHaveLength(0)
  const course_list = page.getByTestId('course list')
  const links = await course_list.locator('[href]').all()
  const tmp_page = await context.newPage()
  tmp_page.on('pageerror', (error: Error) => on_pageerror(errors, error))
  for (const link of links) {
    const href = await link.getAttribute('href')
    const target_link = `${prefix}/${href}`
    logger.debug(await link.textContent())
    const tmp_response = await tmp_page.goto(target_link)
    expect(tmp_response!.status()).toBe(200)
    expect(errors).toHaveLength(0)
    const main_404 = tmp_page.getByTestId('404')
    await expect(main_404).toHaveCount(0)
  }
})