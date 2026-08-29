// Created by GPT-5.6 Terra Max [codex] and GPT-5.6 Thinking Extended [web]. Revised by AndyBRoswell.

import { expect, type Locator, type Page } from '@playwright/test'
import type { Meta as Badge_Meta } from '@/components/badges.ts'
import * as release_stages from '@/components/release_stages.ts'
import * as util from '@tests/util.ts'
import { get_release_stages, sidebar_links, site_locales } from '@tests/util/config/starlight.ts'
import * as src_util from '@tests/util/e2e.ts'

type Rendered_Sidebar_Link = {
  text: string
  release_stage_attr: string | null
  badges_attr: string | null
  badges: { text: string, classes: string[] }[]
}

function get_rendered_sidebar_links(page: Page): Locator {
  return page.locator('nav.sidebar li:has(> a) > a') // Locator construction is synchronous and lazy in Playwright.
}

async function get_rendered_sidebar_snapshot(links: Locator): Promise<Rendered_Sidebar_Link[]> {
  return links.evaluateAll(links => links.map(link => {
    const rendered_badges = link.querySelectorAll('.badge')
    return {
      text: link.textContent ?? '',
      release_stage_attr: link.getAttribute('data-release-stage'),
      badges_attr: link.getAttribute('data-badges'),
      badges: [ ...rendered_badges ].map(badge => ({
        text: badge.textContent ?? '',
        classes: [ ...badge.classList ],
      })),
    }
  }))
}

src_util.test('sidebar badges match the configuration in every locale', { tag: '@Sidebar' }, async ({ page }) => {
  let subject_badge_was_rendered: boolean = false

  for (const { locale, language } of site_locales) {
    await src_util.test.step(`badges rendered for ${locale} (${language})`, async () => {
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
        const serialized_badges = item.attrs?.['data-badges']

        expect(rendered_link.text).toContain(item_label) // Guard against silently pairing the wrong configuration item with a DOM node.
        expect(rendered_link.release_stage_attr).toBe(item.attrs?.['data-release-stage']) // Starlight must preserve the configured metadata on the rendered link.
        expect(rendered_link.badges_attr).toBe(serialized_badges ?? null)

        const expected_badges: Rendered_Sidebar_Link['badges'] = [ {
          text: release,
          classes: [ 'badge', 'release', release_stages.get_stage(release), ],
        }, ]
        if (typeof serialized_badges === 'string') {
          for (const meta_item of JSON.parse(serialized_badges) as Badge_Meta) {
            if (typeof meta_item === 'string') {
              expected_badges.push({ text: meta_item, classes: [ 'badge', ], })
              continue
            }
            if (meta_item.class?.includes('subject')) { subject_badge_was_rendered = true }
            expected_badges.push({
              text: typeof meta_item.text === 'string' ? meta_item.text : meta_item.text[language]!,
              classes: [ 'badge', ...(meta_item.class ?? []), ],
            })
          }
        }

        expect(rendered_link.badges.filter(({ classes }) => classes.includes('release')), `Sidebar item "${item_label}" needs exactly 1 rendered release badge.`).toHaveLength(1)
        expect(rendered_link.badges, `Sidebar item "${item_label}" rendered unexpected badges for ${language}.`).toEqual(expected_badges)
      }
    })
  }

  expect(subject_badge_was_rendered, 'No subject badges rendered, which is not the intent of the author.').toBe(true)
})
