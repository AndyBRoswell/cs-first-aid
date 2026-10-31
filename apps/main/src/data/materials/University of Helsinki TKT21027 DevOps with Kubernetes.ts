import * as types_data from '@cs-first-aid/bibkit/types/data'
import * as CSL from '@cs-first-aid/bibkit/CSL'

export const entries = [
  {
    id: [],
    material: {
      type: 'document',
      title: 'DevOps with Kubernetes',
      author: [ { given: 'Jami', family: 'Kousa' } ], // Course creator credited in Chapter 1.
      contributor: [ { given: 'Matti', family: 'Luukkainen' } ], // Course maintainer since 2024.
      genre: 'Lecture notes',
      medium: 'HTML',
      publisher: 'University of Helsinki',
      number: 'TKT21027',
      issued: { 'date-parts': [ [ 2026 ] ] },
      version: '2026',
      language: 'en',
      URL: 'https://courses.mooc.fi/org/uh-cs/courses/devops-with-kubernetes-2026',
      accessed: { 'date-parts': [ [ 2026, 10, 31 ] ] },
      custom: {
        URL: [
          { link: 'https://courses.mooc.fi/org/uh-cs/courses/devops-with-kubernetes-2026/chapter-1', display_text: 'Course guide, credits and material license' },
          { link: 'https://www.helsinki.fi/en/admissions-and-education/open-university/open-university-studies-degree-programme/computer-science', display_text: 'Official course listing (TKT21027)' },
        ],
        free_material: {
          'Lecture notes': [
            { link: 'https://courses.mooc.fi/org/uh-cs/courses/devops-with-kubernetes-2026/chapter-1', display_text: 'Chapter 1: Getting started', 'Content-Type': 'text/html', license: 'CC-BY-NC-SA-3.0' },
            { link: 'https://courses.mooc.fi/org/uh-cs/courses/devops-with-kubernetes-2026/chapter-2', display_text: 'Chapter 2: Kubernetes basics', 'Content-Type': 'text/html', license: 'CC-BY-NC-SA-3.0' },
            { link: 'https://courses.mooc.fi/org/uh-cs/courses/devops-with-kubernetes-2026/chapter-3', display_text: 'Chapter 3: More building blocks', 'Content-Type': 'text/html', license: 'CC-BY-NC-SA-3.0' },
            { link: 'https://courses.mooc.fi/org/uh-cs/courses/devops-with-kubernetes-2026/chapter-4', display_text: 'Chapter 4: To the cloud', 'Content-Type': 'text/html', license: 'CC-BY-NC-SA-3.0' },
            { link: 'https://courses.mooc.fi/org/uh-cs/courses/devops-with-kubernetes-2026/chapter-5', display_text: 'Chapter 5: GitOps and friends', 'Content-Type': 'text/html', license: 'CC-BY-NC-SA-3.0' },
            { link: 'https://courses.mooc.fi/org/uh-cs/courses/devops-with-kubernetes-2026/chapter-6', display_text: 'Chapter 6: Under the hood', 'Content-Type': 'text/html', license: 'CC-BY-NC-SA-3.0' },
          ],
          'Historical course material': [
            { link: 'https://github.com/kubernetes-hy/kubernetes-hy.github.io', display_text: 'Former course website and lecture-note source', note: 'Source for the former course website; the 2026 edition is published on MOOC.fi.', 'Content-Type': 'text/html', license: 'CC-BY-NC-SA-4.0' },
          ],
        },
      } satisfies CSL.Custom,
    } satisfies types_data.Material,
  },
  {
    id: [],
    material: {
      type: 'document',
      title: 'DevOps with Kubernetes: Exercises and Course Project',
      genre: 'Assignments and course project',
      medium: 'HTML',
      publisher: 'University of Helsinki',
      number: 'TKT21027',
      issued: { 'date-parts': [ [ 2026 ] ] },
      version: '2026',
      language: 'en',
      URL: 'https://courses.mooc.fi/org/uh-cs/courses/devops-with-kubernetes-2026/chapter-1',
      accessed: { 'date-parts': [ [ 2026, 10, 31 ] ] },
      note: 'Exercise instructions are embedded in the lecture pages. MOOC.fi blurs exercise cards for signed-out visitors; a freely registered MOOC.fi account is needed to view them normally. No University of Helsinki student account is required. The Chapter 4 instructions use GKE, which requires a Google Cloud account and may incur charges; Chapters 2–3 and some later exercises can be completed locally.',
      custom: {
        URL: [
          { link: 'https://courses.mooc.fi/org/uh-cs/courses/devops-with-kubernetes-2026', display_text: 'Course homepage (2026)', note: 'Exercise cards are blurred until you log in with a freely registered MOOC.fi account; no university account is required. Chapter 4 uses GKE and may incur cloud charges; Chapters 2–3 and some later exercises can run locally.' },
          { link: 'https://courses.mooc.fi/signup', display_text: 'Create a MOOC.fi account with an ordinary email address' },
        ],
        free_material: {
          'Chapter 2: Kubernetes basics': [
            { link: 'https://courses.mooc.fi/org/uh-cs/courses/devops-with-kubernetes-2026/chapter-2/first-deploy#85158d17-2324-5943-8bed-5004ea701bf4', display_text: '1.1–1.4: First deploy', 'Content-Type': 'text/html', license: 'CC-BY-NC-SA-3.0' },
            { link: 'https://courses.mooc.fi/org/uh-cs/courses/devops-with-kubernetes-2026/chapter-2/introduction-to-networking#9a9177ea-2dbc-5638-ad2d-28e7fe2dfff7', display_text: '1.5–1.9: Introduction to Networking', 'Content-Type': 'text/html', license: 'CC-BY-NC-SA-3.0' },
            { link: 'https://courses.mooc.fi/org/uh-cs/courses/devops-with-kubernetes-2026/chapter-2/introduction-to-storage#94869613-4aff-5f41-beb2-08f7730d938d', display_text: '1.10–1.13: Introduction to Storage', 'Content-Type': 'text/html', license: 'CC-BY-NC-SA-3.0' },
          ],
          'Chapter 3: More building blocks': [
            { link: 'https://courses.mooc.fi/org/uh-cs/courses/devops-with-kubernetes-2026/chapter-3/networking-between-pods#befd3f97-8d9f-504a-890f-a2940b5d9257', display_text: '2.1–2.2: Networking between pods', 'Content-Type': 'text/html', license: 'CC-BY-NC-SA-3.0' },
            { link: 'https://courses.mooc.fi/org/uh-cs/courses/devops-with-kubernetes-2026/chapter-3/organizing-a-cluster#1767b1a5-cf11-5cc5-ba7f-fbce2be3960f', display_text: '2.3–2.4: Organizing a cluster', 'Content-Type': 'text/html', license: 'CC-BY-NC-SA-3.0' },
            { link: 'https://courses.mooc.fi/org/uh-cs/courses/devops-with-kubernetes-2026/chapter-3/configuring-applications#18cb0641-762e-56e8-9d7c-5ef5d1ed0651', display_text: '2.5–2.6: Configuring applications', 'Content-Type': 'text/html', license: 'CC-BY-NC-SA-3.0' },
            { link: 'https://courses.mooc.fi/org/uh-cs/courses/devops-with-kubernetes-2026/chapter-3/statefulsets-and-jobs#354cc300-cf3f-557f-8766-0c45b5f4518d', display_text: '2.7–2.9: StatefulSets and Jobs', 'Content-Type': 'text/html', license: 'CC-BY-NC-SA-3.0' },
            { link: 'https://courses.mooc.fi/org/uh-cs/courses/devops-with-kubernetes-2026/chapter-3/monitoring#2d57a1fc-3f9c-447f-b47e-93b7304fa28b', display_text: '2.10: Monitoring', 'Content-Type': 'text/html', license: 'CC-BY-NC-SA-3.0' },
          ],
          'Chapter 4: To the cloud': [
            { link: 'https://courses.mooc.fi/org/uh-cs/courses/devops-with-kubernetes-2026/chapter-4/introduction-to-google-kubernetes-engine#d5183eac-4b0a-5e1f-9b41-2ebdbca9e14a', display_text: '3.1–3.4: Introduction to Google Kubernetes Engine', 'Content-Type': 'text/html', license: 'CC-BY-NC-SA-3.0' },
            { link: 'https://courses.mooc.fi/org/uh-cs/courses/devops-with-kubernetes-2026/chapter-4/deployment-pipeline#6d725fdc-2f57-58d8-bbe6-8d6d12fae0ca', display_text: '3.5–3.8: Deployment Pipeline', 'Content-Type': 'text/html', license: 'CC-BY-NC-SA-3.0' },
            { link: 'https://courses.mooc.fi/org/uh-cs/courses/devops-with-kubernetes-2026/chapter-4/gke-features#502bc277-3314-56d2-ba29-9f438bab43bf', display_text: '3.9–3.12: GKE features', 'Content-Type': 'text/html', license: 'CC-BY-NC-SA-3.0' },
          ],
          'Chapter 5: GitOps and friends': [
            { link: 'https://courses.mooc.fi/org/uh-cs/courses/devops-with-kubernetes-2026/chapter-5/update-strategies-and-prometheus#2e41f51d-d714-52db-b6cb-644516f15ffb', display_text: '4.1–4.5: Update Strategies and Prometheus', 'Content-Type': 'text/html', license: 'CC-BY-NC-SA-3.0' },
            { link: 'https://courses.mooc.fi/org/uh-cs/courses/devops-with-kubernetes-2026/chapter-5/messagin-systems#620efac4-a111-40a3-89a5-ada8fe7e1a77', display_text: '4.6: Messaging systems', 'Content-Type': 'text/html', license: 'CC-BY-NC-SA-3.0' },
            { link: 'https://courses.mooc.fi/org/uh-cs/courses/devops-with-kubernetes-2026/chapter-5/gitops#6a294223-95af-5c0e-97b9-052406d7f430', display_text: '4.7–4.10: GitOps', 'Content-Type': 'text/html', license: 'CC-BY-NC-SA-3.0' },
          ],
          'Chapter 6: Under the hood': [
            { link: 'https://courses.mooc.fi/org/uh-cs/courses/devops-with-kubernetes-2026/chapter-6/custom-resource-definitions#19aecfa4-486f-547b-887a-79f94f182445', display_text: '5.1: Custom Resource Definitions', 'Content-Type': 'text/html', license: 'CC-BY-NC-SA-3.0' },
            { link: 'https://courses.mooc.fi/org/uh-cs/courses/devops-with-kubernetes-2026/chapter-6/service-mesh#01697a16-85c6-53a1-8877-3670c0c23460', display_text: '5.2–5.4: Service Mesh', 'Content-Type': 'text/html', license: 'CC-BY-NC-SA-3.0' },
            { link: 'https://courses.mooc.fi/org/uh-cs/courses/devops-with-kubernetes-2026/chapter-6/beyond-kubernetes#26139955-2f96-5ba0-9686-a894d42b60d2', display_text: '5.5–5.8: Beyond Kubernetes', 'Content-Type': 'text/html', license: 'CC-BY-NC-SA-3.0' },
          ],
          'Example code': [
            { link: 'https://github.com/kubernetes-hy/material-example', display_text: 'Official example applications, Dockerfiles, deployment manifests and controllers', 'Content-Type': 'text/html' },
          ],
        },
      } satisfies CSL.Custom,
    } satisfies types_data.Material,
  },
] satisfies types_data.Entry[]
