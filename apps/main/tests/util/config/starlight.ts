// Created by GPT-5.6 Sol Max [codex]. Revised by AndyBRoswell.

import type { Localized_Release } from '@/components/release_stages.ts'
import { locales, sidebar } from '@/config/starlight.ts'
import type { SidebarItem } from '@/types/starlight.ts'

export const site_locales: { locale: string, language: Intl.UnicodeBCP47LocaleIdentifier }[] = Object.entries(locales).map(([ locale, { lang: language } ]) => ({ locale, language }))
export const site_languages: Intl.UnicodeBCP47LocaleIdentifier[] = site_locales.map(({ language }) => language)
export const foreign_locales: typeof site_locales = site_locales.filter(({ locale }) => locale !== 'root')
export const root_language: Intl.UnicodeBCP47LocaleIdentifier = locales.root.lang
export const sidebar_links: ReturnType<typeof get_sidebar_slug_items> = get_sidebar_slug_items(sidebar)

export function get_release_stages(sidebar_item: (typeof sidebar_links)[number]): Localized_Release {
  const serialized = sidebar_item.attrs?.['data-release-stage']
  if (typeof serialized !== 'string' || /\S/.test(serialized) === false) { throw new Error(`Sidebar item "${sidebar_item.label ?? sidebar_item.slug}" needs release stage attribute.`) }
  return JSON.parse(serialized) as Localized_Release
}

function get_sidebar_slug_items(items: readonly SidebarItem[]): Extract<SidebarItem, { slug: string }>[] {
  return items.flatMap(item => {
    if (typeof item !== 'object' || item === null) { return [] }
    if ('slug' in item) { return [ item ] }
    return 'items' in item ? get_sidebar_slug_items(item.items) : []
  })
}
