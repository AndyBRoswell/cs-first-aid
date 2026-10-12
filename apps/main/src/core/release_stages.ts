// Created by GPT-5.6 Sol Max [codex]. Revised by AndyBRoswell.

import * as semver from 'semver'
import package_json from '@package.json' with { type: 'json' }

const semver_parsing_options: semver.Options = { loose: true } // Accept node-semver's documented loose forms.
export const unversioned_releases: readonly [string, ...string[]] = [ 'blank', 'planned', 'backlog', ] // Equivalent statuses below every version.
export const prerelease_stage_groups = [ // The 1st item is canonical; the outer array defines stage order.
  [ 'dev', 'snapshot', 'nightly', 'pre-alpha', ],
  [ 'alpha', 'a', ],
  [ 'beta', 'b', ],
  [ 'rc', ],
] as const

type Parsed_Version = { semver: semver.SemVer; stage_index?: number; prerelease_number?: string | number }

export type Release = string // Unversioned names are special; every other value is validated by semver at runtime.
const project_version = parse_version(package_json.version) // Validate and normalize the site version once, including its canonical stage.

export type Localized_Release = {
  [language: Intl.UnicodeBCP47LocaleIdentifier]: Release
} & {
  'zh-CN': Release
  en: Release
}

export function validate(release_stages: Localized_Release): void {
  for (const [ language, release ] of Object.entries(release_stages)) {
    if (unversioned_releases.includes(release.toLowerCase())) { continue }
    const parsed = parse_version(release)
    if (parsed.stage_index === undefined) { continue } // The version of a stable page can be ahead of / behind the site release version.
    if (compare_core_and_stage(parsed, project_version) < 0) { throw new TypeError(`Invalid release for language "${language}": Prerelease "${release}" cannot be earlier than project version "${project_version.semver.version}" in core version or release stage.`) } // The number in prelease is not compared here: Different pages can have different total counts of preleases for a certain pre-release stage.
  }
}

export function get_stage(release: string): string {
  if (unversioned_releases.includes(release.toLowerCase())) { return 'blank' }
  const parsed = parse_version(release)
  if (parsed.semver.prerelease.length === 0) { return 'stable' }
  return prerelease_stage_groups[parsed.stage_index!]![0] // Every prerelease has a supported stage after parsing.
}

export function compare(left_release: Release, right_release: Release): number {
  const left = unversioned_releases.includes(left_release.toLowerCase()) ? undefined : parse_version(left_release)
  const right = unversioned_releases.includes(right_release.toLowerCase()) ? undefined : parse_version(right_release)
  if (left === undefined || right === undefined) { return left === right ? 0 : left === undefined ? -1 : 1 }
  return compare_core_and_stage(left, right)
}

function compare_core_and_stage(left: Parsed_Version, right: Parsed_Version): number { // The number in pre-release is ignored.
  return left.semver.compareMain(right.semver) || (left.stage_index ?? prerelease_stage_groups.length) - (right.stage_index ?? prerelease_stage_groups.length) // Stable follows every prerelease stage of the same core.
}

function parse_version(value: string): Parsed_Version {
  const version = semver.parse(value, semver_parsing_options)
  if (version === null) { throw new TypeError(`Invalid semantic version: ${JSON.stringify(value)}`) }
  if (version.prerelease.length === 0) { return { semver: version, } }
  const [ identifier, prerelease_number, ...extra_identifiers ] = version.prerelease
  const normalized = typeof identifier === 'string' ? identifier.toLowerCase() : '' // Known stage names and aliases are case-insensitive.
  const stage_index = prerelease_stage_groups.findIndex(names => names.some(name => name === normalized))
  if (stage_index === -1) { throw new TypeError(`Unsupported prerelease identifier: "${identifier}"`) }
  if (extra_identifiers.length > 0 || prerelease_number !== undefined && !/^\d+$/.test(String(prerelease_number))) { throw new TypeError(`Prerelease may contain only its stage identifier and one optional numeric identifier: ${JSON.stringify(value)}`) }
  return prerelease_number === undefined ? { semver: version, stage_index, } : { semver: version, stage_index, prerelease_number, }
}
