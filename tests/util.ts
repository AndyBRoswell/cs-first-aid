import pino from 'pino'

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

export const test_server = process.env.test_server || 'http://localhost:4321'

export function on_pageerror(errors: Error[], error: Error) {
  if (error.message.includes('error loading dynamically imported module')) return
  errors.push(error)
}