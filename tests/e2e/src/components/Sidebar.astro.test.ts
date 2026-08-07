// Created by GPT-5.6 Terra Max. Revised by AndyBRoswell.
import { expect } from '@playwright/test'
import * as util from '@tests/util.ts'
import * as src_util from '@tests/e2e/src/util.ts'

src_util.test('every badgeable sidebar item includes a release badge', { tag: '@Sidebar' }, async ({ page }) => {
  await page.goto(`${util.test_server}/`)
  const sidebar_items = page.locator('nav.sidebar li:has(> a)') // Leaf items are the sidebar entries eligible for badges.
  const sidebar_item_count = await sidebar_items.count()

  for (let index = 0; index < sidebar_item_count; index++) {
    const sidebar_item = sidebar_items.nth(index)
    const badge_link = sidebar_item.locator(':scope > a')
    await expect(badge_link).toHaveAttribute('data-badges', /\S/) // Also catches a missing `attrs['data-badges']` in sidebar configuration.
    await expect(
      badge_link.locator('.badge.release'),
      `Sidebar item #${index} needs a release badge.`,
    ).not.toHaveCount(0) // Allows one or more release badges.
  }

  expect(sidebar_item_count).toBeGreaterThan(0) // Prevents silent success if Starlight's sidebar markup changes.
})
