import { readFile } from 'node:fs/promises'
import * as vite from 'vite'

export function csl_text(): vite.Plugin {
  return {
    name: 'csl-text',
    async load(id: string) {
      const path = id.split('?', 1)[0]
      if (!path.endsWith('.csl')) { return null }
      this.addWatchFile(path)
      const content = await readFile(path, 'utf8')
      return `export default ${JSON.stringify(content)}`
    },
  }
}