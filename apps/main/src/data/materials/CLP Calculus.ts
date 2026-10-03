import * as types_data from '@cs-first-aid/bibkit/types/data'
import * as CSL from '@cs-first-aid/bibkit/CSL'

export const entries = [
  {
    id: [ 'CLP-1', 'CLP1' ],
    material: {
      type: 'book',
      author: [ { given: 'Joel', family: 'Feldman' }, { given: 'Andrew', family: 'Rechnitzer' }, { given: 'Elyse', family: 'Yeager' } ],
      title: 'CLP-1 Differential Calculus',
      medium: 'PDF',
      issued: { 'date-parts': [ [ 2024, 8, 16 ] ] },
      'number-of-pages': 426,
      language: 'en',
      URL: 'https://personal.math.ubc.ca/~CLP/CLP1/',
      accessed: { 'date-parts': [ [ 2026, 10, 3 ] ] },
      custom: {
        free_material: [
          { link: 'https://personal.math.ubc.ca/~CLP/CLP1/clp_1_dc_text.pdf', display_text: 'PDF', 'Content-Type': 'application/pdf', license: 'CC-BY-NC-SA-4.0' },
          { link: 'https://personal.math.ubc.ca/~CLP/CLP1/clp_1_dc_problems.pdf', display_text: 'clp_1_dc_problems.pdf', 'Content-Type': 'application/pdf', license: 'CC-BY-NC-SA-4.0' },
          { link: 'https://personal.math.ubc.ca/~CLP/CLP1/clp_1_dc/clp_1_dc.html', display_text: 'HTML', license: 'CC-BY-NC-SA-4.0' },
        ],
      } satisfies CSL.Custom,
    },
  },
  {
    id: [ 'CLP-2', 'CLP2' ],
    material: {
      type: 'book',
      author: [ { given: 'Joel', family: 'Feldman' }, { given: 'Andrew', family: 'Rechnitzer' }, { given: 'Elyse', family: 'Yeager' } ],
      title: 'CLP-2 Integral Calculus',
      medium: 'PDF',
      issued: { 'date-parts': [ [ 2024, 8, 16 ] ] },
      'number-of-pages': 468,
      language: 'en',
      URL: 'https://personal.math.ubc.ca/~CLP/CLP2/',
      accessed: { 'date-parts': [ [ 2026, 10, 3 ] ] },
      custom: {
        free_material: [
          { link: 'https://personal.math.ubc.ca/~CLP/CLP2/clp_2_ic_text.pdf', display_text: 'PDF', 'Content-Type': 'application/pdf', license: 'CC-BY-NC-SA-4.0' },
          { link: 'https://personal.math.ubc.ca/~CLP/CLP2/clp_2_ic_problems.pdf', display_text: 'clp_2_ic_problems.pdf', 'Content-Type': 'application/pdf', license: 'CC-BY-NC-SA-4.0' },
          { link: 'https://personal.math.ubc.ca/~CLP/CLP2/clp_2_ic/clp_2_ic.html', display_text: 'HTML', license: 'CC-BY-NC-SA-4.0' },
        ],
      } satisfies CSL.Custom,
    },
  },
  {
    id: [ 'CLP-3', 'CLP3' ],
    material: {
      type: 'book',
      author: [ { given: 'Joel', family: 'Feldman' }, { given: 'Andrew', family: 'Rechnitzer' }, { given: 'Elyse', family: 'Yeager' } ],
      title: 'CLP-3 Multivariable Calculus',
      medium: 'PDF',
      issued: { 'date-parts': [ [ 2024, 8, 16 ] ] },
      'number-of-pages': 397,
      language: 'en',
      URL: 'https://personal.math.ubc.ca/~CLP/CLP3/',
      accessed: { 'date-parts': [ [ 2026, 10, 3 ] ] },
      custom: {
        free_material: [
          { link: 'https://personal.math.ubc.ca/~CLP/CLP3/clp_3_mc_text.pdf', display_text: 'PDF', 'Content-Type': 'application/pdf', license: 'CC-BY-NC-SA-4.0' },
          { link: 'https://personal.math.ubc.ca/~CLP/CLP3/clp_3_mc_problems.pdf', display_text: 'clp_3_mc_problems.pdf', 'Content-Type': 'application/pdf', license: 'CC-BY-NC-SA-4.0' },
          { link: 'https://personal.math.ubc.ca/~CLP/CLP3/clp_3_mc/clp_3_mc.html', display_text: 'HTML', license: 'CC-BY-NC-SA-4.0' },
        ],
      } satisfies CSL.Custom,
    },
  },
  {
    id: [ 'CLP-4', 'CLP4' ],
    material: {
      type: 'book',
      author: [ { given: 'Joel', family: 'Feldman' }, { given: 'Andrew', family: 'Rechnitzer' }, { given: 'Elyse', family: 'Yeager' } ],
      title: 'CLP-4 Vector Calculus',
      medium: 'PDF',
      issued: { 'date-parts': [ [ 2024, 8, 16 ] ] },
      'number-of-pages': 305,
      language: 'en',
      URL: 'https://personal.math.ubc.ca/~CLP/CLP4/',
      accessed: { 'date-parts': [ [ 2026, 10, 3 ] ] },
      custom: {
        free_material: [
          { link: 'https://personal.math.ubc.ca/~CLP/CLP4/clp_4_vc_text.pdf', display_text: 'PDF', 'Content-Type': 'application/pdf', license: 'CC-BY-NC-SA-4.0' },
          { link: 'https://personal.math.ubc.ca/~CLP/CLP4/clp_4_vc_problems.pdf', display_text: 'clp_4_vc_problems.pdf', 'Content-Type': 'application/pdf', license: 'CC-BY-NC-SA-4.0' },
          { link: 'https://personal.math.ubc.ca/~CLP/CLP4/clp_4_vc/clp_4_vc.html', display_text: 'HTML', license: 'CC-BY-NC-SA-4.0' },
        ],
      } satisfies CSL.Custom,
    },
  },
] satisfies types_data.Entry[]
