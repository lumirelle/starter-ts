import { $ } from 'bun'
import { describe, expect, it } from 'bun:test'
import { getPackageExportsManifest } from 'vitest-package-exports'
import yaml from 'yaml'

// TODO: remove this when you are ready for the first release
const IS_READY = false

describe.if(IS_READY)('exports-snapshot', async () => {
  const packages: { name: string, path: string, private?: boolean }[] = JSON.parse(
    // FIXME(Lumirelle): Watting for support, see https://github.com/oven-sh/bun/issues/25114
    await $`bun pm ls --only-projects --json`.json(),
  )

  for (const pkg of packages) {
    if (pkg.private)
      continue
    it(`${pkg.name}`, async () => {
      const manifest = await getPackageExportsManifest({
        importMode: 'src',
        cwd: pkg.path,
      })
      await expect(yaml.stringify(manifest.exports))
        // @ts-expect-error Waitting for support, see https://github.com/oven-sh/bun/issues/13096
        .toMatchFileSnapshot(`./exports/${pkg.name}.yaml`)
    })
  }
})
