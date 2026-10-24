import * as types_data from '@cs-first-aid/bibkit/types/data'
import * as CSL from '@cs-first-aid/bibkit/CSL'

export const entries = [
  {
    id: [],
    material: {
      type: 'book',
      title: 'Image Processing for Engineers',
      author: [ { given: 'Andrew E.', family: 'Yagle' }, { given: 'Fawwaz T.', family: 'Ulaby' } ],
      medium: 'eBook (PDF)',
      publisher: 'Michigan Publishing Services',
      'publisher-place': 'Ann Arbor, MI',
      issued: { 'date-parts': [ [ 2018 ] ] },
      ISBN: '978-1-60785-489-0',
      DOI: '10.3998/mpub.10076190',
      'number-of-pages': 438,
      language: 'en',
      URL: 'https://services.publishing.umich.edu/mps/Books/I/Image-Processing-for-Engineers',
      accessed: { 'date-parts': [ [ 2026, 10, 25 ] ] },
      custom: {
        URL: [
          {
            link: 'https://ip.eecs.umich.edu/',
            display_text: 'University of Michigan',
            accessed: { 'date-parts': [ [ 2026, 10, 25 ] ] },
          },
          {
            link: 'https://www.fulcrum.org/concern/monographs/9k41zg984',
            display_text: 'Fulcrum',
            accessed: { 'date-parts': [ [ 2026, 10, 25 ] ] },
          },
          {
            link: 'https://api.crossref.org/works/10.3998/mpub.10076190',
            display_text: 'Crossref',
            accessed: { 'date-parts': [ [ 2026, 10, 25 ] ] },
          },
        ],
        free_material: [
          {
            link: 'https://docs.google.com/forms/d/e/1FAIpQLSfa_lqrrhWPEXZ97DjMQTAt_cdEl4JIO-R-C93kNJyJneP0uA/viewform',
            display_text: 'PDF',
            accessed: { 'date-parts': [ [ 2026, 10, 25 ] ] },
          },
          {
            link: 'https://ip.eecs.umich.edu/pdf/ulaby_exercise_solutions.pdf',
            display_text: 'PDF (solutions)',
            'Content-Type': 'application/pdf',
            accessed: { 'date-parts': [ [ 2026, 10, 25 ] ] },
          },
          {
            link: 'https://ip.eecs.umich.edu/Examples/Examples.html',
            display_text: 'MATLAB',
            accessed: { 'date-parts': [ [ 2026, 10, 25 ] ] },
          },
          {
            link: 'https://ip.eecs.umich.edu/Javascript/Javascript.html',
            display_text: 'JavaScript / MATLAB',
            accessed: { 'date-parts': [ [ 2026, 10, 25 ] ] },
          },
        ],
        variant: [
          {
            type: 'book',
            medium: 'Hardcover',
            ISBN: '978-1-60785-488-3',
            issued: { 'date-parts': [ [ 2018, 3 ] ] },
            accessed: { 'date-parts': [ [ 2026, 10, 25 ] ] },
          },
        ],
      } satisfies CSL.Custom,
    } satisfies types_data.Material,
  },
] satisfies types_data.Entry[]
