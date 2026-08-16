import * as semver from 'semver'
import package_json from '@package.json' with { type: 'json' }

const semver_parse_options = { loose: true } as const
export type Release = string // "blank" is special; every other value is validated by semver at runtime.
const project_version = parse_project_version()

export type Localized = {
  [language: Intl.UnicodeBCP47LocaleIdentifier]: Release
} & {
  'zh-CN': Release
  en: Release
}

export function to_HTML_attr(release_stages: Localized): string {
  for (const [ language, release ] of Object.entries(release_stages)) {
    try {
      validate(release)
    } catch (cause) {
      throw new TypeError(`Invalid release for language ${JSON.stringify(language)}: ${JSON.stringify(release)}`, { cause })
    }
  }
  return JSON.stringify(release_stages)
}

export function get_stage(release: string): string {
  if (release === 'blank') { return 'blank' }
  const [ stage, ] = parse_release(release).prerelease
  return stage === undefined ? 'stable' : String(stage)
}

function validate(release: string) {
  if (release === 'blank') { return }

  const version = parse_release(release)
  const target_version = `${version.major}.${version.minor}.${version.patch}` // A prerelease targets its suffix-free release.
  if (version.prerelease.length === 0) { // A suffix-free version records when the page became stable.
    if (semver.gt(target_version, project_version)) {
      throw new RangeError(
        `Stable release ${JSON.stringify(release)} cannot be newer than project version ${JSON.stringify(project_version.version)}.`,
      )
    }
    return
  }

  if (semver.lt(target_version, project_version)) { // Prereleases may target the current or a future site version.
    throw new RangeError(
      `Prerelease ${JSON.stringify(release)} cannot target a version older than project version ${JSON.stringify(project_version.version)}.`,
    )
  }
}

function parse_release(release: string): semver.SemVer {
  const version = semver.parse(release, semver_parse_options)
  if (version === null) {
    throw new TypeError(`Release must be "blank" or a valid semantic version: ${JSON.stringify(release)}`)
  }
  return version
}

function parse_project_version(): semver.SemVer {
  const version = semver.parse(package_json.version, semver_parse_options)
  if (version === null) {
    throw new TypeError(`Project version must be a valid three-part semantic version: ${JSON.stringify(package_json.version)}`)
  }
  return version
}
