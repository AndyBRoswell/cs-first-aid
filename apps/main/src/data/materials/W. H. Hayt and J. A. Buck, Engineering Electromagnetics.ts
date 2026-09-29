import * as types_data from '@cs-first-aid/bibkit/types/data'
import * as CSL from '@cs-first-aid/bibkit/CSL'

export const entries = [
  {
    id: [],
    material: {
      type: 'book',
      title: 'Engineering Electromagnetics',
      author: [ { given: 'William H.', family: 'Hayt' }, { given: 'John A.', family: 'Buck' } ],
      edition: 9,
      medium: 'Paperback',
      publisher: 'McGraw Hill',
      issued: { 'date-parts': [ [ 2018, 1, 23 ] ] },
      ISBN: '9781260084566',
      'number-of-pages': 'xiv + 594',
      language: 'en',
      URL: 'https://www.mheducation.co.uk/ise-engineering-electromagnetics-9781260084566-emea',
      accessed: { 'date-parts': [ [ 2026, 9, 29 ] ] },
      custom: {
        edition: 'International Student Edition',
        URL: [ { link: 'https://libcat.kyu.ac.ug/cgi-bin/koha/opac-detail.pl?biblionumber=161', display_text: 'Kyambogo University Library' } ],
      } satisfies CSL.Custom,
    } satisfies types_data.Material,
  },
] satisfies types_data.Entry[]
