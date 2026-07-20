// import 'virtual:import-course-materials'

import * as catalog from '@/data/materials/catalog.ts'

const course_materials = import.meta.glob('../materials/*.ts', { eager: true });

await catalog.dump_locally()