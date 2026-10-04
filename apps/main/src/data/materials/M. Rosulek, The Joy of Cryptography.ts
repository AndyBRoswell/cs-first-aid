import * as types_data from '@cs-first-aid/bibkit/types/data'
import * as CSL from '@cs-first-aid/bibkit/CSL'

export const entries = [
  {
    id: [],
    material: {
      type: 'book',
      title: 'The Joy of Cryptography',
      author: [ { given: 'Mike', family: 'Rosulek' } ],
      medium: 'Online',
      language: 'en-US',
      URL: 'https://joyofcryptography.com/',
      accessed: { 'date-parts': [ [ 2026, 10, 4 ] ] },
      custom: {
        subtitle: 'An Undergraduate Course in Provable Security',
        URL: [ { link: 'https://mitpress.mit.edu/9780262049979/the-joy-of-cryptography/', display_text: 'MIT Press' } ],
        free_material: [
          { link: 'https://joyofcryptography.com/', display_text: 'HTML', 'Content-Type': 'text/html', license: 'CC-BY-NC-ND-4.0' },
        ],
        variant: [
          {
            type: 'book',
            edition: 1,
            medium: 'eBook',
            publisher: 'The MIT Press',
            'publisher-place': 'Cambridge, MA',
            issued: { 'date-parts': [ [ 2026, 1, 6 ] ] },
            ISBN: '9780262384582',
            'number-of-pages': 702,
            URL: 'https://mitpress.mit.edu/9780262049979/the-joy-of-cryptography/',
          },
          {
            type: 'book',
            edition: 1,
            medium: 'Hardcover',
            publisher: 'The MIT Press',
            'publisher-place': 'Cambridge, MA',
            issued: { 'date-parts': [ [ 2026, 1, 6 ] ] },
            ISBN: '9780262049979',
            'number-of-pages': 702,
            URL: 'https://mitpress.mit.edu/9780262049979/the-joy-of-cryptography/',
          },
        ],
      } satisfies CSL.Custom,
    } satisfies types_data.Material,
  },
] satisfies types_data.Entry[]
