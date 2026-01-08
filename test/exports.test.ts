/* eslint-disable perfectionist/sort-imports */
import { YAML } from 'bun'
import { workspaces } from '../package.json'
import { describe, expect, it } from 'bun:test'
import { join } from 'node:path'
import { getPackageExportsManifest } from 'vitest-package-exports'

// TODO: Remove this when you are ready for the first release
const IS_READY = false

describe.todoIf(!IS_READY)('exports-snapshot', async () => {
  /**
   * FIXME: If `bun` support command like `pnpm ls --only-projects`, we may no longer need this, see https://github.com/oven-sh/bun/issues/25114
   */
  const pkgPaths = workspaces.packages
  for (const pkgPath of pkgPaths) {
    const pkgJson = await import(join(import.meta.dir, '..', pkgPath, 'package.json')).then(m => m.default)
    if (pkgJson.private)
      continue
    it(`${pkgJson.name}`, async () => {
      const manifest = await getPackageExportsManifest({
        importMode: 'src',
        cwd: pkgPath,
      })
      expect(YAML.stringify(manifest.exports))
      // .toMatchFileSnapshot(`./exports/${pkg.name}.yaml`)
      // TODO: Workaround. Bun currently does not support file snapshot like Vitest, see https://github.com/oven-sh/bun/issues/13096
        .toMatchInlineSnapshot()
    })
  }
})
