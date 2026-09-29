import * as types_data from '@cs-first-aid/bibkit/types/data'
import * as CSL from '@cs-first-aid/bibkit/CSL'

export const entries = [
  {
    id: [],
    material: {
      type: 'book',
      title: 'Discrete-Time Signal Processing',
      author: [ { given: 'Alan V.', family: 'Oppenheim' }, { given: 'Ronald W.', family: 'Schafer' } ],
      edition: 3,
      medium: 'Paperback',
      publisher: 'Pearson Education Limited',
      issued: { 'date-parts': [ [ 2013, 7, 30 ] ] },
      'original-date': { 'date-parts': [ [ 2009, 8, 18 ] ] },
      'original-publisher': 'Pearson',
      ISBN: '9781292025728',
      'number-of-pages': 1056,
      language: 'en-US',
      URL: 'https://www.foyles.co.uk/book/discrete-time-signal-processing/alan-oppenheim/9781292025728',
      accessed: { 'date-parts': [ [ 2026, 9, 29 ] ] },
      custom: {
        edition: 'Pearson New International Edition',
        variant: [
          {
            type: 'book',
            medium: 'VitalSource eTextbook',
            ISBN: '9781292038155',
            issued: { 'date-parts': [ [ 2013 ] ] },
          },
          {
            type: 'book',
            medium: 'Hardcover',
            ISBN: '9780131988422',
            'number-of-pages': 1108,
            issued: { 'date-parts': [ [ 2009, 8, 18 ] ] },
          },
        ],
      } satisfies CSL.Custom,
    } satisfies types_data.Material,
  },
] satisfies types_data.Entry[]
