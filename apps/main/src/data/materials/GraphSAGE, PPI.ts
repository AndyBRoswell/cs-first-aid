import * as types_data from '@cs-first-aid/bibkit/types/data'
import * as CSL from '@cs-first-aid/bibkit/CSL'

export const entries = [
  {
    id: [ 'GraphSAGE PPI' ],
    material: {
      type: 'dataset',
      title: 'Protein-Protein Interactions',
      'collection-title': 'GraphSAGE',
      medium: 'JSON, NumPy and text',
      URL: 'https://snap.stanford.edu/graphsage/#datasets',
      accessed: { 'date-parts': [ [ 2026, 11, 3 ] ] },
      custom: {
        URL: [
          { link: 'https://github.com/williamleif/GraphSAGE#input-format', display_text: 'GraphSAGE input format and dataset documentation' },
        ],
        free_material: [
          { link: 'https://snap.stanford.edu/graphsage/ppi.zip', display_text: 'Preprocessed protein-protein interaction graphs, node features and labels (ZIP)', 'Content-Type': 'application/zip' },
        ],
      } satisfies CSL.Custom,
    } satisfies types_data.Material,
  },
] satisfies types_data.Entry[]
