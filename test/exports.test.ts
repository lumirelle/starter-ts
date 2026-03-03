import { file, write, YAML } from 'bun'
import { describe, expect, it } from 'bun:test'
import { mkdirSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { getPackageExportsManifest } from 'vitest-package-exports'
import { name, version } from '../package.json'

const root = join(import.meta.dir, '..')

describe.todoIf(version === '0.0.0')('exports-snapshot', () => {
  it(name, async () => {
    const manifest = await getPackageExportsManifest({
      importMode: 'package',
      cwd: root,
    })
    // TODO: Workaround. Bun currently does not support file snapshot like Vitest, see https://github.com/oven-sh/bun/issues/13096
    const exports = YAML.stringify(manifest.exports, null, 2)
    const pkgPaths = name.split('/')
    pkgPaths[pkgPaths.length - 1] += '.yaml'
    const output = join(root, 'test', 'exports', ...pkgPaths)
    mkdirSync(dirname(output), { recursive: true })
    await write(output, exports)
    expect(exports).toEqual(await file(output).text())
  })
})
