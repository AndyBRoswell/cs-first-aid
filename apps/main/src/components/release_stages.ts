import * as semver from 'semver'
import package_json from '../../package.json' with { type: 'json' }

const prerelease_stages = [ 'dev', 'alpha', 'beta', 'rc', ] as const
type Prerelease_Stage = typeof prerelease_stages[number]

export type Stage = 'blank' | Prerelease_Stage | 'stable'
export type Release = 'blank' | `${number}.${number}.${number}${string}` // The regex below performs the exact runtime validation.

type Parsed_Release = {
  stage: Exclude<Stage, 'blank'>
  version: semver.SemVer // Canonical form including the prerelease suffix.
  stable_version: semver.SemVer // Suffix-free target used for project-version checks.
}

const stage_aliases = {
  a: 'alpha',
  b: 'beta',
} as const satisfies Record<string, Prerelease_Stage>

type Stage_Alias = keyof typeof stage_aliases
type Stage_Suffix = Prerelease_Stage | Stage_Alias

const stage_suffix_pattern = [ ...prerelease_stages, ...Object.keys(stage_aliases), ]
  .map(stage => RegExp.escape(stage))
  .join('|')
const release_pattern = new RegExp(
  String.raw`^(?<stable_version>(?:0|[1-9]\d*)\.(?:0|[1-9]\d*)\.(?:0|[1-9]\d*))(?:(?:[.-])?(?<stage>${stage_suffix_pattern})(?:(?:[.-])?(?<stage_number>0|[1-9]\d*))?)?$`,
  'u',
) // Accepts forms such as b0, -b.0, and .b-0.

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

export function get_stage(release: string): Stage {
  if (release === 'blank') { return 'blank' }
  return parse_release(release).stage
}

function validate(release: string) {
  if (release === 'blank') { return }

  const parsed_release = parse_release(release)
  if (parsed_release.stage === 'stable') { // A suffix-free version records when the page became stable.
    if (semver.gt(parsed_release.stable_version, project_version)) {
      throw new RangeError(
        `Stable release ${JSON.stringify(release)} cannot be newer than project version ${JSON.stringify(project_version.version)}.`,
      )
    }
    return
  }

  if (!semver.gt(parsed_release.stable_version, project_version)) { // Prereleases must target a future site version.
    throw new RangeError(
      `Prerelease ${JSON.stringify(release)} must target a version newer than project version ${JSON.stringify(project_version.version)}.`,
    )
  }
}

function parse_release(release: string): Parsed_Release {
  const groups = release_pattern.exec(release)?.groups
  if (groups === undefined) {
    throw new TypeError(
      `Release must be "blank" or a full three-part version with an optional dev, alpha/a, beta/b, or rc suffix: ${JSON.stringify(release)}`,
    )
  }
  const stable_version_text = groups.stable_version
  if (stable_version_text === undefined) { throw new TypeError(`Missing stable version: ${JSON.stringify(release)}`) }

  const stable_version = semver.parse(stable_version_text)
  if (stable_version === null) {
    throw new TypeError(`Invalid stable version: ${JSON.stringify(stable_version_text)}`)
  }

  const stage_suffix = groups.stage as Stage_Suffix | undefined
  if (stage_suffix === undefined) {
    return { stage: 'stable', version: stable_version, stable_version }
  }

  const stage = normalize_stage(stage_suffix)
  const stage_number = groups.stage_number
  const normalized_version = `${stable_version.version}-${stage}${stage_number === undefined ? '' : `.${stage_number}`}` // Normalize accepted spellings before semver parses them.
  const version = semver.parse(normalized_version)
  if (version === null) {
    throw new TypeError(`Invalid release after normalization: ${JSON.stringify(normalized_version)}`)
  }

  return { stage, version, stable_version }
}

function normalize_stage(stage: Stage_Suffix): Prerelease_Stage {
  if (stage === 'a' || stage === 'b') { return stage_aliases[stage] } // CPython-style abbreviations.
  return stage
}

function parse_project_version(): semver.SemVer {
  const version = semver.parse(package_json.version)
  if (version === null) {
    throw new TypeError(`Project version must be a valid three-part semantic version: ${JSON.stringify(package_json.version)}`)
  }
  return version
}
