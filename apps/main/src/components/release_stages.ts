type Stage = 'blank' | 'dev' | 'alpha' | 'beta' | 'rc' | 'stable'

export type Localized = {
  [language: Intl.UnicodeBCP47LocaleIdentifier]: Stage
} & {
  'zh-CN': Stage
  en: Stage
}

export function to_HTML_attr(release_stages: Localized): string {
  return JSON.stringify(release_stages)
}
