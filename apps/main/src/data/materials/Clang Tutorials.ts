import * as types_data from '@cs-first-aid/bibkit/types/data'
import * as CSL from '@cs-first-aid/bibkit/CSL'

export const entries = [
  {
    id: [],
    material: {
      type: 'webpage',
      title: 'Introduction to the Clang AST',
      author: [ { literal: 'The Clang Team' } ],
      language: 'en',
      URL: 'https://clang.llvm.org/docs/IntroductionToTheClangAST.html',
      accessed: { 'date-parts': [ [ 2026, 10, 30 ] ] },
      custom: {
        free_material: [
          { link: 'https://llvm.org/devmtg/2013-04/klimek-slides.pdf', display_text: 'Companion slides: The Clang AST (Manuel Klimek)', 'Content-Type': 'application/pdf' },
        ],
      } satisfies CSL.Custom,
    } satisfies types_data.Material,
  },
  {
    id: [],
    material: {
      type: 'webpage',
      title: 'How to write RecursiveASTVisitor based ASTFrontendActions.',
      author: [ { literal: 'The Clang Team' } ],
      language: 'en',
      URL: 'https://clang.llvm.org/docs/RAVFrontendAction.html',
      accessed: { 'date-parts': [ [ 2026, 10, 30 ] ] },
    } satisfies types_data.Material,
  },
  {
    id: [],
    material: {
      type: 'webpage',
      title: 'Tutorial for building tools using LibTooling and LibASTMatchers',
      author: [ { literal: 'The Clang Team' } ],
      language: 'en',
      URL: 'https://clang.llvm.org/docs/LibASTMatchersTutorial.html',
      accessed: { 'date-parts': [ [ 2026, 10, 30 ] ] },
    } satisfies types_data.Material,
  },
  {
    id: [],
    material: {
      type: 'webpage',
      title: 'Clang Transformer Tutorial',
      author: [ { literal: 'The Clang Team' } ],
      language: 'en',
      URL: 'https://clang.llvm.org/docs/ClangTransformerTutorial.html',
      accessed: { 'date-parts': [ [ 2026, 10, 30 ] ] },
    } satisfies types_data.Material,
  },
  {
    id: [],
    material: {
      type: 'webpage',
      title: 'Clang Plugins',
      author: [ { literal: 'The Clang Team' } ],
      language: 'en',
      URL: 'https://clang.llvm.org/docs/ClangPlugins.html',
      accessed: { 'date-parts': [ [ 2026, 10, 30 ] ] },
      custom: {
        free_material: [
          { link: 'https://github.com/llvm/llvm-project/tree/main/clang/examples/PrintFunctionNames', display_text: 'Official PrintFunctionNames plugin example and build instructions', 'Content-Type': 'text/html' },
          { link: 'https://github.com/llvm/llvm-project/tree/main/clang/examples/Attribute', display_text: 'Official attribute plugin example source code', 'Content-Type': 'text/html' },
        ],
      } satisfies CSL.Custom,
    } satisfies types_data.Material,
  },
  {
    id: [],
    material: {
      type: 'webpage',
      title: 'Data flow analysis: an informal introduction',
      author: [ { literal: 'The Clang Team' } ],
      language: 'en',
      URL: 'https://clang.llvm.org/docs/DataFlowAnalysisIntro.html',
      accessed: { 'date-parts': [ [ 2026, 10, 30 ] ] },
    } satisfies types_data.Material,
  },
] satisfies types_data.Entry[]
