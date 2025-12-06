import { join } from 'node:path'
import { describe, expect, it } from 'bun:test'
import { getPackageExportsManifest } from 'vitest-package-exports'
import yaml from 'yaml'

// TODO: Remove this when you are ready for the first release
const IS_READY = false

/**
 * Relative paths to package roots.
 *
 * TODO: Add your packages here when you want to test their exports.
 * FIXME: If `bun` support command like `pnpm ls --only-projects`, we may no longer need this, see https://github.com/oven-sh/bun/issues/25114
 */
const packagePaths = [
  '../',
]

describe.if(IS_READY)('exports-snapshot', async () => {
  for (const path of packagePaths) {
    const pkgPath = join(import.meta.dir, path)
    const pkg = await import(join(pkgPath, 'package.json')).then(m => m.default)
    if (pkg.private)
      continue
    it(`${pkg.name}`, async () => {
      const manifest = await getPackageExportsManifest({
        importMode: 'src',
        cwd: pkgPath,
      })
      expect(yaml.stringify(manifest.exports))
        // TODO: Waiting for the api support, see https://github.com/oven-sh/bun/issues/13096
        // .toMatchFileSnapshot(`./exports/${pkg.name}.yaml`)
        .toMatchInlineSnapshot(``)
    })
  }
})
