import * as types_data from '@cs-first-aid/bibkit/types/data'
import * as CSL from '@cs-first-aid/bibkit/CSL'

export const entries = [
  {
    id: [],
    material: {
      type: 'book',
      title: 'Introduction to Multisim for Electric Circuits',
      author: [ { given: 'James W.', family: 'Nilsson' }, { given: 'Susan A.', family: 'Riedel' } ],
      edition: 11,
      genre: 'Software manual',
      medium: 'Paperback',
      dimensions: '232 × 176 × 10 mm',
      publisher: 'Pearson Education Canada',
      'publisher-place': '[Toronto, ON]', // Inferred from the publisher's head office; brackets mark supplied information: https://www.loc.gov/aba/rda/mgd/manifestation/mg-m-placeOfPublication-01.pdf#page=6
      issued: { 'date-parts': [ [ 2018, 6, 29 ] ] },
      ISBN: '9780134739342',
      'number-of-pages': 144,
      language: 'en',
      note: 'Companion to Nilsson and Riedel\'s Electric Circuits, 11th edition.',
      URL: 'https://openlibrary.org/books/OL28870427M',
      accessed: { 'date-parts': [ [ 2026, 10, 25 ] ] },
      custom: {
        URL: [
          { link: 'https://openlibrary.org/books/OL28870427M.json', display_text: 'Open Library: Book data' }, // publisher
          { link: 'https://images.thenile.io/r1000/9780134739342.jpg', display_text: 'Cover (11th edition)', 'Content-Type': 'image/jpeg' }, // author
          { link: 'https://www.thenile.com.au/books/james-nilsson/introduction-to-multisim-for-electric-circuits/9780134739342', display_text: 'The Nile' },
          { link: 'https://www.pearsonhighered.com/assets/preface/0/1/3/4/0134814118.pdf', display_text: 'Electric Circuits, 11th edition: Preface' },
        ],
      } satisfies CSL.Custom,
    },
  },
] satisfies types_data.Entry[]
