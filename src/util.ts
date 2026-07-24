import pino from 'pino'
import node_path from 'node:path'
import * as cssesc from 'cssesc'

export const pino_arg: pino.LoggerOptions = {
  level: process.env.log_level || 'info',
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

export const project_root = node_path.resolve(import.meta.dirname, '../../..') // exit from dist/.prerender

export const cssesc_options: Readonly<Partial<cssesc.Options>> = { quotes: 'double', }

export const linesep = /\r\n?|\n/
export const linesep_stripper = /[\r\n]+/

export const supported_locales = [ 'en-US' ]
export const collator = new Map<string, Intl.Collator>()
for (const locale of supported_locales) { collator.set(locale, new Intl.Collator(locale)) }
export const default_collator = collator.get('en-US')!