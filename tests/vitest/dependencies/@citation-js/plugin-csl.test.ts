import { test, describe, expect } from 'vitest';

// @ts-ignore [citation-js doesn't have ts support]
import citation_js from "@citation-js/core";
import '@citation-js/plugin-csl'
import node_fs from 'node:fs'
import node_path from 'node:path'
import node_html_parser from 'node-html-parser'
import * as util from '@/util.ts'
import * as test_util from '@tests/util.ts'

const CSL_config = citation_js.plugins.config.get('@csl')
const default_bib_style_name = 'IEEE Custom'
const default_bib_style_file = node_path.resolve(test_util.source_root, 'content/docs/IEEE.custom.csl')
const default_bib_style = node_fs.readFileSync(default_bib_style_file, 'utf8')
CSL_config.styles.add(default_bib_style_name, default_bib_style)
const rich_bib_text: object = {
  format: 'html',
  template: default_bib_style_name,
  hyperlinks: true,
}
const plain_bib_text: object = {
  template: default_bib_style_name,
  hyperlinks: true
}

describe('@citation-js/plugin-csl.output.citation', { tags: [ '@citation-js/plugin-csl.output.citation', ] }, () => {
  test('example', { tags: [ 'IEEE.custom.csl', ], }, () => {
    const cite = new citation_js.Cite([ // https://citation.js.org/api/0.7/module-@citation-js_plugin-csl.output.html
      { id: 'a', title: 'Item A', issued: { 'date-parts': [ [ 2016 ] ] } },
      { id: 'b', title: 'Item B', issued: { 'date-parts': [ [ 2017 ] ] } },
      { id: 'c', title: 'Item C', issued: { 'date-parts': [ [ 2018 ] ] } }
    ])
    expect(node_html_parser.parse(cite.format('citation')).textContent).toEqual('(Item A, 2016; Item B, 2017; Item C, 2018)')
    expect(node_html_parser.parse(cite.format('citation', { entry: [ 'a', 'b' ] })).textContent).toEqual('(Item A, 2016; Item B, 2017)')
    expect(node_html_parser.parse(cite.format('citation', { entry: 'a' })).textContent).toEqual('(Item A, 2016)')
    expect(node_html_parser.parse(cite.format('citation', { entry: [ { id: 'a', label: 'page', locator: 123 } ] })).textContent).toEqual('(Item A, 2016, p. 123)')
    expect(node_html_parser.parse(cite.format('citation', {
      entry: [ { id: 'c', label: 'page', locator: 1234, } ],
      ...rich_bib_text
    })).textContent).toEqual('[1, p. 1234]')
  })
  test('dup id', { tags: [], }, () => {
    const cite = new citation_js.Cite([
      { id: 'a', title: '1', issued: { 'date-parts': [ [ 2001 ] ] } },
      { id: 'a', title: '2', issued: { 'date-parts': [ [ 2002 ] ] } },
      { id: 'a', title: '3', issued: { 'date-parts': [ [ 2003 ] ] } },
      { id: 'a', title: '4', issued: { 'date-parts': [ [ 2004 ] ] } },
    ])
    const References = cite.format('bibliography', plain_bib_text).split(util.linesep_stripper).filter(Boolean)
    expect(References.length).toEqual(1)
    expect(References[0]).toEqual(`[1] “4.” 2004.`)
  })
})