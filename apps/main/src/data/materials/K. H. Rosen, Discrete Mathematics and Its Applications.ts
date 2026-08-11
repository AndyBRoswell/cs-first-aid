import * as catalog from '@cs-first-aid/bibkit/catalog'
import * as types_data from '@cs-first-aid/bibkit/types/data'
import * as CSL from '@cs-first-aid/bibkit/CSL'

const items = [
  {
    id: [
    ],
    material: {
      type: 'book',
      author: [ { family: 'Rosen', given: 'Kenneth H.' } ],
      title: 'Discrete Mathematics and Its Applications',
      edition: 9,
      issued: { 'date-parts': [ [ 2025 ] ] },
      publisher: 'McGraw-Hill Education',
      language: 'en-US',
      ISBN: '9781260289701' as CSL.ISBN,
      URL: 'https://www.mheducation.co.uk/discrete-mathematics-and-its-applications-2025-release-ise-9781266191541-emea-group',
      accessed: { 'date-parts': [ [ 2026, 5, 7 ] ] },
      custom: {
        Print: {
          type: 'book',
          ISBN: '9781266191541' as CSL.ISBN,
        } satisfies types_data.Material,
      } satisfies CSL_Data.Custom,
    } satisfies types_data.Material,
  },
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
      ISBN: '9781260092387' as CSL.ISBN,
      URL: 'https://www.mheducation.co.uk/ise-student-s-solutions-guide-for-discrete-mathematics-and-its-applications-9781260092387-emea',
      accessed: { 'date-parts': [ [ 2026, 5, 7 ] ] },
    } satisfies types_data.Material,
  },
] satisfies types_data.Entry[]

catalog.add_items(items)