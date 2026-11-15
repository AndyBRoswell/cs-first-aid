import * as unist_util_visit from 'unist-util-visit'
// @ts-ignore: unicodemathml doesn't have type hints
import * as UnicodeMathML from 'unicodemathml'

export function convert_UnicodeMath() {
  return (tree: any) => {
    unist_util_visit.visit(tree, ['inlineMath', 'math'], node => {
      node.value = UnicodeMathML.convertUnicodeMathToMathML(node.value, { displaystyle: node.type === 'math', doubleStruckMode: 'euro-tech', })
      node.type = 'html'
      delete node.data
    })
  }
}
