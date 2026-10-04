import * as CSL from '@cs-first-aid/bibkit/CSL'
import * as types_data from '@cs-first-aid/bibkit/types/data'

export const entries = [
  {
    id: [],
    material: {
      type: 'book',
      title: 'Elements of Information Theory',
      author: [ { given: 'Thomas M.', family: 'Cover' }, { given: 'Joy A.', family: 'Thomas' } ],
      edition: 2,
      medium: 'Hardcover',
      publisher: 'John Wiley & Sons',
      'publisher-place': 'Hoboken, NJ',
      issued: { 'date-parts': [ [ 2006, 7 ] ] },
      ISBN: '9780471241959',
      DOI: '10.1002/047174882X',
      'collection-title': 'Wiley Series in Telecommunications and Signal Processing',
      'number-of-pages': 'xxiii, 748',
      language: 'en',
      URL: 'https://onlinelibrary.wiley.com/doi/book/10.1002/047174882X',
      accessed: { 'date-parts': [ [ 2026, 10, 4 ] ] },
      custom: {
        variant: [
          {
            type: 'book',
            medium: 'Paperback',
            publisher: 'Wiley India',
            'publisher-place': 'New Delhi',
            issued: { 'date-parts': [ [ 2006 ] ] },
            ISBN: '9788126541942',
            'number-of-pages': 'xxiii, 748',
            URL: 'https://opac.iitdh.ac.in/cgi-bin/koha/opac-detail.pl?biblionumber=986',
            custom: { edition: 'Wiley Student Edition' },
          },
          {
            type: 'book',
            medium: 'O-Book',
            ISBN: '9780471748823',
            issued: { 'date-parts': [ [ 2005, 4, 7 ] ] },
            'number-of-pages': 'xxiii, 748',
            URL: 'https://onlinelibrary.wiley.com/doi/book/10.1002/047174882X',
          },
          {
            type: 'book',
            medium: 'eBook',
            ISBN: '9781118585771',
            issued: { 'date-parts': [ [ 2012, 11 ] ] },
            // Wiley lists 784 pages for this ISBN; Schweitzer lists 792.
            'number-of-pages': 784,
            URL: 'https://www.schweitzer-online.de/ebook/Cover/Elements-Information-Theory/9781118585771/A5162106/',
          },
        ],
      } satisfies CSL.Custom,
    } satisfies types_data.Material,
  },
] satisfies types_data.Entry[]
