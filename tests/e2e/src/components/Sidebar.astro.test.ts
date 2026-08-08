// Created by GPT-5.6 Terra Max [codex] and GPT-5.6 Sol High [web]. Revised by AndyBRoswell.

import { expect, type Locator } from '@playwright/test'
import type { Meta } from '@/components/badges.ts'
import { locales, sidebar } from '@/config/starlight.ts'
import * as util from '@tests/util.ts'
import * as src_util from '@tests/e2e/src/util.ts'

type Sidebar_Item = { // Minimal configuration shape required to traverse sidebar entries.
  label: string
  items?: Sidebar_Item[]
  slug?: string
}
type Release_Badge = Exclude<Meta[number], string> // Release badges must use the object form of badge metadata.

const site_languages = Object.values(locales).map(locale => locale.lang) // Uses the site's configured languages instead of hard-coding them.
const configured_sidebar_links = flatten_sidebar_items(sidebar as unknown as Sidebar_Item[])
  .filter(item => item.slug !== undefined) // Groups do not render as the direct sidebar links checked by this test.

function flatten_sidebar_items(items: readonly Sidebar_Item[]): Sidebar_Item[] { // Recursively collects groups and leaf entries.
  return items.flatMap(item => [ item, ...flatten_sidebar_items(item.items ?? []) ])
}

function get_release_badges(serialized_badges: string | null): Release_Badge[] { // Extracts release metadata from a rendered data attribute.
  if (serialized_badges === null) { return [] }
  return (JSON.parse(serialized_badges) as Meta).filter((badge): badge is Release_Badge =>
    typeof badge !== 'string' && badge.class?.includes('release') === true,
  )
}

async function get_rendered_release_badges(link: Locator) {
  return get_release_badges(await link.getAttribute('data-badges'))
}

function get_localized_release_text(release_badge: Release_Badge) { // Narrows release text to its per-language status map.
  if (typeof release_badge.text !== 'object' || release_badge.text === null) {
    throw new Error('A release badge must provide multilingual text to show the current release stage of the corresponding page in every supported language.')
  }
  return release_badge.text
}

function expect_release_badge_supports_all_languages(release_badge: Release_Badge) { // Verifies a string status for every configured language.
  const text = get_localized_release_text(release_badge)
  for (const language of site_languages) {
    expect(text[language]).toEqual(expect.any(String))
  }
}

src_util.test('sidebar release badges are complete, and blank release badges for missing pages', { tag: '@Sidebar' }, async ({ page }) => {
  await page.goto(`${util.test_server}/`)

  const rendered_sidebar_links = page.locator('nav.sidebar li:has(> a) > a')
  await expect(rendered_sidebar_links).toHaveCount(configured_sidebar_links.length) // Ensures configuration and rendered links can be compared by position.
  expect(configured_sidebar_links).not.toHaveLength(0)

  await src_util.test.step('validate rendered release badge metadata', async () => {
    expect(site_languages).not.toHaveLength(0) // Prevents a vacuous language-support assertion.

    for (const [ index, item ] of configured_sidebar_links.entries()) {
      const badge_link = rendered_sidebar_links.nth(index)
      await expect(badge_link).toContainText(item.label) // Guards against silently pairing the wrong config item with a DOM node.

      const release_badges = await get_rendered_release_badges(badge_link)
      expect(release_badges, `Sidebar item "${item.label}" needs release badge metadata.`).not.toHaveLength(0)

      for (const release_badge of release_badges) { expect_release_badge_supports_all_languages(release_badge) }
    }
  })

  await src_util.test.step('validate missing page release badges', async () => {
    const missing_page_indexes = configured_sidebar_links
      .map((item, index) => item.slug === '' ? index : undefined)
      .filter((index): index is number => index !== undefined)
    expect(missing_page_indexes).not.toHaveLength(0)

    for (const index of missing_page_indexes) {
      const item = configured_sidebar_links[index]!
      const release_badges = await get_rendered_release_badges(rendered_sidebar_links.nth(index))
      expect(release_badges).not.toHaveLength(0)

      for (const release_badge of release_badges) {
        const text = get_localized_release_text(release_badge)
        for (const language of site_languages) {
          expect(text[language], `Missing sidebar item "${item.label}" must use the blank release status for ${language}.`).toBe('blank')
        }
      }
    }
  })

  await src_util.test.step('verify release badges render in the sidebar', async () => {
    for (const [ index, item ] of configured_sidebar_links.entries()) {
      const badge_link = rendered_sidebar_links.nth(index)
      await expect(badge_link).toHaveAttribute('data-badges', /\S/)
      await expect(badge_link.locator('.badge.release'), `Sidebar item "${item.label}" needs a rendered release badge.`).not.toHaveCount(0)
    }
  })
})