import * as types_data from '@cs-first-aid/bibkit/types/data'
import * as CSL from '@cs-first-aid/bibkit/CSL'

export const entries = [
  {
    id: [],
    material: {
      type: 'document',
      title: 'Understanding and Designing Modern NAND Flash-Based SSDs (Solid-State Drives)',
      author: [
        { given: 'Mohammad', family: 'Sadrosadati' },
        { given: 'Onur', family: 'Mutlu' },
        { given: 'Rakesh', family: 'Nadig' },
        { given: 'Jisung', family: 'Park' },
      ],
      genre: 'Lecture slides',
      medium: 'PDF and PowerPoint',
      publisher: 'ETH Zürich',
      number: '227-0085-44L',
      issued: { 'date-parts': [ [ 2023 ] ] },
      version: 'Spring 2023',
      'number-of-pages': 925, // Total across 14 slide decks.
      language: 'en',
      URL: 'https://safari.ethz.ch/projects_and_seminars/spring2023/doku.php?id=modern_ssds',
      accessed: { 'date-parts': [ [ 2026, 10, 30 ] ] },
      custom: {
        URL: [
          { link: 'https://www.vvz.ethz.ch/Vorlesungsverzeichnis/lerneinheit.view?ansicht=ALLE&lang=en&lerneinheitId=166897&semkez=2023S', display_text: 'Official course catalogue and reading list (Spring 2023)' },
        ],
        free_material: {
          Slides: [
            { link: 'https://safari.ethz.ch/projects_and_seminars/spring2023/lib/exe/fetch.php?media=pns_modern_ssds_spring2023_1st_after_meeting.pdf', display_text: 'M0: Course introduction (PDF)', 'Content-Type': 'application/pdf' },
            { link: 'https://safari.ethz.ch/projects_and_seminars/spring2023/lib/exe/fetch.php?media=pns_modern_ssds_spring2023_2nd_before_meeting.pdf', display_text: 'M1: Basics of NAND flash-based SSDs (PDF)', 'Content-Type': 'application/pdf' },
            { link: 'https://safari.ethz.ch/projects_and_seminars/spring2023/lib/exe/fetch.php?media=pns_modern_ssds_spring2023_3rd_after_meeting.pdf', display_text: 'M2: NAND flash read/write operations (PDF)', 'Content-Type': 'application/pdf' },
            { link: 'https://safari.ethz.ch/projects_and_seminars/spring2023/lib/exe/fetch.php?media=pns_modern_ssds_spring2023_4th_after_meeting.pdf', display_text: 'M3: Advanced NAND flash commands and address translation (PDF)', 'Content-Type': 'application/pdf' },
            { link: 'https://safari.ethz.ch/projects_and_seminars/spring2023/lib/exe/fetch.php?media=flash_cosmos_pns_modern_ssd_21_apr_2023.pdf', display_text: 'M4: Flash-Cosmos — processing inside NAND flash (PDF)', 'Content-Type': 'application/pdf' },
            { link: 'https://safari.ethz.ch/projects_and_seminars/spring2023/lib/exe/fetch.php?media=genstore_pands-ssd-talk.pdf', display_text: 'M5: GenStore — processing inside storage (PDF)', 'Content-Type': 'application/pdf' },
            { link: 'https://safari.ethz.ch/projects_and_seminars/spring2023/lib/exe/fetch.php?media=pns_modern_ssds_spring2023_intro_to_mqsim.pdf', display_text: 'M6: Introduction to MQSim (PDF)', 'Content-Type': 'application/pdf' },
            { link: 'https://safari.ethz.ch/projects_and_seminars/spring2023/lib/exe/fetch.php?media=pns_modern_ssds_spring2023_8th_after_meeting.pdf', display_text: 'M7: Garbage collection (PDF)', 'Content-Type': 'application/pdf' },
            { link: 'https://safari.ethz.ch/projects_and_seminars/spring2023/lib/exe/fetch.php?media=pns_modern_ssds_spring2023_m8a_before_meeting.pdf', display_text: 'M8a: NAND flash basics and research overview (PDF)', 'Content-Type': 'application/pdf' },
            { link: 'https://safari.ethz.ch/projects_and_seminars/spring2023/lib/exe/fetch.php?media=pns_modern_ssds_spring2023_m8b_before_meeting.pdf', display_text: 'M8b: Pipelined and adaptive read-retry (PDF)', 'Content-Type': 'application/pdf' },
            { link: 'https://safari.ethz.ch/projects_and_seminars/spring2023/lib/exe/fetch.php?media=pns_modern_ssds_spring2023_m8c_before_meeting.pdf', display_text: 'M8c: Evanesco — data sanitization (PDF)', 'Content-Type': 'application/pdf' },
            { link: 'https://safari.ethz.ch/projects_and_seminars/spring2023/lib/exe/fetch.php?media=pns_modern_ssds_spring2023_m8d_before_meeting.pdf', display_text: 'M8d: DeepSketch — post-deduplication delta compression (PDF)', 'Content-Type': 'application/pdf' },
            { link: 'https://safari.ethz.ch/projects_and_seminars/spring2023/lib/exe/fetch.php?media=pns_modern_ssds_spring2023_9th_after_meeting.pdf', display_text: 'M9: FLIN — NVMe SSD fairness and performance (PDF)', 'Content-Type': 'application/pdf' },
            { link: 'https://safari.ethz.ch/projects_and_seminars/spring2023/lib/exe/fetch.php?media=pns_modern_ssds_spring2023_m10_before_meeting.pdf', display_text: 'M10: Flash memory and solid-state drives (PDF)', 'Content-Type': 'application/pdf' },
          ],
          'Editable slides': [
            { link: 'https://safari.ethz.ch/projects_and_seminars/spring2023/lib/exe/fetch.php?media=pns_modern_ssds_spring2023_1st_after_meeting.pptx', display_text: 'M0: Course introduction (PowerPoint)', 'Content-Type': 'application/vnd.openxmlformats-officedocument.presentationml.presentation' },
            { link: 'https://safari.ethz.ch/projects_and_seminars/spring2023/lib/exe/fetch.php?media=pns_modern_ssds_spring2023_2nd_before_meeting.pptx', display_text: 'M1: Basics of NAND flash-based SSDs (PowerPoint)', 'Content-Type': 'application/vnd.openxmlformats-officedocument.presentationml.presentation' },
            { link: 'https://safari.ethz.ch/projects_and_seminars/spring2023/lib/exe/fetch.php?media=pns_modern_ssds_spring2023_3rd_after_meeting.pptx', display_text: 'M2: NAND flash read/write operations (PowerPoint)', 'Content-Type': 'application/vnd.openxmlformats-officedocument.presentationml.presentation' },
            { link: 'https://safari.ethz.ch/projects_and_seminars/spring2023/lib/exe/fetch.php?media=pns_modern_ssds_spring2023_4th_after_meeting.pptx', display_text: 'M3: Advanced NAND flash commands and address translation (PowerPoint)', 'Content-Type': 'application/vnd.openxmlformats-officedocument.presentationml.presentation' },
            { link: 'https://safari.ethz.ch/projects_and_seminars/spring2023/lib/exe/fetch.php?media=flash_cosmos_pns_modern_ssd_21_apr_2023.pptx', display_text: 'M4: Flash-Cosmos — processing inside NAND flash (PowerPoint)', 'Content-Type': 'application/vnd.openxmlformats-officedocument.presentationml.presentation' },
            { link: 'https://safari.ethz.ch/projects_and_seminars/spring2023/lib/exe/fetch.php?media=genstore_pands-ssd-talk.pptx', display_text: 'M5: GenStore — processing inside storage (PowerPoint)', 'Content-Type': 'application/vnd.openxmlformats-officedocument.presentationml.presentation' },
            { link: 'https://safari.ethz.ch/projects_and_seminars/spring2023/lib/exe/fetch.php?media=pns_modern_ssds_spring2023_intro_to_mqsim.pptx', display_text: 'M6: Introduction to MQSim (PowerPoint)', 'Content-Type': 'application/vnd.openxmlformats-officedocument.presentationml.presentation' },
            { link: 'https://safari.ethz.ch/projects_and_seminars/spring2023/lib/exe/fetch.php?media=pns_modern_ssds_spring2023_8th_after_meeting.pptx', display_text: 'M7: Garbage collection (PowerPoint)', 'Content-Type': 'application/vnd.openxmlformats-officedocument.presentationml.presentation' },
            { link: 'https://safari.ethz.ch/projects_and_seminars/spring2023/lib/exe/fetch.php?media=pns_modern_ssds_spring2023_m8a_before_meeting.pptx', display_text: 'M8a: NAND flash basics and research overview (PowerPoint)', 'Content-Type': 'application/vnd.openxmlformats-officedocument.presentationml.presentation' },
            { link: 'https://safari.ethz.ch/projects_and_seminars/spring2023/lib/exe/fetch.php?media=pns_modern_ssds_spring2023_m8b_before_meeting.pptx', display_text: 'M8b: Pipelined and adaptive read-retry (PowerPoint)', 'Content-Type': 'application/vnd.openxmlformats-officedocument.presentationml.presentation' },
            { link: 'https://safari.ethz.ch/projects_and_seminars/spring2023/lib/exe/fetch.php?media=pns_modern_ssds_spring2023_m8c_before_meeting.pptx', display_text: 'M8c: Evanesco — data sanitization (PowerPoint)', 'Content-Type': 'application/vnd.openxmlformats-officedocument.presentationml.presentation' },
            { link: 'https://safari.ethz.ch/projects_and_seminars/spring2023/lib/exe/fetch.php?media=pns_modern_ssds_spring2023_m8d_before_meeting.pptx', display_text: 'M8d: DeepSketch — post-deduplication delta compression (PowerPoint)', 'Content-Type': 'application/vnd.openxmlformats-officedocument.presentationml.presentation' },
            { link: 'https://safari.ethz.ch/projects_and_seminars/spring2023/lib/exe/fetch.php?media=pns_modern_ssds_spring2023_9th_after_meeting.pptx', display_text: 'M9: FLIN — NVMe SSD fairness and performance (PowerPoint)', 'Content-Type': 'application/vnd.openxmlformats-officedocument.presentationml.presentation' },
            { link: 'https://safari.ethz.ch/projects_and_seminars/spring2023/lib/exe/fetch.php?media=pns_modern_ssds_spring2023_m10_before_meeting.pptx', display_text: 'M10: Flash memory and solid-state drives (PowerPoint)', 'Content-Type': 'application/vnd.openxmlformats-officedocument.presentationml.presentation' },
          ],
          'Project resources': [
            { link: 'https://github.com/CMU-SAFARI/MQSim', display_text: 'MQSim: official SSD simulator source and local build instructions', 'Content-Type': 'text/html', license: 'MIT' },
            { link: 'https://people.inf.ethz.ch/omutlu/pub/MQSim-SSD-simulation-framework_fast18.pdf', display_text: 'MQSim framework paper (FAST 2018, PDF)', 'Content-Type': 'application/pdf' },
            { link: 'https://safari.ethz.ch/projects_and_seminars/spring2023/doku.php?id=modern_ssds#learning_materials', display_text: 'Required and recommended reading', 'Content-Type': 'text/html' },
          ],
        },
      } satisfies CSL.Custom,
    } satisfies types_data.Material,
  },
  {
    id: [],
    material: {
      type: 'motion_picture',
      title: 'Understanding and Designing Modern NAND Flash-Based SSDs (Solid-State Drives)',
      genre: 'Lecture recordings',
      medium: 'Video',
      publisher: 'ETH Zürich',
      number: '227-0085-44L',
      issued: { 'date-parts': [ [ 2023 ] ] },
      version: 'Spring 2023',
      language: 'en',
      URL: 'https://www.youtube.com/playlist?list=PL5Q2soXY2Zi_8qOM5Icpp8hB2SHtm4z57',
      accessed: { 'date-parts': [ [ 2026, 10, 30 ] ] },
      custom: {
        URL: [
          { link: 'https://safari.ethz.ch/projects_and_seminars/spring2023/doku.php?id=modern_ssds#lecture_video_playlists_on_youtube', display_text: 'Official course page linking the recordings' },
        ],
        free_material: [
          { link: 'https://www.youtube.com/playlist?list=PL5Q2soXY2Zi_8qOM5Icpp8hB2SHtm4z57', display_text: 'Spring 2023 lecture recordings (YouTube playlist)', 'Content-Type': 'text/html' },
          { link: 'https://www.youtube.com/playlist?list=PL5Q2soXY2Zi9BJhenUq4JI5bwhAMpAp13', display_text: 'Fall 2022 lecture recordings (YouTube playlist)', 'Content-Type': 'text/html' },
        ],
      } satisfies CSL.Custom,
    } satisfies types_data.Material,
  },
] satisfies types_data.Entry[]
