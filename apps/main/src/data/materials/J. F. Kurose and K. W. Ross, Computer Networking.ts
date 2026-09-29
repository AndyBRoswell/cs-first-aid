import * as types_data from '@cs-first-aid/bibkit/types/data'
import * as CSL from '@cs-first-aid/bibkit/CSL'

export const entries = [
  {
    id: [],
    material: {
      type: 'book',
      title: 'Computer Networking',
      author: [ { given: 'James F.', family: 'Kurose' }, { given: 'Keith W.', family: 'Ross' } ],
      edition: 9,
      medium: 'Paperback',
      publisher: 'Pearson',
      issued: { 'date-parts': [ [ 2026, 9, 8 ] ] },
      'original-date': { 'date-parts': [ [ 2025, 9, 9 ] ] },
      'original-publisher': 'Pearson',
      'original-publisher-place': 'Hoboken, NJ',
      ISBN: '9781292499239',
      language: 'en',
      URL: 'https://www.pearson.com/en-gb/subject-catalog/p/computer-networking-global-edition/P200000015518/9781292499239',
      accessed: { 'date-parts': [ [ 2026, 9, 29 ] ] },
      custom: {
        subtitle: 'A Top-Down Approach',
        edition: 'Global Edition',
        URL: [
          { link: 'https://gaia.cs.umass.edu/kurose_ross/index.php', display_text: 'Computer Networking 9E' },
          { link: 'https://www.informit.com/store/computer-networking-a-top-down-approach-book-9780135429334', display_text: 'InformIT' },
          { link: 'https://library.kaist.ac.kr/search/ctlgSearch/posesn/view.do?bibctrlno=1152928&se=b0&ty=B', display_text: 'KAIST Library' },
        ],
      } satisfies CSL.Custom,
    } satisfies types_data.Material,
  },
] satisfies types_data.Entry[]
