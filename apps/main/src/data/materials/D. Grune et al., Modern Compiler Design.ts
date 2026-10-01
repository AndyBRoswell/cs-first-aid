import * as types_data from '@cs-first-aid/bibkit/types/data'
import * as CSL from '@cs-first-aid/bibkit/CSL'

export const entries = [
  {
    id: [],
    material: {
      type: 'book',
      title: 'Modern Compiler Design',
      author: [
        { given: 'Dick', family: 'Grune' },
        { given: 'Kees', family: 'van Reeuwijk' },
        { given: 'Henri E.', family: 'Bal' },
        { given: 'Ceriel J. H.', family: 'Jacobs' },
        { given: 'Koen G.', family: 'Langendoen' },
      ],
      edition: 2,
      medium: 'eBook',
      publisher: 'Springer New York',
      'publisher-place': 'New York, NY',
      issued: { 'date-parts': [ [ 2012, 7, 20 ] ] },
      ISBN: '978-1-4614-4699-6',
      DOI: '10.1007/978-1-4614-4699-6',
      'number-of-pages': 'XXI + 822',
      language: 'en',
      URL: 'https://link.springer.com/book/10.1007/978-1-4614-4699-6',
      accessed: { 'date-parts': [ [ 2026, 9, 29 ] ] },
      custom: {
        keyword: [
          'Assemblers',
          'Attribute Grammars',
          'Code Generation',
          'Compilers',
          'Embedded Systems',
          'Functional Programming',
          'Interpreters',
          'Legacy Code',
          'Lexical Analysis',
          'Linkers',
          'Loaders',
          'Logic Programming',
          'Memory Management',
          'Optimization',
          'Parallel/Distributed Programming',
          'Parsing',
        ],
        topic: [ 'Programming Languages, Compilers, Interpreters', 'Processor Architectures', 'Programming Techniques' ],
        'eBook packages': [ 'Computer Science', 'Computer Science (R0)' ],
        URL: [
          { link: 'https://www.cs.vu.nl/~dick/MCD2PrefTOC.pdf', display_text: 'Second edition preface and table of contents' },
        ],
        variant: [
          { type: 'book', medium: 'Hardcover', ISBN: '978-1-4614-4698-9', issued: { 'date-parts': [ [ 2012, 7, 2 ] ] } },
          { type: 'book', medium: 'Softcover', ISBN: '978-1-4939-4472-9', issued: { 'date-parts': [ [ 2016, 8, 23 ] ] } },
        ],
      } satisfies CSL.Custom,
    } satisfies types_data.Material,
  },
] satisfies types_data.Entry[]
