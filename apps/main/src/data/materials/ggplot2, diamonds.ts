import * as types_data from '@cs-first-aid/bibkit/types/data'
import * as CSL from '@cs-first-aid/bibkit/CSL'

export const entries = [
  {
    id: [ 'ggplot2 diamonds' ],
    material: {
      type: 'dataset',
      title: 'diamonds',
      'collection-title': 'ggplot2',
      medium: 'R data and CSV',
      language: 'en',
      URL: 'https://ggplot2.tidyverse.org/reference/diamonds.html',
      accessed: { 'date-parts': [ [ 2026, 11, 2 ] ] },
      custom: {
        URL: [
          { link: 'https://vincentarelbundock.github.io/Rdatasets/doc/ggplot2/diamonds.html', display_text: 'Rdatasets CSV conversion documentation' },
          { link: 'https://github.com/tidyverse/ggplot2/commits/main/data/diamonds.rda', display_text: 'R data file revision history' }, // modified
          { link: 'https://github.com/vincentarelbundock/Rdatasets/commits/master/csv/ggplot2/diamonds.csv', display_text: 'CSV conversion revision history' }, // modified
        ],
        free_material: [
          { link: 'https://raw.githubusercontent.com/tidyverse/ggplot2/main/data/diamonds.rda', display_text: 'Dataset distributed with ggplot2 (R data)', 'Content-Type': 'application/octet-stream', modified: { 'date-parts': [ [ 2015, 6, 15 ] ] } },
          { link: 'https://vincentarelbundock.github.io/Rdatasets/csv/ggplot2/diamonds.csv', display_text: 'CSV conversion from Rdatasets', 'Content-Type': 'text/csv', modified: { 'date-parts': [ [ 2023, 8, 31 ] ] } },
        ],
      } satisfies CSL.Custom,
    } satisfies types_data.Material,
  },
] satisfies types_data.Entry[]
