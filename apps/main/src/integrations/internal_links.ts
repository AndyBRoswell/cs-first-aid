import type { AstroIntegration } from 'astro'
import { isUnifiedProcessor, type RehypePlugin } from '@astrojs/markdown-remark'
import type {} from 'mdast-util-mdx-jsx' // Extend HAST with MDX JSX node types.
import { visit } from 'unist-util-visit'

export function with_base(href: string, base: string): string {
  const prefix = base.replace(/\/+$/, '')
  if (!prefix || !href.startsWith('/') || href.startsWith('//')) { return href }
  if (href.startsWith(prefix) && [undefined, '/', '?', '#'].includes(href[prefix.length])) { return href }
  return prefix + href
}

export const rehype_base_links = (({ base }: { base: string }) => {
  return tree => {
    visit(tree, node => {
      if (node.type === 'element' && node.tagName === 'a' && typeof node.properties.href === 'string') {
        node.properties.href = with_base(node.properties.href, base)
      }
      if (node.type === 'mdxJsxFlowElement' || node.type === 'mdxJsxTextElement') { // MDX keeps JSX attributes outside normal HAST element properties.
        for (const attribute of node.attributes) {
          if (attribute.type === 'mdxJsxAttribute' && attribute.name === 'href' && typeof attribute.value === 'string') {
            attribute.value = with_base(attribute.value, base)
          }
        }
      }
    })
  }
}) satisfies OmitThisParameter<RehypePlugin>

export default function internal_links(): AstroIntegration {
  return {
    name: 'cs-first-aid/internal-links',
    hooks: {
      'astro:config:setup': ({ config }) => {
        const processor = config.markdown.processor
        if (!isUnifiedProcessor(processor)) { throw new Error('Internal links require unified Markdown processor.') }
        processor.options.rehypePlugins.push([rehype_base_links, { base: config.base }])
      },
    },
  }
}
