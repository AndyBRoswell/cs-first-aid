import type { SidebarItem } from '@/types/starlight.ts'
import * as release_stages from '../release_stages.ts'

export const Derivations = {
  label: '推导',
  translations: {
    en: 'Derivations',
  },
  items: [
    {
      label: '坐标系',
      translations: {
        en: 'Coordinate Systems',
      },
      slug: 'derivations/coordinate-systems',
      attrs: {
        'data-release-stage': release_stages.to_HTML_attr({ 'zh-CN': '2026.1.0-dev', en: 'blank', })
      },
    },
  ],
} satisfies SidebarItem
