import * as types_data from '@cs-first-aid/bibkit/types/data'
import * as CSL from '@cs-first-aid/bibkit/CSL'

export const entries = [
  {
    id: [],
    material: {
      type: 'book',
      title: 'Foundations of Computer Vision',
      author: [ { given: 'Antonio', family: 'Torralba' }, { given: 'Phillip', family: 'Isola' }, { given: 'William T.', family: 'Freeman' } ],
      medium: 'eBook',
      publisher: 'The MIT Press',
      'publisher-place': 'Cambridge, MA',
      issued: { 'date-parts': [ [ 2024, 4, 16 ] ] },
      ISBN: '9780262378666',
      'collection-title': 'Adaptive Computation and Machine Learning',
      'number-of-pages': 840,
      language: 'en-US',
      URL: 'https://visionbook.mit.edu/',
      accessed: { 'date-parts': [ [ 2026, 9, 29 ] ] },
      custom: {
        URL: [ { link: 'https://mitpress.mit.edu/9780262048972/foundations-of-computer-vision/', display_text: 'MIT Press' } ],
        variant: [
          {
            type: 'book',
            medium: 'Hardcover',
            ISBN: '9780262048972',
            issued: { 'date-parts': [ [ 2024, 4, 16 ] ] },
          },
        ],
      } satisfies CSL.Custom,
    } satisfies types_data.Material,
  },
] satisfies types_data.Entry[]
