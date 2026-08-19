// import 'virtual:import-course-materials'

import pino from 'pino'
import * as catalog from '@cs-first-aid/bibkit/catalog'
import * as util from '@cs-first-aid/util';

const logger = pino(util.pino_arg)

logger.info('Importing materials...')
const materials = import.meta.glob('../materials/*.ts', { eager: true });
logger.info('Materials loaded.')

await catalog.dump_locally()