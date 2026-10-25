import * as types_data from '@cs-first-aid/bibkit/types/data'
import * as CSL from '@cs-first-aid/bibkit/CSL'

export const entries = [
  {
    id: [],
    material: {
      type: 'book',
      title: 'Digital Image Processing',
      author: [ { given: 'S.', family: 'Esakkirajan' }, { given: 'T.', family: 'Veerakumar' }, { given: 'Badri Narayan', family: 'Subudhi' } ],
      edition: 1,
      medium: 'eBook (PDF, EPUB)',
      genre: 'Textbook',
      publisher: 'Springer Singapore',
      'publisher-place': 'Singapore',
      issued: { 'date-parts': [ [ 2025, 11, 9 ] ] },
      ISBN: '978-981-96-6382-8',
      DOI: '10.1007/978-981-96-6382-8',
      'number-of-pages': 'XXIV, 870',
      language: 'en',
      URL: 'https://link.springer.com/book/10.1007/978-981-96-6382-8',
      accessed: { 'date-parts': [ [ 2026, 10, 25 ] ] },
      custom: {
        subtitle: 'Illustration using Python',
        keyword: [
          'Digital Image Processing',
          'Digital Image Analysis',
          'Python-based Image Processing',
          'Two-Dimensional Signal Processing',
          'Image Signal Processing',
          'Multidimensional Signal Processing',
          'Image and Video Processing',
        ],
        topic: [ 'Computer Imaging, Vision, Pattern Recognition and Graphics', 'Signal, Image and Speech Processing', 'Image Processing and Computer Vision', 'Python', 'Open Source', 'Data Structures and Information Theory' ],
        'eBook packages': [ 'Professional and Applied Computing', 'Professional and Applied Computing (R0)' ],
        free_material: [
          {
            link: 'https://link.springer.com/content/pdf/bfm:978-981-96-6382-8/1',
            display_text: 'PDF (i–xxiv)',
            'Content-Type': 'application/pdf',
            accessed: { 'date-parts': [ [ 2026, 10, 25 ] ] },
          },
          {
            link: 'https://media.springernature.com/original/springer-static/esm/chp%3A10.1007%2F978-981-96-6382-8_1/MediaObjects/630765_1_En_1_MOESM1_ESM.ipynb',
            display_text: 'IPYNB 1',
            accessed: { 'date-parts': [ [ 2026, 10, 25 ] ] },
          },
          {
            link: 'https://media.springernature.com/original/springer-static/esm/chp%3A10.1007%2F978-981-96-6382-8_2/MediaObjects/630765_1_En_2_MOESM1_ESM.ipynb',
            display_text: 'IPYNB 2',
            accessed: { 'date-parts': [ [ 2026, 10, 25 ] ] },
          },
          {
            link: 'https://media.springernature.com/original/springer-static/esm/chp%3A10.1007%2F978-981-96-6382-8_3/MediaObjects/630765_1_En_3_MOESM1_ESM.ipynb',
            display_text: 'IPYNB 3',
            accessed: { 'date-parts': [ [ 2026, 10, 25 ] ] },
          },
          {
            link: 'https://media.springernature.com/original/springer-static/esm/chp%3A10.1007%2F978-981-96-6382-8_4/MediaObjects/630765_1_En_4_MOESM1_ESM.ipynb',
            display_text: 'IPYNB 4',
            accessed: { 'date-parts': [ [ 2026, 10, 25 ] ] },
          },
          {
            link: 'https://media.springernature.com/original/springer-static/esm/chp%3A10.1007%2F978-981-96-6382-8_5/MediaObjects/630765_1_En_5_MOESM1_ESM.ipynb',
            display_text: 'IPYNB 5',
            accessed: { 'date-parts': [ [ 2026, 10, 25 ] ] },
          },
          {
            link: 'https://media.springernature.com/original/springer-static/esm/chp%3A10.1007%2F978-981-96-6382-8_6/MediaObjects/630765_1_En_6_MOESM1_ESM.ipynb',
            display_text: 'IPYNB 6',
            accessed: { 'date-parts': [ [ 2026, 10, 25 ] ] },
          },
          {
            link: 'https://media.springernature.com/original/springer-static/esm/chp%3A10.1007%2F978-981-96-6382-8_7/MediaObjects/630765_1_En_7_MOESM1_ESM.ipynb',
            display_text: 'IPYNB 7',
            accessed: { 'date-parts': [ [ 2026, 10, 25 ] ] },
          },
          {
            link: 'https://media.springernature.com/original/springer-static/esm/chp%3A10.1007%2F978-981-96-6382-8_8/MediaObjects/630765_1_En_8_MOESM1_ESM.ipynb',
            display_text: 'IPYNB 8',
            accessed: { 'date-parts': [ [ 2026, 10, 25 ] ] },
          },
          {
            link: 'https://media.springernature.com/original/springer-static/esm/chp%3A10.1007%2F978-981-96-6382-8_9/MediaObjects/630765_1_En_9_MOESM1_ESM.ipynb',
            display_text: 'IPYNB 9',
            accessed: { 'date-parts': [ [ 2026, 10, 25 ] ] },
          },
          {
            link: 'https://media.springernature.com/original/springer-static/esm/chp%3A10.1007%2F978-981-96-6382-8_10/MediaObjects/630765_1_En_10_MOESM1_ESM.ipynb',
            display_text: 'IPYNB 10',
            accessed: { 'date-parts': [ [ 2026, 10, 25 ] ] },
          },
          {
            link: 'https://media.springernature.com/original/springer-static/esm/chp%3A10.1007%2F978-981-96-6382-8_11/MediaObjects/630765_1_En_11_MOESM1_ESM.ipynb',
            display_text: 'IPYNB 11',
            accessed: { 'date-parts': [ [ 2026, 10, 25 ] ] },
          },
        ],
        variant: [
          {
            type: 'book',
            medium: 'Softcover',
            ISBN: '978-981-96-6381-1',
            issued: { 'date-parts': [ [ 2025, 11, 11 ] ] },
            accessed: { 'date-parts': [ [ 2026, 10, 25 ] ] },
          },
        ],
      } satisfies CSL.Custom,
    } satisfies types_data.Material,
  },
] satisfies types_data.Entry[]
