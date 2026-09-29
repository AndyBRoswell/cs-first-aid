import * as types_data from '@cs-first-aid/bibkit/types/data'
import * as CSL from '@cs-first-aid/bibkit/CSL'

export const entries = [
  {
    id: [],
    material: {
      type: 'book',
      title: 'Parsing Techniques',
      author: [ { given: 'Dick', family: 'Grune' }, { given: 'Ceriel J. H.', family: 'Jacobs' } ],
      edition: 2,
      medium: 'eBook',
      publisher: 'Springer New York',
      'publisher-place': 'New York, NY',
      issued: { 'date-parts': [ [ 2007, 10, 29 ] ] },
      'original-date': { 'date-parts': [ [ 1990 ] ] },
      'original-publisher': 'Ellis Horwood',
      'original-publisher-place': 'Chichester',
      ISBN: '978-0-387-68954-8',
      ISSN: '2512-5486',
      DOI: '10.1007/978-0-387-68954-8',
      'collection-title': 'Monographs in Computer Science',
      keyword: 'Algorithms, Parsing, Syntax, algorithm, automata, browser, compiler, computational linguistics, data compression, linguistics, programming, programming language',
      'number-of-pages': 'XXIV + 662',
      language: 'en',
      URL: 'https://link.springer.com/book/10.1007/978-0-387-68954-8',
      accessed: { 'date-parts': [ [ 2026, 9, 29 ] ] },
      custom: {
        subtitle: 'A Practical Guide',
        topic: [ 'Software Engineering/Programming and Operating Systems', 'Natural Language Processing (NLP)', 'Programming Techniques', 'Programming Languages, Compilers, Interpreters' ],
        'eBook packages': [ 'Computer Science', 'Computer Science (R0)' ],
        'collection-title-short': 'MCS',
        URL: [
          { link: 'https://research.vu.nl/en/publications/parsing-techniques-a-practical-guide/', display_text: 'Vrije Universiteit Amsterdam: first edition' },
          { link: 'https://www.cs.vu.nl/pub/dick/PTAPG_2nd_Edition/', display_text: 'Authors’ supplementary materials' },
        ],
        variant: [
          { type: 'book', edition: 1, publisher: 'Ellis Horwood', 'publisher-place': 'Chichester', ISBN: '0-13-651431-6', issued: { 'date-parts': [ [ 1990 ] ] }, URL: 'https://research.vu.nl/en/publications/parsing-techniques-a-practical-guide/' },
          { type: 'book', medium: 'Hardcover', ISBN: '978-0-387-20248-8', ISSN: '0172-603X', issued: { 'date-parts': [ [ 2007, 11, 30 ] ] } },
          { type: 'book', medium: 'Softcover', ISBN: '978-1-4419-1901-4', ISSN: '0172-603X', issued: { 'date-parts': [ [ 2010, 11, 23 ] ] } },
        ],
      } satisfies CSL.Custom,
    } satisfies types_data.Material,
  },
] satisfies types_data.Entry[]
