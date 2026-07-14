import { expect } from '@playwright/test';
import pino from 'pino'
import * as util from '@tests/util.ts'
import * as src_util from '@tests/src/util.ts'

const logger = pino(util.pino_arg)

util.test('course list', { tag: [ '@Courses, Textbooks and References', '@course list' ] }, async ({ page, context, errors }) => {
  const prefix: string = `${util.test_server}/courses-textbooks-and-references`
  await src_util.goto(page, errors, `${prefix}/#%E8%AF%BE%E7%A8%8B%E5%88%97%E8%A1%A8`) // courses-textbooks-and-references/#课程列表
  const course_list = page.getByTestId('course list')
  const links = await course_list.locator('[href]').all()
  const tmp_page = await context.newPage()
  tmp_page.on('pageerror', (error: Error) => util.on_pageerror(errors, error))
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