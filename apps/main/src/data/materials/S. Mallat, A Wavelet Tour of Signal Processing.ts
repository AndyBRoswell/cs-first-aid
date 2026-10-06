import * as types_data from '@cs-first-aid/bibkit/types/data'
import * as CSL from '@cs-first-aid/bibkit/CSL'

export const entries = [
  {
    id: [],
    material: {
      type: 'book',
      author: [ { given: 'Stéphane', family: 'Mallat' } ],
      title: 'A Wavelet Tour of Signal Processing',
      edition: 3,
      publisher: 'Academic Press',
      issued: { 'date-parts': [ [ 2008, 12, 11 ] ] },
      'number-of-pages': 832,
      ISBN: '9780123743701',
      language: 'en-US',
      URL: 'https://shop.elsevier.com/books/a-wavelet-tour-of-signal-processing/mallat/978-0-12-374370-1',
      accessed: { 'date-parts': [ [ 2026, 10, 6 ] ] },
      custom: {
        subtitle: 'The Sparse Way',
        URL: [
          {
            link: 'https://www.educate.elsevier.com/book/details/9780123743701',
            display_text: 'Elsevier title details',
          },
          {
            link: 'https://booksite.elsevier.com/samplechapters/9780123743701/Sample%20Chapters/01~Front_Matter.pdf',
            display_text: 'Publisher front matter',
            'Content-Type': 'application/pdf',
          },
        ],
        variant: [
          {
            type: 'book',
            medium: 'eBook',
            ISBN: '9780080922027',
            URL: 'https://www.vitalsource.com/products/a-wavelet-tour-of-signal-processing-stephane-mallat-v9780080922027',
            accessed: { 'date-parts': [ [ 2026, 10, 6 ] ] },
          },
        ],
      } satisfies CSL.Custom,
    } satisfies types_data.Material,
  },
] satisfies types_data.Entry[]
