import * as types_data from '@cs-first-aid/bibkit/types/data'

export const entries = [
  {
    id: [],
    material: {
      type: 'book',
      title: 'Digital Design, Global Edition',
      author: [ { given: 'M. Morris', family: 'Mano' }, { given: 'Michael D.', family: 'Ciletti' } ],
      edition: 6,
      medium: 'Paperback',
      publisher: 'Pearson',
      issued: { 'date-parts': [ [ 2018, 7, 6 ] ] },
      'number-of-pages': 720,
      ISBN: '9781292231167',
      language: 'en',
      URL: 'https://www.pearson.com/en-gb/subject-catalog/p/digital-design-global-edition/P200000004916/9781292231167',
      accessed: { 'date-parts': [ [ 2026, 11, 21 ] ] },
      custom: {
        URL: [
          { link: 'https://middleeast.pearson.com/content/dam/region-core/middle-east/pearson-middle-east/Highered/middle-east-catalogue/Pearson-ME-Catalog-2021.pdf' }, // Author names and page count.
          { link: 'https://www.pearson.com/en-gb/subject-catalog/p/Mano-Digital-Design-e-Book-Global-Edition-6th-Edition/P200000004916?view=educator' }, // Publication date.
          { link: 'https://middleeast.pearson.com/content/dam/region-core/middle-east/pearson-middle-east/catalog-files-2025/PearsonCatalogue2025.pdf' }, // Electronic ISBN.
        ],
        variant: [
          { type: 'book', medium: 'eBook', ISBN: '9781292231181' },
          {
            type: 'book',
            title: 'Digital Design: With an Introduction to the Verilog HDL, VHDL, and SystemVerilog',
            medium: 'Hardcover',
            issued: { 'date-parts': [ [ 2017, 3, 7 ] ] },
            ISBN: '9780134549897',
            URL: 'https://www.pearson.com/en-us/subject-catalog/p/Mano-Digital-Design-With-an-Introduction-to-the-Verilog-HDL-VHDL-and-System-Verilog-6th-Edition/P200000003241/9780134549897',
          },
        ],
      },
    } satisfies types_data.Material,
  },
] satisfies types_data.Entry[]
