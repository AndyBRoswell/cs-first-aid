import { expect, test } from 'vitest'
import * as semver from 'semver'
import { to_HTML_attr } from '@/UI/release_stages.ts'
import type { Localized_Release } from '@/core/release_stages.ts'
import package_json from '@package.json' with { type: 'json' }

test('to_HTML_attr preserves localized releases for HTML consumers', () => {
  const releases: Localized_Release = { 'zh-CN': package_json.version, en: 'planned', fr: 'blank', }
  expect(JSON.parse(to_HTML_attr(releases))).toEqual(releases)
})

test('to_HTML_attr rejects invalid releases before serialization', () => {
  const future_version = semver.inc(package_json.version, 'major')!
  expect(() => to_HTML_attr({ 'zh-CN': future_version, en: 'blank', })).toThrow(/Invalid release/)
  expect(() => to_HTML_attr({ 'zh-CN': 'blank', en: 'invalid-version', })).toThrow(/Invalid semantic version/)
})
