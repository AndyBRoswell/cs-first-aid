import * as types_data from '@cs-first-aid/bibkit/types/data'
import * as CSL from '@cs-first-aid/bibkit/CSL'

export const entries = [
  {
    id: [
      'PPP3',
    ],
    material: {
      type: 'book',
      title: 'Programming: Principles and Practice Using C++',
      author: [ { given: 'Bjarne', family: 'Stroustrup' } ],
      edition: 3,
      issued: { 'date-parts': [ [ 2024, 4, 12 ] ] },
      publisher: 'Addison-Wesley Professional',
      'collection-title': 'C++ In-Depth',
      'number-of-pages': 656,
      language: 'en-US',
      ISBN: '9780138308681',
      accessed: { 'date-parts': [ [ 2026, 5, 12 ] ] },
      URL: 'https://www.stroustrup.com/programming.html',
      custom: {
        URL: [
          { link: 'https://www.amazon.com/dp/B0DFMWL9P6', tag: [ 'Kindle' ], display_text: 'Amazon Kindle' },
          { link: 'https://www.informit.com/store/programming-principles-and-practice-using-c-plus-plus-9780138308681', display_text: 'InformIT (Publisher)' },
        ],
      } satisfies CSL.Custom,
    },
  },
] satisfies types_data.Entry[]
