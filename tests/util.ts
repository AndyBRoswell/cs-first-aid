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

export const project_root = node_path.resolve(import.meta.dirname, '..')
export const source_root = node_path.resolve(project_root, 'src')
export const test_root = node_path.resolve(project_root, 'tests')
export const test_server = process.env.test_server || 'http://localhost:4321'

export const cssesc_options: Readonly<Partial<cssesc.Options>> = { quotes: 'double', }

export const linesep = /\r\n?|\n/
export const linesep_stripper = /[\r\n]+/