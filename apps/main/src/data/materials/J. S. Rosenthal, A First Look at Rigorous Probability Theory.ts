import * as types_data from '@cs-first-aid/bibkit/types/data'

export const entries = [
  {
    id: [],
    material: {
      type: 'book',
      title: 'A First Look at Rigorous Probability Theory',
      author: [ { given: 'Jeffrey S.', family: 'Rosenthal' } ],
      edition: 2,
      medium: 'Paperback',
      publisher: 'World Scientific',
      'publisher-place': 'Singapore; Hackensack, NJ',
      issued: { 'date-parts': [ [ 2006 ] ] },
      ISBN: '9789812703712',
      DOI: '10.1142/6300',
      'number-of-pages': 'xvi, 219',
      language: 'en',
      URL: 'https://www.worldscientific.com/worldscibooks/10.1142/6300',
      accessed: { 'date-parts': [ [ 2026, 10, 9 ] ] },
      custom: {
        URL: [
          { link: 'https://probability.ca/jeff/grprobbook.html', display_text: `Author's site` },
          { link: 'https://katalog.bibliothek.kit.edu/bib/305831', display_text: 'KIT Library' },
        ],
        variant: [
          {
            type: 'book',
            edition: 2,
            medium: 'Hardback',
            publisher: 'World Scientific',
            issued: { 'date-parts': [ [ 2006, 11 ] ] },
            ISBN: '9789812703705',
            URL: 'https://www.worldscientific.com/worldscibooks/10.1142/6300',
            accessed: { 'date-parts': [ [ 2026, 10, 9 ] ] },
          },
          {
            type: 'book',
            edition: 2,
            medium: 'eBook',
            publisher: 'World Scientific',
            issued: { 'date-parts': [ [ 2006, 11 ] ] },
            ISBN: '978-981-3101-65-4',
            DOI: '10.1142/6300',
            URL: 'https://www.worldscientific.com/worldscibooks/10.1142/6300',
            accessed: { 'date-parts': [ [ 2026, 10, 9 ] ] },
          },
        ],
        free_material: [
          {
            link: 'https://probability.ca/jeff/ftpdir/errata2.pdf',
            display_text: 'Errata for 2e',
            'Content-Type': 'application/pdf',
            accessed: { 'date-parts': [ [ 2026, 10, 9 ] ] },
          },
          {
            link: 'https://probability.ca/jeff/grprobsol',
            display_text: 'The Solutions Manual of All Even-Numbered Exercises',
            'Content-Type': 'application/pdf',
            accessed: { 'date-parts': [ [ 2026, 10, 9 ] ] },
          },
        ],
      },
    } satisfies types_data.Material,
  },
] satisfies types_data.Entry[]
