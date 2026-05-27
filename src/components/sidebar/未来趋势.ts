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
          label: '假定 Token 费率不断下降是极其危险的',
          translations: {
            en: 'Assuming a Continuously Decreasing Cost-per-Token Is Immensely Dangerous',
          },
          slug: '',
        },
        {
          label: '不要指望免费与低价权益的长期性',
          translations: {
            en: `Don't Expect the Long-Term Availability of Free and Low-Cost Benefits`,
          },
          slug: '',
        },
        {
          label: '本行业的产品与服务质量将不断下滑',
          translations: {
            en: 'The Quality of Products and Services in This Industry Is Going to Be Worse and Worse',
          },
          slug: '',
        },
        {
          label: '厂商们：闭嘴，拿钱来！',
          translations: {
            en: 'Vendors: Shut up and bring your money!',
          },
          slug: '',
        },
        {
          label: '凭什么认为数据会继续免费分享给你？',
          translations: {
            en: 'Why Do You Think Data Will Continue to Be Shared with You for Free?',
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
            en: 'Design Decisions under the Constraints of Resources',
          },
          slug: '',
        },
        {
          label: '低代码/无代码是死路',
          translations: {
            en: 'Low-Code/No-Code Are Dead Paths',
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