import * as types_data from '@cs-first-aid/bibkit/types/data'
import * as CSL from '@cs-first-aid/bibkit/CSL'

export const entries = [
  {
    id: [],
    material: {
      type: 'book',
      author: [ { given: 'James Ward', family: 'Brown' }, { given: 'Ruel V.', family: 'Churchill' } ],
      title: 'Complex Variables and Applications',
      edition: 9,
      medium: 'Paperback',
      publisher: 'McGraw-Hill Education',
      'publisher-place': 'New York',
      'collection-title': 'Churchill-Brown series',
      issued: { 'date-parts': [ [ 2013, 11, 20 ] ] },
      'number-of-pages': 'xvi, 461',
      ISBN: '978-1-259-07277-2',
      language: 'en-US',
      URL: 'https://www.mheducation.co.uk/complex-variables-and-applications-9781259072772-emea',
      accessed: { 'date-parts': [ [ 2026, 10, 5 ] ] },
      custom: {
        URL: [
          { link: 'https://ci.nii.ac.jp/ncid/BB23439489?l=en', display_text: 'CiNii Books: international paperback' },
        ],
        variant: [
          {
            type: 'book',
            medium: 'Paperback',
            issued: { 'date-parts': [ [ 2013, 11, 20 ] ] },
            ISBN: '978-1-259-07277-2',
            URL: 'https://www.mheducation.com.sg/complex-variables-and-applications-9781259072772-asia',
            note: 'Singapore listing of the international paperback edition; same ISBN as the main entry.',
          },
          {
            type: 'book',
            medium: 'Hardcover',
            issued: { 'date-parts': [ [ 2013, 9, 3 ] ] },
            ISBN: '978-0-07-338317-0',
            URL: 'https://ci.nii.ac.jp/ncid/BB14921000?l=en',
            custom: {
              URL: [
                { link: 'https://libcat.weber.edu/cgi-bin/koha/opac-MARCdetail.pl?biblionumber=1210647', display_text: 'Stewart Library: hardcover ISBN' },
              ],
            },
          },
          {
            type: 'book',
            medium: 'eBook (EPUB)',
            issued: { 'date-parts': [ [ 2014, 10, 16 ] ] },
            ISBN: '978-0-07-717184-1',
            URL: 'https://www.mheducation.co.uk/ebook-complex-variables-and-applications-9780077171841-emea',
          },
        ],
      } satisfies CSL.Custom,
    } satisfies types_data.Material,
  },
] satisfies types_data.Entry[]
