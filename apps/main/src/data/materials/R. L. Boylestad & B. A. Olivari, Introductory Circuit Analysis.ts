import * as types_data from '@cs-first-aid/bibkit/types/data'
import * as CSL from '@cs-first-aid/bibkit/CSL'

export const entries = [
  {
    id: [],
    material: {
      type: 'book',
      title: 'Introductory Circuit Analysis',
      author: [ { given: 'Robert L.', family: 'Boylestad' }, { given: 'Brian A.', family: 'Olivari' } ],
      edition: 14,
      medium: 'Paperback', // Pearson's ISBN-specific product data; CIP labels this ISBN "casebound".
      publisher: 'Pearson Education, Inc.',
      'publisher-place': 'Boston, MA',
      issued: { 'date-parts': [ [ 2022, 3, 12 ] ] },
      ISBN: '9780137594115',
      'number-of-pages': 1144,
      language: 'en',
      URL: 'https://www.pearson.com/en-us/subject-catalog/p/introductory-circuit-analysis/P200000000822/9780137594115',
      accessed: { 'date-parts': [ [ 2026, 10, 25 ] ] },
      custom: {
        URL: [
          { link: 'https://www.pearson.com/content/dam/one-dot-com/one-dot-com/us/en/files/Pearson-Higher-Education-Titles-Autumn-2022.pdf', display_text: 'Pearson higher education catalogue (Autumn 2022)', 'Content-Type': 'application/pdf' }, // number-of-pages
          { link: 'https://studentebookhub.com/wp-content/uploads/2024/preview/9780137594115.pdf', display_text: 'Copyright page and cataloging data (Student eBook Hub preview)', 'Content-Type': 'application/pdf' }, // publisher, publisher-place, custom.variant
          { link: 'https://books.google.com/books?id=5mCjzgEACAAJ', display_text: 'Google Books (eBook)' }, // custom.variant
          { link: 'https://www.vitalsource.com/products/pearson-etext-introductory-circuit-analysis-robert-boylestad-v9780137594177', display_text: 'VitalSource (Pearson+ eTextbook)' }, // custom.variant
        ],
        variant: [
          {
            type: 'book',
            medium: 'eBook',
            ISBN: '9780137594207',
            URL: 'https://books.google.com/books?id=5mCjzgEACAAJ',
          },
          {
            type: 'book',
            medium: 'Pearson+ eTextbook',
            issued: { 'date-parts': [ [ 2022, 8, 5 ] ] },
            ISBN: '9780137594177',
            URL: 'https://www.pearson.com/en-us/subject-catalog/p/introductory-circuit-analysis/P200000000822/9780137594177',
          },
        ],
      } satisfies CSL.Custom,
    } satisfies types_data.Material,
  },
] satisfies types_data.Entry[]
