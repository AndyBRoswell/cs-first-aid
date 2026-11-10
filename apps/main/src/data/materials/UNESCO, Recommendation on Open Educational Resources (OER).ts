import * as types_data from '@cs-first-aid/bibkit/types/data'
import * as CSL from '@cs-first-aid/bibkit/CSL'

export const entries = [
  {
    id: [ 'UNESCO OER Recommendation 2019', 'OER Recommendation 2019', 'UNESCO 2019 OER', 'CL/4319', '40 C/32' ],
    material: {
      type: 'document',
      title: 'Recommendation on Open Educational Resources (OER)',
      author: [ { literal: 'UNESCO' } ],
      publisher: 'UNESCO',
      'publisher-place': 'Paris',
      number: 'CL/4319',
      issued: { 'date-parts': [ [ 2019, 11, 25 ] ] },
      language: 'en',
      URL: 'https://www.unesco.org/en/legal-affairs/recommendation-open-educational-resources-oer',
      accessed: { 'date-parts': [ [ 2026, 11, 10 ] ] },
      note: 'Adopted on 25 November 2019 by the UNESCO General Conference at its 40th session (40 C/Resolution 32); transmitted to Member States under Circular Letter CL/4319.',
      custom: {
        URL: [
          { link: 'https://unesdoc.unesco.org/ark:/48223/pf0000373755', display_text: 'UNESDOC (CL/4319)' },
          { link: 'https://unesdoc.unesco.org/ark:/48223/pf0000370936', display_text: 'UNESDOC (40 C/32)' },
        ],
        free_material: [
          {
            link: 'https://unesdoc.unesco.org/ark:/48223/pf0000373755/PDF/373755eng.pdf.multi',
            display_text: 'PDF',
            'Content-Type': 'application/pdf',
          },
        ],
      } satisfies CSL.Custom,
    } satisfies types_data.Material,
  },
  {
    id: [ '关于开放式教育资源的建议书', '关于开放教育资源的建议书', 'UNESCO 开放教育资源建议书 2019', 'CL/4319', '40 C/32' ],
    material: {
      type: 'document',
      title: '关于开放式教育资源的建议书',
      author: [ { literal: '联合国教育、科学及文化组织' } ],
      publisher: '联合国教科文组织',
      'publisher-place': '巴黎',
      number: '40 C/32',
      issued: { 'date-parts': [ [ 2019, 11, 25 ] ] },
      language: 'zh-CN',
      URL: 'https://unesdoc.unesco.org/ark:/48223/pf0000370936',
      accessed: { 'date-parts': [ [ 2026, 11, 10 ] ] },
      note: '经联合国教科文组织第四十届大会（40 C/决议 32）于2019年11月25日审议通过，以文件 40 C/32 及通函 CL/4319 印发。',
      custom: {
        URL: [
          { link: 'https://unesdoc.unesco.org/ark:/48223/pf0000370936', display_text: 'UNESDOC (40 C/32)' },
          { link: 'https://unesdoc.unesco.org/ark:/48223/pf0000372579', display_text: 'UNESDOC (40 C/决议 32)' },
          { link: 'https://www.unesco.org/en/legal-affairs/recommendation-open-educational-resources-oer', display_text: 'UNESCO Legal Affairs (英文页面)' },
        ],
        free_material: [
          {
            link: 'https://unesdoc.unesco.org/ark:/48223/pf0000370936/PDF/370936chi.pdf.multi',
            display_text: 'PDF (中文)',
            'Content-Type': 'application/pdf',
          },
        ],
      } satisfies CSL.Custom,
    } satisfies types_data.Material,
  },
] satisfies types_data.Entry[]
