import { expect, test } from 'vitest'
import * as release_stages from '@/components/release_stages.ts'

type Localized = Parameters<typeof release_stages.to_HTML_attr>[0]

test('src/components/release_stages.ts:to_HTML_attr', () => {
  const localized: Localized = {
    'zh-CN': 'alpha',
    en: 'beta',
    fr: 'stable',
  }

  expect(JSON.parse(release_stages.to_HTML_attr(localized))).toEqual(localized)
})
