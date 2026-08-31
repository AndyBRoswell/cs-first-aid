import node_path from 'node:path'
import { local_test_server } from './util/config/e2e-targets.ts'

export const project_root = node_path.resolve(import.meta.dirname, '..')
export const source_root = node_path.resolve(project_root, 'src')
export const test_root = node_path.resolve(project_root, 'tests')
export const test_server = process.env.E2E_resolved_server || local_test_server
