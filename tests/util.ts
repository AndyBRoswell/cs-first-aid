import pino from 'pino'

export const pino_arg: pino.LoggerOptions = {
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