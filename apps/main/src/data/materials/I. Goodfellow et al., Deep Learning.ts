import * as types_data from '@cs-first-aid/bibkit/types/data'
import * as CSL from '@cs-first-aid/bibkit/CSL'

export const entries = [
  {
    id: [],
    material: {
      type: 'book',
      title: 'Deep Learning',
      author: [ { family: 'Goodfellow', given: 'Ian' }, { family: 'Bengio', given: 'Yoshua' }, { family: 'Courville', given: 'Aaron' } ],
      medium: 'Hardcover',
      publisher: 'The MIT Press',
      issued: { 'date-parts': [ [ 2016, 11, 10 ] ] },
      ISBN: '9780262035613',
      'collection-title': 'Adaptive Computation and Machine Learning',
      language: 'en',
      URL: 'https://mitpress.mit.edu/9780262337373/deep-learning/',
      accessed: { 'date-parts': [ [ 2026, 9, 29 ] ] },
      custom: {
        free_material: [ { link: 'https://www.deeplearningbook.org/', display_text: 'HTML' } ],
      } satisfies CSL.Custom,
    } satisfies types_data.Material,
  },
] satisfies types_data.Entry[]
