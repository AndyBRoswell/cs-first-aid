import * as types_data from '@cs-first-aid/bibkit/types/data'
import * as CSL from '@cs-first-aid/bibkit/CSL'

export const entries = [
  {
    id: [],
    material: {
      type: 'chapter',
      title: 'Colorimetry',
      author: [ { given: 'David H.', family: 'Brainard' }, { given: 'Andrew', family: 'Stockman' } ],
      'container-title': 'Handbook of Optics, Volume III: Vision and Vision Optics',
      publisher: 'McGraw-Hill Education',
      issued: { 'date-parts': [ [ 2009, 9, 22 ] ] },
      edition: 3,
      volume: 3,
      ISBN: '9780071629287',
      language: 'en-US',
      URL: 'https://color2.psych.upenn.edu/brainard/papers/Brainard_Stockman_Colorimetry.pdf',
      accessed: { 'date-parts': [ [ 2026, 8, 23 ] ] },
      custom: {
        variant: [
          {
            type: 'book',
            medium: 'Print',
            ISBN: '9780071498913',
            issued: { 'date-parts': [ [ 2009, 9, 22 ] ] },
          },
        ],
      } satisfies CSL.Custom,
    } satisfies types_data.Material,
  },
] satisfies types_data.Entry[]
