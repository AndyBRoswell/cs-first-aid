import type { SidebarItem } from "@/types/starlight.ts";
import * as release_stages from '../release_stages.ts'

export const Recommended_Reading_Materials = {
  label: '推荐读物',
  translations: {
    en: 'Recommended Reading Materials',
  },
  slug: '',
  attrs: {
    'data-release-stage': release_stages.to_HTML_attr({ 'zh-CN': 'blank', en: 'blank', })
  },
} satisfies SidebarItem
