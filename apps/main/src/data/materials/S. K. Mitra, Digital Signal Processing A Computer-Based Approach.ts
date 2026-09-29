import * as types_data from '@cs-first-aid/bibkit/types/data'
import * as CSL from '@cs-first-aid/bibkit/CSL'

export const entries = [
  {
    id: [],
    material: {
      type: 'book',
      title: 'Digital Signal Processing: A Computer-Based Approach',
      author: [ { given: 'Sanjit K.', family: 'Mitra' } ],
      edition: 4,
      publisher: 'McGraw-Hill',
      'publisher-place': 'New York, NY',
      issued: { 'date-parts': [ [ 2011 ] ] },
      ISBN: '9780073380490',
      'number-of-pages': 'xx + 940',
      'collection-title': 'McGraw-Hill Series in Electrical and Computer Engineering',
      language: 'en-US',
      URL: 'https://www.mathworks.com/academia/books/digital-signal-processing-mitra.html',
      accessed: { 'date-parts': [ [ 2026, 9, 29 ] ] },
      custom: {
        URL: [ { link: 'https://ci.nii.ac.jp/ncid/BB12493289', display_text: 'CiNii Books' } ],
        variant: [
          {
            type: 'book',
            ISBN: '9780071289467',
            issued: { 'date-parts': [ [ 2011 ] ] },
            custom: { edition: 'McGraw-Hill International Edition' },
          },
        ],
      } satisfies CSL.Custom,
    } satisfies types_data.Material,
  },
] satisfies types_data.Entry[]
