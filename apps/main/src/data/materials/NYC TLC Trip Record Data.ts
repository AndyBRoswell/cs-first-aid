import * as types_data from '@cs-first-aid/bibkit/types/data'
import * as CSL from '@cs-first-aid/bibkit/CSL'

export const entries = [
  {
    id: [ 'NYC TLC Trip Record Data' ],
    material: {
      type: 'dataset',
      title: 'TLC Trip Record Data',
      publisher: 'New York City Taxi and Limousine Commission',
      medium: 'Parquet and CSV',
      language: 'en',
      URL: 'https://www.nyc.gov/site/tlc/about/tlc-trip-record-data.page',
      accessed: { 'date-parts': [ [ 2026, 11, 2 ] ] },
      custom: {
        URL: [
          { link: 'https://learn.microsoft.com/en-us/azure/open-datasets/dataset-taxi-yellow', display_text: 'Azure Open Datasets: yellow taxi records' },
          { link: 'https://learn.microsoft.com/en-us/azure/open-datasets/dataset-taxi-green', display_text: 'Azure Open Datasets: green taxi records' },
          { link: 'https://learn.microsoft.com/en-us/azure/open-datasets/dataset-taxi-for-hire-vehicle', display_text: 'Azure Open Datasets: for-hire vehicle records' },
        ],
        free_material: [
          { link: 'https://d37ci6vzurychx.cloudfront.net/misc/taxi_zone_lookup.csv', display_text: 'Taxi zone lookup table (CSV)', 'Content-Type': 'text/csv' },
        ],
      } satisfies CSL.Custom,
    } satisfies types_data.Material,
  },
] satisfies types_data.Entry[]
