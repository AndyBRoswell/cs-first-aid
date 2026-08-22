import { test, expect } from 'vitest';

// @ts-ignore [citation-js doesn't have ts support]
import citation_js from "@citation-js/core";
import '@citation-js/plugin-csl'
import * as util from '@cs-first-aid/util'
import * as CSL from '@/CSL.ts'
import get_rendered_author from '@/get_rendered_author.csl'
import get_full_author_names from '@/get_full_author_names.csl'

const CSL_config = citation_js.plugins.config.get('@csl')
CSL_config.styles.add('get_rendered_author', get_rendered_author)
CSL_config.styles.add('get_full_author_names', get_full_author_names)

test('src/get_rendered_author.csl and src/get_full_author_names.csl', {
  tags: [
    'src/get_rendered_author.csl',
    'src/get_full_author_names.csl',
  ],
}, () => {
  const styles = [
    { rendered: 'default', style: { template: 'get_rendered_author', } },
    { rendered: 'full', style: { template: 'get_full_author_names', } },
  ] as const
  const names: { original: CSL.Item['author'], rendered: { default: string, full: string } }[] = [
    { original: [ { family: '王', given: '虹' } ], rendered: { default: '王虹', full: '王虹' } },
    { original: [ { given: 'Hong', family: 'Wang' } ], rendered: { default: 'H. Wang', full: 'Hong Wang' } },
    { original: [ { family: '邓', given: '煜' } ], rendered: { default: '邓煜', full: '邓煜' } },
    { original: [ { given: 'Yu', family: 'Deng' } ], rendered: { default: 'Y. Deng', full: 'Yu Deng' } },
    { original: [ { family: '田', given: '刚' } ], rendered: { default: '田刚', full: '田刚' } },
    { original: [ { given: 'Gang', family: 'Tian' } ], rendered: { default: 'G. Tian', full: 'Gang Tian' } },
    { original: [ { family: '梁', given: '文锋' } ], rendered: { default: '梁文锋', full: '梁文锋' } },
    { original: [ { given: 'Wenfeng', family: 'Liang' } ], rendered: { default: 'W. Liang', full: 'Wenfeng Liang' } },
    { original: [ { family: '杨', given: '植麟' } ], rendered: { default: '杨植麟', full: '杨植麟' } },
    { original: [ { given: 'Zhiling', family: 'Yang' } ], rendered: { default: 'Z. Yang', full: 'Zhiling Yang' } },
    { original: [ { family: '黃', given: '霑' } ], rendered: { default: '黃霑', full: '黃霑' } },
    { original: [ { given: 'James Jim', family: 'Wong' } ], rendered: { default: 'J. J. Wong', full: 'James Jim Wong' } },
    { original: [ { family: '顧', given: '嘉煇' } ], rendered: { default: '顧嘉煇', full: '顧嘉煇' } },
    { original: [ { given: 'Joseph Kar-fai', family: 'Koo' } ], rendered: { default: 'J. K. Koo', full: 'Joseph Kar-fai Koo' } },
    { original: [ { given: 'Jacob', family: 'Tsimerman' } ], rendered: { default: 'J. Tsimerman', full: 'Jacob Tsimerman' } },
    { original: [ { given: 'John Vincent', family: 'Pardon' } ], rendered: { default: 'J. V. Pardon', full: 'John Vincent Pardon' } },
    { original: [ { given: 'Caucher', family: 'Birkar' } ], rendered: { default: 'C. Birkar', full: 'Caucher Birkar' } },
    { original: [ { given: 'Eugenio', family: 'Calabi' } ], rendered: { default: 'E. Calabi', full: 'Eugenio Calabi' } },
    { original: [ { given: 'David Bryant', family: 'Mumford' } ], rendered: { default: 'D. B. Mumford', full: 'David Bryant Mumford' } },
    { original: [ { given: 'Michael Francis', family: 'Atiyah' } ], rendered: { default: 'M. F. Atiyah', full: 'Michael Francis Atiyah' } },
    { original: [ { given: 'Tony', family: 'Hoare' } ], rendered: { default: 'T. Hoare', full: 'Tony Hoare' } },
    { original: [ { given: 'Charles Antony Richard', family: 'Hoare' } ], rendered: { default: 'C. A. R. Hoare', full: 'Charles Antony Richard Hoare' } },
    { original: [ { given: 'Edsger Wybe', family: 'Dijkstra' } ], rendered: { default: 'E. W. Dijkstra', full: 'Edsger Wybe Dijkstra' } },
    { original: [ { given: 'Guido', "non-dropping-particle": 'van', family: 'Rossum' } ], rendered: { default: 'G. van Rossum', full: 'Guido van Rossum' } },
    { original: [ { given: 'Robert', "non-dropping-particle": 'van de', family: 'Geijn' } ], rendered: { default: 'R. van de Geijn', full: 'Robert van de Geijn' } },
    { original: [ { given: 'Joris', "non-dropping-particle": 'van der', family: 'Hoeven' } ], rendered: { default: 'J. van der Hoeven', full: 'Joris van der Hoeven' } },
    { original: [ { given: 'Hendrik Jacob', "non-dropping-particle": 'van den', family: 'Herik' } ], rendered: { default: 'H. J. van den Herik', full: 'Hendrik Jacob van den Herik' } },
    { original: [ { given: 'Mark', "non-dropping-particle": 'de', family: 'Berg' } ], rendered: { default: 'M. de Berg', full: 'Mark de Berg' } },
    { original: [ { given: 'Pierre-Arnoul Frédéric Guy Donat', "non-dropping-particle": 'de', family: 'Marneffe' } ], rendered: { default: 'P.-A. F. G. D. de Marneffe', full: 'Pierre-Arnoul Frédéric Guy Donat de Marneffe' } },
    { original: [ { given: 'Sabrina', "non-dropping-particle": 'De', family: 'Capitani di Vimercati' } ], rendered: { default: 'S. De Capitani di Vimercati', full: 'Sabrina De Capitani di Vimercati' } },
    { original: [ { given: 'Mariangiola', family: 'Dezani-Ciancaglini' } ], rendered: { default: 'M. Dezani-Ciancaglini', full: 'Mariangiola Dezani-Ciancaglini' } },
    { original: [ { given: 'Stefano', family: 'Valore di Villanueva de Castellòn' } ], rendered: { default: 'S. Valore di Villanueva de Castellòn', full: 'Stefano Valore di Villanueva de Castellòn' } },
    { original: [ { given: 'María José', family: 'García de la Banda García' } ], rendered: { default: 'M. J. García de la Banda García', full: 'María José García de la Banda García' } },
    { original: [ { given: 'Francisco José', family: 'Vico Vela' } ], rendered: { default: 'F. J. Vico Vela', full: 'Francisco José Vico Vela' } },
    { original: [ { given: 'Mario de Jesús', family: 'Pérez Jiménez' } ], rendered: { default: 'M. de J. Pérez Jiménez', full: 'Mario de Jesús Pérez Jiménez' } },
    { original: [ { given: 'Luis', family: 'Fonsi' } ], rendered: { default: 'L. Fonsi', full: 'Luis Fonsi' } },
    { original: [ { given: 'Luis Alfonso', family: 'Rodríguez López-Ceper' } ], rendered: { default: 'L. A. Rodríguez López-Ceper', full: 'Luis Alfonso Rodríguez López-Ceper' } },
    { original: [ { given: 'David', family: 'Heinemeier Hansson' } ], rendered: { default: 'D. Heinemeier Hansson', full: 'David Heinemeier Hansson' }, },
    { original: [ { given: 'Alexandre', family: 'Grothendieck' } ], rendered: { default: 'A. Grothendieck', full: 'Alexandre Grothendieck' }, },
    { original: [ { given: 'Hermann Klaus Hugo', family: 'Weyl' } ], rendered: { default: 'H. K. H. Weyl', full: 'Hermann Klaus Hugo Weyl' }, },
    { original: [ { given: 'Jean-Pierre', family: 'Serre' } ], rendered: { default: 'J.-P. Serre', full: 'Jean-Pierre Serre' }, },
    { original: [ { given: 'Niels Henrik', family: 'Abel' } ], rendered: { default: 'N. H. Abel', full: 'Niels Henrik Abel' }, },
    { original: [ { given: 'Marius Sophus', family: 'Lie' } ], rendered: { default: 'M. S. Lie', full: 'Marius Sophus Lie' }, },
    { original: [ { given: 'John', "non-dropping-particle": 'von', family: 'Neumann' } ], rendered: { default: 'J. von Neumann', full: 'John von Neumann' } },
    { original: [ { given: 'Walther', "dropping-particle": 'von', family: 'Hahn' } ], rendered: { default: 'W. von Hahn', full: 'Walther von Hahn' } },
    { original: [ { given: 'Joachim', "dropping-particle": 'von zur', family: 'Gathen' } ], rendered: { default: 'J. von zur Gathen', full: 'Joachim von zur Gathen' } },
    { original: [ { given: 'Ernst August', family: 'Weiß' } ], rendered: { default: 'E. A. Weiß', full: 'Ernst August Weiß' } },
    { original: [ { given: 'Ernst August', family: 'Weiss' } ], rendered: { default: 'E. A. Weiss', full: 'Ernst August Weiss' } },
    { original: [ { given: 'Amalie Emmy', family: 'Noether' } ], rendered: { default: 'A. E. Noether', full: 'Amalie Emmy Noether' } },
    { original: [ { given: 'Constantinos', family: 'Daskalakis' } ], rendered: { default: 'C. Daskalakis', full: 'Constantinos Daskalakis' } },
    { original: [ { given: 'Κωνσταντίνος', family: 'Δασκαλάκης' } ], rendered: { default: 'Κ. Δασκαλάκης', full: 'Κωνσταντίνος Δασκαλάκης' } },
    { original: [ { given: 'Igor', family: 'Pavlov' } ], rendered: { default: 'I. Pavlov', full: 'Igor Pavlov' } },
    { original: [ { given: 'Игорь', family: 'Павлов' } ], rendered: { default: 'И. Павлов', full: 'Игорь Павлов' } },
    { original: [ { family: '一ノ瀬', given: 'ことみ' } ], rendered: { default: '一ノ瀬ことみ', full: '一ノ瀬ことみ' }, },
    { original: [ { family: 'Ichinose', given: 'Kotomi' } ], rendered: { default: 'K. Ichinose', full: 'Kotomi Ichinose' }, },
    { original: [ { family: '涼宮', given: 'ハルヒ' } ], rendered: { default: '涼宮ハルヒ', full: '涼宮ハルヒ' }, },
    { original: [ { family: 'Suzumiya', given: 'Haruhi' } ], rendered: { default: 'H. Suzumiya', full: 'Haruhi Suzumiya' }, },
    { original: [ { family: '長門', given: '有希' } ], rendered: { default: '長門有希', full: '長門有希' }, },
    { original: [ { family: 'Nagato', given: 'Yuki' } ], rendered: { default: 'Y. Nagato', full: 'Yuki Nagato' }, },
    { original: [ { family: '森', given: '重文' } ], rendered: { default: '森重文', full: '森重文' }, },
    { original: [ { family: 'Mori', given: 'Shigehumi' } ], rendered: { default: 'S. Mori', full: 'Shigehumi Mori' }, },
    { original: [ { family: '広中', given: '平祐' } ], rendered: { default: '広中平祐', full: '広中平祐' }, },
    { original: [ { family: 'Hironaka', given: 'Heisuke' } ], rendered: { default: 'H. Hironaka', full: 'Heisuke Hironaka' }, },
    { original: [ { family: '宮崎', given: '典行' } ], rendered: { default: '宮崎典行', full: '宮崎典行' }, },
    { original: [ { family: 'Miyazaki', given: 'Noriyuki' } ], rendered: { default: 'N. Miyazaki', full: 'Noriyuki Miyazaki' }, },
    { original: [ { literal: 'hiyohiyo' } ], rendered: { default: 'hiyohiyo', full: 'hiyohiyo' } },
    { original: [ { literal: '赤石神殿' } ], rendered: { default: '赤石神殿', full: '赤石神殿' } },
    { original: [ { literal: '厕所棍' } ], rendered: { default: '厕所棍', full: '厕所棍' } },
    { original: [ { literal: '搏命狂锄' } ], rendered: { default: '搏命狂锄', full: '搏命狂锄' } },
    { original: [ { literal: '钱乱咁揈' } ], rendered: { default: '钱乱咁揈', full: '钱乱咁揈' } },
    { original: [ { literal: '錢亂咁揈' } ], rendered: { default: '錢亂咁揈', full: '錢亂咁揈' } },
    { original: [ { literal: '壹隻憂鬱臺灣烏龜尋釁幾羣骯髒變態囓齒鱷龞，幾羣骯髒變態囓齒鱷龞圍毆壹隻憂鬱臺灣烏龜' } ], rendered: { default: '壹隻憂鬱臺灣烏龜尋釁幾羣骯髒變態囓齒鱷龞，幾羣骯髒變態囓齒鱷龞圍毆壹隻憂鬱臺灣烏龜', full: '壹隻憂鬱臺灣烏龜尋釁幾羣骯髒變態囓齒鱷龞，幾羣骯髒變態囓齒鱷龞圍毆壹隻憂鬱臺灣烏龜' } },
    { original: [ { literal: '0x5f3759df' } ], rendered: { default: '0x5f3759df', full: '0x5f3759df' } },
    { original: [ { literal: 'rwxXst' } ], rendered: { default: 'rwxXst', full: 'rwxXst' } },
    { original: [ { literal: 'Fraunhofer-Gesellschaft zur Förderung der angewandten Forschung e. V.' } ], rendered: { default: 'Fraunhofer-Gesellschaft zur Förderung der angewandten Forschung e. V.', full: 'Fraunhofer-Gesellschaft zur Förderung der angewandten Forschung e. V.' } },
    { original: [ { literal: 'I sang, and thought I sang very well; but he just looked up into my face with a very quizzical expression, and said, ' } ], rendered: { default: 'I sang, and thought I sang very well; but he just looked up into my face with a very quizzical expression, and said, ', full: 'I sang, and thought I sang very well; but he just looked up into my face with a very quizzical expression, and said, ' } },
    { original: [ { literal: '𠮶个係乜嘢啊❓' } ], rendered: { default: '𠮶个係乜嘢啊❓', full: '𠮶个係乜嘢啊❓' } },
    { original: [ { literal: '嗰個係乜嘢啊❓' } ], rendered: { default: '嗰個係乜嘢啊❓', full: '嗰個係乜嘢啊❓' } },
    { original: [ { literal: '🍾' } ], rendered: { default: '🍾', full: '🍾' } },
    { original: [ { literal: '👨‍👩‍👧‍👦' } ], rendered: { default: '👨‍👩‍👧‍👦', full: '👨‍👩‍👧‍👦' } },
    { original: [ { literal: '🎉247 玩成晚我同啲兄弟唔会嗌攰🎉' } ], rendered: { default: '🎉247 玩成晚我同啲兄弟唔会嗌攰🎉', full: '🎉247 玩成晚我同啲兄弟唔会嗌攰🎉' } },
  ]
  const items = []
  for (const [ index, name ] of names.entries()) { items.push({ id: index, author: name.original }) }
  const cite = new citation_js.Cite(items)
  for (const { rendered, style } of styles) {
    const output = cite.format('bibliography', style).split(util.linesep_stripper)
    for (const [ index, name ] of names.entries()) { expect(output[index]).toBe(name.rendered[rendered]) }
  }
})
