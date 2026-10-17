// Created by GPT-5.6 Sol Max [codex]. Revised by GPT-6.1 Sol Max [codex]. Then revised by AndyBRoswell.

import type * as badges from './badges.ts'
import * as subject_catalog from '@/data/subjects.ts'

type Meta = badges.Meta_Item_object
type Multilingual_Text = Exclude<Meta['text'], string>

const cache = new WeakMap<subject_catalog.Subject, Meta>()

function create(subject: subject_catalog.Subject): Meta {
  const text: Multilingual_Text = Object.fromEntries(
    Object.entries(subject.names).map(([ language, { short } ]) => [ language, short.canonical, ]),
  ) as Multilingual_Text
  return Object.freeze({
    text: Object.freeze(text),
    class: Object.freeze([ 'subject', ...subject_catalog.get_classes(subject), ]),
  })
}

/** Resolves a name to shared, immutable badge metadata. */
export function find(name: string, language?: Intl.UnicodeBCP47LocaleIdentifier): Meta {
  const subject = subject_catalog.find(name, language) // Resolve every lookup so locale restrictions and ambiguous aliases still apply.
  const cached = cache.get(subject)
  if (cached !== undefined) { return cached }
  const meta = create(subject)
  cache.set(subject, meta)
  return meta
}

/** Returns a fresh list in input order, reusing immutable metadata for each subject. */
export function find_many(names: readonly string[], language?: Intl.UnicodeBCP47LocaleIdentifier): Meta[] {
  return names.map(name => find(name, language))
}
