import * as badges from './badges.ts'
import * as subject_catalog from '@/data/subjects.ts'

type Meta = badges.Meta_Item_object
type Multilingual_Text = Exclude<Meta['text'], string>

function create(subject: subject_catalog.Subject): Meta {
  const text: Multilingual_Text = Object.fromEntries(
    Object.entries(subject.names).map(([ language, { short } ]) => [ language, short.canonical, ]),
  ) as Multilingual_Text
  return { text, class: [ 'subject', ...subject_catalog.get_classes(subject), ],}
}

export function find(name: string, language?: Intl.UnicodeBCP47LocaleIdentifier): Meta {
  return create(subject_catalog.find(name, language))
}
