import * as types_data from '@cs-first-aid/bibkit/types/data'
import * as CSL from '@cs-first-aid/bibkit/CSL'

export const entries = [
  {
    id: [],
    material: {
      type: 'document',
      title: 'How to find good information',
      author: [ { given: 'Claire', family: 'Berman' } ], // Title-slide byline.
      'collection-title': '2.671: Measurement and Instrumentation',
      genre: 'Lecture slides',
      medium: 'Google Slides and PDF',
      publisher: 'MIT Libraries',
      number: '2.671',
      issued: { 'date-parts': [ [ 2026, 9 ] ] }, // Title slide.
      version: 'Fall 2026',
      'number-of-pages': 49, // PDF pages.
      language: 'en',
      URL: 'https://docs.google.com/presentation/d/1boBLaldluvBE6qb8cuj0lW4uhtadM8QZ7ukn5hQxpRU/edit',
      accessed: { 'date-parts': [ [ 2026, 11, 1 ] ] },
      custom: {
        URL: [
          { link: 'https://libguides.mit.edu/2-671', display_text: 'Official course library guide and Fall 2026 slides' },
        ],
        free_material: [
          { link: 'https://docs.google.com/presentation/d/1boBLaldluvBE6qb8cuj0lW4uhtadM8QZ7ukn5hQxpRU/export/pdf', display_text: 'Library lecture slides (Fall 2026, PDF)', 'Content-Type': 'application/pdf' },
        ],
      } satisfies CSL.Custom,
    } satisfies types_data.Material,
  },
  {
    id: [],
    material: {
      type: 'document',
      title: 'Journal Article Guidelines',
      author: [ { given: 'Barbara', family: 'Hughey' } ], // PDF metadata and MIT OpenCourseWare attribution.
      'collection-title': '2.671: Measurement and Instrumentation',
      genre: 'Writing guidelines',
      medium: 'PDF and HTML',
      publisher: 'Massachusetts Institute of Technology',
      number: '2.671',
      'number-of-pages': 13, // PDF pages.
      language: 'en',
      URL: 'https://web.mit.edu/2.THA/www/JournalArticleGuidelinesForWeb.pdf',
      accessed: { 'date-parts': [ [ 2026, 11, 1 ] ] },
      custom: {
        URL: [
          { link: 'https://ocw.mit.edu/courses/2-tha-undergraduate-thesis-for-course-2-a-january-iap-2007/pages/related-resources/', display_text: 'MIT OpenCourseWare: author attribution and official link' },
        ],
        free_material: [
          { link: 'https://web.mit.edu/2.THA/www/JournalArticleGuidelines.htm', display_text: 'Journal article guidelines (HTML)', 'Content-Type': 'text/html' },
        ],
      } satisfies CSL.Custom,
    } satisfies types_data.Material,
  },
  {
    id: [],
    material: {
      type: 'document',
      title: 'Go Forth Topics Summary',
      'collection-title': '2.671: Measurement and Instrumentation',
      genre: 'Project topic index',
      medium: 'Google Sheets and XLSX',
      publisher: 'Massachusetts Institute of Technology',
      number: '2.671',
      language: 'en',
      URL: 'https://docs.google.com/spreadsheets/d/1WMQEF7cEQnTiaPmBEAoPwQISa33caf6C-o5fEtT5Fc4/edit',
      accessed: { 'date-parts': [ [ 2026, 11, 1 ] ] },
      custom: {
        URL: [
          { link: 'https://web.mit.edu/2.671/www/', display_text: 'Official course website and project topic index link' },
        ],
        free_material: [
          { link: 'https://docs.google.com/spreadsheets/d/1WMQEF7cEQnTiaPmBEAoPwQISa33caf6C-o5fEtT5Fc4/export?format=xlsx', display_text: 'Project topic index (XLSX)', 'Content-Type': 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' },
        ],
      } satisfies CSL.Custom,
    } satisfies types_data.Material,
  },
] satisfies types_data.Entry[]
