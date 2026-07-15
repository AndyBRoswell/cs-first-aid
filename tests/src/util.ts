import { test as base, type Page, type Locator, expect } from '@playwright/test'

export const test = base.extend({
  page: async ({ page }, use) => {
    const errors: Error[] = []
    page.on('pageerror', (error: Error) => {
      if (error.message.includes('error loading dynamically imported module')) return
      errors.push(error)
    })
    const original_goto = page.goto
    page.goto = async (...args: Parameters<Page['goto']>) => {
      errors.length = 0
      const response = await original_goto.call(page, ...args)
      expect(response!.status()).toBe(200)
      expect(errors).toHaveLength(0)
      return response
    }
    await use(page)
  }
})

export async function everyone_occurs(locator: Locator, patterns: Iterable<string | RegExp>) { // expect these pattern occur in any sequence
  for (const pattern of patterns) { await expect(locator).toHaveText(pattern) }
}

export function locate_parent(from: Locator, tag_name: string, level: number) {
  if (Number.isInteger(level) === false || level <= 0) { throw new Error('Level must be a positive integer.') }
  return from.locator(`xpath=ancestor::${tag_name}[${level}]`)
}