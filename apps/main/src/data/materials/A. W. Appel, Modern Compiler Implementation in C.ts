import * as types_data from '@cs-first-aid/bibkit/types/data'
import * as CSL from '@cs-first-aid/bibkit/CSL'

export const entries = [
  {
    id: [],
    material: {
      type: 'book',
      title: 'Modern Compiler Implementation in C',
      author: [ { given: 'Andrew W.', family: 'Appel' } ],
      contributor: [ { given: 'Maia', family: 'Ginsburg' } ],
      edition: 'First paperback edition',
      medium: 'Paperback',
      publisher: 'Cambridge University Press',
      'publisher-place': 'Cambridge',
      issued: { 'date-parts': [ [ 2004 ] ] },
      'original-date': { 'date-parts': [ [ 1998 ] ] },
      'original-publisher': 'Cambridge University Press',
      'original-publisher-place': 'Cambridge',
      ISBN: '978-0-521-60765-0',
      'number-of-pages': 'x + 544',
      language: 'en',
      URL: 'https://www.cambridge.org/core/books/modern-compiler-implementation-in-c/0F85704413FC010C1D1C691C4D2A0865',
      accessed: { 'date-parts': [ [ 2026, 9, 29 ] ] },
      custom: {
        URL: [
          { link: 'https://ci.nii.ac.jp/ncid/BA84686870', display_text: 'CiNii Books: 2004 paperback bibliographic record' },
          { link: 'https://www.cs.princeton.edu/~appel/modern/pub.html', display_text: 'Author’s publication history' },
          { link: 'https://www.cs.princeton.edu/~appel/modern/c/', display_text: 'Author’s book page' },
          { link: 'https://www.cs.princeton.edu/~appel/modern/c/errata.html', display_text: 'Errata by printing' },
        ],
      } satisfies CSL.Custom,
    } satisfies types_data.Material,
  },
] satisfies types_data.Entry[]
