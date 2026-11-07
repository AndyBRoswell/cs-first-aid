import * as types_data from '@cs-first-aid/bibkit/types/data'
import * as CSL from '@cs-first-aid/bibkit/CSL'

export const entries = [
  {
    id: [],
    material: {
      type: 'book',
      title: 'Modern Operating Systems',
      author: [ { given: 'Andrew S.', family: 'Tanenbaum' }, { given: 'Herbert J.', family: 'Bos' } ],
      publisher: 'Pearson',
      issued: { 'date-parts': [ [ 2023, 4, 17 ] ] },
      edition: 5,
      language: 'en-US',
      ISBN: '9781292459660',
      URL: 'https://www.pearson.com/en-gb/subject-catalog/p/modern-operating-systems-global-edition/P200000010760/9781292459660',
      accessed: { 'date-parts': [ [ 2026, 9, 29 ] ] },
      custom: {
        edition: 'Global Edition',
        variant: [
          {
            type: 'book',
            medium: 'Paperback',
            issued: { 'date-parts': [ [ 2022, 5, 29 ] ] },
            ISBN: '9780137618873',
            'number-of-pages': 1184,
            URL: 'https://www.pearson.com/en-us/subject-catalog/p/modern-operating-systems/P200000003295/9780137618873',
            accessed: { 'date-parts': [ [ 2026, 11, 7 ] ] },
            note: 'United States edition.',
            custom: {
              edition: 'Rental Edition',
              URL: [
                { link: 'https://www.informit.com/store/modern-operating-systems-rental-edition-9780137618873', display_text: 'Pearson InformIT' },
              ],
            },
          },
        ],
      } satisfies CSL.Custom,
    },
  },
] satisfies types_data.Entry[]
