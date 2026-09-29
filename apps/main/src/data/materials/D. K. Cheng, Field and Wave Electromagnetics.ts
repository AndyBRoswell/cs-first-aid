import * as types_data from '@cs-first-aid/bibkit/types/data'
import * as CSL from '@cs-first-aid/bibkit/CSL'

export const entries = [
  {
    id: [],
    material: {
      type: 'book',
      title: 'Field and Wave Electromagnetics',
      author: [ { given: 'David K.', family: 'Cheng' } ],
      edition: 2,
      medium: 'Paperback',
      publisher: 'Pearson Education Limited',
      issued: { 'date-parts': [ [ 2013, 7, 23 ] ] },
      ISBN: '9781292026565',
      'number-of-pages': '720',
      language: 'en',
      URL: 'https://www.pearson.com/en-gb/subject-catalog/p/field-and-wave-electromagnetics-pearson-new-international-edition/P200000003925',
      accessed: { 'date-parts': [ [ 2026, 9, 29 ] ] },
      custom: {
        edition: 'Pearson New International Edition',
        URL: [ { link: 'https://www.kinokuniya.co.jp/f/dsg-02-9781292026565', display_text: 'Kinokuniya' } ],
      } satisfies CSL.Custom,
    } satisfies types_data.Material,
  },
] satisfies types_data.Entry[]
