import * as CSL from '@cs-first-aid/bibkit/CSL'
import * as types_data from '@cs-first-aid/bibkit/types/data'

export const entries = [
  {
    id: [],
    material: {
      type: 'book',
      title: 'Linux Kernel Programming: A comprehensive and practical guide to kernel internals, writing modules, and kernel synchronization',
      author: [ { given: 'Kaiwan N.', family: 'Billimoria' } ],
      publisher: 'Packt Publishing',
      issued: { 'date-parts': [ [ 2024, 2, 29 ] ] },
      edition: 2,
      'number-of-pages': 826,
      language: 'en',
      medium: 'eBook',
      ISBN: '9781803241081',
      URL: 'https://www.packtpub.com/en-us/product/linux-kernel-programming-9781803241081',
      accessed: { 'date-parts': [ [ 2026, 11, 8 ] ] },
      note: 'Based on the Linux 6.1 LTS kernel.',
      custom: {
        free_material: [
          { link: 'https://github.com/PacktPublishing/Linux-Kernel-Programming_2E', display_text: 'Official example code and errata (2nd edition)', 'Content-Type': 'text/html' },
        ],
        variant: [
          {
            type: 'book',
            medium: 'Paperback',
            ISBN: '9781803232225',
            URL: 'https://www.packtpub.com/en-us/product/linux-kernel-programming-9781803232225',
            dimensions: '23.5 × 19.1 × 4.2 cm',
            custom: {
              weight: '1.39 kg',
              URL: [
                { link: 'https://www.bookdelivery.com/gb-en/book-linux-kernel-programming-second-edition-a-comprehensive-and-practical-guide-to-kernel-internals-writing-modules-and-kernel-synchronization/9781803232225/p/56254312', display_text: 'Bookdelivery' },
              ],
            } satisfies CSL.Custom,
          },
        ],
      } satisfies CSL.Custom,
    },
  },
] satisfies types_data.Entry[]
