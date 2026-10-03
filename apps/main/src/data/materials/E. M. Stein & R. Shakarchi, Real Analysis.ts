import * as types_data from '@cs-first-aid/bibkit/types/data'
import * as CSL from '@cs-first-aid/bibkit/CSL'

export const entries = [
  {
    id: [],
    material: {
      type: 'book',
      author: [ { given: 'Elias M.', family: 'Stein' }, { given: 'Rami', family: 'Shakarchi' } ],
      title: 'Real Analysis',
      medium: 'Hardcover',
      publisher: 'Princeton University Press',
      'publisher-place': 'Princeton, NJ',
      'collection-title': 'Princeton Lectures in Analysis',
      'collection-number': 3,
      issued: { 'date-parts': [ [ 2005, 4, 3 ] ] },
      'number-of-pages': 'xix, 402',
      ISBN: '978-0-691-11386-9',
      language: 'en-US',
      URL: 'https://press.princeton.edu/books/hardcover/9780691113869/real-analysis',
      accessed: { 'date-parts': [ [ 2026, 10, 4 ] ] },
      custom: {
        subtitle: 'Measure Theory, Integration, and Hilbert Spaces',
        URL: [
          { link: 'https://ingramacademic.com/products/real-analysis-9780691113869', display_text: 'Ingram Academic' },
          { link: 'https://opac.iitdh.ac.in/cgi-bin/koha/opac-detail.pl?biblionumber=1105', display_text: 'IIT Dharwad' },
        ],
        variant: [
          {
            type: 'book',
            medium: 'eBook (EPUB/PDF)',
            ISBN: '978-1-4008-3556-0',
            issued: { 'date-parts': [ [ 2009, 11, 28 ] ] },
            URL: 'https://press.princeton.edu/books/ebook/9781400835560/real-analysis',
            note: 'The publisher’s eBook requires the Princeton University Press app; the Kobo EPUB 2 uses Adobe DRM.',
            custom: { URL: [
              { link: 'https://www.kobo.com/us/en/ebook/real-analysis', display_text: 'Kobo' },
            ] },
          },
        ],
      } satisfies CSL.Custom,
    },
  },
] satisfies types_data.Entry[]
