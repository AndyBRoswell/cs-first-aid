import * as types_data from '@cs-first-aid/bibkit/types/data'
import * as CSL from '@cs-first-aid/bibkit/CSL'

export const entries = [
  {
    id: [],
    material: {
      type: 'book',
      title: 'Introduction to Automata Theory, Languages, and Computation',
      author: [
        { given: 'John E.', family: 'Hopcroft' },
        { given: 'Rajeev', family: 'Motwani' },
        { given: 'Jeffrey D.', family: 'Ullman' },
      ],
      edition: 3,
      medium: 'Paperback',
      publisher: 'Pearson Education Limited',
      'publisher-place': 'Harlow',
      issued: { 'date-parts': [ [ 2013, 11, 1 ] ] },
      ISBN: '9781292039053',
      'number-of-pages': 496,
      language: 'en',
      URL: 'https://www.foyles.co.uk/book/introduction-to-automata-theory-languages-and-computation/john-e-hopcroft/9781292039053',
      accessed: { 'date-parts': [ [ 2026, 9, 29 ] ] },
      custom: {
        edition: 'Pearson New International Edition',
        URL: [
          { link: 'https://openlibrary.org/books/OL29185072M/Introduction_to_Automata_Theory_Languages_and_Computation', display_text: 'Open Library' },
          { link: 'https://ci.nii.ac.jp/ncid/BB26393089?l=en', display_text: 'CiNii Books' },
        ],
        variant: [
          {
            type: 'book',
            medium: 'eBook',
            ISBN: '9781292056166',
            issued: { 'date-parts': [ [ 2013, 10, 28 ] ] },
          },
        ],
      } satisfies CSL.Custom,
    } satisfies types_data.Material,
  },
] satisfies types_data.Entry[]
