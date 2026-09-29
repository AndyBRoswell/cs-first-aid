import * as types_data from '@cs-first-aid/bibkit/types/data'
import * as CSL from '@cs-first-aid/bibkit/CSL'

export const entries = [
  {
    id: [],
    material: {
      type: 'book',
      title: 'Design of Analog CMOS Integrated Circuits',
      author: [ { given: 'Behzad', family: 'Razavi' } ],
      edition: 2,
      medium: 'Paperback',
      publisher: 'McGraw-Hill Education',
      'publisher-place': 'New York',
      issued: { 'date-parts': [ [ 2016, 1, 20 ] ] },
      ISBN: '9781259255090',
      'number-of-pages': 'xviii + 782',
      language: 'en',
      URL: 'https://www.mheducation.co.uk/design-of-analog-cmos-integrated-circuits-9781259255090-emea',
      accessed: { 'date-parts': [ [ 2026, 9, 29 ] ] },
      custom: {
        edition: 'International Student Edition',
        URL: [ { link: 'https://katalog.bibliothek.kit.edu/bib/1479947', display_text: 'KIT Library' } ],
      } satisfies CSL.Custom,
    } satisfies types_data.Material,
  },
] satisfies types_data.Entry[]
