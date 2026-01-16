/* eslint-disable no-console */
import type { BuildArtifact, BuildOutput } from 'bun'
import { color } from 'bun'
import fs, { existsSync, rmSync } from 'node:fs'
import { dirname, join, resolve } from 'node:path'
import process from 'node:process'

const cwd = process.cwd()

function absolute(path: string): string {
  return resolve(cwd, path)
}

async function getArtifactSources(artifact: BuildArtifact): Promise<string[]> {
  const sourcemap = await artifact.sourcemap?.json() as { sources: string[] } | null
  const sources = sourcemap ? sourcemap.sources : []
  return sources.map(source => join(dirname(artifact.path), source))
}

async function getOutputSources(output: BuildOutput): Promise<Set<string>> {
  const sources = await Promise.all(output.outputs.map(getArtifactSources))
  return new Set(sources.flat().map(absolute))
}

type BuildConfig = Parameters<typeof Bun.build>[0] & {
  watch?: string
  onBuild?: (output: BuildOutput) => void
}

export async function build(config: BuildConfig): Promise<BuildOutput> {
  const { watch, onBuild, sourcemap, outdir, ...rest } = config

  if (outdir && existsSync(outdir))
    rmSync(outdir, { recursive: true, force: true })

  if (watch && config.sourcemap !== 'external')
    console.error('Watch requires external sourcemap, setting to external')

  let output = await Bun.build({ outdir, sourcemap, ...rest })

  if (watch) {
    let sources = await getOutputSources(output)
    let debounce: Timer | null = null
    let pending = false

    const rebuild = async (): Promise<void> => {
      if (pending)
        return
      pending = true
      console.log(`${color('blue', 'ansi')}Rebuilding...${color('white', 'ansi')}`)
      output = await Bun.build({ outdir, sourcemap, ...rest })
      sources = await getOutputSources(output)
      onBuild && onBuild(output)
      console.log(`${color('green', 'ansi')}Rebuild complete.${color('white', 'ansi')}`)
      console.log(`${color('white', 'ansi')}Watching for changes...${color('white', 'ansi')}`)
      pending = false
    }

    fs.watch(watch, { recursive: true }, (event, filename) => {
      if (!filename)
        return
      const source = absolute(join(watch, filename))
      if (!sources.has(source))
        return
      if (debounce)
        clearTimeout(debounce)
      debounce = setTimeout(rebuild, 50)
    })
  }

  onBuild && onBuild(output)
  if (watch)
    console.log(`${color('white', 'ansi')}Watching for changes...${color('white', 'ansi')}`)
  return output
}
