import * as types_data from '@cs-first-aid/bibkit/types/data'

export const entries = [
  {
    id: [ 'C++ Primer', ],
    material: {
      type: 'book',
      title: 'C++ Primer',
      author: [
        { given: 'Stanley B.', family: 'Lippman' },
        { given: 'Josée', family: 'Lajoie' },
        { given: 'Barbara E.', family: 'Moo' },
      ],
      edition: 5,
      publisher: 'Addison-Wesley Professional',
      issued: { 'date-parts': [ [ 2012, 8, 6 ] ] },
      ISBN: '9780321714114',
      language: 'en-US',
      URL: 'https://www.informit.com/store/c-plus-plus-primer-9780321714114',
      accessed: { 'date-parts': [ [ 2026, 9, 27 ] ] },
    } satisfies types_data.Material,
  },
] satisfies types_data.Entry[]
