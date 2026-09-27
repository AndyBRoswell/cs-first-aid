import * as types_data from '@cs-first-aid/bibkit/types/data'

export const entries = [
  {
    id: [ 'Python Cookbook', ],
    material: {
      type: 'book',
      title: 'Python Cookbook',
      author: [
        { given: 'David', family: 'Beazley' },
        { given: 'Brian K.', family: 'Jones' },
      ],
      edition: 3,
      publisher: "O'Reilly Media",
      issued: { 'date-parts': [ [ 2013, 5 ] ] },
      ISBN: '9781449357337',
      language: 'en-US',
      URL: 'https://www.oreilly.com/library/view/python-cookbook-3rd/9781449357337/',
      accessed: { 'date-parts': [ [ 2026, 9, 27 ] ] },
    } satisfies types_data.Material,
  },
] satisfies types_data.Entry[]
