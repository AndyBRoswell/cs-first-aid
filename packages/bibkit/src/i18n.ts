// Created by GPT-6 Astra xhigh [codex]. Revised by AndyBRoswell.

export const self_label: unique symbol = Symbol('self_label') // A node's own label; string keys name its children.

const languages = [ 'zh-CN', 'en' ] as const
type Language = typeof languages[number]
export const supported_languages: readonly Language[] = Object.freeze(languages)

type Label_Node = string | { readonly [key: string | symbol]: Label_Node }
type Localized_Text = Readonly<Record<Language, string>>
type Localized<T extends Label_Node> = // Homomorphic mapped types preserve primitive types; this constraint rejects non-string primitive leaves.
  T extends string ? Localized_Text :
  T extends object ? { readonly [K in keyof T]: Localized<T[K]> } :
  never

export type Custom_Label = Readonly<{
  lecturer: string
  suggested_playback_speed: string
  URL: string
  free_material: Readonly<{
    [self_label]: string
    [name: string]: string
  }>
}>

const custom_label: Localized<Custom_Label> = {
  lecturer: {
    'zh-CN': '主讲',
    en: 'Lecturer',
  },
  suggested_playback_speed: {
    'zh-CN': '建议倍速',
    en: 'Suggested playback speed',
  },
  URL: {
    'zh-CN': '其它链接',
    en: 'Additional links',
  },
  free_material: {
    [self_label]: {
      'zh-CN': '免费资源',
      en: 'Free materials',
    },
    preview: {
      'zh-CN': '预览',
      en: 'Preview',
    },
    sample_chapter: {
      'zh-CN': '样章',
      en: 'Sample chapter',
    },
  },
}

const field_label_separator: Readonly<Record<Language, Readonly<{ inline: string, block: string }>>> = { // Inline values follow the label (e.g. lecturer, suggested_playback_speed); block values are lists (URL, free_material).
  'zh-CN': { inline: '：', block: '：' },
  en: { inline: ': ', block: ':' }, // English needs a trailing space before a colon. Omitted when a newline is followed.
}

function assert_language(language: string): asserts language is Language {
  if (!supported_languages.some(supported => supported === language)) { throw new RangeError(`Unsupported bibliography language: ${JSON.stringify(language)}`) }
}

function select_language(node: Label_Node, language: Language): Label_Node {
  if (typeof node === 'string') { return node }
  const text = node[language]
  if (typeof text === 'string') { return text }
  return Object.fromEntries(Reflect.ownKeys(node).map(key => [ key, select_language(node[key]!, language) ])) // Include symbol keys so each node keeps its own label.
}

export function get_custom_label(language: string): Custom_Label {
  assert_language(language)
  return select_language(custom_label, language) as Custom_Label
}

export function format_field_label(label: string, language: string, { inline = false }: { inline?: boolean } = {}): string {
  assert_language(language)
  const separator = field_label_separator[language]
  return label + (inline ? separator.inline : separator.block)
}
