import * as types_data from '@cs-first-aid/bibkit/types/data'
import * as CSL from '@cs-first-aid/bibkit/CSL'

export const entries = [
  {
    id: [],
    material: {
      type: 'book',
      title: 'A Graduate Course in Applied Cryptography',
      author: [ { given: 'Dan', family: 'Boneh' }, { given: 'Victor', family: 'Shoup' } ],
      language: 'en',
      URL: 'https://toc.cryptobook.us/',
      accessed: { 'date-parts': [ [ 2026, 10, 5 ] ] },
      custom: {
        free_material: [
          {
            link: 'https://crypto.stanford.edu/~dabo/cryptobook/BonehShoup_0_6.pdf',
            display_text: 'Draft PDF (v0.6)',
            note: 'Mostly complete draft with some sections still missing; 1130 PDF pages.',
            'Content-Type': 'application/pdf',
            issued: { 'date-parts': [ [ 2023, 1, 14 ] ] },
            accessed: { 'date-parts': [ [ 2026, 10, 5 ] ] },
          },
          {
            link: 'https://crypto.stanford.edu/~dabo/cryptobook/BonehShoup_0_5.pdf',
            display_text: 'Draft PDF (v0.5)',
            note: 'Draft with the final two chapters still forthcoming; 900 PDF pages.',
            'Content-Type': 'application/pdf',
            issued: { 'date-parts': [ [ 2020, 1, 4 ] ] },
            accessed: { 'date-parts': [ [ 2026, 10, 5 ] ] },
          },
        ],
      } satisfies CSL.Custom,
    } satisfies types_data.Material,
  },
] satisfies types_data.Entry[]
