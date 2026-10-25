import * as types_data from '@cs-first-aid/bibkit/types/data'
import * as CSL from '@cs-first-aid/bibkit/CSL'

export const entries = [
  {
    id: [],
    material: {
      type: 'book',
      title: 'Digital Image Processing',
      author: [ { given: 'Wilhelm', family: 'Burger' }, { given: 'Mark J.', family: 'Burge' } ],
      edition: 3,
      medium: 'eBook (PDF)',
      genre: 'Textbook',
      publisher: 'Springer Cham',
      'publisher-place': 'Cham',
      issued: { 'date-parts': [ [ 2022, 7, 23 ] ] },
      ISBN: '978-3-031-05744-1',
      DOI: '10.1007/978-3-031-05744-1',
      'collection-title': 'Texts in Computer Science',
      'collection-editor': [ { given: 'Orit', family: 'Hazzan' }, { given: 'Frank', family: 'Maurer' }, ],
      ISSN: '1868-095X',
      'number-of-pages': 'XXV, 945',
      language: 'en',
      URL: 'https://link.springer.com/book/10.1007/978-3-031-05744-1',
      accessed: { 'date-parts': [ [ 2026, 10, 25 ] ] },
      custom: {
        subtitle: 'An Algorithmic Introduction',
        keyword: [ 'Digital Image Processing', 'Discrete Fourier Transform', 'GSM - Postponed Project', 'Image Processing', 'Image Processing System', 'ImageJ', 'Java', 'Medical Imaging' ],
        topic: [ 'Image Processing and Computer Vision', 'Signal, Image and Speech Processing', 'Computational Intelligence' ],
        'eBook packages': [ 'Computer Science', 'Computer Science (R0)' ],
        'collection-title-short': 'TCS',
        URL: [
          {
            link: 'https://imagingbook.com/',
            display_text: 'imagingbook',
            accessed: { 'date-parts': [ [ 2026, 10, 25 ] ] },
          },
        ],
        free_material: [
          {
            link: 'https://link.springer.com/content/pdf/bfm:978-3-031-05744-1/1',
            display_text: 'PDF (i–xxv)',
            'Content-Type': 'application/pdf',
            accessed: { 'date-parts': [ [ 2026, 10, 25 ] ] },
          },
          {
            link: 'https://github.com/imagingbook/imagingbook-public',
            display_text: 'Java / ImageJ',
            license: 'BSD-2-Clause',
            accessed: { 'date-parts': [ [ 2026, 10, 25 ] ] },
          },
        ],
        variant: [
          {
            type: 'book',
            medium: 'Hardcover',
            ISBN: '978-3-031-05743-4',
            ISSN: '1868-0941',
            issued: { 'date-parts': [ [ 2022, 7, 24 ] ] },
            accessed: { 'date-parts': [ [ 2026, 10, 25 ] ] },
          },
          {
            type: 'book',
            medium: 'Softcover',
            ISBN: '978-3-031-06343-5',
            ISSN: '1868-0941',
            issued: { 'date-parts': [ [ 2023, 7, 24 ] ] },
            accessed: { 'date-parts': [ [ 2026, 10, 25 ] ] },
          },
        ],
      } satisfies CSL.Custom,
    } satisfies types_data.Material,
  },
] satisfies types_data.Entry[]
