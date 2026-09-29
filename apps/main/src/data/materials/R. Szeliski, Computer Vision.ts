import * as types_data from '@cs-first-aid/bibkit/types/data'
import * as CSL from '@cs-first-aid/bibkit/CSL'

export const entries = [
  {
    id: [],
    material: {
      type: 'book',
      title: 'Computer Vision',
      author: [ { given: 'Richard', family: 'Szeliski' } ],
      edition: 2,
      medium: 'eBook',
      publisher: 'Springer Cham',
      'publisher-place': 'Cham',
      issued: { 'date-parts': [ [ 2022, 1, 3 ] ] },
      ISBN: '978-3-030-34372-9',
      DOI: '10.1007/978-3-030-34372-9',
      'collection-title': 'Texts in Computer Science',
      ISSN: '1868-095X',
      'number-of-pages': 'XXII, 925',
      language: 'en-US',
      URL: 'https://link.springer.com/book/10.1007/978-3-030-34372-9',
      accessed: { 'date-parts': [ [ 2026, 9, 29 ] ] },
      custom: {
        subtitle: 'Algorithms and Applications',
        topic: [ 'Image Processing and Computer Vision', 'Computer Imaging, Vision, Pattern Recognition and Graphics', 'Machine Learning', 'Signal, Image and Speech Processing', 'Materials Science, general' ],
        'eBook packages': [ 'Computer Science', 'Computer Science (R0)' ],
        'collection-title-short': 'TCS',
        free_material: [
          {
            link: 'https://szeliski.org/Book/download.php',
            display_text: 'Free PDF (author form)',
          },
        ],
        variant: [
          {
            type: 'book',
            medium: 'Hardcover',
            ISBN: '978-3-030-34371-2',
            ISSN: '1868-0941',
            issued: { 'date-parts': [ [ 2022, 1, 5 ] ] },
          },
          {
            type: 'book',
            medium: 'Softcover',
            ISBN: '978-3-030-34374-3',
            ISSN: '1868-0941',
            issued: { 'date-parts': [ [ 2023, 1, 6 ] ] },
          },
        ],
      } satisfies CSL.Custom,
    } satisfies types_data.Material,
  },
] satisfies types_data.Entry[]
