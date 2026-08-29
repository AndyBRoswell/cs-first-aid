import node_path from 'node:path'

export const project_root = node_path.resolve(import.meta.dirname, '..')
export const source_root = node_path.resolve(project_root, 'src')
export const test_root = node_path.resolve(project_root, 'tests')
export const test_server = process.env.test_server || 'http://localhost:4321'
