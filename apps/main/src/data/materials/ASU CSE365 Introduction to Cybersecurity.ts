import * as types_data from '@cs-first-aid/bibkit/types/data'
import * as CSL from '@cs-first-aid/bibkit/CSL'

export const entries = [
  {
    id: [],
    material: {
      type: 'document',
      title: 'Web Security',
      'collection-title': 'CSE 365: Introduction to Cybersecurity',
      number: 'CSE 365',
      publisher: 'Arizona State University',
      genre: 'Course module and challenges',
      issued: { 'date-parts': [ [ 2026 ] ], season: 3 },
      version: 'Fall 2026',
      language: 'en',
      URL: 'https://pwn.college/cse365-f2026/module-3/',
      accessed: { 'date-parts': [ [ 2026, 10, 31 ] ] },
      note: '路径遍历、命令注入、认证绕过、SQL 注入、XSS 与 CSRF；包含漏洞代码说明与渐进式实验。',
      custom: {
        URL: [ { link: 'https://pwn.college/cse365-f2026/', display_text: 'Fall 2026', 'Content-Type': 'text/html' } ],
      } satisfies CSL.Custom,
    } satisfies types_data.Material,
  },
  {
    id: [],
    material: {
      type: 'document',
      title: 'Reverse Engineering',
      'collection-title': 'CSE 365: Introduction to Cybersecurity',
      number: 'CSE 365',
      publisher: 'Arizona State University',
      genre: 'Course module and challenges',
      issued: { 'date-parts': [ [ 2026 ] ], season: 3 },
      version: 'Fall 2026',
      language: 'en',
      URL: 'https://pwn.college/cse365-f2026/module-5/',
      accessed: { 'date-parts': [ [ 2026, 10, 31 ] ] },
      note: '围绕 cIMG 文件格式，练习程序理解、内部状态分析、指令与资源处理及程序修改。',
      custom: {
        URL: [ { link: 'https://pwn.college/cse365-f2026/', display_text: 'Fall 2026', 'Content-Type': 'text/html' } ],
      } satisfies CSL.Custom,
    } satisfies types_data.Material,
  },
  {
    id: [],
    material: {
      type: 'document',
      title: 'Binary Exploitation',
      'collection-title': 'CSE 365: Introduction to Cybersecurity',
      number: 'CSE 365',
      publisher: 'Arizona State University',
      genre: 'Course module and challenges',
      issued: { 'date-parts': [ [ 2026 ] ], season: 3 },
      version: 'Fall 2026',
      language: 'en',
      URL: 'https://pwn.college/cse365-f2026/module-6/',
      accessed: { 'date-parts': [ [ 2026, 10, 31 ] ] },
      note: '二进制漏洞利用入门；通过内存破坏与控制流劫持实验理解程序中的安全错误。',
      custom: {
        URL: [ { link: 'https://pwn.college/cse365-f2026/', display_text: 'Fall 2026', 'Content-Type': 'text/html' } ],
      } satisfies CSL.Custom,
    } satisfies types_data.Material,
  },
] satisfies types_data.Entry[]
