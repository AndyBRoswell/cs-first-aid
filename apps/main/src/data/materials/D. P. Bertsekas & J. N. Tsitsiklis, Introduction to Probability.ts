import * as types_data from '@cs-first-aid/bibkit/types/data'

export const entries = [
  {
    id: [],
    material: {
      type: 'book',
      title: 'Introduction to Probability',
      author: [ { given: 'Dimitri P.', family: 'Bertsekas' }, { given: 'John N.', family: 'Tsitsiklis' } ],
      edition: 2,
      medium: 'Hardcover',
      publisher: 'Athena Scientific',
      'publisher-place': 'Belmont, MA',
      issued: { 'date-parts': [ [ 2008, 7 ] ] },
      ISBN: '9781886529236',
      'number-of-pages': 544,
      language: 'en',
      URL: 'https://web.mit.edu/dimitrib/www/probbook.html',
      accessed: { 'date-parts': [ [ 2026, 10, 9 ] ] },
      custom: {
        URL: [
          { link: 'https://toc.library.ethz.ch/objects/pdf03/e01_978-1-886529-23-6_01.pdf', display_text: 'Contents (PDF)' },
        ],
        variant: [
          {
            type: 'book',
            edition: 2,
            medium: 'eBook',
            publisher: 'Athena Scientific',
            'number-of-pages': 544,
            language: 'en',
            URL: 'https://play.google.com/store/books/details/Introduction_to_Probability?id=-oNZEAAAQBAJ',
            accessed: { 'date-parts': [ [ 2026, 10, 9 ] ] },
          },
        ],
        free_material: [
          {
            link: 'https://web.mit.edu/dimitrib/www/prob-errata_2ndedition.pdf',
            display_text: 'Errata for 2e',
            'Content-Type': 'application/pdf',
            accessed: { 'date-parts': [ [ 2026, 10, 9 ] ] },
          },
        ],
      },
    } satisfies types_data.Material,
  },
] satisfies types_data.Entry[]
