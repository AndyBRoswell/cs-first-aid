import { get_stage, type Localized as Localized_Release_Stages } from './release_stages.ts'

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

export function to_HTML_attr(badges: Meta) { return JSON.stringify(badges) }

export function attach(root: ParentNode = document) {
  let lang = document.documentElement.lang
  console.log(`lang: ${lang}`)
  root.querySelectorAll<HTMLElement>('[data-release-stage], [data-badges]').forEach(element => {
    if (element.hasAttribute('data-badges_rendered')) { return }
    const badges = document.createElement('span')
    badges.classList.add('badges')

    const serialized_release_stages = element.getAttribute('data-release-stage')
    if (serialized_release_stages !== null) {
      const release_stages = JSON.parse(serialized_release_stages) as Localized_Release_Stages
      const release_stage = release_stages[lang]
      if (release_stage === undefined) {
        const sidebar_item: { label: string, href: string | null } = {
          label: element.getAttribute('aria-label') ?? element.textContent?.replace(/\s+/g, ' ').trim() ?? '',
          href: element.getAttribute('href'),
        }
        throw new Error(
          `Release stage is undefined for language ${JSON.stringify(lang)} on sidebar item ${JSON.stringify(sidebar_item)}. `
          + `data-release-stage=${serialized_release_stages}`,
        )
      }
      const release_badge = document.createElement('span')
      release_badge.textContent = release_stage
      release_badge.classList.add('badge', 'release', get_stage(release_stage))
      badges.append(release_badge)
    }

    const serialized_badges = element.getAttribute('data-badges')
    const meta_items = serialized_badges === null ? [] : JSON.parse(serialized_badges) as Meta
    for (const meta_item of meta_items) {
      const badge = document.createElement('span')
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
              badge_text = meta_item.text[lang]
              break
          }
          if ('class' in meta_item) { badge_class = meta_item.class }
          break
      }
      if (badge_text === undefined) { throw new Error(`\`text\` is undefined: ${JSON.stringify(meta_item, null, 2)}`) }
      badge.textContent = badge_text
      badge.classList.add('badge')
      if (badge_class !== undefined) {
        badge.classList.add(...badge_class)
      }
      badges.append(badge)
    }
    element.append(badges)
    element.setAttribute('data-badges_rendered', 'true')
  })
}
