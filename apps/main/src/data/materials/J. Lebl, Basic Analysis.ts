import * as types_data from '@cs-first-aid/bibkit/types/data'
import * as CSL from '@cs-first-aid/bibkit/CSL'

export const entries = [
  {
    id: [],
    material: {
      type: 'book',
      author: [ { given: 'Jiří', family: 'Lebl' } ],
      title: 'Basic Analysis I',
      volume: 1,
      edition: 6,
      version: '6.3',
      medium: 'PDF',
      issued: { 'date-parts': [ [ 2026, 5, 15 ] ] },
      'number-of-pages': 312,
      language: 'en-US',
      URL: 'https://www.jirka.org/ra/',
      accessed: { 'date-parts': [ [ 2026, 10, 3 ] ] },
      custom: {
        subtitle: 'Introduction to Real Analysis, Volume I',
        free_material: [
          { link: 'https://www.jirka.org/ra/realanal.pdf', display_text: 'PDF', 'Content-Type': 'application/pdf', license: 'CC-BY-SA-4.0 OR CC-BY-NC-SA-4.0' },
        ],
        variant: [
          { type: 'book', medium: 'Paperback', issued: { 'date-parts': [ [ 2023, 7, 15 ] ] }, ISBN: '979-8851944635', URL: 'https://www.amazon.com/dp/B0C9S99TKF' },
        ],
      } satisfies CSL.Custom,
    },
  },
  {
    id: [],
    material: {
      type: 'book',
      author: [ { given: 'Jiří', family: 'Lebl' } ],
      title: 'Basic Analysis II',
      volume: 2,
      edition: 6,
      version: '6.3',
      medium: 'PDF',
      issued: { 'date-parts': [ [ 2026, 5, 15 ] ] },
      'number-of-pages': 217,
      language: 'en-US',
      URL: 'https://www.jirka.org/ra/',
      accessed: { 'date-parts': [ [ 2026, 10, 3 ] ] },
      custom: {
        subtitle: 'Introduction to Real Analysis, Volume II',
        free_material: [
          { link: 'https://www.jirka.org/ra/realanal2.pdf', display_text: 'PDF', 'Content-Type': 'application/pdf', license: 'CC-BY-SA-4.0 OR CC-BY-NC-SA-4.0' },
        ],
        variant: [
          { type: 'book', medium: 'Paperback', issued: { 'date-parts': [ [ 2023, 7, 15 ] ] }, ISBN: '979-8851945977', URL: 'https://www.amazon.com/dp/B0C9S7P6M8' },
        ],
      } satisfies CSL.Custom,
    },
  },
] satisfies types_data.Entry[]
