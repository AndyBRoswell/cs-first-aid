import { test, expect } from 'vitest';

// @ts-ignore [citation-js doesn't have ts support]
import citation_js from "@citation-js/core";
import '@citation-js/plugin-csl'
import node_fs from 'node:fs'
import node_path from 'node:path'
import * as util from '@tests/util.ts'
import * as CSL_data from '@/types/CSL_data.ts'

const CSL_config = citation_js.plugins.config.get('@csl')
const get_rendered_author = node_fs.readFileSync(node_path.resolve(util.source_root, 'data/materials/get_rendered_author.csl'), 'utf8')
CSL_config.styles.add('get_rendered_author', get_rendered_author)

test('src/data/materials/get_rendered_author.csl', { tags: [ 'src/data/materials/get_rendered_author.csl' ] }, () => {
  const style = { template: 'get_rendered_author', }
  const names: { original: CSL_data.Item['author'], rendered: string }[] = [
    { original: [ { family: '王', given: '虹' } ], rendered: '王虹' },
    { original: [ { given: 'Hong', family: 'Wang' } ], rendered: 'H. Wang' },
    { original: [ { family: '邓', given: '煜' } ], rendered: '邓煜' },
    { original: [ { given: 'Yu', family: 'Deng' } ], rendered: 'Y. Deng' },
    { original: [ { family: '田', given: '刚' } ], rendered: '田刚' },
    { original: [ { given: 'Gang', family: 'Tian' } ], rendered: 'G. Tian' },
    { original: [ { given: 'Jacob', family: 'Tsimerman' } ], rendered: 'J. Tsimerman' },
    { original: [ { given: 'John Vincent', family: 'Pardon' } ], rendered: 'J. V. Pardon' },
    { original: [ { given: 'Caucher', family: 'Birkar' } ], rendered: 'C. Birkar' },
    { original: [ { given: 'Eugenio', family: 'Calabi' } ], rendered: 'E. Calabi' },
    { original: [ { given: 'David Bryant', family: 'Mumford' } ], rendered: 'D. B. Mumford' },
    { original: [ { given: 'Michael Francis', family: 'Atiyah' } ], rendered: 'M. F. Atiyah' },
    { original: [ { given: 'Edsger Wybe', family: 'Dijkstra' } ], rendered: 'E. W. Dijkstra' },
    { original: [ { given: 'Guido', "non-dropping-particle": 'van', family: 'Rossum' } ], rendered: 'G. van Rossum' },
    { original: [ { given: 'Robert', "non-dropping-particle": 'van de', family: 'Geijn' } ], rendered: 'R. van de Geijn' },
    { original: [ { given: 'Joris', "non-dropping-particle": 'van der', family: 'Hoeven' } ], rendered: 'J. van der Hoeven' },
    { original: [ { given: 'Hendrik Jacob', "non-dropping-particle": 'van den', family: 'Herik' } ], rendered: 'H. J. van den Herik' },
    { original: [ { given: 'Mark', "non-dropping-particle": 'de', family: 'Berg' } ], rendered: 'M. de Berg' },
    { original: [ { given: 'Pierre-Arnoul Frédéric Guy Donat', "non-dropping-particle": 'de', family: 'Marneffe' } ], rendered: 'P.-A. F. G. D. de Marneffe' },
    { original: [ { given: 'Sabrina', "non-dropping-particle": 'De', family: 'Capitani di Vimercati' } ], rendered: 'S. De Capitani di Vimercati' },
    { original: [ { given: 'Mariangiola', family: 'Dezani-Ciancaglini' } ], rendered: 'M. Dezani-Ciancaglini' },
    { original: [ { given: 'Stefano', family: 'Valore di Villanueva de Castellòn' } ], rendered: 'S. Valore di Villanueva de Castellòn' },
    { original: [ { given: 'María José', family: 'García de la Banda García' } ], rendered: 'M. J. García de la Banda García' },
    { original: [ { given: 'Francisco José', family: 'Vico Vela' } ], rendered: 'F. J. Vico Vela' },
    { original: [ { given: 'Mario de Jesús', family: 'Pérez Jiménez' } ], rendered: 'M. de J. Pérez Jiménez' },
    { original: [ { given: 'David', family: 'Heinemeier Hansson' } ], rendered: 'D. Heinemeier Hansson', },
    { original: [ { given: 'Alexandre', family: 'Grothendieck' } ], rendered: 'A. Grothendieck', },
    { original: [ { given: 'Niels Henrik', family: 'Abel' } ], rendered: 'N. H. Abel', },
    { original: [ { given: 'Walther', "dropping-particle": 'von', family: 'Hahn' } ], rendered: 'W. von Hahn' },
    { original: [ { given: 'Joachim', "dropping-particle": 'von zur', family: 'Gathen' } ], rendered: 'J. von zur Gathen' },
    { original: [ { given: 'Ernst August', family: 'Weiß' } ], rendered: 'E. A. Weiß' },
    { original: [ { given: 'Ernst August', family: 'Weiss' } ], rendered: 'E. A. Weiss' },
    { original: [ { given: 'Constantinos', family: 'Daskalakis' } ], rendered: 'C. Daskalakis' },
    { original: [ { given: 'Κωνσταντίνος', family: 'Δασκαλάκης' } ], rendered: 'Κ. Δασκαλάκης' },
    { original: [ { family: '一ノ瀬', given: 'ことみ' } ], rendered: '一ノ瀬ことみ', },
    { original: [ { family: '涼宮', given: 'ハルヒ' } ], rendered: '涼宮ハルヒ', },
    { original: [ { family: '長門', given: '有希' } ], rendered: '長門有希', },
    { original: [ { literal: '赤石神殿' } ], rendered: '赤石神殿' },
    { original: [ { literal: '厕所棍' } ], rendered: '厕所棍' },
    { original: [ { literal: '搏命狂锄' } ], rendered: '搏命狂锄' },
    { original: [ { literal: '钱乱咁揈' } ], rendered: '钱乱咁揈' },
    { original: [ { literal: '錢亂咁揈' } ], rendered: '錢亂咁揈' },
    { original: [ { literal: '壹隻憂鬱臺灣烏龜尋釁幾羣骯髒變態囓齒鱷龞，幾羣骯髒變態囓齒鱷龞圍毆壹隻憂鬱臺灣烏龜' } ], rendered: '壹隻憂鬱臺灣烏龜尋釁幾羣骯髒變態囓齒鱷龞，幾羣骯髒變態囓齒鱷龞圍毆壹隻憂鬱臺灣烏龜' },
    { original: [ { literal: '0x5f3759df' } ], rendered: '0x5f3759df' },
    { original: [ { literal: 'rwxXst' } ], rendered: 'rwxXst' },
    { original: [ { literal: 'Fraunhofer-Gesellschaft zur Förderung der angewandten Forschung e. V.' } ], rendered: 'Fraunhofer-Gesellschaft zur Förderung der angewandten Forschung e. V.' },
  ]
  const items = []
  for (const [ index, name ] of names.entries()) { items.push({ id: index, author: name.original }) }
  const cite = new citation_js.Cite(items)
  const output = cite.format('bibliography', style).split(util.linesep_stripper)
  for (const [ index, name ] of names.entries()) { expect(output[index]).toBe(name.rendered) }
})