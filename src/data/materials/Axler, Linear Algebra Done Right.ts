import * as catalog from './catalog.ts'
import * as Data_Type from '@/types/data.ts'

const items = [
  {
    id: [
      'LADR',
      'Axler, Linear Algebra Done Right',
      'Axler, Linear Algebra Done Right, 4e',
      'Axler, Linear Algebra Done Right, 2023',
      'S. Axler, Linear Algebra Done Right',
      'S. Axler, Linear Algebra Done Right, 4e',
      'S. Axler, Linear Algebra Done Right, 2023',
      { unordered_author: 'Axler', title: 'Linear Algebra Done Right' },
      { unordered_author: 'S. Axler', title: 'Linear Algebra Done Right' },
      { unordered_author: 'Axler', title: 'Linear Algebra Done Right', date: 2024 },
      { unordered_author: 'S. Axler', title: 'Linear Algebra Done Right', date: 2024 },
      { unordered_author: 'Axler', title: 'Linear Algebra Done Right', edition: 4 },
      { unordered_author: 'S. Axler', title: 'Linear Algebra Done Right', edition: 4 },
    ],
    material: {
      type: 'book',
      id: 'Axler, Linear Algebra Done Right',
      author: [ { given: 'Sheldon', family: 'Axler' } ],
      title: 'Linear Algebra Done Right',
      edition: 4,
      issued: { 'date-parts': [ [ 2024 ] ] },
      publisher: 'Springer',
      language: 'en-US',
      URL: 'https://linear.axler.net/LADR4e.pdf',
      accessed: { 'date-parts': [ [ 2026, 5, 5 ] ] },
    },
  },
] satisfies Data_Type.Entry[]

catalog.add_items(items)