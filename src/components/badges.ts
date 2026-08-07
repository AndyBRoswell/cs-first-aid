export type Meta = (string | { text: string | { [key: Intl.UnicodeBCP47LocaleIdentifier]: string }, class?: string[] })[]

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
          break
      }
      if (badge_text === undefined) { throw new Error(`Invalid badge meta info: ${JSON.stringify(meta_item, null, 2)}`) }
      badge.textContent = badge_text
      badge.classList.add('badge', badge_text)
      badges.append(badge)
    }
    element.append(badges)
    element.setAttribute('data-badges_rendered', 'true')
  })
}