import * as types_data from '@cs-first-aid/bibkit/types/data'
import * as CSL from '@cs-first-aid/bibkit/CSL'

export const entries = [
  {
    id: [],
    material: {
      type: 'document',
      title: 'Introduction to nonlinear optics, logistics, complex-number algebra for harmonic signals',
      author: [ { given: 'Konstantin', family: 'Vodopyanov' } ],
      publisher: 'CREOL, The College of Optics and Photonics, University of Central Florida',
      'collection-title': 'OSE 6334 Nonlinear Optics',
      'publisher-place': 'Orlando, FL',
      issued: { 'date-parts': [ [ 2023 ] ] },
      language: 'en-US',
      number: 1,
      URL: 'https://www.creol.ucf.edu/mir/wp-content/uploads/sites/7/2023/07/L1_Logistics.-Intro-to-NLO.pdf',
      accessed: { 'date-parts': [ [ 2026, 9, 10 ] ] },
    } satisfies types_data.Material,
  },
] satisfies types_data.Entry[]