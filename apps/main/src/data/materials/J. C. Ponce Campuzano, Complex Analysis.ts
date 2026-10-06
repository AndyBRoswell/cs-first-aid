import * as types_data from '@cs-first-aid/bibkit/types/data'
import * as CSL from '@cs-first-aid/bibkit/CSL'

export const entries = [
  {
    id: [],
    material: {
      type: 'book',
      author: [ { given: 'Juan Carlos', family: 'Ponce Campuzano' } ],
      title: 'Complex Analysis: A Visual and Interactive Introduction',
      medium: 'Online',
      issued: { 'date-parts': [ [ 2019 ] ] },
      ISBN: '978-0-6485736-0-9',
      language: 'en-US',
      URL: 'https://complex-analysis.com/',
      accessed: { 'date-parts': [ [ 2026, 10, 5 ] ] },
      custom: {
        URL: [ { link: 'https://complex-analysis.com/content/license.html', display_text: 'License and publication details' } ],
        free_material: [
          { link: 'https://complex-analysis.com/', display_text: 'Interactive HTML', 'Content-Type': 'text/html', license: 'CC-BY-NC-SA-4.0' },
        ],
      } satisfies CSL.Custom,
    } satisfies types_data.Material,
  },
] satisfies types_data.Entry[]
