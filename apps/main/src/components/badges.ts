// Created by GPT-5.6 Sol Max [codex]. Revised by AndyBRoswell.
// Starlight doesn't support multiple badges in the sidebar and it seems there are no features recently planned for this. See https://github.com/withastro/starlight/discussions/3295

import { get_stage, type Localized_Release as Localized_Release_Stages } from './release_stages.ts'

export type Meta_Item = Meta_Item_primitive | Meta_Item_object
export type Meta_Item_primitive = string
export type Mandatory_Multilingual_Text = {
  'zh-CN': string // root language
  'en': string
}
export type Meta_Item_object = {
  text: string | { [key: Intl.UnicodeBCP47LocaleIdentifier]: string } & Mandatory_Multilingual_Text
  class?: string[]
}
export type Meta = Meta_Item[]
export type Rendered_Badge = {
  text: string
  class: string[]
}
export type Sidebar_Item = {
  label: string
  href: string | null
}

export function to_HTML_attr(badges: Meta) { return JSON.stringify(badges) } // Starlight carries custom badge metadata through link attributes.

export function render(language: Intl.UnicodeBCP47LocaleIdentifier, serialized_release_stages: string | null, serialized_badges: string | null, sidebar_item: Sidebar_Item,): Rendered_Badge[] {
  const rendered_badges: Rendered_Badge[] = []
  if (serialized_release_stages !== null) {
    const release_stages = JSON.parse(serialized_release_stages) as Localized_Release_Stages
    const release_stage = release_stages[language] // Select the release value for the page currently being rendered.
    if (release_stage === undefined) { throw new Error('Release stage is undefined for language ' + JSON.stringify(language) + ' on sidebar item ' + JSON.stringify(sidebar_item) + '. ' + 'data-release-stage=' + serialized_release_stages,) }
    rendered_badges.push({
      text: release_stage,
      class: [ 'badge', 'release', get_stage(release_stage), ], // Derive the stage class from the localized release value.
    })
  }
  const meta_items = serialized_badges === null ? [] : JSON.parse(serialized_badges) as Meta // Custom badges may be absent, plain, or localized.
  for (const meta_item of meta_items) {
    let badge_text: string | undefined
    let badge_class: string[] | undefined
    switch (typeof meta_item) {
      case 'string':
        badge_text = meta_item
        break
      case 'object':
        switch (typeof meta_item.text) {
          case 'string':
            badge_text = meta_item.text
            break
          case 'object':
            badge_text = meta_item.text[language] // Resolve multilingual badge text with the document language.
            break
        }
        if ('class' in meta_item) { badge_class = meta_item.class }
        break
    }
    if (badge_text === undefined) { throw new Error('Badge text is undefined: ' + JSON.stringify(meta_item, null, 2)) }
    rendered_badges.push({
      text: badge_text,
      class: [ 'badge', ...(badge_class ?? []), ], // Preserve the base class even when no custom classes are configured.
    })
  }
  return rendered_badges
}
