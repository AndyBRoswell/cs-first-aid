import * as types_data from '@cs-first-aid/bibkit/types/data'
import * as CSL from '@cs-first-aid/bibkit/CSL'

export const entries = [
  {
    id: [],
    material: {
      type: 'book',
      title: 'Database System Concepts',
      author: [ { given: 'Abraham', family: 'Silberschatz' }, { given: 'Henry F.', family: 'Korth' }, { given: 'S.', family: 'Sudarshan' } ],
      edition: 7,
      medium: 'Paperback',
      publisher: 'McGraw-Hill Education',
      issued: { 'date-parts': [ [ 2019, 2, 28 ] ] },
      ISBN: '9781260084504',
      'number-of-pages': 'xxviii + 1344',
      language: 'en',
      URL: 'https://www.mheducation.co.uk/ise-database-system-concepts-9781260084504-emea-group',
      accessed: { 'date-parts': [ [ 2026, 9, 29 ] ] },
      custom: {
        edition: 'International Student Edition',
        URL: [ { link: 'https://library.cvsu-rosario.edu.ph/cgi-bin/koha/opac-detail.pl?biblionumber=1615', display_text: 'Cavite State University Library' } ],
      } satisfies CSL.Custom,
    } satisfies types_data.Material,
  },
] satisfies types_data.Entry[]
