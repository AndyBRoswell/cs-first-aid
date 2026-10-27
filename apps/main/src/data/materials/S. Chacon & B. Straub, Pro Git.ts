import * as types_data from '@cs-first-aid/bibkit/types/data'
import * as CSL from '@cs-first-aid/bibkit/CSL'

export const entries = [
  {
    id: [],
    material: {
      type: 'book',
      title: 'Pro Git',
      author: [ { given: 'Scott', family: 'Chacon' }, { given: 'Ben', family: 'Straub' } ],
      edition: 2,
      medium: 'Online',
      publisher: 'Apress',
      issued: { 'date-parts': [ [ 2014 ] ] },
      language: 'en',
      URL: 'https://git-scm.com/book/en',
      accessed: { 'date-parts': [ [ 2026, 10, 27 ] ] },
      custom: {
        URL: [
          { link: 'https://github.com/progit/progit2', display_text: 'GitHub' },
        ],
        free_material: [
          { link: 'https://github.com/progit/progit2/releases/latest', display_text: 'PDF / EPUB (GitHub releases)', 'Content-Type': 'text/html', license: 'CC-BY-NC-SA-3.0' },
        ],
        variant: [
          {
            type: 'book',
            edition: 2,
            medium: 'eBook',
            publisher: 'Apress',
            'publisher-place': 'Berkeley, CA',
            issued: { 'date-parts': [ [ 2014, 11, 18 ] ] },
            DOI: '10.1007/978-1-4842-0076-6',
            ISBN: '9781484200766',
            'number-of-pages': 'XXI, 419',
            URL: 'https://link.springer.com/book/10.1007/978-1-4842-0076-6',
            custom: {
              copyright: 'The Editor(s) (if applicable) and The Author(s) 2014',
              'number-of-illustrations': 208,
              'illustration-type': 'black and white',
              topic: [ 'Open Source', 'Software Engineering/Programming and Operating Systems' ],
              'eBook packages': [ 'Professional and Applied Computing', 'Apress Access Books', 'Professional and Applied Computing (R0)' ],
            } satisfies CSL.Custom,
          },
          {
            type: 'book',
            edition: 2,
            medium: 'Softcover',
            publisher: 'Apress',
            'publisher-place': 'Berkeley, CA',
            issued: { 'date-parts': [ [ 2014, 11, 9 ] ] },
            ISBN: '9781484200773',
            'number-of-pages': 'XXI, 419',
            URL: 'https://link.springer.com/book/10.1007/978-1-4842-0076-6',
          },
        ],
      } satisfies CSL.Custom,
    } satisfies types_data.Material,
  },
] satisfies types_data.Entry[]
