// Created by GPT-5.6 Terra Max [codex] and GPT-5.6 Thinking Extended [web]. Revised by AndyBRoswell.

import { expect, type Locator, type Page } from '@playwright/test'
import * as release_stages from '@/components/release_stages.ts'
import * as util from '@tests/util.ts'
import { get_release_stages, sidebar_links, site_locales } from '@tests/util/config/starlight.ts'
import * as src_util from '@tests/util/e2e.ts'

type Rendered_Sidebar_Link = {
  text: string
  release_stage_attr: string | null
  release_badge_count: number
  release_badge_text: string | null
  release_badge_classes: string[]
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

src_util.test('sidebar release badges match the configuration in every locale', { tag: '@Sidebar' }, async ({ page }) => {
  for (const { locale, language } of site_locales) {
    await src_util.test.step(`release badges rendered for ${locale} (${language})`, async () => {
      const locale_path = locale === 'root' ? '' : `${locale}/`
      const response = await page.goto(`${util.test_server}/${locale_path}`)
      expect(response).not.toBeNull()
      expect(response!.ok()).toBe(true)
      expect(await response!.text()).toContain('<span class="badges"><span class="badge release')

      const rendered_sidebar_links = get_rendered_sidebar_links(page)
      await expect(rendered_sidebar_links).toHaveCount(sidebar_links.length) // Synchronize before taking a positional snapshot of the entire sidebar.
      const rendered_sidebar_snapshot: Rendered_Sidebar_Link[] = await get_rendered_sidebar_snapshot(rendered_sidebar_links)

      for (const [ index, item ] of sidebar_links.entries()) {
        const rendered_link = rendered_sidebar_snapshot[index]!
        const item_label = item.translations?.[locale] ?? item.label ?? item.slug
        const release = get_release_stages(item)[language]!

        expect(rendered_link.text).toContain(item_label) // Guard against silently pairing the wrong configuration item with a DOM node.
        expect(rendered_link.release_badge_count, `Sidebar item "${item_label}" needs exactly 1 rendered release badge.`).toBe(1)
        expect(rendered_link.release_stage_attr).toBe(item.attrs?.['data-release-stage']) // Starlight must preserve the configured metadata on the rendered link.
        expect(rendered_link.release_badge_text).toBe(release)
        expect(rendered_link.release_badge_classes).toContain(release_stages.get_stage(release))
      }
    })
  }

  // todo: test subject badges
})
