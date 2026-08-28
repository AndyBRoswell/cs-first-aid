import pino from 'pino'
import node_fs from 'node:fs'
import node_path from 'node:path'
import * as cssesc from 'cssesc'
import * as node_HTML_parser from 'node-html-parser'

export const pino_arg: pino.LoggerOptions = {
  level: process.env["log_level"] || 'info',
  transport: {
    target: 'pino-pretty',
    options: {
      colorize: true,
      translateTime: 'SYS:standard', // 🕒 Formats time as YYYY-MM-DD HH:MM:SS
      ignore: 'pid,hostname', // 🧹 Removes unnecessary machine data from console
      singleLine: true, // 📏 Prints objects on a single line instead of multi-line
      messageFormat: '{msg}', // ✏️ Custom message template
    }
  }
}

// Climb up directories to locate the project root automatically
let dir_root = import.meta.dirname
while (!node_fs.existsSync(node_path.join(dir_root, 'package.json'))) {
  const parent = node_path.dirname(dir_root)
  if (parent === dir_root) break // Reached filesystem root
  dir_root = parent
}
export const project_root = dir_root
export const source_root = node_path.resolve(project_root, 'src')

export const cssesc_options: Readonly<Partial<cssesc.Options>> = { quotes: 'double', }

export const linesep = /\r\n?|\n/
export const linesep_stripper = /[\r\n]+/

/** Creates a text node whose input is serialized as plain text rather than interpreted as HTML. */
export function create_HTML_text_node(text: string): node_HTML_parser.TextNode {
  const node = new node_HTML_parser.TextNode('')
  node.textContent = text
  return node
}

/** Creates an HTML element without parsing an HTML fragment. When provided, `text` is serialized as plain text. */
export function create_HTML_element(tag_name: string, attributes: Record<string, string> = {}, text?: string): node_HTML_parser.HTMLElement {
  const element = new node_HTML_parser.HTMLElement(tag_name, {}, '')
  element.setAttributes(attributes)
  if (text !== undefined) { element.appendChild(create_HTML_text_node(text)) }
  return element
}

export const supported_locales: Intl.UnicodeBCP47LocaleIdentifier[] = [ 'en-US' ]
export const collator = new Map<string, Intl.Collator>()
function get_collator(locale: string): Intl.Collator {
  let current = collator.get(locale)
  if (current === undefined) {
    current = new Intl.Collator(locale, { usage: 'search', sensitivity: 'accent' })
    collator.set(locale, current)
  }
  return current
}
for (const locale of supported_locales) { get_collator(locale) }
export const default_locale: Intl.UnicodeBCP47LocaleIdentifier = 'en-US'
export const default_collator = collator.get(default_locale)!

export function ieq(a: string, b: string, locale: string = default_locale): boolean { return get_collator(locale).compare(a, b) === 0 }
