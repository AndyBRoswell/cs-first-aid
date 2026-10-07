import * as types_data from '@cs-first-aid/bibkit/types/data'

export const entries = [
  {
    id: [],
    material: {
      type: 'book',
      title: 'Stochastic Processes: Theory for Applications',
      author: [ { given: 'Robert G.', family: 'Gallager' } ],
      publisher: 'Cambridge University Press',
      issued: { 'date-parts': [ [ 2013, 12 ] ] },
      ISBN: '9781107039759',
      language: 'en',
      URL: 'https://www.cambridge.org/gb/titles/stochastic-processes-theory-applications',
      accessed: { 'date-parts': [ [ 2026, 10, 7 ] ] },
      custom: {
        free_material: [
          {
            link: 'https://ocw.mit.edu/courses/6-262-discrete-stochastic-processes-spring-2011/6_262_s_11_coursetextbookpdf.pdf',
            display_text: 'MIT OCW draft (PDF)',
            'Content-Type': 'application/pdf',
            accessed: { 'date-parts': [ [ 2026, 10, 7 ] ] },
          },
        ],
      },
    } satisfies types_data.Material,
  },
] satisfies types_data.Entry[]
