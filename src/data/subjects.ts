// Created by GPT-5.6 Sol Max [Codex]. Revised by AndyBRoswell.

import * as util from '@/util.ts'

type Name = { canonical: string, all: string[] }
type Names = { full: Name, short: Name }
type Localized_Names = {
  [locale: Intl.UnicodeBCP47LocaleIdentifier]: Names
} & {
  'zh-CN': Names
  en: Names
}
type Item = {
  id: number
  names: Localized_Names
  emoji?: Partial<Name>
}
type Input = Omit<Item, 'id'>

// IDs are zero-based. Keep additions append-only so existing IDs remain stable.
const items: Item[] = []

function create(input: Input, id: number): Item {
  const names = Object.values(input.names)
  const has_invalid_name = names.length === 0 || names.some(({ full, short }) =>
    [ full, short, ].some(({ canonical, all }) => canonical.trim().length === 0 || !all.includes(canonical))
  )
  if (has_invalid_name) { throw new Error('Canonical subject names must be non-empty and included in all names.') }

  return { id, ...input }
}

export function add(input: Input): Item {
  const item = create(input, items.length)
  items.push(item)
  return item
}

export function add_many(inputs: readonly Input[]): Item[] {
  const additions = inputs.map((input, index) => create(input, items.length + index))
  items.push(...additions)
  return additions
}

export function get(id: number): Item {
  const item = items[id]
  if (item === undefined) { throw new Error('Failed to find a subject with ID ' + id + '.') }
  return item
}

export function get_classes(subject: Item): string[] { return [ subject.names.en.short.canonical, ] }

/** Finds one exact match among canonical and other full and short names in every or the designated locale. */
export function find(name: string, language?: Intl.UnicodeBCP47LocaleIdentifier): Item {
  const matches = items.filter(item => Object.entries(item.names).some(([ current_language, { full, short } ]) => {
    if (language !== undefined && current_language !== language) { return false }
    return full.all.some(value => util.ieq(value, name, current_language))
      || short.all.some(value => util.ieq(value, name, current_language))
  }))
  if (matches.length !== 1) {
    throw new Error('Expected exactly one subject matching ' + JSON.stringify(name) + ', found ' + matches.length + '.')
  }
  return matches[0]!
}

add_many([
  {
    names: {
      'zh-CN': { full: { canonical: '数学', all: [ '数学', ] }, short: { canonical: '数学', all: [ '数学', '数', ] } },
      en: { full: { canonical: 'Mathematics', all: [ 'Mathematics', ] }, short: { canonical: 'Math', all: [ 'Math', 'Maths', ] } },
    },
  },
  {
    names: {
      'zh-CN': { full: { canonical: '计算机科学', all: [ '计算机科学', ] }, short: { canonical: '计算机', all: [ '计算机', '计科', '计', ] } },
      en: { full: { canonical: 'Computer Science', all: [ 'Computer Science', ] }, short: { canonical: 'CS', all: [ 'CS', 'CompSci', ] } },
    },
  },
])
