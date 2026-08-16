import * as semver from 'semver'
import package_json from '@package.json' with { type: 'json' }

const semver_parse_options: semver.Options = { loose: true } // Accept node-semver's documented loose forms.
export const unversioned_releases: readonly [string, ...string[]] = [ 'blank', 'planned', 'backlog', ] // Equivalent statuses below every version.
export const prerelease_stage_groups = [ // The first item is canonical; the outer array defines stage order.
  [ 'dev', 'snapshot', 'nightly', 'pre-alpha', ],
  [ 'alpha', 'a', ],
  [ 'beta', 'b', ],
  [ 'rc', ],
] as const

type Parsed_Version = { semver: semver.SemVer; stage_index?: number; prerelease_number?: string | number }

export type Release = string // Unversioned names are special; every other value is validated by semver at runtime.
const project_version = parse_version(package_json.version).semver.version // Validate and normalize the site version once.

export type Localized_Release = {
  [language: Intl.UnicodeBCP47LocaleIdentifier]: Release
} & {
  'zh-CN': Release
  en: Release
}

export function to_HTML_attr(release_stages: Localized_Release): string {
  for (const [ language, release ] of Object.entries(release_stages)) {
    try {
      if (unversioned_releases.includes(release.toLowerCase())) { continue }
      const parsed = parse_version(release)
      const comparison = compare(release, project_version)
      const is_stable = parsed.semver.prerelease.length === 0
      if (is_stable && comparison > 0) { throw new RangeError(`Stable release cannot be newer than project version ${JSON.stringify(project_version)}.`) } // Stable records when the page became stable.
      if (!is_stable && comparison < 0) { throw new RangeError(`Prerelease cannot be older than project version ${JSON.stringify(project_version)}.`) } // Prerelease targets the current or a future release.
    } catch (cause) {
      throw new TypeError(`Invalid release for language ${JSON.stringify(language)}: ${JSON.stringify(release)}`, { cause })
    }
  }
  return JSON.stringify(release_stages)
}

export function get_stage(release: string): string {
  if (unversioned_releases.includes(release.toLowerCase())) { return 'blank' }
  const parsed = parse_version(release)
  if (parsed.semver.prerelease.length === 0) { return 'stable' }
  return prerelease_stage_groups[parsed.stage_index!]![0] // Every prerelease has a supported stage after parsing.
}

export function compare(left_release: Release, right_release: Release): number {
  const left_is_unversioned = unversioned_releases.includes(left_release.toLowerCase())
  const right_is_unversioned = unversioned_releases.includes(right_release.toLowerCase())
  if (left_is_unversioned || right_is_unversioned) { return left_is_unversioned === right_is_unversioned ? 0 : left_is_unversioned ? -1 : 1 }
  const left = parse_version(left_release)
  const right = parse_version(right_release)
  const core_comparison = left.semver.compareMain(right.semver)
  if (core_comparison !== 0) { return core_comparison } // The core version always takes precedence over its stage.
  if (left.stage_index === undefined || right.stage_index === undefined) { return left.stage_index === right.stage_index ? 0 : left.stage_index === undefined ? 1 : -1 } // A stable release follows every prerelease of the same core.
  const stage_comparison = left.stage_index - right.stage_index
  if (stage_comparison !== 0) { return stage_comparison }
  if (left.prerelease_number === undefined || right.prerelease_number === undefined) { return left.prerelease_number === right.prerelease_number ? 0 : left.prerelease_number === undefined ? -1 : 1 } // An absent prerelease number is earlier.
  return semver.compareIdentifiers(String(left.prerelease_number), String(right.prerelease_number))
}

function parse_version(value: string): Parsed_Version {
  const version = semver.parse(value, semver_parse_options)
  if (version === null) { throw new TypeError(`Invalid semantic version: ${JSON.stringify(value)}`) }
  if (version.prerelease.length === 0) { return { semver: version, } }
  const [ identifier, prerelease_number, ...extra_identifiers ] = version.prerelease
  const normalized = typeof identifier === 'string' ? identifier.toLowerCase() : '' // Known stage names and aliases are case-insensitive.
  const stage_index = prerelease_stage_groups.findIndex(names => names.some(name => name === normalized))
  if (stage_index === -1) { throw new TypeError(`Unsupported prerelease identifier: ${JSON.stringify(identifier)}`) }
  if (extra_identifiers.length > 0 || prerelease_number !== undefined && !/^\d+$/.test(String(prerelease_number))) { throw new TypeError(`Prerelease may contain only its stage identifier and one optional numeric identifier: ${JSON.stringify(value)}`) }
  return prerelease_number === undefined ? { semver: version, stage_index, } : { semver: version, stage_index, prerelease_number, }
}
