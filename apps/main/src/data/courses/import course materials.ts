// import 'virtual:import-course-materials'

import pino from 'pino'
import * as catalog from '../../../../../packages/bibkit/src/catalog.ts'
import * as util from "../../../../../packages/common/util.ts";

const logger = pino(util.pino_arg)

logger.info('Importing course materials...')
const course_materials = import.meta.glob('../materials/*.ts', { eager: true });
logger.info('Course materials loaded.')

await catalog.dump_locally()