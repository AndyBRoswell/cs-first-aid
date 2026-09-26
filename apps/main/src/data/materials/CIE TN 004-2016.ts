import * as types_data from '@cs-first-aid/bibkit/types/data'

export const entries = [
  {
    id: [ 'CIE TN 004:2016' ],
    material: {
      type: 'report',
      title: 'The Use of Terms and Units in Photometry – Implementation of the CIE System for Mesopic Photometry',
      author: [
        { given: 'T. M.', family: 'Goodman' },
        { given: 'T.', family: 'Bergen' },
        { given: 'P.', family: 'Blattner' },
        { given: 'Y.', family: 'Ohno' },
        { given: 'J.', family: 'Schanda' },
        { given: 'T.', family: 'Uchida' },
      ],
      number: 'CIE TN 004:2016',
      publisher: "Commission Internationale de l'Eclairage",
      issued: { 'date-parts': [ [ 2016 ] ] },
      language: 'en-GB',
      URL: 'https://files.cie.co.at/841_CIE_TN_004-2016.pdf',
      accessed: { 'date-parts': [ [ 2026, 9, 27 ] ] },
    } satisfies types_data.Material,
  },
] satisfies types_data.Entry[]
