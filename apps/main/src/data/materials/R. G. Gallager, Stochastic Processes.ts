import * as types_data from '@cs-first-aid/bibkit/types/data'

export const entries = [
  {
    id: [],
    material: {
      type: 'book',
      title: 'Stochastic Processes: Theory for Applications',
      author: [ { given: 'Robert G.', family: 'Gallager' } ],
      edition: 1,
      medium: 'Hardback',
      publisher: 'Cambridge University Press',
      'publisher-place': 'Cambridge',
      issued: { 'date-parts': [ [ 2013, 12, 12 ] ] },
      ISBN: '9781107039759',
      'number-of-pages': 553,
      language: 'en',
      URL: 'https://mitpressbookstore.mit.edu/book/9781107039759',
      accessed: { 'date-parts': [ [ 2026, 10, 9 ] ] },
      custom: {
        copyright: 'Cambridge University Press 2013',
        'number-of-illustrations': 125,
        'illustration-type': 'black and white',
        'number-of-exercises': 305,
        variant: [
          {
            type: 'book',
            medium: 'eBook (Cambridge Core)',
            ISBN: '9781139626514',
            DOI: '10.1017/CBO9781139626514',
            issued: { 'date-parts': [ [ 2018, 5, 28 ] ] },
            URL: 'https://www.cambridge.org/core/books/stochastic-processes/4F8FC8890AAB5FB9BB5DEBB7657A948F',
          },
          {
            type: 'book',
            medium: 'eBook (PDF)',
            ISBN: '9781107440418',
            URL: 'https://www.vitalsource.com/products/stochastic-processes-robert-g-gallager-v9781107440418',
            accessed: { 'date-parts': [ [ 2026, 10, 9 ] ] },
          },
          {
            type: 'book',
            medium: 'eBook (EPUB)',
            ISBN: '9781107425101',
            issued: { 'date-parts': [ [ 2013, 12, 12 ] ] },
            URL: 'https://www.bol.com/be/nl/p/stochastic-processes-ebook/9200000034696070/',
          },
          {
            type: 'book',
            medium: 'Paperback',
            ISBN: '9781316609033',
            URL: 'https://www.thriftbooks.com/w/stochastic-processes-theory-for-applications_robert-g-gallager/20153847/',
          },
        ],
        free_material: [
          {
            link: 'https://ocw.mit.edu/courses/6-262-discrete-stochastic-processes-spring-2011/6_262_s_11_coursetextbookpdf.pdf',
            display_text: 'MIT OCW draft (PDF)',
            'Content-Type': 'application/pdf',
            modified: { 'date-parts': [ [ 2013, 12, 2 ] ] },
            accessed: { 'date-parts': [ [ 2026, 10, 9 ] ] },
          },
        ],
      },
    } satisfies types_data.Material,
  },
] satisfies types_data.Entry[]
