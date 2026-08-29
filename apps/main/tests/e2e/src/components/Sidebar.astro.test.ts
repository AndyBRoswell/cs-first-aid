// Created by GPT-5.6 Terra Max [codex] and GPT-5.6 Thinking Extended [web]. Revised by AndyBRoswell.

import { expect, type Locator, type Page } from '@playwright/test'
import * as release_stages from '@/components/release_stages.ts'
import { locales, sidebar } from '@/config/starlight.ts'
import * as util from '@tests/util.ts'
import * as src_util from '@tests/e2e/src/util.ts'

type Rendered_Sidebar_Link = {
  text: string
  release_stage_attr: string | null
  release_badge_count: number
  release_badge_text: string | null
  release_badge_classes: string[]
}

const site_locales: { locale: string, language: Intl.UnicodeBCP47LocaleIdentifier }[] = Object.entries(locales).map(([ locale, { lang: language } ]) => ({ locale, language }))
const root_language: Intl.UnicodeBCP47LocaleIdentifier = locales.root.lang
const foreign_locales: typeof site_locales = site_locales.filter(({ locale }) => locale !== 'root') // The root locale is tested separately at "/".
const configured_sidebar_links: ReturnType<typeof util.get_sidebar_slug_items> = util.get_sidebar_slug_items(sidebar) // Groups do not render as the direct links checked here.

function get_release_stages(serialized: string | null): release_stages.Localized_Release | undefined {
  if (serialized === null) { return undefined }
  return JSON.parse(serialized) as release_stages.Localized_Release
}

function get_rendered_sidebar_links(page: Page): Locator {
  return page.locator('nav.sidebar li:has(> a) > a') // Locator construction is synchronous and lazy in Playwright.
}

async function get_rendered_sidebar_snapshot(links: Locator): Promise<Rendered_Sidebar_Link[]> {
  return links.evaluateAll(links => links.map(link => {
    const release_badges = link.querySelectorAll('.badge.release')
    const release_badge = release_badges[0] // expect exactly 1 release badge per link
    return {
      text: link.textContent ?? '',
      release_stage_attr: link.getAttribute('data-release-stage'),
      release_badge_count: release_badges.length,
      release_badge_text: release_badge?.textContent ?? null,
      release_badge_classes: release_badge ? [ ...release_badge.classList ] : [],
    }
  }))
}

src_util.test('sidebar badges are complete, and blank for unavailable pages or translations', { tag: '@Sidebar' }, async ({ page }) => {
  const initial_response = await page.goto(`${util.test_server}/`)
  expect(initial_response).not.toBeNull()
  expect(initial_response!.ok()).toBe(true)
  expect(await initial_response!.text()).toContain('<span class="badges"><span class="badge release')

  const rendered_sidebar_links = get_rendered_sidebar_links(page)
  await expect(rendered_sidebar_links).toHaveCount(configured_sidebar_links.length) // Synchronize before taking a positional snapshot of the complete sidebar.
  const rendered_sidebar_snapshot: Rendered_Sidebar_Link[] = await get_rendered_sidebar_snapshot(rendered_sidebar_links)

  await src_util.test.step('release badges render in the sidebar', async () => {
    for (const [ index, item ] of configured_sidebar_links.entries()) {
      const rendered_link = rendered_sidebar_snapshot[index]!
      const item_label = item.label ?? item.slug

      expect(rendered_link.text).toContain(item_label) // Guard against silently pairing the wrong configuration item with a DOM node.
      expect(rendered_link.release_badge_count, `Sidebar item "${item_label}" needs exactly one rendered release badge.`).toBe(1)
      expect(rendered_link.release_stage_attr).toEqual(expect.stringMatching(/\S/)) // the release badge must not be blank

      const localized_releases = get_release_stages(rendered_link.release_stage_attr)
      expect(localized_releases, `Sidebar item "${item_label}" needs release stage metadata.`).toBeDefined()

      const release = localized_releases![root_language]!
      expect(rendered_link.release_badge_text).toBe(release)
      expect(rendered_link.release_badge_classes).toContain(release_stages.get_stage(release))
    }
  })

  // todo: test subject badges

  await src_util.test.step('unavailable translations render blank release badges in every foreign locale', async () => {
    for (const { locale, language } of foreign_locales) {
      await page.goto(`${util.test_server}/${locale}/`)

      const localized_sidebar_links = get_rendered_sidebar_links(page)
      await expect(localized_sidebar_links).toHaveCount(configured_sidebar_links.length) // Wait for this locale's complete sidebar before taking its snapshot.
      const localized_sidebar_snapshot: Rendered_Sidebar_Link[] = await get_rendered_sidebar_snapshot(localized_sidebar_links)

      for (const [ sidebar_index, item ] of configured_sidebar_links.entries()) {
        if (item.slug === '') { continue } // Completely unavailable pages are validated separately above.
        const item_label = item.label ?? item.slug
        const localized_releases = get_release_stages(rendered_sidebar_snapshot[sidebar_index]!.release_stage_attr)
        expect(localized_releases).toBeDefined()
        if (localized_releases![language] !== 'blank') { continue } // A non-blank value means this translation is available.
        expect(localized_sidebar_snapshot[sidebar_index]!.release_badge_text, `Sidebar item "${item_label}" points to a page without a/an ${language} translation. This item must render a blank release badge.`).toBe('blank')
      }
    }
  })
})
