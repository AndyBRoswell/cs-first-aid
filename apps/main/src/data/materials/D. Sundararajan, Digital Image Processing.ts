import * as types_data from '@cs-first-aid/bibkit/types/data'
import * as CSL from '@cs-first-aid/bibkit/CSL'

export const entries = [
  {
    id: [],
    material: {
      type: 'book',
      title: 'Digital Image Processing',
      author: [ { given: 'D.', family: 'Sundararajan' } ],
      edition: 2,
      medium: 'eBook (PDF, EPUB)',
      genre: 'Textbook',
      publisher: 'Springer Singapore',
      'publisher-place': 'Singapore',
      issued: { 'date-parts': [ [ 2026, 6, 15 ] ] },
      ISBN: '978-981-95-4983-2',
      DOI: '10.1007/978-981-95-4983-2',
      'number-of-pages': 'XV, 535',
      language: 'en',
      URL: 'https://link.springer.com/book/10.1007/978-981-95-4983-2',
      accessed: { 'date-parts': [ [ 2026, 10, 25 ] ] },
      custom: {
        subtitle: 'A Signal Processing and Algorithmic Approach',
        keyword: [ 'Image Processing', 'Computer Vision', 'Image Analysis', 'Image Restoration', 'Image Registration', 'Image Reconstruction', 'Edge Detection', 'Segmentation' ],
        topic: [ 'Image Processing and Computer Vision', 'Artificial Intelligence', 'Signal, Image and Speech Processing', 'Control, Robotics, Mechatronics', 'Imaging / Radiology' ],
        'eBook packages': [ 'Engineering', 'Engineering (R0)' ],
        free_material: [
          {
            link: 'https://link.springer.com/content/pdf/bfm:978-981-95-4983-2/1',
            display_text: 'PDF (i–xv)',
            'Content-Type': 'application/pdf',
            accessed: { 'date-parts': [ [ 2026, 10, 25 ] ] },
          },
          {
            link: 'https://media.springernature.com/original/springer-static/esm/chp%3A10.1007%2F978-981-95-4983-2_14/MediaObjects/450337_2_En_14_MOESM1_ESM.pdf',
            display_text: 'PDF (slides)',
            'Content-Type': 'application/pdf',
            accessed: { 'date-parts': [ [ 2026, 10, 25 ] ] },
          },
        ],
        variant: [
          {
            type: 'book',
            medium: 'Hardcover',
            ISBN: '978-981-95-4982-5',
            issued: { 'date-parts': [ [ 2026, 6, 16 ] ] },
            accessed: { 'date-parts': [ [ 2026, 10, 25 ] ] },
          },
          {
            type: 'book',
            medium: 'Softcover',
            ISBN: '978-981-95-4985-6',
            // The publisher lists a future due date, not a publication date.
            accessed: { 'date-parts': [ [ 2026, 10, 25 ] ] },
          },
        ],
      } satisfies CSL.Custom,
    } satisfies types_data.Material,
  },
] satisfies types_data.Entry[]
