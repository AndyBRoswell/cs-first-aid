import * as types_data from '@cs-first-aid/bibkit/types/data'
import * as CSL from '@cs-first-aid/bibkit/CSL'

export const entries = [
  {
    id: [],
    material: {
      type: 'book',
      title: 'Introduction to PSpice for Electric Circuits',
      author: [ { given: 'James W.', family: 'Nilsson' }, { given: 'Susan A.', family: 'Riedel' } ],
      edition: 11,
      genre: 'Software manual',
      medium: 'Paperback',
      publisher: 'Pearson Education Canada',
      'publisher-place': '[Toronto, ON]', // Inferred from the publisher's head office; brackets mark supplied information: https://www.loc.gov/aba/rda/mgd/manifestation/mg-m-placeOfPublication-01.pdf#page=6
      issued: { 'date-parts': [ [ 2018, 6, 29 ] ] },
      ISBN: '9780134739335',
      'number-of-pages': 144,
      language: 'en',
      note: 'Companion to Nilsson and Riedel\'s Electric Circuits, 11th edition.',
      URL: 'https://openlibrary.org/books/OL28870432M',
      accessed: { 'date-parts': [ [ 2026, 10, 25 ] ] },
      custom: {
        URL: [
          { link: 'https://openlibrary.org/books/OL28870432M.json', display_text: 'Open Library: Book data' }, // publisher
          { link: 'https://pictures.abebooks.com/isbn/9780134739335-us.jpg', display_text: 'Cover (11th edition)', 'Content-Type': 'image/jpeg' }, // author
          { link: 'https://www.campusbooks.com/books/9780134739335-introduction-to-pspice-for-electric-circuits', display_text: 'CampusBooks' },
          { link: 'https://www.pearsonhighered.com/assets/preface/0/1/3/4/0134814118.pdf', display_text: 'Electric Circuits, 11th edition: Preface' },
        ],
      } satisfies CSL.Custom,
    },
  },
] satisfies types_data.Entry[]
