import * as types_data from '@cs-first-aid/bibkit/types/data'
import * as CSL from '@cs-first-aid/bibkit/CSL'

export const entries = [
  {
    id: [],
    material: {
      type: 'document',
      title: 'Programming in Graphical Environment',
      author: [ { given: 'Paweł', family: 'Aszklar' } ],
      genre: 'Lecture slides, lab materials, and code examples',
      issued: { 'date-parts': [ [ 2026 ] ] },
      version: '2025/26',
      language: 'en',
      URL: 'https://pages.mini.pw.edu.pl/~aszklarp/archiwum/2025/pige.php?lang=en',
      accessed: { 'date-parts': [ [ 2026, 11, 1 ] ] },
      note: 'Win32 and WPF; includes HTML/CSS. WPF slides: 2017 PDF metadata; lab tutorial: April 2023.',
      custom: {
        institution: 'Politechnika Warszawska',
        free_material: {
          'Lecture slides': [
            { link: 'https://pages.mini.pw.edu.pl/~aszklarp/archiwum/2025/pige/Intro.pdf', display_text: 'Introduction (PDF)', 'Content-Type': 'application/pdf' },
            { link: 'https://pages.mini.pw.edu.pl/~aszklarp/archiwum/2025/pige/WinApi1.pdf', display_text: 'Windows API: Creating Windows (PDF)', 'Content-Type': 'application/pdf' },
            { link: 'https://pages.mini.pw.edu.pl/~aszklarp/archiwum/2025/pige/WinApi2.pdf', display_text: 'Windows API: Window Management, Messages (PDF)', 'Content-Type': 'application/pdf' },
            { link: 'https://pages.mini.pw.edu.pl/~aszklarp/archiwum/2025/pige/WinApi3.pdf', display_text: 'Windows API: Input Handling, Resources (PDF)', 'Content-Type': 'application/pdf' },
            { link: 'https://pages.mini.pw.edu.pl/~aszklarp/archiwum/2025/pige/WinApi4.pdf', display_text: 'Windows API: GDI (PDF)', 'Content-Type': 'application/pdf' },
            { link: 'https://pages.mini.pw.edu.pl/~aszklarp/archiwum/2025/pige/WinApi4_old.pdf', display_text: 'Windows API: Controls and Dialog Boxes (PDF)', 'Content-Type': 'application/pdf' },
            { link: 'https://pages.mini.pw.edu.pl/~aszklarp/archiwum/2025/pige/UIDesign.pptx', display_text: 'Graphic User Interface Design (PPTX)', 'Content-Type': 'application/vnd.openxmlformats-officedocument.presentationml.presentation' },
            { link: 'https://pages.mini.pw.edu.pl/~aszklarp/archiwum/2025/pige/HTML.pdf', display_text: 'HTML and CSS (PDF)', 'Content-Type': 'application/pdf' },
            { link: 'https://pages.mini.pw.edu.pl/~aszklarp/archiwum/2025/pige/WPF.pdf', display_text: 'WPF (PDF)', 'Content-Type': 'application/pdf' },
          ],
          'Lab materials': [
            { link: 'https://pages.mini.pw.edu.pl/~aszklarp/archiwum/2025/pige/WinApiTask.zip', display_text: 'Windows API tutorial task (ZIP)', 'Content-Type': 'application/zip' },
            { link: 'https://pages.mini.pw.edu.pl/~aszklarp/archiwum/2025/pige/UITask.pdf', display_text: 'UI/UX workshop task (PDF)', 'Content-Type': 'application/pdf' },
            { link: 'https://pages.mini.pw.edu.pl/~aszklarp/archiwum/2025/pige/WpfTutorial.pdf', display_text: 'WPF tutorial task (PDF)', 'Content-Type': 'application/pdf' },
            { link: 'https://pages.mini.pw.edu.pl/~aszklarp/archiwum/2025/pige/html_sample_task_en.zip', display_text: 'HTML/CSS sample task (ZIP)', 'Content-Type': 'application/zip' },
          ],
          'Code examples': [
            { link: 'https://pages.mini.pw.edu.pl/~aszklarp/archiwum/2025/pige/WinApi1Examples.zip', display_text: 'Windows API: Creating Windows examples (ZIP)', 'Content-Type': 'application/zip' },
            { link: 'https://pages.mini.pw.edu.pl/~aszklarp/archiwum/2025/pige/WinApi2Examples.zip', display_text: 'Windows API: Window Management, Messages examples (ZIP)', 'Content-Type': 'application/zip' },
            { link: 'https://pages.mini.pw.edu.pl/~aszklarp/archiwum/2025/pige/WinApi3Examples.zip', display_text: 'Windows API: GDI, Controls and Dialog Boxes examples (ZIP)', 'Content-Type': 'application/zip' },
            { link: 'https://pages.mini.pw.edu.pl/~aszklarp/archiwum/2025/pige/html_examples.zip', display_text: 'HTML/CSS examples (ZIP)', 'Content-Type': 'application/zip' },
            { link: 'https://pages.mini.pw.edu.pl/~aszklarp/archiwum/2025/pige/WPFDemo1.zip', display_text: 'WPF: XAML, Dependency Properties, Routed Events examples (ZIP)', 'Content-Type': 'application/zip' },
            { link: 'https://pages.mini.pw.edu.pl/~aszklarp/archiwum/2025/pige/WPFDemo2.zip', display_text: 'WPF: Resources, Data Binding, Data Templates examples (ZIP)', 'Content-Type': 'application/zip' },
            { link: 'https://pages.mini.pw.edu.pl/~aszklarp/archiwum/2025/pige/EmailClient.7z', display_text: 'GUI architecture patterns: Email Client example (7z)', 'Content-Type': 'application/x-7z-compressed' },
          ],
        },
      } satisfies CSL.Custom,
    } satisfies types_data.Material,
  },
] satisfies types_data.Entry[]
