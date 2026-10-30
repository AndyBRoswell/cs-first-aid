import * as types_data from '@cs-first-aid/bibkit/types/data'
import * as CSL from '@cs-first-aid/bibkit/CSL'

export const entries = [
  {
    id: [],
    material: {
      type: 'book',
      title: 'Database System Concepts',
      author: [ { given: 'Abraham', family: 'Silberschatz' }, { given: 'Henry F.', family: 'Korth' }, { given: 'S.', family: 'Sudarshan' } ],
      edition: 7,
      medium: 'Paperback',
      publisher: 'McGraw-Hill Education',
      issued: { 'date-parts': [ [ 2019, 2, 28 ] ] },
      ISBN: '9781260084504',
      'number-of-pages': 'xxviii + 1344',
      language: 'en',
      URL: 'https://www.mheducation.co.uk/ise-database-system-concepts-9781260084504-emea-group',
      accessed: { 'date-parts': [ [ 2026, 10, 30 ] ] },
      custom: {
        edition: 'International Student Edition',
        URL: [
          { link: 'https://www.db-book.com/', display_text: 'Author-maintained companion website (7th edition)' },
          { link: 'https://www.bkstr.com/illinoisspringfieldstore/product/database-system-concepts-502843-1', display_text: 'University of Illinois Springfield Bookstore (North American hardcover)' }, // custom.variant: medium
          { link: 'https://www.vitalsource.com/products/database-system-concepts-abraham-silberschatz-v9781260049268', display_text: 'VitalSource (North American eBook)' }, // custom.variant
        ],
        variant: [
          {
            type: 'book',
            edition: 7,
            medium: 'eBook',
            publisher: 'McGraw-Hill Education',
            issued: { 'date-parts': [ [ 2019, 5, 1 ] ] },
            ISBN: '9781260569568',
            language: 'en',
            URL: 'https://www.mheducation.com.au/database-system-concepts-ise-9781260569568-aus',
            accessed: { 'date-parts': [ [ 2026, 10, 30 ] ] },
            custom: { edition: 'International Student Edition' },
          },
          {
            type: 'book',
            edition: 7,
            medium: 'Hardcover',
            publisher: 'McGraw-Hill Education',
            ISBN: '9780078022159',
            language: 'en',
            URL: 'https://www.mheducation.com/highered/product/database-system-concepts-silberschatz.html',
            "number-of-pages": 1376,
            accessed: { 'date-parts': [ [ 2026, 10, 30 ] ] },
            custom: { edition: 'North America Edition' },
          },
          {
            type: 'book',
            edition: 7,
            medium: 'Loose-leaf',
            publisher: 'McGraw-Hill Education',
            ISBN: '9781260515046',
            language: 'en',
            URL: 'https://www.mheducation.com/highered/product/database-system-concepts-silberschatz.html',
            accessed: { 'date-parts': [ [ 2026, 10, 30 ] ] },
            custom: { edition: 'North America Edition' },
          },
          {
            type: 'book',
            edition: 7,
            medium: 'eBook',
            publisher: 'McGraw-Hill Education',
            ISBN: '9781260049268',
            language: 'en',
            URL: 'https://www.vitalsource.com/products/database-system-concepts-abraham-silberschatz-v9781260049268',
            accessed: { 'date-parts': [ [ 2026, 10, 30 ] ] },
            custom: { edition: 'North America Edition' },
          },
        ],
        free_material: [
          { link: 'https://www.db-book.com/slides-dir/', display_text: 'Lecture slides (PDF and PPTX)', 'Content-Type': 'text/html' },
          { link: 'https://www.db-book.com/online-chapters-dir/index.html', display_text: 'Online supplementary chapters (27–32)', 'Content-Type': 'text/html' },
          { link: 'https://www.db-book.com/Practice-Exercises/index-solu.html', display_text: 'Solutions to practice exercises', 'Content-Type': 'text/html' },
          { link: 'https://www.db-book.com/university-lab-dir/exercises-dir/', display_text: 'Lab exercises', 'Content-Type': 'text/html' },
          { link: 'https://www.db-book.com/university-lab-dir/projects-dir/index.html', display_text: 'Sample term projects', 'Content-Type': 'text/html' },
          { link: 'https://www.db-book.com/university-lab-dir/sample_tables-dir/index.html', display_text: 'University schema and sample data', 'Content-Type': 'text/html' },
          { link: 'https://www.db-book.com/university-lab-dir/sqljs.html', display_text: 'Online SQL interpreter (SQLite)', 'Content-Type': 'text/html' },
          { link: 'https://www.db-book.com/university-lab-dir/db-tips.html', display_text: 'Tips on using database systems and tools', 'Content-Type': 'text/html' },
          { link: 'https://www.db-book.com/errata-dir/index.html', display_text: 'Errata and updates', 'Content-Type': 'text/html' },
        ],
      } satisfies CSL.Custom,
    } satisfies types_data.Material,
  },
] satisfies types_data.Entry[]
