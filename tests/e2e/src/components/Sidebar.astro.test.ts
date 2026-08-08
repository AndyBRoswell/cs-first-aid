// Created by GPT-5.6 Terra Max. Revised by AndyBRoswell.
import { expect } from '@playwright/test'
import type { Meta } from '@/components/badges.ts'
import { locales, sidebar } from '@/config/starlight.ts'
import * as util from '@tests/util.ts'
import * as src_util from '@tests/e2e/src/util.ts'

type Sidebar_Item = { // Minimal configuration shape required to traverse sidebar entries.
  attrs?: Record<string, string>
  items?: Sidebar_Item[]
  slug?: string
}
type Release_Badge = Exclude<Meta[number], string> // Release badges must use the object form of badge metadata.

const site_languages = Object.values(locales).map(locale => locale.lang) // Uses the site's configured languages instead of hard-coding them.
const sidebar_items = flatten_sidebar_items(sidebar as unknown as Sidebar_Item[]) // Includes entries nested inside sidebar groups.

function flatten_sidebar_items(items: readonly Sidebar_Item[]): Sidebar_Item[] { // Recursively collects groups and leaf entries.
  return items.flatMap(item => [ item, ...flatten_sidebar_items(item.items ?? []) ])
}

function get_release_badges(serialized_badges: string | undefined): Release_Badge[] { // Extracts release metadata from an item's data attribute.
  if (serialized_badges === undefined) { return [] }
  return (JSON.parse(serialized_badges) as Meta).filter((badge): badge is Release_Badge =>
    typeof badge !== 'string' && badge.class?.includes('release') === true,
  )
}

function get_localized_release_text(release_badge: Release_Badge) { // Narrows release text to its per-language status map.
  if (typeof release_badge.text !== 'object' || release_badge.text === null) {
    throw new Error('A release badge must provide multilingual text.')
  }
  return release_badge.text
}

function expect_release_badge_supports_all_languages(release_badge: Release_Badge) { // Verifies a string status for every configured language.
  const text = get_localized_release_text(release_badge)
  for (const language of site_languages) {
    expect(text[language]).toEqual(expect.any(String))
  }
}

src_util.test('sidebar release badges are complete and blank for missing pages', { tag: '@Sidebar' }, async ({ page }) => {
  expect(site_languages).not.toHaveLength(0) // Prevents a vacuous language-support assertion.

  const configured_release_badges = sidebar_items.flatMap(item => get_release_badges(item.attrs?.['data-badges'])) // Covers every configured badge, including nested entries.
  expect(configured_release_badges).not.toHaveLength(0)
  for (const release_badge of configured_release_badges) {
    expect_release_badge_supports_all_languages(release_badge)
  }

  const missing_page_sidebar_items = sidebar_items.filter(item => item.slug === '') // An empty slug represents a page that is not available.
  expect(missing_page_sidebar_items).not.toHaveLength(0)
  for (const item of missing_page_sidebar_items) {
    const release_badges = get_release_badges(item.attrs?.['data-badges'])
    expect(release_badges).not.toHaveLength(0)
    for (const release_badge of release_badges) {
      const text = get_localized_release_text(release_badge)
      for (const language of site_languages) {
        expect(text[language]).toBe('blank')
      }
    }
  }

  await page.goto(`${util.test_server}/`) // Confirms the configured badges are rendered in the sidebar.
  const badgeable_sidebar_items = page.locator('nav.sidebar li:has(> a)') // Direct-link entries are eligible for badges.
  const badgeable_sidebar_item_count = await badgeable_sidebar_items.count()

  for (let index = 0; index < badgeable_sidebar_item_count; index++) {
    const badge_link = badgeable_sidebar_items.nth(index).locator(':scope > a')
    await expect(badge_link).toHaveAttribute('data-badges', /\S/) // Ensures badge metadata exists before rendering.
    await expect(
      badge_link.locator('.badge.release'),
      `Sidebar item #${index} needs a release badge.`,
    ).not.toHaveCount(0)
  }

  expect(badgeable_sidebar_item_count).toBeGreaterThan(0) // Guards against a sidebar markup change causing a false pass.
})
