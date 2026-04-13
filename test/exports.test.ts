import { describe, expect, it } from 'bun:test'
import { existsSync } from 'node:fs'
import { generateApiSnapshot } from 'tsnapi'
import { exports, name } from '../package.json'

const isDistExists = existsSync('dist')
const entries = Object.keys(exports).filter(key => !key.endsWith('.json'))

describe('exports-snapshot', () => {
  it('dist should exist', async () => {
    expect(isDistExists, 'dist directory does not exist, please run `bun run build` first').toBe(true)
  })

  it.each(entries).if(isDistExists)(`${name} - %s - runtime`, (entry) => {
    const api = generateApiSnapshot(process.cwd())
    expect(api[entry]!.runtime).toMatchSnapshot()
  })

  it.each(entries).if(isDistExists)(`${name} - %s - dts`, (entry) => {
    const api = generateApiSnapshot(process.cwd())
    expect(api[entry]!.dts).toMatchSnapshot()
  })
})
