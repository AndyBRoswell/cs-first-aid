import * as types_data from '@cs-first-aid/bibkit/types/data'
import * as CSL from '@cs-first-aid/bibkit/CSL'

export const entries = [
  {
    id: [],
    material: {
      type: 'book',
      author: [ { given: 'Gerald B.', family: 'Folland' } ],
      title: 'Real Analysis',
      edition: 2,
      medium: 'Hardcover',
      publisher: 'John Wiley & Sons',
      'collection-title': 'Pure and Applied Mathematics: A Wiley-Interscience Series of Texts, Monographs and Tracts',
      issued: { 'date-parts': [ [ 1999, 4 ] ] },
      'number-of-pages': 416,
      ISBN: '9780471317166',
      language: 'en-US',
      URL: 'https://www.wiley-vch.de/en/areas-interest/mathematics-statistics/real-analysis-978-0-471-31716-6',
      accessed: { 'date-parts': [ [ 2026, 10, 17 ] ] },
      custom: {
        subtitle: 'Modern Techniques and Their Applications',
        variant: [
          {
            type: 'book',
            medium: 'eBook (EPUB)',
            issued: { 'date-parts': [ [ 2013, 6, 11 ] ] },
            ISBN: '9781118626399',
            URL: 'https://www.schweitzer-online.de/ebook/Folland/Real-Analysis/9781118626399/A5181592/',
            accessed: { 'date-parts': [ [ 2026, 10, 17 ] ] },
          },
        ],
      } satisfies CSL.Custom,
    } satisfies types_data.Material,
  },
] satisfies types_data.Entry[]
