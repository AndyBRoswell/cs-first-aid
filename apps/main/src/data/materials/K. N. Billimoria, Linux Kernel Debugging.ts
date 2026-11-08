import * as CSL from '@cs-first-aid/bibkit/CSL'
import * as types_data from '@cs-first-aid/bibkit/types/data'

export const entries = [
  {
    id: [],
    material: {
      type: 'book',
      title: 'Linux Kernel Debugging: Leverage proven tools and advanced techniques to effectively debug Linux kernels and kernel modules',
      author: [ { given: 'Kaiwan N.', family: 'Billimoria' } ],
      publisher: 'Packt Publishing',
      issued: { 'date-parts': [ [ 2022, 8, 5 ] ] },
      edition: 1,
      'number-of-pages': 638,
      language: 'en',
      medium: 'eBook',
      ISBN: '9781801076753',
      URL: 'https://www.packtpub.com/en-us/product/linux-kernel-debugging-9781801076753',
      accessed: { 'date-parts': [ [ 2026, 11, 8 ] ] },
      custom: {
        free_material: [
          { link: 'https://github.com/PacktPublishing/Linux-Kernel-Debugging', display_text: 'Official example code and errata', 'Content-Type': 'text/html' },
        ],
        variant: [
          {
            type: 'book',
            medium: 'Paperback',
            ISBN: '9781801075039',
            URL: 'https://www.packtpub.com/en-us/product/linux-kernel-debugging-9781801075039',
            dimensions: '9.25 × 7.5 × 1.28 in',
            custom: {
              weight: '2.38 lb',
              URL: [
                { link: 'https://www.target.com/p/-/A-1011241860', display_text: 'Target' },
              ],
            } satisfies CSL.Custom,
          },
        ],
      } satisfies CSL.Custom,
    },
  },
] satisfies types_data.Entry[]
