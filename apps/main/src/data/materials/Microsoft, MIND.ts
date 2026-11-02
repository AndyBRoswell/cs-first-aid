import * as types_data from '@cs-first-aid/bibkit/types/data'
import * as CSL from '@cs-first-aid/bibkit/CSL'

export const entries = [
  {
    id: [ 'MIND' ],
    material: {
      type: 'dataset',
      title: 'MIND: MIcrosoft News Dataset',
      publisher: 'Microsoft Research',
      medium: 'TSV',
      language: 'en',
      URL: 'https://msnews.github.io/',
      accessed: { 'date-parts': [ [ 2026, 11, 3 ] ] },
      custom: {
        URL: [
          { link: 'https://github.com/msnews/MIND', display_text: 'GitHub' },
          { link: 'https://github.com/recommenders-team/recommenders/blob/main/recommenders/datasets/mind.py', display_text: 'Maintained downloader and current mirror locations' },
        ],
        free_material: [
          { link: 'https://huggingface.co/datasets/Recommenders/MIND', display_text: 'MIND Large and Small: maintained download mirror', license: 'Microsoft Research License Terms' },
          { link: 'https://huggingface.co/datasets/Recommenders/MIND/resolve/main/MINDsmall_train.zip', display_text: 'MIND Small training set (ZIP)', 'Content-Type': 'application/zip', license: 'Microsoft Research License Terms' },
          { link: 'https://huggingface.co/datasets/Recommenders/MIND/resolve/main/MINDsmall_dev.zip', display_text: 'MIND Small validation set (ZIP)', 'Content-Type': 'application/zip', license: 'Microsoft Research License Terms' },
          { link: 'https://github.com/msnews/MIND/blob/master/MSR%20License_Data.pdf', display_text: 'Dataset license terms' },
        ],
      } satisfies CSL.Custom,
    } satisfies types_data.Material,
  },
] satisfies types_data.Entry[]
