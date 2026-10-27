import * as types_data from '@cs-first-aid/bibkit/types/data'
import * as CSL from '@cs-first-aid/bibkit/CSL'

export const entries = [
  {
    id: [],
    material: {
      type: 'document',
      title: 'Software Architecture',
      author: [ { given: 'Richard N.', family: 'Taylor' }, { given: 'Nenad', family: 'Medvidović' }, { given: 'Eric M.', family: 'Dashofy' } ],
      genre: 'Lecture slides',
      medium: 'PowerPoint',
      issued: { 'date-parts': [ [ 2009 ] ] },
      language: 'en',
      note: '27 companion slide decks covering the textbook. The textbook itself is not included in this entry.',
      URL: 'https://www.softwarearchitecturebook.com/resources/',
      accessed: { 'date-parts': [ [ 2026, 10, 27 ] ] },
      custom: {
        subtitle: 'Foundations, Theory, and Practice',
        URL: [
          { link: 'https://www.softwarearchitecturebook.com/2009/06/course-slides-now-available/', display_text: 'Course slides announcement' }, // issued
        ],
        free_material: [
          { link: 'https://www.softwarearchitecturebook.com/svn/main/slides/ppt/', display_text: 'Lecture slides (PPT)', 'Content-Type': 'text/html' },
        ],
      } satisfies CSL.Custom,
    } satisfies types_data.Material,
  },
] satisfies types_data.Entry[]
