import * as types_data from '@cs-first-aid/bibkit/types/data'
import * as CSL from '@cs-first-aid/bibkit/CSL'

export const entries = [
  {
    id: [],
    material: {
      type: 'book',
      title: 'Engineering Circuit Analysis',
      author: [ { given: 'William H.', family: 'Hayt' }, { given: 'Jack E.', family: 'Kemmerly' }, { given: 'Jamie D.', family: 'Phillips' }, { given: 'Steven M.', family: 'Durbin' } ],
      edition: 10,
      medium: 'Paperback',
      publisher: 'McGraw Hill',
      'publisher-place': 'New York',
      issued: { 'date-parts': [ [ 2023, 1, 30 ] ] },
      ISBN: '9781266262494',
      'number-of-pages': 'xxi + 864',
      language: 'en',
      URL: 'https://www.mheducation.co.uk/engineering-circuit-analysis-ise-9781266262494-emea-group',
      accessed: { 'date-parts': [ [ 2026, 9, 29 ] ] },
      custom: {
        edition: 'International Student Edition',
        URL: [
          { link: 'https://ci.nii.ac.jp/ncid/BD06008995', display_text: 'CiNii Books' },
          { link: 'https://qcpl.quezoncity.gov.ph/catalog/26011', display_text: 'Quezon City Public Library' },
        ],
      } satisfies CSL.Custom,
    } satisfies types_data.Material,
  },
] satisfies types_data.Entry[]
