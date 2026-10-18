import * as types_data from '@cs-first-aid/bibkit/types/data'
import * as CSL from '@cs-first-aid/bibkit/CSL'

export const entries = [
  {
    id: [],
    material: {
      type: 'book',
      title: 'Head First Design Patterns',
      author: [ { given: 'Eric', family: 'Freeman' }, { given: 'Elisabeth', family: 'Robson' } ],
      edition: 2,
      medium: 'eBook (EPUB 3)',
      publisher: "O'Reilly Media",
      'publisher-place': 'Sebastopol, CA',
      issued: { 'date-parts': [ [ 2020, 11, 24 ] ] },
      ISBN: '9781492077954',
      'collection-title': 'Head First',
      'number-of-pages': 672,
      language: 'en-US',
      URL: 'https://www.oreilly.com/library/view/head-first-design/9781492077992/',
      accessed: { 'date-parts': [ [ 2026, 10, 18 ] ] },
      custom: {
        subtitle: 'Building Extensible and Maintainable Object-Oriented Software',
        topic: [ 'Object Oriented Programming', 'Java', 'Computer Science' ],
        URL: [
          {
            link: 'https://www.kobo.com/us/en/ebook/head-first-design-patterns-1',
            display_text: 'Kobo',
            accessed: { 'date-parts': [ [ 2026, 10, 18 ] ] },
          },
          {
            link: 'https://wickedlysmart.com/head-first-design-patterns/',
            display_text: 'WickedlySmart',
            accessed: { 'date-parts': [ [ 2026, 10, 18 ] ] },
          },
          {
            link: 'https://oreilly.com/catalog/0636920367598/errata',
            accessed: { 'date-parts': [ [ 2026, 10, 18 ] ] },
          },
          {
            link: 'https://www.oreilly.com/library/view/head-first-design/9781492077992/copyright-page01.html',
            accessed: { 'date-parts': [ [ 2026, 10, 18 ] ] },
          },
        ],
        free_material: [
          {
            link: 'https://github.com/bethrobson/Head-First-Design-Patterns',
            display_text: 'Code for Head First Design Patterns book',
            'Content-Type': 'text/html',
            modified: { 'date-parts': [ [ 2022, 5, 21 ] ] },
            accessed: { 'date-parts': [ [ 2026, 10, 18 ] ] },
          },
        ],
        variant: [
          {
            type: 'book',
            medium: 'Paperback',
            ISBN: '9781492078005',
            issued: { 'date-parts': [ [ 2021, 1, 12 ] ] },
            URL: 'https://ingramacademic.com/products/head-first-design-patterns-9781492078005',
            accessed: { 'date-parts': [ [ 2026, 10, 18 ] ] },
          },
        ],
      } satisfies CSL.Custom,
    } satisfies types_data.Material,
  },
] satisfies types_data.Entry[]
