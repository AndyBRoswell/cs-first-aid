// Created by GPT-5.6 Sol Max [Codex]. Revised by AndyBRoswell.

import { beforeEach, describe, expect, test, vi } from 'vitest'

type Subject_Module = typeof import('@/data/subjects.ts')
type Input = Parameters<Subject_Module['add']>[0]
type Item = ReturnType<Subject_Module['add']>
type Expanded_Name = Input['names']['en']['full']
type Name_List = readonly [canonical: string, ...aliases: string[]]
type Localized_Name_Lists = { full: Name_List, short: Name_List }
type Fixture = {
  names: Record<string, Localized_Name_Lists> & {
    'zh-CN': Localized_Name_Lists
    en: Localized_Name_Lists
  }
  emoji?: Name_List
}

// The first entry is canonical; later entries are aliases.
function expand([ canonical, ...aliases ]: Name_List): Expanded_Name {
  return { canonical, all: [ canonical, ...aliases, ] }
}

function to_input({ names, emoji }: Fixture): Input {
  const localized_names: Input['names'] = Object.fromEntries(Object.entries(names).map(([ language, value ]) => [
    language,
    { full: expand(value.full), short: expand(value.short), },
  ])) as Input['names']

  return {
    names: localized_names,
    ...(emoji === undefined ? {} : { emoji: expand(emoji), }),
  }
}

const linguistics = {
  names: {
    'zh-CN': { full: [ '语言学', '语言科学', ], short: [ '语言', '语学', ], },
    en: { full: [ 'Linguistics', 'Language science', ], short: [ 'Ling', 'Lng', ], },
    fr: { full: [ 'Études linguistiques', 'Science du langage', ], short: [ 'Ling.', ], },
  },
  emoji: [ '🗣️', '🔤', ],
} as const satisfies Fixture

const philosophy = {
  names: {
    'zh-CN': { full: [ '哲学', ], short: [ '哲', ], },
    en: { full: [ 'Philosophy', ], short: [ 'Phil', ], },
  },
} as const satisfies Fixture

const astronomy = {
  names: {
    'zh-CN': { full: [ '天文学', ], short: [ '天文', '天', ], },
    en: { full: [ 'Astronomy', ], short: [ 'Astro', ], },
  },
} as const satisfies Fixture

describe('src/data/subjects.ts', () => {
  let subjects: Subject_Module

  beforeEach(async () => {
    vi.resetModules()
    subjects = await import('@/data/subjects.ts')
  })

  test('add assigns consecutive IDs and get retrieves the same subjects', () => {
    expect(subjects.get(0).id).toBe(0)

    const first: Item = subjects.add(to_input(linguistics))
    const second: Item = subjects.add(to_input(philosophy))

    expect(second.id).toBe(first.id + 1)
    expect(subjects.get(first.id)).toBe(first)
    expect(subjects.get(second.id)).toBe(second)
    expect(first.emoji?.canonical).toBe(linguistics.emoji[0])
    expect(first.emoji?.all).toEqual(linguistics.emoji)
    expect(second.emoji).toBeUndefined()
    expect(() => subjects.get(-1)).toThrow('Failed to find a subject with ID -1.')
    expect(() => subjects.get(second.id + 1)).toThrow(`Failed to find a subject with ID ${second.id + 1}.`)
  })

  test('add_many assigns consecutive IDs in input order', () => {
    const added: Item[] = subjects.add_many([ to_input(linguistics), to_input(philosophy), to_input(astronomy), ])

    expect(added.map(subject => subject.id)).toEqual([
      added[0]!.id,
      added[0]!.id + 1,
      added[0]!.id + 2,
    ])
    for (const subject of added) { expect(subjects.get(subject.id)).toBe(subject) }
  })

  test('add_many does not add a partial batch when one input is invalid', () => {
    const previous: Item = subjects.add(to_input(astronomy))
    const invalid: Input = to_input(philosophy)
    invalid.names.en.full.canonical = ' '

    expect(() => subjects.add_many([ to_input(linguistics), invalid, ])).toThrow(
      'Canonical subject names must be non-empty and included in all names.',
    )
    expect(() => subjects.find('Linguistics', 'en')).toThrow('found 0')
    expect(subjects.add(to_input(philosophy)).id).toBe(previous.id + 1)
  })

  test('find searches canonical and alias forms of full and short names in every locale', () => {
    const added: Item = subjects.add(to_input(linguistics))
    const locale_entries: [string, Localized_Name_Lists][] = Object.entries(linguistics.names)

    for (const [ language, names ] of locale_entries) {
      const names_to_find: readonly string[] = [ ...names.full, ...names.short, ]
      for (const name of names_to_find) {
        expect(subjects.find(name, language)).toBe(added)
      }
    }
    expect(subjects.find('Language science')).toBe(added)
  })

  test('find ignores case but distinguishes accents', () => {
    const added: Item = subjects.add(to_input(linguistics))

    expect(subjects.find('lInGuIsTiCs', 'en')).toBe(added)
    expect(subjects.find('éTUDES LINGUISTIQUES', 'fr')).toBe(added)
    expect(() => subjects.find('Etudes linguistiques', 'fr')).toThrow('found 0')
  })

  test('find uses the optional language to disambiguate matches', () => {
    const [ chinese_match, english_match, ]: Item[] = subjects.add_many([
      to_input({
        names: {
          'zh-CN': { full: [ '符号学甲', ], short: [ 'Shared label', ], },
          en: { full: [ 'Semiotics Alpha', ], short: [ 'Sem-A', ], },
        },
      }),
      to_input({
        names: {
          'zh-CN': { full: [ '符号学乙', ], short: [ '符乙', ], },
          en: { full: [ 'Semiotics Beta', ], short: [ 'Shared label', ], },
        },
      }),
    ])

    expect(() => subjects.find('shared LABEL')).toThrow('found 2')
    expect(subjects.find('shared LABEL', 'zh-CN')).toBe(chinese_match)
    expect(subjects.find('shared LABEL', 'en')).toBe(english_match)
    expect(() => subjects.find('shared LABEL', 'fr')).toThrow('found 0')
    expect(() => subjects.find('A subject that does not exist')).toThrow('found 0')
  })

  test('add rejects empty canonical names and canonical names omitted from all', () => {
    const empty: Input = to_input(linguistics)
    empty.names.en.full.canonical = ''

    const omitted: Input = to_input(linguistics)
    omitted.names.en.short.all = omitted.names.en.short.all.slice(1)

    const invalid_inputs: Input[] = [ empty, omitted, ]
    for (const invalid of invalid_inputs) {
      expect(() => subjects.add(invalid)).toThrow(
        'Canonical subject names must be non-empty and included in all names.',
      )
    }
  })

  test('get_classes returns the canonical English short name', () => {
    const subject: Item = subjects.add(to_input(linguistics))

    expect(subjects.get_classes(subject)).toEqual([ 'Ling', ])
  })
})
