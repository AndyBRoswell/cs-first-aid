import * as types_data from '@cs-first-aid/bibkit/types/data'
import * as CSL from '@cs-first-aid/bibkit/CSL'

export const entries = [
  {
    id: [],
    material: {
      type: 'webpage',
      title: 'My First Language Frontend with LLVM Tutorial',
      author: [ { literal: 'LLVM Project' } ],
      language: 'en',
      URL: 'https://llvm.org/docs/tutorial/MyFirstLanguageFrontend/index.html',
      accessed: { 'date-parts': [ [ 2026, 10, 30 ] ] },
      custom: {
        free_material: [
          { link: 'https://github.com/llvm/llvm-project/tree/main/llvm/examples/Kaleidoscope', display_text: 'Official Kaleidoscope example source code', 'Content-Type': 'text/html' },
        ],
      } satisfies CSL.Custom,
    } satisfies types_data.Material,
  },
  {
    id: [],
    material: {
      type: 'webpage',
      title: 'Building a JIT in LLVM',
      author: [ { literal: 'LLVM Project' } ],
      language: 'en',
      URL: 'https://llvm.org/docs/tutorial/BuildingAJIT1.html', // Only Chapters 1–2 are marked as updated for ORC API changes.
      accessed: { 'date-parts': [ [ 2026, 10, 30 ] ] },
      custom: {
        free_material: [
          { link: 'https://github.com/llvm/llvm-project/tree/main/llvm/examples/Kaleidoscope/BuildingAJIT', display_text: 'Official ORC JIT tutorial example source code', 'Content-Type': 'text/html' },
        ],
      } satisfies CSL.Custom,
    } satisfies types_data.Material,
  },
  {
    id: [],
    material: {
      type: 'webpage',
      title: 'Writing an LLVM Pass',
      author: [ { literal: 'LLVM Project' } ],
      language: 'en',
      URL: 'https://llvm.org/docs/WritingAnLLVMNewPMPass.html',
      accessed: { 'date-parts': [ [ 2026, 10, 30 ] ] },
    } satisfies types_data.Material,
  },
] satisfies types_data.Entry[]
