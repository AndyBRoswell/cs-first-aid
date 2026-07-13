import { expect, type Locator } from '@playwright/test'
import pino from 'pino'
import * as util from '@tests/util.ts'
import * as data from "@/types/data.ts"
// @ts-ignore [css.escape doesn't have ts support]
import cssesc from 'cssesc'

const logger = pino(util.pino_arg)

util.test('Calculus', { tag: [ '@Courses, Textbooks and References', '@Calculus' ] }, async ({ page, errors }) => {
  const response = await page.goto(`${util.test_server}/courses-textbooks-and-references/calculus`)
  page.on('pageerror', (error: Error) => util.on_pageerror(errors, error))
  expect(response!.status()).toBe(200)
  expect(errors).toHaveLength(0)
  const main = page.getByRole('main')
  const References_locators = await main.locator('.References').all()
  for (const locator of References_locators) {
    const csl_entries = await locator.locator('[data-csl-entry-id]').all()
    await expect(locator).toHaveAttribute('data-scope_name')
    const material_segment = JSON.parse((await locator.getAttribute('data-material_segment'))!) as Array<data.Material>
    expect(material_segment.length).toEqual(csl_entries.length)
  }
  let References: Locator, CSS_escaped_scope_name: string
  CSS_escaped_scope_name = cssesc(JSON.stringify([ 'text', 'selected' ]), { quotes: 'double' })
  logger.debug(CSS_escaped_scope_name)
  References = main.locator(`.References[data-scope_name="${CSS_escaped_scope_name}"]`)
  await expect(References.locator('..').getByRole('heading', { level: 2, name: '教科书' })).toHaveCount(1)
})