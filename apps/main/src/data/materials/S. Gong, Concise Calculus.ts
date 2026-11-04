import * as types_data from '@cs-first-aid/bibkit/types/data'
import * as CSL from '@cs-first-aid/bibkit/CSL'

export const entries = [
  {
    id: [],
    material: {
      type: 'book',
      title: 'Concise Calculus',
      author: [ { given: 'Sheng', family: 'Gong' } ],
      translator: [ { given: 'Youhong', family: 'Gong' } ],
      medium: 'Paperback',
      publisher: 'World Scientific',
      'publisher-place': 'Singapore',
      issued: { 'date-parts': [ [ 2017, 3 ] ] },
      'original-title': '简明微积分',
      'number-of-pages': 'xvi, 674', // Numbered pagination; the publisher advertises 692 total pages, whose remaining two pages are unconfirmed.
      ISBN: '9789814291491',
      DOI: '10.1142/7554',
      language: 'en',
      URL: 'https://www.worldscientific.com/worldscibooks/10.1142/7554',
      accessed: { 'date-parts': [ [ 2026, 11, 4 ] ] },
      custom: {
        URL: [
          { link: 'https://books.google.com/books?id=VVj6QwAACAAJ', display_text: 'Google Books' },
        ],
        variant: [
          {
            type: 'book',
            medium: 'Hardback',
            ISBN: '9789814291484',
          },
          {
            type: 'book',
            medium: 'eBook (World Scientific)',
            ISBN: '9789814291507',
            DOI: '10.1142/7554',
          },
          {
            type: 'book',
            medium: 'eBook (EPUB 3)',
            issued: { 'date-parts': [ [ 2017, 2, 3 ] ] },
            ISBN: '9789813222632',
            URL: 'https://www.kobo.com/us/en/ebook/concise-calculus',
            accessed: { 'date-parts': [ [ 2026, 11, 4 ] ] },
            note: 'Kobo download uses Adobe DRM.',
          },
        ],
      } satisfies CSL.Custom,
    } satisfies types_data.Material,
  },
] satisfies types_data.Entry[]
