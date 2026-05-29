import type { SidebarItem } from "@/types/starlight.ts";

export const Future_Trends = {
  label: '未来趋势',
  translations: {
    en: 'Future Trends',
  },
  items: [
    {
      label: '概述',
      translations: {
        en: 'Overview',
      },
      slug: 'future-trends',
    },
    {
      label: '我们面对什么？',
      translations: {
        en: 'What Are We Encountering?',
      },
      items: [
        {
          label: 'Token 费率不断下降不是理所当然',
          translations: {
            en: 'The Decline of Cost-per-Token Is Not Inevitable',
          },
          slug: '',
        },
        {
          label: '免费与廉价权益未必长久持续',
          translations: {
            en: 'Free and Budget Benefits Are Not Guaranteed to Last Long',
          },
          slug: '',
        },
        {
          label: '本行业的众多产品与服务的质量正不断下滑',
          translations: {
            en: 'The Quality of Various Products and Services in This Industry Is Declining',
          },
          slug: '',
        },
        {
          label: '无处不在的成本压力：从订阅制暴增与内存/硬盘价格暴涨说开去',
          translations: {
            en: 'Cost Pressure Everywhere: Talking from the Surges of Subscriptions and Memory/Disk Prices',
          },
          slug: '',
        },
        {
          label: '长期免费访问的幻觉：由多所高校禁止未登录访问培养方案/公开课想到的',
          translations: {
            en: 'The Illusion of Long-Term Free Access: Thoughts on the Prohibition of Access to Curricula/Open Courses of Multiple Universities Without Logins',
          },
          slug: '',
        },
        {
          label: '以 Web 开发与客户端开发为代表的知识与技能正成为常识',
          translations: {
            en: 'Knowledge and Skills Such as Web Development and Client Development Are Becoming Common Sense',
          },
          slug: '',
        },
      ],
    },
    {
      label: '我们该怎么做？',
      translations: {
        en: 'What Should We Do?',
      },
      items: [
        {
          label: '资源受限下的设计决策',
          translations: {
            en: 'Design Decisions under Resource Limits',
          },
          slug: '',
        },
        {
          label: '低代码/无代码的天花板',
          translations: {
            en: 'The Ceiling of Low-Code/No-Code',
          },
          slug: '',
        },
        {
          label: '图灵完备的信息检索',
          translations: {
            en: 'Turing-Complete Information Retrieval',
          },
          slug: '',
        },
        {
          label: '通解：计算机+',
          translations: {
            en: 'General Solution: Computer Science+',
          },
          slug: '',
        },
      ],
    },
  ],
} satisfies SidebarItem