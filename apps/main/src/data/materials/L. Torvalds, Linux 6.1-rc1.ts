import * as types_data from '@cs-first-aid/bibkit/types/data'

export const entries = [
  {
    id: [],
    material: {
      type: 'post',
      author: [ { given: 'Linus', family: 'Torvalds' } ],
      title: 'Linux 6.1-rc1',
      'container-title': 'Linux Kernel Mailing List',
      genre: 'Mailing list post',
      language: 'en',
      URL: 'https://lore.kernel.org/r/CAHk-=wj6y5fipM2A5kEuOO9qm5PBzUY=-m9viEahhtxT09KR_g@mail.gmail.com/',
      issued: { 'date-parts': [ [ 2022, 10, 16 ] ] },
      accessed: { 'date-parts': [ [ 2026, 11, 12 ] ] },
    },
  },
] satisfies types_data.Entry[]
