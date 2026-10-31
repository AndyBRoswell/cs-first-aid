import * as types_data from '@cs-first-aid/bibkit/types/data'
import * as CSL from '@cs-first-aid/bibkit/CSL'

const archive = 'https://opencourse.inf.ed.ac.uk/archives/25-26'
const files = `${archive}/sites/default/files`

export const entries = [
  {
    id: [],
    material: {
      type: 'document',
      title: 'Foundations of Data Science (Inf2-FDS) Lecture Notes',
      author: [ { given: 'David', family: 'Sterratt' }, { given: 'Kobi', family: 'Gal' } ], // Title-page byline.
      contributor: [ { given: 'Hiroshi', family: 'Shimodaira' }, { given: 'Iain', family: 'Murray' }, { given: 'Steve', family: 'Renals' } ], // Title-page byline
      genre: 'Lecture notes',
      medium: 'PDF',
      publisher: 'The University of Edinburgh',
      number: 'INF2-FDS',
      issued: { 'date-parts': [ [ 2026, 1, 19 ] ] },
      version: '2026-01-19',
      'number-of-pages': 227, // PDF pages.
      language: 'en',
      URL: `${files}/2026-01/FDS-lecture-notes-2026-01-19.pdf`,
      accessed: { 'date-parts': [ [ 2026, 10, 31 ] ] },
      custom: {
        URL: [
          { link: 'https://www.drps.ed.ac.uk/25-26/dpt/cxinfr08030.htm', display_text: 'Official course description (INFR08030, 2025–2026)' },
          { link: `${archive}/node/454.html`, display_text: 'Official course website (2025–2026 archive)' },
          { link: `${archive}/node/455.html`, display_text: 'Course schedule and reading assignments (2025–2026)' },
        ],
        free_material: [
          { link: `${files}/2026-01/FDS-lecture-notes-2026-01-19.pdf`, display_text: 'Lecture notes (19 January 2026, PDF)', 'Content-Type': 'application/pdf', license: 'CC BY-SA (version not specified)' },
        ],
      } satisfies CSL.Custom,
    } satisfies types_data.Material,
  },
  {
    id: [],
    material: {
      type: 'document',
      title: 'Informatics 2 – Foundations of Data Science: Labs',
      genre: 'Laboratory notebooks',
      medium: 'Jupyter notebooks and PDF',
      publisher: 'The University of Edinburgh',
      number: 'INF2-FDS',
      version: '2025–2026',
      language: 'en',
      URL: `${archive}/node/549.html`,
      accessed: { 'date-parts': [ [ 2026, 10, 31 ] ] },
      note: 'The lab repositories include notebooks, datasets and hints/solutions. They can be run locally with Python/Jupyter; the university Noteable service is optional. The supplementary web-scraping lab has examples that no longer work because the target website changed.',
      custom: {
        URL: [
          { link: `${archive}/node/553.html`, display_text: 'Official instructions for running the labs on a personal computer' },
          { link: 'https://opencourse.inf.ed.ac.uk/inf2-fds/course-materials/semester-2/week-5/lab', display_text: 'Supplementary web-scraping lab and notice about outdated examples' },
        ],
        free_material: {
          'Getting started': [
            { link: `${files}/2025-09/FDS-Labs_2.pdf`, display_text: 'First lab instructions (PDF)', 'Content-Type': 'application/pdf' },
            { link: 'https://github.com/Inf2-FDS/FDS-S1-01-introduction#readme', display_text: 'Local Python/Jupyter setup instructions', 'Content-Type': 'text/html' },
            { link: 'https://github.com/Inf2-FDS/FDS-S1-01-introduction/blob/main/environment.yml', display_text: 'Conda environment definition', 'Content-Type': 'text/html' },
          ],
          'Semester 1 labs': [
            { link: 'https://github.com/Inf2-FDS/FDS-S1-01-introduction', display_text: 'Week 1: Introduction to Jupyter notebooks and Pandas', 'Content-Type': 'text/html' },
            { link: 'https://github.com/Inf2-FDS/FDS-S1-02-data-wrangling', display_text: 'Week 2: Data wrangling I', 'Content-Type': 'text/html' },
            { link: 'https://github.com/Inf2-FDS/FDS-S1-03-visualisation-exploratory-data-analysis', display_text: 'Week 3: Visualisation for exploratory data analysis', 'Content-Type': 'text/html' },
            { link: 'https://github.com/Inf2-FDS/FDS-S1-04-visualisation-data-communication', display_text: 'Week 4: Visualisation for data communication', 'Content-Type': 'text/html' },
            { link: 'https://github.com/Inf2-FDS/FDS-S1-05-data-wrangling-02', display_text: 'Week 5: Data wrangling II', 'Content-Type': 'text/html' },
            { link: 'https://github.com/Inf2-FDS/FDS-S1-05-data-wrangling-02-solution', display_text: 'Week 5: Data wrangling II — published solution', 'Content-Type': 'text/html' },
            { link: 'https://github.com/Inf2-FDS/FDS-S1-06-linear-models', display_text: 'Week 7: Linear models', 'Content-Type': 'text/html' },
            { link: 'https://github.com/Inf2-FDS/FDS-S1-08-pca', display_text: 'Week 8: Principal components analysis', 'Content-Type': 'text/html' },
            { link: 'https://github.com/Inf2-FDS/FDS-S1-09-knn', display_text: 'Week 9: k-nearest neighbours', 'Content-Type': 'text/html' },
            { link: 'https://github.com/Inf2-FDS/FDS-S2-03-kmeans', display_text: 'Week 10: K-means', 'Content-Type': 'text/html' },
          ],
          'Semester 2 labs': [
            { link: 'https://github.com/Inf2-FDS/FDS-S2-01-randomness-sampling-simulations', display_text: 'Week 1: Randomness, sampling and simulations', 'Content-Type': 'text/html' },
            { link: 'https://github.com/Inf2-FDS/FDS-S2-02-estimation-bootstrap', display_text: 'Week 2: Estimation and bootstrap confidence intervals', 'Content-Type': 'text/html' },
            { link: 'https://github.com/Inf2-FDS/FDS-S2-04-logistic-regression', display_text: 'Week 4: Logistic regression', 'Content-Type': 'text/html' },
          ],
          'Supplementary lab': [
            { link: 'https://github.com/Inf2-FDS/FDS-S2-05-web-scraping', display_text: 'Getting data and ethical web scraping (some examples outdated)', 'Content-Type': 'text/html' },
          ],
        },
      } satisfies CSL.Custom,
    } satisfies types_data.Material,
  },
  {
    id: [],
    material: {
      type: 'document',
      title: 'Informatics 2 – Foundations of Data Science: Workshops',
      genre: 'Workshop exercises',
      medium: 'HTML and PDF',
      publisher: 'The University of Edinburgh',
      number: 'INF2-FDS',
      version: '2025–2026',
      language: 'en',
      URL: `${archive}/node/554.html`,
      accessed: { 'date-parts': [ [ 2026, 10, 31 ] ] },
      note: 'Some activities are designed for group discussion. Assessed coursework instructions and downloads are distributed through Learn and require a university account.',
      custom: {
        URL: [
          { link: `${archive}/node/563.html`, display_text: 'Assessment overview; coursework downloads are on Learn' },
        ],
        free_material: {
          'Semester 1 workshops': [
            { link: `${archive}/node/478.html`, display_text: 'Week 3: Data ethics discussion and preparation tasks', 'Content-Type': 'text/html' },
            { link: `${archive}/node/490.html`, display_text: 'Week 5: Visualisation', 'Content-Type': 'text/html' },
            { link: `${archive}/node/2730.html`, display_text: 'Week 7: Linear regression — problems and full solutions', 'Content-Type': 'text/html' },
            { link: `${archive}/node/502.html`, display_text: 'Week 9: Critical evaluation and multiple regression', 'Content-Type': 'text/html' },
          ],
          'Semester 2 workshops': [
            { link: `${archive}/node/536.html`, display_text: 'Week 2: Critical evaluation of a data science study', 'Content-Type': 'text/html' },
            { link: `${archive}/inf2-fds/course-materials/semester-2/week-3/workshop.html`, display_text: 'Week 4: Sampling distributions and confidence intervals — problems and full solutions', 'Content-Type': 'text/html' },
            { link: `${archive}/node/547.html`, display_text: 'Week 6: Logistic regression, hypothesis testing and A/B testing — problems and solutions', 'Content-Type': 'text/html' },
            { link: `${archive}/node/2633.html`, display_text: 'Weeks 9–10: Project presentation workshop', 'Content-Type': 'text/html' },
          ],
          'Handouts': [
            { link: `${files}/2024-09/FDS-S1-03-ethics-1-prep.pdf`, display_text: 'Data ethics workshop preparation (PDF)', 'Content-Type': 'application/pdf' },
            { link: `${files}/2025-10/FDS-visualisation-principles-handout-v2.pdf`, display_text: 'Visualisation principles handout (PDF)', 'Content-Type': 'application/pdf' },
            { link: `${files}/2025-10/FDS-visualisation-explanation-code-criteria-v2.pdf`, display_text: 'Visualisation, explanation and code criteria (PDF)', 'Content-Type': 'application/pdf' },
          ],
        },
      } satisfies CSL.Custom,
    } satisfies types_data.Material,
  },
] satisfies types_data.Entry[]
