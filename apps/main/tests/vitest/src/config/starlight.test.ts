// Created by GPT-5.6 Sol Max [codex]. Revised by AndyBRoswell.

import { expect, test } from 'vitest'
import type { Localized_Release } from '@/components/release_stages.ts'
import { locales, sidebar } from '@/config/starlight.ts'
import * as util from '@tests/util.ts'

const site_locales: { locale: string, language: Intl.UnicodeBCP47LocaleIdentifier }[] = Object.entries(locales).map(([ locale, { lang: language } ]) => ({ locale, language }))
const foreign_locales: typeof site_locales = site_locales.filter(({ locale }) => locale !== 'root')
const site_languages: Intl.UnicodeBCP47LocaleIdentifier[] = site_locales.map(({ language }) => language)
const configured_sidebar_links: ReturnType<typeof util.get_sidebar_slug_items> = util.get_sidebar_slug_items(sidebar)

test('locales declare a root language and at least one foreign language', () => {
  expect(site_locales).not.toHaveLength(0)
  for (const { locale, language } of site_locales) {
    expect(language, `Locale "${locale}" must declare a language.`).toEqual(expect.stringMatching(/\S/)) // non-empty
  }
  expect(site_locales.find(({ locale }) => locale === 'root')?.language, 'The root locale must declare a language.').toEqual(expect.stringMatching(/\S/))
  expect(foreign_locales, 'At least one locale besides the root locale must be configured.').not.toHaveLength(0)
})

test('sidebar links declare release metadata for every configured language', () => {
  expect(configured_sidebar_links).not.toHaveLength(0)
  for (const item of configured_sidebar_links) {
    const item_label = item.label ?? item.slug
    const localized_releases = get_release_stages(item)
    for (const language of site_languages) {
      expect(localized_releases[language], `Sidebar item "${item_label}" needs a release badge for language ${language}.`).toEqual(expect.any(String))
    }
  }
})

test('sidebar links for pages not created yet use blank release badges', () => {
  const absent_pages: typeof configured_sidebar_links = configured_sidebar_links.filter(item => item.slug === '')
  expect(absent_pages).not.toHaveLength(0) // Delete this guard when all the pages become present.
  for (const item of absent_pages) {
    const item_label = item.label ?? item.slug
    const localized_releases = get_release_stages(item)
    for (const language of site_languages) {
      expect(localized_releases[language], `Sidebar item "${item_label}" that points to no page must use release badge \`blank\`. [Language: ${language}]`).toBe('blank')
    }
  }
})

test('sidebar currently includes an unavailable foreign translation', () => {
  const unavailable_translation_count: number = configured_sidebar_links.filter(item => item.slug !== '').reduce((count, item) => {
    const localized_releases = get_release_stages(item)
    return count + foreign_locales.filter(({ language }) => localized_releases[language] === 'blank').length
  }, 0)
  expect(unavailable_translation_count).toBeGreaterThan(0) // Remove this guard when every configured translation becomes available.
})

function get_release_stages(item: (typeof configured_sidebar_links)[number]): Localized_Release {
  const serialized = item.attrs?.['data-release-stage']
  expect(serialized, `Sidebar item "${item.label ?? item.slug}" needs release metadata.`).toEqual(expect.stringMatching(/\S/))
  return JSON.parse(serialized as string) as Localized_Release
}
