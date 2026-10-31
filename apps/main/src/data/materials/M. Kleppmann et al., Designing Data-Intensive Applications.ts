import * as types_data from '@cs-first-aid/bibkit/types/data'
import * as CSL from '@cs-first-aid/bibkit/CSL'

export const entries = [
  {
    id: [ 'DDIA', 'DDIA 2', ],
    material: {
      type: 'book',
      title: 'Designing Data-Intensive Applications',
      author: [ { given: 'Martin', family: 'Kleppmann' }, { given: 'Chris', family: 'Riccomini' } ],
      edition: 2,
      medium: 'eBook (EPUB 3, DRM-free)',
      publisher: 'O’Reilly Media',
      issued: { 'date-parts': [ [ 2026, 2, 17 ] ] },
      ISBN: '9781098119027',
      'number-of-pages': 672,
      language: 'en',
      URL: 'https://www.kobo.com/us/en/ebook/designing-data-intensive-applications-2',
      accessed: { 'date-parts': [ [ 2026, 10, 31 ] ] },
      custom: {
        subtitle: 'The Big Ideas Behind Reliable, Scalable, and Maintainable Systems',
        URL: [
          {
            link: 'https://www.oreilly.com/library/view/designing-data-intensive-applications/9781098119058/',
            display_text: 'O’Reilly: Publisher information and online edition',
          },
          {
            link: 'https://www.vitalsource.com/products/designing-data-intensive-applications-martin-kleppmann-chris-v9781098119027',
            display_text: 'VitalSource', // Subtitle, edition, authors, and print/eBook ISBNs.
          },
        ],
        variant: [
          {
            type: 'book',
            medium: 'Paperback',
            issued: { 'date-parts': [ [ 2026, 3, 24 ] ] },
            ISBN: '9781098119065',
            'number-of-pages': 670, // Ingram lists the print edition separately from the 672-page eBook.
            URL: 'https://ingramacademic.com/products/designing-data-intensive-applications-9781098119065',
            accessed: { 'date-parts': [ [ 2026, 10, 30 ] ] },
          },
          {
            type: 'book',
            medium: 'eBook (online)',
            issued: { 'date-parts': [ [ 2026, 2 ] ] },
            ISBN: '9781098119058',
            'number-of-pages': 672,
            URL: 'https://www.oreilly.com/library/view/designing-data-intensive-applications/9781098119058/',
            accessed: { 'date-parts': [ [ 2026, 10, 30 ] ] },
          },
        ],
      } satisfies CSL.Custom,
    } satisfies types_data.Material,
  },
] satisfies types_data.Entry[]
