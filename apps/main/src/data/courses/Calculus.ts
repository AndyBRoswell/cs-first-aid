import * as types_data from '@cs-first-aid/bibkit/types/data'
import * as catalog from '@cs-first-aid/bibkit/catalog'
import '@/data/materials/import materials.ts'
import * as util from '@cs-first-aid/util'

export const info = {
  canonical_name: '微积分',
  name: [ '微积分', '高等数学', ],
  tag: [ '基础必修', ],
  material: {
    text: {
      selected: {
        en: [
          ...catalog.filter(material => /Calculus: A Complete Course/.test(material.title!)),
        ],
        zh: [
          ...catalog.filter(material => /简明微积分/.test(material.title!)),
        ],
      },
      excluded: {
        en: [
          ...catalog.filter(material => /Stewart Calculus/.test(material.title!)),
          catalog.get('Princeton Calculus Reader'),
        ],
      },
    },
    other: {
      text: {
        zh: [
          ...catalog.filter(material => material.author?.length === 1 && /^同济大学数学/.test(material.author![0]!.literal!) && /高等数学/.test(material.title!)),
        ],
        en: [
          ...catalog.filter(material => material.author?.length === 1 && /Apostol/.test(material.author![0]!.family!) && util.ieq(material.title!, 'Calculus')),
          ...catalog.filter(material => /Thomas Calculus/i.test(material.title!)),
          ...catalog.filter(material => material.author?.length === 1 && /Strang/.test(material.author![0]!.family!) && util.ieq(material.title!, 'Calculus')),
          catalog.get('CLP-1'),
          catalog.get('CLP-2'),
          catalog.get('CLP-3'),
          catalog.get('CLP-4'),
          ...catalog.filter(material => material.author?.some(author => author.family === 'Marsden') && material.author?.some(author => author.family === 'Weinstein') && util.ieq(material.title!, 'Calculus'), { count: 3 }),
          ...catalog.filter(material => material.author?.some(author => author.family === 'Corral') && util.ieq(material.title!, 'Elementary Calculus'), { count: 1 }),
          ...catalog.filter(material => material.author?.some(author => author.family === 'Corral') && util.ieq(material.title!, 'Vector Calculus'), { count: 1 }),
        ],
      },
      video: {
        en: [
          ...catalog.filter(material => material.type === 'motion_picture' && material.author?.some(author => author.given === 'Grant' && author.family === 'Sanderson') && util.ieq(material.title!, 'Essence of Calculus'), { count: 1 }),
        ],
      },
    },
  }
} satisfies types_data.Course
