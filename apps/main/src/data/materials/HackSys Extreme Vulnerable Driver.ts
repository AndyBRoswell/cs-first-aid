import * as types_data from '@cs-first-aid/bibkit/types/data'
import * as CSL from '@cs-first-aid/bibkit/CSL'

export const entries = [
  {
    id: [],
    material: {
      type: 'software',
      title: 'HackSys Extreme Vulnerable Driver',
      author: [ { given: 'Ashfaq', family: 'Ansari' } ],
      publisher: 'HackSys',
      genre: 'Kernel exploitation lab',
      language: 'en',
      URL: 'https://github.com/hacksysteam/HackSysExtremeVulnerableDriver',
      accessed: { 'date-parts': [ [ 2026, 10, 31 ] ] },
      note: 'Use x64 builds. Windows sources: 2025-02-24; release binaries: 2019.',
      custom: {
        free_material: {
          Source: [
            { link: 'https://github.com/hacksysteam/HackSysExtremeVulnerableDriver/tree/master/Driver/HEVD/Windows', display_text: 'Windows driver source', modified: { 'date-parts': [ [ 2025, 2, 24 ] ] } },
            { link: 'https://github.com/hacksysteam/HackSysExtremeVulnerableDriver/tree/master/Driver/HEVD/Linux', display_text: 'Linux driver source', modified: { 'date-parts': [ [ 2023, 8, 11 ] ] } },
            { link: 'https://github.com/hacksysteam/HackSysExtremeVulnerableDriver/tree/master/Builder', display_text: 'Build scripts', modified: { 'date-parts': [ [ 2025, 1, 13 ] ] } },
          ],
          Binaries: [
            { link: 'https://github.com/hacksysteam/HackSysExtremeVulnerableDriver/releases/download/v3.00/HEVD.3.00.zip', display_text: 'HEVD v3.00: vulnerable and secure drivers with PDB symbols', 'Content-Type': 'application/zip', issued: { 'date-parts': [ [ 2019, 6, 28 ] ] }, modified: { 'date-parts': [ [ 2019, 7, 2 ] ] }, note: 'Contains both x64 and x86 builds.' },
          ],
        },
      } satisfies CSL.Custom,
    } satisfies types_data.Material,
  },
] satisfies types_data.Entry[]
