import type { SidebarItem } from "@/types/starlight.ts";
import * as badges from '../badges.ts'

export const Courses_Textbooks_and_References = {
  label: '课程、教科书与参考资料',
  translations: {
    en: 'Courses, Textbooks and References',
  },
  items: [
    {
      label: '概览',
      translations: {
        en: 'Overview',
      },
      slug: 'courses-textbooks-and-references',
      attrs: {
        'data-badges': badges.to_HTML_attr([
          {
            text: {
              'zh-CN': 'dev',
              en: 'blank',
            },
            class: [ 'release', ],
          },
        ])
      },
    },
    {
      label: '微积分',
      translations: {
        en: 'Calculus',
      },
      slug: 'courses-textbooks-and-references/calculus',
      attrs: {
        'data-badges': badges.to_HTML_attr([
          {
            text: {
              'zh-CN': 'dev',
              en: 'blank',
            },
            class: [ 'release', ],
          },
          {
            text: {
              'zh-CN': '数学',
              en: 'Math',
            },
            class: [ 'subject', ],
          },
        ])
      },
    },
    {
      label: '数学分析',
      translations: {
        en: 'Mathematical Analysis',
      },
      slug: 'courses-textbooks-and-references/mathematical-analysis',
      attrs: {
        'data-badges': badges.to_HTML_attr([
          {
            text: {
              'zh-CN': 'dev',
              en: 'blank',
            },
            class: [ 'release', ],
          },
          {
            text: {
              'zh-CN': '数学',
              en: 'Math',
            },
            class: [ 'subject', ],
          },
        ])
      },
    },
    {
      label: '线性代数',
      translations: {
        en: 'Linear Algebra',
      },
      items: [
        {
          label: '概述',
          translations: {
            en: 'Overview',
          },
          slug: 'courses-textbooks-and-references/linear-algebra',
          attrs: {
            'data-badges': badges.to_HTML_attr([
              {
                text: {
                  'zh-CN': 'blank',
                  en: 'blank',
                },
                class: [ 'release', ],
              },
            ])
          },
        },
        {
          label: '线性代数 I',
          translations: {
            en: 'Linear Algebra I',
          },
          slug: 'courses-textbooks-and-references/linear-algebra/i',
          attrs: {
            'data-badges': badges.to_HTML_attr([
              {
                text: {
                  'zh-CN': 'dev',
                  en: 'blank',
                },
                class: [ 'release', ],
              },
              {
                text: {
                  'zh-CN': '数学',
                  en: 'Math',
                },
                class: [ 'subject', ],
              },
            ])
          },
        },
        {
          label: '线性代数 II',
          translations: {
            en: 'Linear Algebra II',
          },
          slug: 'courses-textbooks-and-references/linear-algebra/ii',
          attrs: {
            'data-badges': badges.to_HTML_attr([
              {
                text: {
                  'zh-CN': 'dev',
                  en: 'blank',
                },
                class: [ 'release', ],
              },
              {
                text: {
                  'zh-CN': '数学',
                  en: 'Math',
                },
                class: [ 'subject', ],
              },
            ])
          },
        },
      ],
    },
    {
      label: '随机数学',
      translations: {
        en: 'Stochastic Mathematics',
      },
      items: [
        {
          label: '概述',
          translations: {
            en: 'Overview',
          },
          slug: '',
          attrs: {
            'data-badges': badges.to_HTML_attr([
              {
                text: {
                  'zh-CN': 'blank',
                  en: 'blank',
                },
                class: [ 'release', ],
              },
            ])
          },
        },
        {
          label: '概率论',
          translations: {
            en: 'Probability Theory',
          },
          slug: '',
          attrs: {
            'data-badges': badges.to_HTML_attr([
              {
                text: {
                  'zh-CN': 'blank',
                  en: 'blank',
                },
                class: [ 'release', ],
              },
            ])
          },
        },
        {
          label: '数理统计',
          translations: {
            en: 'Mathematical Statistics',
          },
          slug: '',
          attrs: {
            'data-badges': badges.to_HTML_attr([
              {
                text: {
                  'zh-CN': 'blank',
                  en: 'blank',
                },
                class: [ 'release', ],
              },
            ])
          },
        },
        {
          label: '随机过程',
          translations: {
            en: 'Stochastic Processes',
          },
          slug: '',
          attrs: {
            'data-badges': badges.to_HTML_attr([
              {
                text: {
                  'zh-CN': 'blank',
                  en: 'blank',
                },
                class: [ 'release', ],
              },
            ])
          },
        },
      ],
    },
    {
      label: '离散数学',
      translations: {
        en: 'Discrete Mathematics',
      },
      items: [
        {
          label: '概述',
          translations: {
            en: 'Overview',
          },
          slug: 'courses-textbooks-and-references/discrete-mathematics',
          attrs: {
            'data-badges': badges.to_HTML_attr([
              {
                text: {
                  'zh-CN': 'blank',
                  en: 'blank',
                },
                class: [ 'release', ],
              },
            ])
          },
        },
        {
          label: '数理逻辑',
          translations: {
            en: 'Mathematical Logic',
          },
          slug: 'courses-textbooks-and-references/discrete-mathematics/mathematical-logic',
          attrs: {
            'data-badges': badges.to_HTML_attr([
              {
                text: {
                  'zh-CN': 'dev',
                  en: 'blank',
                },
                class: [ 'release', ],
              },
              {
                text: {
                  'zh-CN': '数学',
                  en: 'Math',
                },
                class: [ 'subject', ],
              },
            ])
          },
        },
        {
          label: '集合论',
          translations: {
            en: 'Set Theory',
          },
          slug: 'courses-textbooks-and-references/discrete-mathematics/set-theory',
          attrs: {
            'data-badges': badges.to_HTML_attr([
              {
                text: {
                  'zh-CN': 'dev',
                  en: 'blank',
                },
                class: [ 'release', ],
              },
              {
                text: {
                  'zh-CN': '数学',
                  en: 'Math',
                },
                class: [ 'subject', ],
              },
            ])
          },
        },
        {
          label: '图论',
          translations: {
            en: 'Graph Theory',
          },
          slug: 'courses-textbooks-and-references/discrete-mathematics/graph-theory',
          attrs: {
            'data-badges': badges.to_HTML_attr([
              {
                text: {
                  'zh-CN': 'dev',
                  en: 'blank',
                },
                class: [ 'release', ],
              },
              {
                text: {
                  'zh-CN': '数学',
                  en: 'Math',
                },
                class: [ 'subject', ],
              },
            ])
          },
        },
        {
          label: '抽象代数',
          translations: {
            en: 'Abstract Algebra',
          },
          slug: 'courses-textbooks-and-references/discrete-mathematics/abstract-algebra',
          attrs: {
            'data-badges': badges.to_HTML_attr([
              {
                text: {
                  'zh-CN': 'dev',
                  en: 'blank',
                },
                class: [ 'release', ],
              },
              {
                text: {
                  'zh-CN': '数学',
                  en: 'Math',
                },
                class: [ 'subject', ],
              },
            ])
          },
        },
        {
          label: '组合数学',
          translations: {
            en: 'Combinatorics',
          },
          slug: 'courses-textbooks-and-references/discrete-mathematics/combinatorics',
          attrs: {
            'data-badges': badges.to_HTML_attr([
              {
                text: {
                  'zh-CN': 'dev',
                  en: 'blank',
                },
                class: [ 'release', ],
              },
              {
                text: {
                  'zh-CN': '数学',
                  en: 'Math',
                },
                class: [ 'subject', ],
              },
            ])
          },
        },
        {
          label: '数论',
          translations: {
            en: 'Number Theory',
          },
          slug: 'courses-textbooks-and-references/discrete-mathematics/number-theory',
          attrs: {
            'data-badges': badges.to_HTML_attr([
              {
                text: {
                  'zh-CN': 'dev',
                  en: 'blank',
                },
                class: [ 'release', ],
              },
              {
                text: {
                  'zh-CN': '数学',
                  en: 'Math',
                },
                class: [ 'subject', ],
              },
            ])
          },
        },
      ],
    },
    {
      label: '复变函数',
      translations: {
        en: 'Complex Analysis',
      },
      slug: '',
      attrs: {
        'data-badges': badges.to_HTML_attr([
          {
            text: {
              'zh-CN': 'blank',
              en: 'blank',
            },
            class: [ 'release', ],
          },
        ])
      },
    },
    {
      label: '常微分方程',
      translations: {
        en: 'Ordinary Differential Equations',
      },
      slug: '',
      attrs: {
        'data-badges': badges.to_HTML_attr([
          {
            text: {
              'zh-CN': 'blank',
              en: 'blank',
            },
            class: [ 'release', ],
          },
        ])
      },
    },
    {
      label: '偏微分方程',
      translations: {
        en: 'Partial Differential Equations',
      },
      slug: '',
      attrs: {
        'data-badges': badges.to_HTML_attr([
          {
            text: {
              'zh-CN': 'blank',
              en: 'blank',
            },
            class: [ 'release', ],
          },
        ])
      },
    },
    {
      label: '数值方法',
      translations: {
        en: 'Numerical Methods',
      },
      slug: '',
      attrs: {
        'data-badges': badges.to_HTML_attr([
          {
            text: {
              'zh-CN': 'blank',
              en: 'blank',
            },
            class: [ 'release', ],
          },
        ])
      },
    },
    {
      label: 'C++ 程序设计',
      translations: {
        en: 'C++ Programming',
      },
      items: [
        {
          label: '概述',
          translations: {
            en: 'Overview',
          },
          slug: 'courses-textbooks-and-references/cpp-programming',
          attrs: {
            'data-badges': badges.to_HTML_attr([
              {
                text: {
                  'zh-CN': 'blank',
                  en: 'blank',
                },
                class: [ 'release', ],
              },
            ])
          },
        },
        {
          label: '程序设计入门（C++ 程序设计 I）',
          translations: {
            en: 'Introduction to Programming (C++ Programming I)',
          },
          slug: 'courses-textbooks-and-references/cpp-programming/i',
          attrs: {
            'data-badges': badges.to_HTML_attr([
              {
                text: {
                  'zh-CN': 'dev',
                  en: 'blank',
                },
                class: [ 'release', ],
              },
              {
                text: {
                  'zh-CN': '计算机',
                  en: 'CS',
                },
                class: [ 'subject', ],
              },
            ])
          },
        },
      ],
    },
    {
      label: '软件测试',
      translations: {
        en: 'Software Testing',
      },
      slug: '',
      attrs: {
        'data-badges': badges.to_HTML_attr([
          {
            text: {
              'zh-CN': 'blank',
              en: 'blank',
            },
            class: [ 'release', ],
          },
        ])
      },
    },
    {
      label: 'Web 开发',
      translations: {
        en: 'Web Development',
      },
      slug: '',
      attrs: {
        'data-badges': badges.to_HTML_attr([
          {
            text: {
              'zh-CN': 'blank',
              en: 'blank',
            },
            class: [ 'release', ],
          },
        ])
      },
    },
    {
      label: '数据结构',
      translations: {
        en: 'Data Structures',
      },
      slug: '',
      attrs: {
        'data-badges': badges.to_HTML_attr([
          {
            text: {
              'zh-CN': 'blank',
              en: 'blank',
            },
            class: [ 'release', ],
          },
        ])
      },
    },
    {
      label: '操作系统',
      translations: {
        en: 'Operating Systems',
      },
      slug: '',
      attrs: {
        'data-badges': badges.to_HTML_attr([
          {
            text: {
              'zh-CN': 'blank',
              en: 'blank',
            },
            class: [ 'release', ],
          },
        ])
      },
    },
    {
      label: '计算机组成原理',
      translations: {
        en: 'Computer Organization',
      },
      slug: '',
      attrs: {
        'data-badges': badges.to_HTML_attr([
          {
            text: {
              'zh-CN': 'blank',
              en: 'blank',
            },
            class: [ 'release', ],
          },
        ])
      },
    },
    {
      label: '数据库',
      translations: {
        en: 'Databases',
      },
      slug: '',
      attrs: {
        'data-badges': badges.to_HTML_attr([
          {
            text: {
              'zh-CN': 'blank',
              en: 'blank',
            },
            class: [ 'release', ],
          },
        ])
      },
    },
    {
      label: '安全编程',
      translations: {
        en: 'Secure Programming',
      },
      slug: '',
      attrs: {
        'data-badges': badges.to_HTML_attr([
          {
            text: {
              'zh-CN': 'blank',
              en: 'blank',
            },
            class: [ 'release', ],
          },
        ])
      },
    },
    {
      label: '计算机网络',
      translations: {
        en: 'Computer Networks',
      },
      slug: '',
      attrs: {
        'data-badges': badges.to_HTML_attr([
          {
            text: {
              'zh-CN': 'blank',
              en: 'blank',
            },
            class: [ 'release', ],
          },
        ])
      },
    },
    {
      label: '软件容器化',
      translations: {
        en: 'Software Containerization'
      },
      slug: '',
      attrs: {
        'data-badges': badges.to_HTML_attr([
          {
            text: {
              'zh-CN': 'blank',
              en: 'blank',
            },
            class: [ 'release', ],
          },
        ])
      },
    },
    {
      label: '形式语言与自动机',
      translations: {
        en: 'Formal Languages and Automata',
      },
      slug: '',
      attrs: {
        'data-badges': badges.to_HTML_attr([
          {
            text: {
              'zh-CN': 'blank',
              en: 'blank',
            },
            class: [ 'release', ],
          },
        ])
      },
    },
    {
      label: '编译原理',
      translations: {
        en: 'Compiler Design',
      },
      slug: '',
      attrs: {
        'data-badges': badges.to_HTML_attr([
          {
            text: {
              'zh-CN': 'blank',
              en: 'blank',
            },
            class: [ 'release', ],
          },
        ])
      },
    },
    {
      label: '电路分析',
      translations: {
        en: 'Circuit Analysis',
      },
      slug: '',
      attrs: {
        'data-badges': badges.to_HTML_attr([
          {
            text: {
              'zh-CN': 'blank',
              en: 'blank',
            },
            class: [ 'release', ],
          },
        ])
      },
    },
    {
      label: '模拟电路',
      translations: {
        en: 'Analog Circuits',
      },
      slug: '',
      attrs: {
        'data-badges': badges.to_HTML_attr([
          {
            text: {
              'zh-CN': 'blank',
              en: 'blank',
            },
            class: [ 'release', ],
          },
        ])
      },
    },
    {
      label: '数字电路',
      translations: {
        en: 'Digital Circuits',
      },
      slug: '',
      attrs: {
        'data-badges': badges.to_HTML_attr([
          {
            text: {
              'zh-CN': 'blank',
              en: 'blank',
            },
            class: [ 'release', ],
          },
        ])
      },
    },
    {
      label: '信号与系统',
      translations: {
        en: 'Signals and Systems',
      },
      slug: '',
      attrs: {
        'data-badges': badges.to_HTML_attr([
          {
            text: {
              'zh-CN': 'blank',
              en: 'blank',
            },
            class: [ 'release', ],
          },
        ])
      },
    },
    {
      label: '电磁场与电磁波',
      translations: {
        en: 'Electromagnetics',
      },
      slug: '',
      attrs: {
        'data-badges': badges.to_HTML_attr([
          {
            text: {
              'zh-CN': 'blank',
              en: 'blank',
            },
            class: [ 'release', ],
          },
        ])
      },
    },
    {
      label: '自动控制原理',
      translations: {
        en: 'Control Systems',
      },
      slug: '',
      attrs: {
        'data-badges': badges.to_HTML_attr([
          {
            text: {
              'zh-CN': 'blank',
              en: 'blank',
            },
            class: [ 'release', ],
          },
        ])
      },
    },
    {
      label: '数字信号处理',
      translations: {
        en: 'Digital Signal Processing',
      },
      slug: '',
      attrs: {
        'data-badges': badges.to_HTML_attr([
          {
            text: {
              'zh-CN': 'blank',
              en: 'blank',
            },
            class: [ 'release', ],
          },
        ])
      },
    },
    {
      label: '电力系统分析',
      translations: {
        en: 'Power System Analysis',
      },
      slug: '',
      attrs: {
        'data-badges': badges.to_HTML_attr([
          {
            text: {
              'zh-CN': 'blank',
              en: 'blank',
            },
            class: [ 'release', ],
          },
        ])
      },
    },
    {
      label: '电力电子技术',
      translations: {
        en: 'Power Electronics',
      },
      slug: '',
      attrs: {
        'data-badges': badges.to_HTML_attr([
          {
            text: {
              'zh-CN': 'blank',
              en: 'blank',
            },
            class: [ 'release', ],
          },
        ])
      },
    },
    {
      label: '电机学',
      translations: {
        en: 'Electromechanics',
      },
      slug: '',
      attrs: {
        'data-badges': badges.to_HTML_attr([
          {
            text: {
              'zh-CN': 'blank',
              en: 'blank',
            },
            class: [ 'release', ],
          },
        ])
      },
    },
    {
      label: '设计模式',
      translations: {
        en: 'Design Patterns',
      },
      slug: '',
      attrs: {
        'data-badges': badges.to_HTML_attr([
          {
            text: {
              'zh-CN': 'blank',
              en: 'blank',
            },
            class: [ 'release', ],
          },
        ])
      },
    },
    {
      label: '计算机体系结构',
      translations: {
        en: 'Computer Architecture',
      },
      slug: '',
      attrs: {
        'data-badges': badges.to_HTML_attr([
          {
            text: {
              'zh-CN': 'blank',
              en: 'blank',
            },
            class: [ 'release', ],
          },
        ])
      },
    },
    {
      label: '算法分析与设计',
      translations: {
        en: 'Algorithm Analysis and Design',
      },
      slug: '',
      attrs: {
        'data-badges': badges.to_HTML_attr([
          {
            text: {
              'zh-CN': 'blank',
              en: 'blank',
            },
            class: [ 'release', ],
          },
        ])
      },
    },
    {
      label: '分布式系统',
      translations: {
        en: 'Distributed Systems',
      },
      slug: '',
      attrs: {
        'data-badges': badges.to_HTML_attr([
          {
            text: {
              'zh-CN': 'blank',
              en: 'blank',
            },
            class: [ 'release', ],
          },
        ])
      },
    },
    {
      label: '并行与分布式计算',
      translations: {
        en: 'Parallel and Distributed Computing',
      },
      slug: '',
      attrs: {
        'data-badges': badges.to_HTML_attr([
          {
            text: {
              'zh-CN': 'blank',
              en: 'blank',
            },
            class: [ 'release', ],
          },
        ])
      },
    },
    {
      label: '现代通信',
      translations: {
        en: 'Communications',
      },
      slug: '',
      attrs: {
        'data-badges': badges.to_HTML_attr([
          {
            text: {
              'zh-CN': 'blank',
              en: 'blank',
            },
            class: [ 'release', ],
          },
        ])
      },
    },
    {
      label: '数字图像处理',
      translations: {
        en: 'Digital Image Processing',
      },
      slug: '',
      attrs: {
        'data-badges': badges.to_HTML_attr([
          {
            text: {
              'zh-CN': 'blank',
              en: 'blank',
            },
            class: [ 'release', ],
          },
        ])
      },
    },
    {
      label: '计算机视觉',
      translations: {
        en: 'Computer Vision',
      },
      slug: '',
      attrs: {
        'data-badges': badges.to_HTML_attr([
          {
            text: {
              'zh-CN': 'blank',
              en: 'blank',
            },
            class: [ 'release', ],
          },
        ])
      },
    },
    {
      label: '自然语言处理',
      translations: {
        en: 'Natural Language Processing',
      },
      slug: '',
      attrs: {
        'data-badges': badges.to_HTML_attr([
          {
            text: {
              'zh-CN': 'blank',
              en: 'blank',
            },
            class: [ 'release', ],
          },
        ])
      },
    },
    {
      label: '计算机图形学',
      translations: {
        en: 'Computer Graphics',
      },
      slug: '',
      attrs: {
        'data-badges': badges.to_HTML_attr([
          {
            text: {
              'zh-CN': 'blank',
              en: 'blank',
            },
            class: [ 'release', ],
          },
        ])
      },
    },
    {
      label: '机器学习',
      translations: {
        en: 'Machine Learning',
      },
      slug: '',
      attrs: {
        'data-badges': badges.to_HTML_attr([
          {
            text: {
              'zh-CN': 'blank',
              en: 'blank',
            },
            class: [ 'release', ],
          },
        ])
      },
    },
    {
      label: '编码理论',
      translations: {
        en: 'Coding Theory',
      },
      slug: '',
      attrs: {
        'data-badges': badges.to_HTML_attr([
          {
            text: {
              'zh-CN': 'blank',
              en: 'blank',
            },
            class: [ 'release', ],
          },
        ])
      },
    },
    {
      label: '密码学',
      translations: {
        en: 'Cryptography',
      },
      slug: '',
      attrs: {
        'data-badges': badges.to_HTML_attr([
          {
            text: {
              'zh-CN': 'blank',
              en: 'blank',
            },
            class: [ 'release', ],
          },
        ])
      },
    },
    {
      label: '软件安全',
      translations: {
        en: 'Software Security',
      },
      slug: '',
      attrs: {
        'data-badges': badges.to_HTML_attr([
          {
            text: {
              'zh-CN': 'blank',
              en: 'blank',
            },
            class: [ 'release', ],
          },
        ])
      },
    },
    {
      label: 'C 语言程序设计',
      translations: {
        en: 'C Programming Language',
      },
      slug: 'courses-textbooks-and-references/c-programming',
      attrs: {
        'data-badges': badges.to_HTML_attr([
          {
            text: {
              'zh-CN': 'dev',
              en: 'blank',
            },
            class: [ 'release', ],
          },
          {
            text: {
              'zh-CN': '计算机',
              en: 'CS',
            },
            class: [ 'subject', ],
          },
        ])
      },
    },
    {
      label: 'C# 程序设计',
      translations: {
        en: 'C# Programming Language',
      },
      slug: 'courses-textbooks-and-references/csharp-programming',
      attrs: {
        'data-badges': badges.to_HTML_attr([
          {
            text: {
              'zh-CN': 'dev',
              en: 'blank',
            },
            class: [ 'release', ],
          },
          {
            text: {
              'zh-CN': '计算机',
              en: 'CS',
            },
            class: [ 'subject', ],
          },
        ])
      },
    },
    {
      label: 'Java 程序设计',
      translations: {
        en: 'Java Programming Language',
      },
      slug: 'courses-textbooks-and-references/java-programming',
      attrs: {
        'data-badges': badges.to_HTML_attr([
          {
            text: {
              'zh-CN': 'dev',
              en: 'blank',
            },
            class: [ 'release', ],
          },
          {
            text: {
              'zh-CN': '计算机',
              en: 'CS',
            },
            class: [ 'subject', ],
          },
        ])
      },
    },
    {
      label: 'Kotlin 程序设计',
      translations: {
        en: 'Kotlin Programming Language',
      },
      slug: '',
      attrs: {
        'data-badges': badges.to_HTML_attr([
          {
            text: {
              'zh-CN': 'blank',
              en: 'blank',
            },
            class: [ 'release', ],
          },
        ])
      },
    },
    {
      label: 'Python 程序设计',
      translations: {
        en: 'Python Programming Language',
      },
      slug: 'courses-textbooks-and-references/python-programming',
      attrs: {
        'data-badges': badges.to_HTML_attr([
          {
            text: {
              'zh-CN': 'dev',
              en: 'blank',
            },
            class: [ 'release', ],
          },
          {
            text: {
              'zh-CN': '计算机',
              en: 'CS',
            },
            class: [ 'subject', ],
          },
        ])
      },
    },
    {
      label: 'Android 开发',
      translations: {
        en: 'Android Development',
      },
      slug: '',
      attrs: {
        'data-badges': badges.to_HTML_attr([
          {
            text: {
              'zh-CN': 'blank',
              en: 'blank',
            },
            class: [ 'release', ],
          },
        ])
      },
    },
  ],
} satisfies SidebarItem