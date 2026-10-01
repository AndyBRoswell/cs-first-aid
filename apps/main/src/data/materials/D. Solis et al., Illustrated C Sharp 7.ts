import * as types_data from '@cs-first-aid/bibkit/types/data'
import * as CSL from '@cs-first-aid/bibkit/CSL'

export const entries = [
  {
    id: [ 'Illustrated C# 7', ],
    material: {
      type: 'book',
      title: 'Illustrated C# 7: The C# Language Presented Clearly, Concisely, and Visually',
      author: [
        { given: 'Daniel', family: 'Solis' },
        { given: 'Cal', family: 'Schrotenboer' },
      ],
      edition: 5,
      publisher: 'Apress',
      issued: { 'date-parts': [ [ 2018, 2, 19 ] ] },
      ISBN: '9781484232880',
      DOI: '10.1007/978-1-4842-3288-0',
      language: 'en-US',
      URL: 'https://link.springer.com/book/10.1007/978-1-4842-3288-0',
      accessed: { 'date-parts': [ [ 2026, 10, 1 ] ] },
      custom: {
        keyword: [ 'Microsoft', '.NET', 'ASP.NET', 'MVC', 'WPF', 'Core', 'development', 'programming' ],
        topic: [ 'Microsoft and .NET', 'Software Engineering/Programming and Operating Systems' ],
        'eBook packages': [ 'Professional and Applied Computing', 'Apress Access Books', 'Professional and Applied Computing (R0)' ],
      } satisfies CSL.Custom,
    } satisfies types_data.Material,
  },
] satisfies types_data.Entry[]
