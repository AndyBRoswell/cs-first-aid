import * as catalog from './catalog.ts'
import * as Data_Type from '@/types/data.ts'
import * as CSL_Data from '@/types/CSL_data.ts'

const items = [
  {
    id: [
      'K. H. Rosen, Discrete Mathematics and Its Applications',
      'K. H. Rosen, Discrete Mathematics and Its Applications, 2025',
      { unordered_author: 'K. H. Rosen', title: 'Discrete Mathematics and its Applications', date: 2025, },
    ],
    material: {
      type: 'book',
      id: 'Rosen_Discrete_Mathematics_and_its_Applications_9th_ed',
      author: [ { family: 'Rosen', given: 'Kenneth H.' } ],
      title: 'Discrete Mathematics and Its Applications',
      edition: 9,
      issued: { 'date-parts': [ [ 2025 ] ] },
      publisher: 'McGraw-Hill Education',
      language: 'en-US',
      ISBN: '9781260289701' as CSL_Data.ISBN,
      URL: 'https://www.mheducation.co.uk/discrete-mathematics-and-its-applications-2025-release-ise-9781266191541-emea-group',
      accessed: { 'date-parts': [ [ 2026, 5, 7 ] ] },
      custom: {
        Print: {
          type: 'book',
          id: '[Print] K. H. Rosen, Discrete Mathematics and Its Applications, 2025',
          ISBN: '9781266191541' as CSL_Data.ISBN,
        } satisfies Data_Type.Material,
      } satisfies CSL_Data.Custom,
    } satisfies Data_Type.Material,
  },
  {
    id: [
      `K. H. Rosen, Student's Solutions Guide for Discrete Mathematics and Its Applications`,
      `K. H. Rosen, Student's Solutions Guide for Discrete Mathematics and Its Applications, 8e`,
      `K. H. Rosen, Student's Solutions Guide for Discrete Mathematics and Its Applications, 2018`,
      { unordered_author: 'K. H. Rosen', title: "Student's Solutions Guide for Discrete Mathematics and Its Applications", edition: 8, },
      { unordered_author: 'K. H. Rosen', title: "Student's Solutions Guide for Discrete Mathematics and Its Applications", date: 2018, },
    ],
    material: {
      type: 'book',
      id: `K. H. Rosen, Student's Solutions Guide for Discrete Mathematics and Its Applications, 8e`,
      author: [ { family: 'Rosen', given: 'Kenneth H.' } ],
      title: "Student's Solutions Guide for Discrete Mathematics and Its Applications",
      edition: 8,
      issued: { 'date-parts': [ [ 2018, 7, 23 ] ] },
      publisher: 'McGraw-Hill Education',
      language: 'en-US',
      ISBN: '9781260092387' as CSL_Data.ISBN,
      URL: 'https://www.mheducation.co.uk/ise-student-s-solutions-guide-for-discrete-mathematics-and-its-applications-9781260092387-emea',
      accessed: { 'date-parts': [ [ 2026, 5, 7 ] ] },
    } satisfies Data_Type.Material,
  },
] satisfies Data_Type.Entry[]

catalog.add_items(items)