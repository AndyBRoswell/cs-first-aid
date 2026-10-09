import * as types_data from '@cs-first-aid/bibkit/types/data'

export const entries = [
  {
    id: [],
    material: {
      type: 'book',
      title: 'Probability',
      author: [ { given: 'Geoffrey', family: 'Grimmett' }, { given: 'Dominic', family: 'Welsh' } ],
      edition: 2,
      publisher: 'Oxford University Press',
      issued: { 'date-parts': [ [ 2014, 8, 21 ] ] },
      ISBN: '9780198709978',
      language: 'en',
      URL: 'https://global.oup.com/academic/product/probability-9780198709978',
      accessed: { 'date-parts': [ [ 2026, 10, 9 ] ] },
      custom: {
        subtitle: 'An Introduction',
        variant: [
          {
            type: 'book',
            edition: 2,
            medium: 'eBook (PDF), DRM',
            publisher: 'Oxford University Press',
            issued: { 'date-parts': [ [ 2014, 8, 22 ] ] },
            ISBN: '9780191019920',
            language: 'en',
            URL: 'https://www.kriso.ee/probability-introduction-db-97801910199202e.html',
            accessed: { 'date-parts': [ [ 2026, 10, 9 ] ] },
          },
          {
            type: 'book',
            edition: 2,
            medium: 'eBook (EPUB)',
            publisher: 'Oxford University Press',
            issued: { 'date-parts': [ [ 2014, 8, 21 ] ] },
            ISBN: '9780191019937',
            language: 'en',
            URL: 'https://www.orellfuessli.ch/shop/home/artikeldetails/A1034801527',
            accessed: { 'date-parts': [ [ 2026, 10, 9 ] ] },
          },
        ],
      },
    } satisfies types_data.Material,
  },
] satisfies types_data.Entry[]
