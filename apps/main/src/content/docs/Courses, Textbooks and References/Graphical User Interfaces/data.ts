import * as bib from '@cs-first-aid/bibkit/bib'
import * as catalog from '@cs-first-aid/bibkit/catalog'
import * as Course from '@/data/courses/Graphical User Interfaces.ts'

export const page_reference = {
  material: Course.info.material,
  reference: [
    ...catalog.filter(item => item.type === 'post' && item.title === 'TextArea memory leak - QML' && item.author?.some(author => author.literal === 'Mohammadsm'), { count: 1 }),
    ...catalog.filter(item => item.number === 'QTBUG-95329', { count: 1 }),
    ...catalog.filter(item => item.number === 'QTBUG-103819', { count: 1 }),
    ...catalog.filter(item => item.number === 'QTBUG-107214', { count: 1 }),
    ...catalog.filter(item => item.type === 'post' && item.title === 'QML TextArea performance with large data buffers' && item.author?.some(author => author.literal === 'preiter'), { count: 1 }),
  ],
}
export const reference_ranges = bib.get_reference_ranges(page_reference)
