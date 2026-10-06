import * as types_data from '@cs-first-aid/bibkit/types/data'
import * as CSL from '@cs-first-aid/bibkit/CSL'

export const entries = [
  {
    id: [],
    material: {
      type: 'book',
      author: [ { given: 'S. Allen', family: 'Broughton' }, { given: 'Kurt', family: 'Bryan' } ],
      title: 'Discrete Fourier Analysis and Wavelets',
      edition: 2,
      medium: 'Print',
      publisher: 'John Wiley & Sons',
      issued: { 'date-parts': [ [ 2018, 5 ] ] },
      ISBN: '9781119258223',
      language: 'en-US',
      URL: 'https://www.wiley-vch.de/de/?isbn=978-1-119-25822-3&option=com_eshop&view=product',
      accessed: { 'date-parts': [ [ 2026, 10, 6 ] ] },
      custom: {
        subtitle: 'Applications to Signal and Image Processing',
        variant: [
          {
            type: 'book',
            medium: 'eBook',
            issued: { 'date-parts': [ [ 2018, 3, 31 ] ] },
            DOI: '10.1002/9781119473329',
            ISBN: '9781119473329',
            URL: 'https://onlinelibrary.wiley.com/doi/book/10.1002/9781119473329',
            accessed: { 'date-parts': [ [ 2026, 10, 6 ] ] },
          },
        ],
      } satisfies CSL.Custom,
    } satisfies types_data.Material,
  },
] satisfies types_data.Entry[]
