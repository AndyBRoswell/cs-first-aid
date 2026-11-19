import * as types_data from '@cs-first-aid/bibkit/types/data'

export const entries = [
  {
    id: [],
    material: {
      type: 'webpage',
      title: 'Removing XSLT for a more secure browser',
      author: [
        { given: 'Mason', family: 'Freed' },
        { given: 'Dominik', family: 'Röttsches' },
      ],
      'container-title': 'Chrome for Developers',
      publisher: 'Google',
      issued: { 'date-parts': [ [ 2025, 10, 29 ] ] },
      language: 'en',
      URL: 'https://developer.chrome.com/docs/web-platform/deprecating-xslt',
      accessed: { 'date-parts': [ [ 2026, 11, 19 ] ] },
    } satisfies types_data.Material,
  },
] satisfies types_data.Entry[]
