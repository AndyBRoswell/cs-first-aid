import * as types_data from '@cs-first-aid/bibkit/types/data'
import * as catalog from '@cs-first-aid/bibkit/catalog'
import '@/data/materials/import materials.ts'

export const info = {
  canonical_name: '积分变换',
  name: [ '积分变换', 'Integral Transforms' ],
  material: {
    reference: {
      en: [
        ...catalog.filter(item => item.type === 'book' && item.title === 'Integral Transforms and Their Applications' && item.author?.some(author => author.family === 'Debnath'), { count: 1 }),
        ...catalog.filter(item => item.type === 'book' && item.title === 'An Introduction to Integral Transforms' && item.author?.some(author => author.family === 'Patra'), { count: 1 }),
        ...catalog.filter(item => item.type === 'book' && item.title === 'Transforms and Applications Handbook' && item.editor?.some(editor => editor.family === 'Poularikas'), { count: 1 }),
        ...catalog.filter(item => item.type === 'book' && item.title === 'Discrete Fourier Analysis and Wavelets' && item.author?.some(author => author.family === 'Broughton'), { count: 1 }),
        ...catalog.filter(item => item.type === 'book' && item.title === 'Introduction to Orthogonal Transforms' && item.author?.some(author => author.family === 'Wang'), { count: 1 }),
        ...catalog.filter(item => item.type === 'book' && item.title === 'A Wavelet Tour of Signal Processing' && item.author?.some(author => author.family === 'Mallat'), { count: 1 }),
        ...catalog.filter(item => item.type === 'book' && item.title === 'Principles of Computerized Tomographic Imaging' && item.author?.some(author => author.family === 'Kak'), { count: 1 }),
      ],
    },
  },
} satisfies types_data.Course
