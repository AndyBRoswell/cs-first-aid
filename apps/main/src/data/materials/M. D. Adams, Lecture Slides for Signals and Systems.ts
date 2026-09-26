import * as types_data from '@cs-first-aid/bibkit/types/data'

export const entries = [
  {
    id: [],
    material: {
      type: 'document',
      title: 'Lecture Slides for Signals and Systems',
      author: [ { given: 'Michael D.', family: 'Adams' } ],
      edition: '6.0',
      issued: { 'date-parts': [ [ 2024, 12 ] ] },
      ISBN: '978-1-990707-09-4',
      language: 'en-US',
      URL: 'https://www.ece.uvic.ca/~frodo/sigsysbook/downloads/lecture_slides_for_signals_and_systems-6.0.pdf',
      accessed: { 'date-parts': [ [ 2026, 9, 27 ] ] },
    } satisfies types_data.Material,
  },
] satisfies types_data.Entry[]
