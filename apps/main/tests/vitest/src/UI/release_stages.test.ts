import { expect, test } from 'vitest'
import * as semver from 'semver'
import { to_HTML_attr } from '@/UI/release_stages.ts'
import type { Localized_Release } from '@/core/release_stages.ts'
import package_json from '@package.json' with { type: 'json' }

test('to_HTML_attr preserves localized releases for HTML consumers', () => {
  const releases: Localized_Release = { 'zh-CN': semver.inc(package_json.version, 'major')!, en: 'planned', fr: 'blank', }
  expect(JSON.parse(to_HTML_attr(releases))).toEqual(releases)
})

test('to_HTML_attr validates releases before serialization', () => {
  const project_version = new semver.SemVer(package_json.version, { loose: true, })
  const current_core_prerelease = `${project_version.major}.${project_version.minor}.${project_version.patch}-rc.1`
  if (project_version.prerelease.length === 0) {
    expect(() => to_HTML_attr({ 'zh-CN': current_core_prerelease, en: 'blank', })).toThrow(/Invalid release/)
  } else {
    expect(() => to_HTML_attr({ 'zh-CN': current_core_prerelease, en: 'blank', })).not.toThrow()
  }
  expect(() => to_HTML_attr({ 'zh-CN': 'blank', en: 'invalid-version', })).toThrow(/Invalid semantic version/)
})
