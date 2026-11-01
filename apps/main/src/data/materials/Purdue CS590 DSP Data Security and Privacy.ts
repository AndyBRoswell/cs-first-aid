import * as types_data from '@cs-first-aid/bibkit/types/data'
import * as CSL from '@cs-first-aid/bibkit/CSL'

export const entries = [
  {
    id: [],
    material: {
      type: 'document',
      title: 'CS590 DSP: Data Security and Privacy',
      number: 'CS590 DSP',
      author: [ { given: 'Ninghui', family: 'Li' } ],
      genre: 'Lecture slides, handouts, and assignments',
      medium: 'PDF, Google Slides, and Jupyter notebooks',
      issued: { 'date-parts': [ [ 2022 ] ], season: 1 },
      version: 'Spring 2022',
      language: 'en',
      URL: 'https://www.cs.purdue.edu/homes/ninghui/courses/Spring22/lectures.html',
      accessed: { 'date-parts': [ [ 2026, 11, 1 ] ] },
      note: 'Includes access control and cryptography alongside anonymization and differential privacy.',
      custom: {
        institution: [ 'Purdue University' ],
        URL: [
          { link: 'https://www.cs.purdue.edu/homes/ninghui/courses/Spring22/', display_text: 'Course information' },
        ],
        free_material: {
          'Lecture slides': [
            { link: 'https://www.cs.purdue.edu/homes/ninghui/courses/Spring22/handouts/W01_intro.pdf', display_text: 'Week 1: Introduction and UNIX access control (PDF)', 'Content-Type': 'application/pdf' },
            { link: 'https://www.cs.purdue.edu/homes/ninghui/courses/Spring22/handouts/W02_dac_weakness.pdf', display_text: 'Week 2: Discretionary access control weaknesses (PDF)', 'Content-Type': 'application/pdf' },
            { link: 'https://www.cs.purdue.edu/homes/ninghui/courses/Spring22/handouts/W03_blp_mls.pdf', display_text: 'Week 3: Multilevel security and integrity (PDF)', 'Content-Type': 'application/pdf' },
            { link: 'https://www.cs.purdue.edu/homes/ninghui/courses/Spring22/handouts/W04_rbac.pdf', display_text: 'Week 4: Non-interference and role-based access control (PDF)', 'Content-Type': 'application/pdf' },
            { link: 'https://www.cs.purdue.edu/homes/ninghui/courses/Spring22/handouts/W05_privacy.pdf', display_text: 'Week 5: k-Anonymity, l-Diversity, t-Closeness, and reconstruction attacks (PDF)', 'Content-Type': 'application/pdf' },
            { link: 'https://www.cs.purdue.edu/homes/ninghui/courses/Spring22/handouts/W06_DP.pdf', display_text: 'Week 6: Differential privacy (PDF)', 'Content-Type': 'application/pdf' },
            { link: 'https://www.cs.purdue.edu/homes/ninghui/courses/Spring22/handouts/W07_LDP.pdf', display_text: 'Week 7: Local differential privacy (PDF)', 'Content-Type': 'application/pdf' },
            { link: 'https://docs.google.com/presentation/d/1SeAgJwFIXMIDx9aRhaJD4_Oma4g25DQV/', display_text: 'Week 8: What does differential privacy mean? (Google Slides)' },
            { link: 'https://www.cs.purdue.edu/homes/ninghui/courses/Spring22/handouts/W11_Histogram.pdf', display_text: 'Week 11: Differentially private histograms (PDF)', 'Content-Type': 'application/pdf' },
            { link: 'https://www.cs.purdue.edu/homes/ninghui/courses/Spring22/handouts/W12_marginal.pptx', display_text: 'Week 12: Marginal queries (PPTX)', 'Content-Type': 'application/vnd.openxmlformats-officedocument.presentationml.presentation' },
            { link: 'https://www.cs.purdue.edu/homes/ninghui/courses/Spring22/handouts/W12_svt.pdf', display_text: 'Week 12: Sparse vector technique (PDF)', 'Content-Type': 'application/pdf' },
            { link: 'https://www.cs.purdue.edu/homes/ninghui/courses/Spring22/handouts/W13_crypto.pdf', display_text: 'Week 13: Symmetric cryptography (PDF)', 'Content-Type': 'application/pdf' },
            { link: 'https://www.cs.purdue.edu/homes/ninghui/courses/Spring22/handouts/W13_publickey.pdf', display_text: 'Week 13: Asymmetric cryptography (PDF)', 'Content-Type': 'application/pdf' },
            { link: 'https://www.cs.purdue.edu/homes/ninghui/courses/Spring22/handouts/W14_homomorphic.pdf', display_text: 'Week 14: Homomorphic encryption (PDF)', 'Content-Type': 'application/pdf' },
            { link: 'https://www.cs.purdue.edu/homes/ninghui/courses/Spring22/handouts/W14_sfe.pdf', display_text: 'Week 14: Secure function evaluation (PDF)', 'Content-Type': 'application/pdf' },
          ],
          Assignments: [
            { link: 'https://www.cs.purdue.edu/homes/ninghui/courses/Spring22/handouts/hw1.pdf', display_text: 'Homework 1 (PDF)', 'Content-Type': 'application/pdf' },
            { link: 'https://www.cs.purdue.edu/homes/ninghui/courses/Spring22/handouts/hw2.pdf', display_text: 'Homework 2 (PDF)', 'Content-Type': 'application/pdf' },
            { link: 'https://www.cs.purdue.edu/homes/ninghui/courses/Spring22/handouts/hw3.pdf', display_text: 'Homework 3: Differential privacy programming (PDF)', 'Content-Type': 'application/pdf' },
            { link: 'https://www.cs.purdue.edu/homes/ninghui/courses/Spring22/handouts/hw5.pdf', display_text: 'Homework 5 (PDF)', 'Content-Type': 'application/pdf' },
            { link: 'https://github.com/SkinfaxiL/public_CS590DSP', display_text: 'Programming assignments and data (Jupyter notebooks)' },
          ],
        },
      } satisfies CSL.Custom,
    } satisfies types_data.Material,
  },
] satisfies types_data.Entry[]
