import * as types_data from '@cs-first-aid/bibkit/types/data'
import * as CSL from '@cs-first-aid/bibkit/CSL'

export const entries = [
  {
    id: [],
    material: {
      type: 'book',
      title: 'Modern Operating Systems',
      author: [ { given: 'Andrew S.', family: 'Tanenbaum' }, { given: 'Herbert J.', family: 'Bos' } ],
      publisher: 'Pearson',
      issued: { 'date-parts': [ [ 2023, 4, 17 ] ] },
      edition: 5,
      medium: 'Paperback',
      dimensions: '230 × 180 × 46 mm',
      'number-of-pages': 1184,
      language: 'en-US',
      ISBN: '9781292459660',
      URL: 'https://www.pearson.com/en-gb/subject-catalog/p/modern-operating-systems-global-edition/P200000010760/9781292459660',
      accessed: { 'date-parts': [ [ 2026, 11, 7 ] ] },
      custom: {
        edition: 'Global Edition',
        weight: '1722 g',
        URL: [
          { link: 'https://www.foyles.co.uk/book/modern-operating-systems-global-edition/andrew-s-tanenbaum/9781292459660', display_text: 'Foyles' }, // dimensions, number-of-pages, weight
        ],
        variant: [
          {
            type: 'book',
            medium: 'Paperback',
            dimensions: '7 × 9.125 in', // Pearson InformIT: 7" × 9-1/8"
            issued: { 'date-parts': [ [ 2022, 5, 29 ] ] },
            ISBN: '9780137618873',
            'number-of-pages': 1184,
            URL: 'https://www.pearson.com/en-us/subject-catalog/p/modern-operating-systems/P200000003295/9780137618873',
            accessed: { 'date-parts': [ [ 2026, 11, 7 ] ] },
            note: 'Used copies are available for outright purchase from eCampus (Buy Used).',
            custom: {
              edition: 'United States Edition',
              URL: [
                { link: 'https://www.ecampus.com/modern-operating-systems-rental-edition/bk/9780137618873', display_text: 'eCampus (Buy Used)' },
                { link: 'https://www.informit.com/store/modern-operating-systems-rental-edition-9780137618873', display_text: 'Pearson InformIT bibliographic record' },
              ],
            },
          },
          {
            type: 'book',
            medium: 'Loose-leaf',
            dimensions: '9.3 × 7.1 × 2.5 in', // Bookshop.org
            issued: { 'date-parts': [ [ 2022, 10, 31 ] ] },
            ISBN: '9780137618842',
            'number-of-pages': 1156,
            URL: 'https://bookshop.org/p/books/modern-operating-systems-andrew-tanenbaum/923d5d871cc32391?ean=9780137618842',
            accessed: { 'date-parts': [ [ 2026, 11, 7 ] ] },
            custom: {
              edition: 'United States Edition',
              weight: '4.4 lb', // Bookshop.org
              URL: [
                { link: 'https://books.google.com/books?id=VYJ5zwEACAAJ', display_text: 'Google Books bibliographic record' },
              ],
            },
          },
          {
            type: 'book',
            medium: 'eBook',
            issued: { 'date-parts': [ [ 2022, 10, 14 ] ] },
            ISBN: '9780137618880',
            'number-of-pages': 1184,
            URL: 'https://www.pearson.com/en-us/subject-catalog/p/modern-operating-systems/P200000003295/9780137618880',
            accessed: { 'date-parts': [ [ 2026, 11, 7 ] ] },
            custom: {
              edition: 'United States Edition',
            },
          },
        ],
      } satisfies CSL.Custom,
    },
  },
] satisfies types_data.Entry[]
