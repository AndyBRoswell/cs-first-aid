// Created by GPT-5.6 Terra Max [codex] and GPT-5.6 Sol High [web]. Revised by AndyBRoswell.

import { expect, type Locator, type Page } from '@playwright/test'
import * as release_stages from '@/components/release_stages.ts'
import { locales, sidebar } from '@/config/starlight.ts'
import * as util from '@tests/util.ts'
import * as src_util from '@tests/e2e/src/util.ts'

type Sidebar_Item = { // Minimal configuration shape required to traverse sidebar entries.
  label: string
  items?: Sidebar_Item[]
  slug?: string
}
type Localized_Release_Stages = release_stages.Localized_Release
type Root_Locale_Only_Release_Stage = {
  label: string
  language: string
  sidebar_index: number
}

type Site_Locale = { lang: Intl.UnicodeBCP47LocaleIdentifier }

const site_locales = Object.entries(locales as Record<string, Site_Locale>)
  .map(([ locale, { lang: language } ]) => ({ locale, language }))
const site_languages = site_locales.map(({ language }) => language) // Uses the site's configured languages instead of hard-coding them.
const root_language = site_locales.find(({ locale }) => locale === 'root')?.language
if (root_language === undefined) { throw new Error('The root locale must declare a language.') }
const foreign_locales = site_locales.filter(({ locale }) => locale !== 'root') // The root locale has no URL segment and is the source language for untranslated pages.
const configured_sidebar_links = flatten_sidebar_items(sidebar as unknown as Sidebar_Item[])
  .filter(item => item.slug !== undefined) // Groups do not render as the direct sidebar links checked by this test.

function flatten_sidebar_items(items: readonly Sidebar_Item[]): Sidebar_Item[] { // Recursively collects groups and leaf entries.
  return items.flatMap(item => [ item, ...flatten_sidebar_items(item.items ?? []) ])
}

function get_release_stages(serialized: string | null): Localized_Release_Stages | undefined {
  if (serialized === null) { return undefined }
  return JSON.parse(serialized) as Localized_Release_Stages
}

async function get_rendered_release_stages(link: Locator): Promise<Localized_Release_Stages | undefined> {
  return get_release_stages(await link.getAttribute('data-release-stage'))
}

async function get_rendered_sidebar_links(page: Page) {
  const links = page.locator('nav.sidebar li:has(> a) > a')
  await expect(links).toHaveCount(configured_sidebar_links.length) // Ensures configuration and rendered links can be compared by position.
  return links
}

function expect_release_stages_support_all_site_languages(release_stages: Localized_Release_Stages) {
  for (const language of site_languages) { expect(release_stages[language]).toEqual(expect.any(String)) }
}

src_util.test('sidebar release stages are complete, and blank for unavailable pages or translations', { tag: '@Sidebar' }, async ({ page }) => {
  const initial_response = await page.request.get(util.test_server + '/')
  expect(initial_response.ok()).toBe(true)
  expect(await initial_response.text()).toContain('<span class="badges"><span class="badge release')

  await page.goto(`${util.test_server}/`)

  const rendered_sidebar_links = await get_rendered_sidebar_links(page)
  expect(configured_sidebar_links).not.toHaveLength(0)
  const root_locale_only_release_stages: Root_Locale_Only_Release_Stage[] = []

  await src_util.test.step('validate rendered release badge', async () => {
    expect(site_languages).not.toHaveLength(0) // Prevents a vacuous language-support assertion.

    for (const [ index, item ] of configured_sidebar_links.entries()) {
      const badge_link = rendered_sidebar_links.nth(index)
      await expect(badge_link).toContainText(item.label) // Guards against silently pairing the wrong config item with a DOM node.

      const release_stages = await get_rendered_release_stages(badge_link)
      expect(release_stages, `Sidebar item "${item.label}" needs release stage metadata.`).toBeDefined()
      expect_release_stages_support_all_site_languages(release_stages!)

      for (const { language } of foreign_locales) {
        if (item.slug === '' || release_stages![language] !== 'blank') { continue }
        root_locale_only_release_stages.push({ label: item.label, language, sidebar_index: index })
      }
    }
  })

  await src_util.test.step('validate missing page release badges', async () => {
    const missing_page_indexes = configured_sidebar_links
      .map((item, index) => item.slug === '' ? index : undefined)
      .filter((index): index is number => index !== undefined)
    expect(missing_page_indexes).not.toHaveLength(0)

    for (const index of missing_page_indexes) {
      const item = configured_sidebar_links[index]!
      const release_stages = await get_rendered_release_stages(rendered_sidebar_links.nth(index))
      expect(release_stages).toBeDefined()
      for (const language of site_languages) {
        expect(release_stages![language], `Missing sidebar item "${item.label}" must use the blank release status for ${language}.`).toBe('blank')
      }
    }
  })

  await src_util.test.step('verify release badges render in the sidebar', async () => {
    for (const [ index, item ] of configured_sidebar_links.entries()) {
      const badge_link = rendered_sidebar_links.nth(index)
      await expect(badge_link).toHaveAttribute('data-release-stage', /\S/)
      const release_badge = badge_link.locator('.badge.release')
      await expect(release_badge, `Sidebar item "${item.label}" needs exactly one rendered release badge.`).toHaveCount(1)

      const localized_releases = await get_rendered_release_stages(badge_link)
      const release = localized_releases![root_language]!
      await expect(release_badge).toHaveText(release)
      await expect(release_badge).toHaveClass(new RegExp(`(?:^|\\s)${release_stages.get_stage(release)}(?:\\s|$)`))
    }
  })

  await src_util.test.step('verify subject badges render with generated classes', async () => {
    for (const class_name of [ 'Math', 'CS', ]) {
      await expect(
        page.locator('nav.sidebar .badge.subject.' + class_name),
        'The sidebar needs a rendered subject badge with the generated class "' + class_name + '".',
      ).not.toHaveCount(0)
    }
  })

  await src_util.test.step('verify root-only pages render blank release badges in every foreign locale', async () => {
    expect(foreign_locales).not.toHaveLength(0) // Prevents a vacuous assertion when the site has no foreign locale.
    expect(root_locale_only_release_stages).not.toHaveLength(0) // Guards against losing the root-only-page coverage in this test. Need to remove when the translation is complete.

    for (const { locale, language } of foreign_locales) {
      await page.goto(`${util.test_server}/${locale}/`)
      const localized_sidebar_links = await get_rendered_sidebar_links(page)

      for (const { label, sidebar_index } of root_locale_only_release_stages.filter(release => release.language === language)) {
        await expect(
          localized_sidebar_links.nth(sidebar_index).locator('.badge.release'),
          `Root-only sidebar item "${label}" must render a blank release badge in ${language}.`,
        ).toHaveText('blank')
      }
    }
  })
})
