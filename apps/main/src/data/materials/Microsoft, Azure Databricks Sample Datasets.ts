import * as types_data from '@cs-first-aid/bibkit/types/data'

export const entries = [
  {
    id: [ 'Azure Databricks Sample Datasets' ],
    material: {
      type: 'webpage',
      title: 'Sample datasets',
      'container-title': 'Microsoft Learn',
      'collection-title': 'Azure Databricks',
      publisher: 'Microsoft',
      genre: 'Dataset catalogue',
      language: 'en',
      URL: 'https://learn.microsoft.com/en-us/azure/databricks/discover/databricks-datasets',
      accessed: { 'date-parts': [ [ 2026, 11, 3 ] ] },
      note: 'Built-in samples are accessed through a Databricks workspace. The catalogue also links to third-party datasets with their own access conditions.',
    } satisfies types_data.Material,
  },
] satisfies types_data.Entry[]
