import * as types_data from '@cs-first-aid/bibkit/types/data'
import * as catalog from '@cs-first-aid/bibkit/catalog'
import '@/data/materials/import materials.ts'
import * as util from '@cs-first-aid/util'

export const info = {
  canonical_name: '数字图像处理',
  name: [ '数字图像处理', ],
  material: {
    reference: {
      en: [
        ...catalog.filter(item => item.type === 'book' && util.ieq(item.title!, 'Digital Image Processing') && item.author?.some(author => author.family === 'Gonzalez') && item.edition === 4, { count: 1 }),
        ...catalog.filter(item => item.type === 'book' && util.ieq(item.title!, 'Digital Image Processing') && item.author?.some(author => author.family === 'Esakkirajan') && item.edition === 1, { count: 1 }),
        ...catalog.filter(item => item.type === 'book' && util.ieq(item.title!, 'Digital Image Processing') && item.author?.some(author => author.family === 'Burger') && item.edition === 3, { count: 1 }),
        ...catalog.filter(item => item.type === 'book' && util.ieq(item.title!, 'Digital Image Processing') && item.author?.some(author => author.family === 'Sundararajan') && item.edition === 2, { count: 1 }),
        ...catalog.filter(item => item.type === 'book' && util.ieq(item.title!, 'Feature Extraction and Image Processing for Computer Vision') && item.author?.some(author => author.family === 'Nixon') && item.edition === 5, { count: 1 }),
        ...catalog.filter(item => item.type === 'book' && util.ieq(item.title!, 'Image Processing for Engineers') && item.author?.some(author => author.family === 'Yagle'), { count: 1 }),
      ],
    },
  },
} satisfies types_data.Course
