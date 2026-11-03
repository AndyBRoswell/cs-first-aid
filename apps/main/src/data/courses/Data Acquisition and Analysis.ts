import * as types_data from '@cs-first-aid/bibkit/types/data'
import * as catalog from '@cs-first-aid/bibkit/catalog'
import '@/data/materials/import materials.ts'

export const info = {
  canonical_name: '数据采集与分析',
  name: [ '数据采集与分析', 'Data Acquisition and Analysis' ],
  material: {
    reference: {
      course: {
        en: {
          'INF2-FDS': [
            ...catalog.filter(item => item.type === 'document' && item.number === 'INF2-FDS' && item.genre === 'Lecture notes' && item.version === '2026-01-19', { count: 1 }),
            ...catalog.filter(item => item.type === 'document' && item.number === 'INF2-FDS' && item.genre === 'Laboratory notebooks' && item.version === '2025–2026', { count: 1 }),
            ...catalog.filter(item => item.type === 'document' && item.number === 'INF2-FDS' && item.genre === 'Workshop exercises' && item.version === '2025–2026', { count: 1 }),
          ],
        },
      },
    },
    common_dataset: {
      dataset: [
        ...catalog.filter(item => item.type === 'dataset' && item.title === 'Sentiment140', { count: 1 }),
        ...catalog.filter(item => item.type === 'dataset' && item.title === 'Twitter US Airline Sentiment', { count: 1 }),
        ...catalog.filter(item => item.type === 'dataset' && item.title === 'MovieLens', { count: 1 }),
        ...catalog.filter(item => item.type === 'dataset' && item.title === 'MIND: MIcrosoft News Dataset', { count: 1 }),
        ...catalog.filter(item => item.type === 'dataset' && item.title === 'Social circles: Facebook', { count: 1 }),
        ...catalog.filter(item => item.type === 'dataset' && item.title === 'Reddit' && item['collection-title'] === 'GraphSAGE', { count: 1 }),
        ...catalog.filter(item => item.type === 'dataset' && item.title === 'Protein-Protein Interactions' && item['collection-title'] === 'GraphSAGE', { count: 1 }),
        ...catalog.filter(item => item.type === 'dataset' && item.title === 'Zachary’s Karate Club', { count: 1 }),
        ...catalog.filter(item => item.type === 'dataset' && item.title === 'The MNIST database of handwritten digits', { count: 1 }),
        ...catalog.filter(item => item.type === 'dataset' && item.title === 'diamonds' && item['collection-title'] === 'ggplot2', { count: 1 }),
        ...catalog.filter(item => item.type === 'dataset' && item.title === 'TLC Trip Record Data', { count: 1 }),
      ],
      benchmark: [
        ...catalog.filter(item => item.type === 'standard' && item.number === 'TPC-H', { count: 1 }),
        ...catalog.filter(item => item.type === 'standard' && item.number === 'TPC-DS', { count: 1 }),
      ],
      catalogue: [
        ...catalog.filter(item => item.type === 'webpage' && item.title === 'Sample datasets' && item['collection-title'] === 'Azure Databricks', { count: 1 }),
        ...catalog.filter(item => item.type === 'webpage' && item.title === 'Azure Open Datasets', { count: 1 }),
      ],
    },
  },
} satisfies types_data.Course
