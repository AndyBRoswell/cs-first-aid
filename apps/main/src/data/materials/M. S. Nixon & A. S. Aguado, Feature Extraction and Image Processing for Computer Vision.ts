import * as types_data from '@cs-first-aid/bibkit/types/data'
import * as CSL from '@cs-first-aid/bibkit/CSL'

export const entries = [
  {
    id: [],
    material: {
      type: 'book',
      title: 'Feature Extraction and Image Processing for Computer Vision',
      author: [ { given: 'Mark S.', family: 'Nixon' }, { given: 'Alberto S.', family: 'Aguado' } ],
      edition: 5,
      medium: 'eBook (PDF, EPUB3, VitalSource)',
      publisher: 'Academic Press',
      'publisher-place': 'Amsterdam',
      issued: { 'date-parts': [ [ 2025, 9, 25 ] ] },
      ISBN: '978-0-443-36687-1',
      DOI: '10.1016/C2024-0-02919-0',
      'number-of-pages': 'XXIII, 705',
      language: 'en',
      URL: 'https://shop.elsevier.com/books/feature-extraction-and-image-processing-for-computer-vision/nixon/978-0-443-36686-4',
      accessed: { 'date-parts': [ [ 2026, 10, 25 ] ] },
      custom: {
        URL: [
          {
            link: 'https://www.sciencedirect.com/book/monograph/9780443366864/feature-extraction-and-image-processing-for-computer-vision',
            display_text: 'ScienceDirect',
            accessed: { 'date-parts': [ [ 2026, 10, 25 ] ] },
          },
          {
            link: 'https://katalog.bibliothek.kit.edu/bib/1505956',
            display_text: 'KIT',
            accessed: { 'date-parts': [ [ 2026, 10, 25 ] ] },
          },
          {
            link: 'https://www.kulturkaufhaus.de/de/detail/ISBN-2244069661019/Nixon-BSc-MSc/Feature-Extraction-and-Image-Processing-for-Computer-Vision',
            display_text: 'Dussmann / EPUB',
            accessed: { 'date-parts': [ [ 2026, 10, 25 ] ] },
          },
        ],
        variant: [
          {
            type: 'book',
            medium: 'Paperback',
            ISBN: '978-0-443-36686-4',
            issued: { 'date-parts': [ [ 2025, 9, 25 ] ] },
            'number-of-pages': 730,
            accessed: { 'date-parts': [ [ 2026, 10, 25 ] ] },
          },
        ],
      } satisfies CSL.Custom,
    } satisfies types_data.Material,
  },
] satisfies types_data.Entry[]
