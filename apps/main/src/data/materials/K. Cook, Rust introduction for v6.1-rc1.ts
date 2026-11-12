import * as types_data from '@cs-first-aid/bibkit/types/data'

export const entries = [
  {
    id: [],
    material: {
      type: 'post',
      author: [ { given: 'Kees', family: 'Cook' } ],
      title: '[GIT PULL] Rust introduction for v6.1-rc1',
      'container-title': 'Linux Kernel Mailing List',
      genre: 'Mailing list post',
      language: 'en',
      URL: 'https://lore.kernel.org/r/202210010816.1317F2C@keescook',
      issued: { 'date-parts': [ [ 2022, 10, 1 ] ] },
      accessed: { 'date-parts': [ [ 2026, 11, 12 ] ] },
    },
  },
] satisfies types_data.Entry[]
