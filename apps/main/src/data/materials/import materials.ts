// import 'virtual:import-course-materials'

import pino from 'pino'
import node_path from 'node:path'
import * as catalog from '@cs-first-aid/bibkit/catalog'
import * as util from '@cs-first-aid/util';

const logger = pino(util.pino_arg)

logger.info('Importing materials...')
const materials = import.meta.glob('../materials/*.ts', { eager: true });
logger.info('Materials loaded.')

const materials_output_path: string = node_path.join(process.cwd(), 'local/materials.json') // Keep the app-owned dump output under apps/main.
await catalog.dump_locally(materials_output_path)
