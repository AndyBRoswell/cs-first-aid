import * as data_type from '@/types/data.ts'
import * as catalog from '@/data/materials/catalog.ts'
import '@/data/courses/import course materials.ts'

export const info = {
  canonical_name: '微积分',
  name: [ '微积分', '高等数学', ],
  tag: [ '基础必修', ],
  material: {
    text: {
      selected: [
        ...catalog.all().filter(material => /Calculus: A Complete Course/.test(material.title!)),
        ...catalog.all().filter(material => /简明微积分/.test(material.title!)),
      ],
      excluded: [
        ...catalog.all().filter(material => /Stewart Calculus/.test(material.title!)),
        catalog.get('Princeton Calculus Reader'),
      ],
    },
    other: {
      text: [
        ...catalog.all().filter(material => material.author?.length === 1 && /^同济大学数学/.test(material.author![0]!.literal!) && /高等数学/.test(material.title!)),
        ...catalog.all().filter(material => material.author?.length === 1 && /Apostol/.test(material.author![0]!.family!) && /^Calculus$/i.test(material.title!)),
        ...catalog.all().filter(material => /Thomas Calculus/i.test(material.title!)),
        ...catalog.all().filter(material => material.author?.length === 1 && /Strang/.test(material.author![0]!.family!) && /Calculus/i.test(material.title!)),
      ]
    },
  }
} satisfies data_type.Course
