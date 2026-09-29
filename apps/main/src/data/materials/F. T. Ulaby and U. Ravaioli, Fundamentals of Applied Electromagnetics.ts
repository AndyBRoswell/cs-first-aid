import * as types_data from '@cs-first-aid/bibkit/types/data'
import * as CSL from '@cs-first-aid/bibkit/CSL'

export const entries = [
  {
    id: [],
    material: {
      type: 'book',
      title: 'Fundamentals of Applied Electromagnetics',
      author: [ { given: 'Fawwaz T.', family: 'Ulaby' }, { given: 'Umberto', family: 'Ravaioli' } ],
      edition: 8,
      medium: 'Paperback',
      publisher: 'Pearson',
      issued: { 'date-parts': [ [ 2022, 3, 21 ] ] },
      ISBN: '9781292436739',
      'number-of-pages': 'xxii + 503',
      language: 'en',
      URL: 'https://www.pearson.com/en-gb/subject-catalog/p/fundamentals-of-applied-electromagnetics-global-edition/P200000007252/9781292436739',
      accessed: { 'date-parts': [ [ 2026, 9, 29 ] ] },
      custom: {
        edition: 'Global Edition',
        URL: [ { link: 'https://libkoha.alfaisal.edu/cgi-bin/koha/opac-detail.pl?biblionumber=602510', display_text: 'Alfaisal Library' } ],
      } satisfies CSL.Custom,
    } satisfies types_data.Material,
  },
] satisfies types_data.Entry[]
