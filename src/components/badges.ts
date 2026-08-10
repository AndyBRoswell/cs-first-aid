export type Meta_Item = Meta_Item_primitive | Meta_Item_object
export type Meta_Item_primitive = string
export type Mandatory_Multilingual_Text = {
  'zh-CN': string // root language
  'en': string    // for HTML classes
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
  root.querySelectorAll<HTMLElement>('[data-badges]').forEach(element => {
    if (element.hasAttribute('data-badges_rendered')) { return }
    const meta_items = JSON.parse(element.getAttribute('data-badges')!) as Meta
    const badges = document.createElement('span')
    badges.classList.add('badges')
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
        if (badge_class.includes('release')) { badge.classList.add(badge_text) }
        if (badge_class.includes('subject')) { badge.classList.add(((meta_item as Meta_Item_object)['text'] as Mandatory_Multilingual_Text)['en']) }
      }
      badges.append(badge)
    }
    element.append(badges)
    element.setAttribute('data-badges_rendered', 'true')
  })
}
