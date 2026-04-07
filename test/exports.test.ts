import { YAML } from 'bun'
import { describe, expect, it } from 'bun:test'
import { fileURLToPath } from 'node:url'
import { getPackageExportsManifest } from 'vitest-package-exports'
import { name } from '../package.json'

describe('exports-snapshot', () => {
  it(name, async () => {
    const manifest = await getPackageExportsManifest({
      importMode: 'src',
      cwd: fileURLToPath(import.meta.url),
      resolveSourcePath: (element: any) => {
        let dist = ''
        if (typeof element === 'object')
          dist = element.default || element.require || element.import || ''
        else
          dist = element
        return dist.replace('dist', 'src').replace(/\.[mc]?js$/, '')
      },
    })
    // TODO: Workaround. Bun currently does not support file snapshot like Vitest, see https://github.com/oven-sh/bun/issues/13096
    expect(YAML.stringify(manifest.exports, null, 2)).toMatchSnapshot()
  })
})
