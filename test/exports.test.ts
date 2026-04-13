import { describe, expect, it } from 'bun:test'
import { existsSync } from 'node:fs'
import { generateApiSnapshot } from 'tsnapi'
import { name } from '../package.json'

const isDistExists = existsSync('dist')

describe('exports-snapshot', () => {
  it('dist should exist', async () => {
    expect(isDistExists, 'dist directory does not exist, please run `bun run build` first').toBe(true)
  })

  it.if(isDistExists)(`${name} - runtime`, async () => {
    const api = generateApiSnapshot(process.cwd())
    expect(api['.']!.runtime).toMatchSnapshot()
  })

  it.if(isDistExists)(`${name} - dts`, async () => {
    const api = generateApiSnapshot(process.cwd())
    expect(api['.']!.dts).toMatchSnapshot()
  })
})
