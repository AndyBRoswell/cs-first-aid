import * as types_data from '@cs-first-aid/bibkit/types/data'
import * as CSL from '@cs-first-aid/bibkit/CSL'

export const entries = [
  {
    id: [],
    material: {
      type: 'book',
      title: 'Linear Algebra',
      author: [ { given: 'André T.', family: 'Hensbergen' }, { given: 'Nikolaas D.', family: 'Verhulst' } ],
      editor: [
        { given: 'Dennis', 'non-dropping-particle': 'den', family: 'Ouden-van der Horst' },
        { given: 'René F.', family: 'Swarttouw' },
        { given: 'Yoni', family: 'Geubbels' },
      ],
      edition: 2,
      medium: 'Online',
      genre: 'Interactive textbook',
      publisher: 'TU Delft OPEN Publishing',
      'publisher-place': 'Delft, Zuid-Holland',
      issued: { 'date-parts': [ [ 2025, 11, 21 ] ] },
      DOI: '10.59490/mt.241',
      language: 'en',
      URL: 'https://books.open.tudelft.nl/home/catalog/book/241',
      accessed: { 'date-parts': [ [ 2026, 10, 17 ] ] },
      custom: {
        keyword: [ 'Linear Algebra for Bachelor Engineering Students' ],
        institution: [ 'Technische Universiteit Delft' ],
        URL: [
          {
            link: 'https://repository.tudelft.nl/record/uuid:92662589-a0c0-4ba8-9520-dcfe855dd4b9',
            display_text: 'TU Delft Repository',
            accessed: { 'date-parts': [ [ 2026, 10, 17 ] ] },
          },
          {
            link: 'https://github.com/TUDelft-PRIME-Books/Linear-Algebra',
            display_text: 'GitHub',
            accessed: { 'date-parts': [ [ 2026, 10, 17 ] ] },
          },
        ],
        free_material: [
          {
            link: 'https://interactivetextbooks.tudelft.nl/linear-algebra/',
            display_text: 'HTML',
            'Content-Type': 'text/html',
            license: 'CC-BY-4.0',
            accessed: { 'date-parts': [ [ 2026, 10, 17 ] ] },
          },
        ],
      } satisfies CSL.Custom,
    } satisfies types_data.Material,
  },
] satisfies types_data.Entry[]
