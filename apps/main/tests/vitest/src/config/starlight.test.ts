// Created by GPT-5.6 Sol Max [codex]. Revised by AndyBRoswell.

import { expect, test } from 'vitest'
import { foreign_locales, get_release_stages, sidebar_links, site_languages, site_locales } from '@tests/util/config/starlight.ts'

test('locales declare a root language and at least one foreign language', () => {
  expect(site_locales).not.toHaveLength(0)
  for (const { locale, language } of site_locales) {
    expect(language, `Locale "${locale}" must declare a language.`).toEqual(expect.stringMatching(/\S/)) // non-empty
  }
  expect(site_locales.find(({ locale }) => locale === 'root')?.language, 'The root locale must declare a language.').toEqual(expect.stringMatching(/\S/))
  expect(foreign_locales, 'At least one locale besides the root locale must be configured.').not.toHaveLength(0)
})

test('sidebar release metadata covers every configured language and reflects unavailable pages', () => {
  let absent_page_count: number = 0
  let unavailable_translation_count: number = 0

  expect(sidebar_links).not.toHaveLength(0)
  for (const item of sidebar_links) {
    const item_label = item.label ?? item.slug
    const localized_releases = get_release_stages(item)
    const page_is_absent = item.slug === ''

    if (page_is_absent) { absent_page_count++ }

    for (const language of site_languages) {
      expect(localized_releases[language], `Sidebar item "${item_label}" needs a release badge for language ${language}.`).toEqual(expect.any(String))
      if (page_is_absent) {
        expect(localized_releases[language], `Sidebar item "${item_label}" that points to no page must use release badge \`blank\`. [Language: ${language}]`).toBe('blank')
      }
    }

    if (page_is_absent === false) {
      unavailable_translation_count += foreign_locales.filter(({ language }) => localized_releases[language] === 'blank').length
    }
  }

  expect(absent_page_count).toBeGreaterThan(0) // Delete this guard when all the pages become present.
  expect(unavailable_translation_count).toBeGreaterThan(0) // Remove this guard when every configured translation becomes available.
})
