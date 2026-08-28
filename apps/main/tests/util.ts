import node_path from 'node:path'
import type { SidebarItem } from '@/types/starlight.ts'

export const project_root = node_path.resolve(import.meta.dirname, '..')
export const source_root = node_path.resolve(project_root, 'src')
export const test_root = node_path.resolve(project_root, 'tests')
export const test_server = process.env.test_server || 'http://localhost:4321'

export function get_sidebar_slug_items(items: readonly SidebarItem[]) {
  return flatten_sidebar_items(items).filter(is_sidebar_slug_item)
}

function flatten_sidebar_items(items: readonly SidebarItem[]): SidebarItem[] {
  return items.flatMap(item => [ item, ...(is_sidebar_group_item(item) ? flatten_sidebar_items(item.items) : []) ])
}

function is_sidebar_group_item(item: SidebarItem): item is Extract<SidebarItem, { items: unknown[] }> {
  return typeof item === 'object' && item !== null && 'items' in item
}

function is_sidebar_slug_item(item: SidebarItem): item is Extract<SidebarItem, { slug: string }> {
  return typeof item === 'object' && item !== null && 'slug' in item
}
