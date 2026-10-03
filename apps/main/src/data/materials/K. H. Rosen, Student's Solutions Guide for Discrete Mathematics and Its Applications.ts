import * as types_data from '@cs-first-aid/bibkit/types/data'
import * as CSL from '@cs-first-aid/bibkit/CSL'

export const entries = [
  {
    id: [
    ],
    material: {
      type: 'book',
      author: [ { family: 'Rosen', given: 'Kenneth H.' } ],
      title: "Student's Solutions Guide for Discrete Mathematics and Its Applications",
      edition: 8,
      issued: { 'date-parts': [ [ 2018, 7, 23 ] ] },
      publisher: 'McGraw-Hill Education',
      language: 'en-US',
      ISBN: '9781260092387',
      URL: 'https://www.mheducation.co.uk/catalog/product/view/id/154843/s/ise-student-s-solutions-guide-for-discrete-mathematics-and-its-applications-9781260092387-emea/category/6839/',
      accessed: { 'date-parts': [ [ 2026, 10, 4 ] ] },
      custom: {
        edition: 'International Student Edition',
      } satisfies CSL.Custom,
    } satisfies types_data.Material,
  },
] satisfies types_data.Entry[]
