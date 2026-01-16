import type { BunPlugin } from 'bun'
import { basename, join, resolve } from 'node:path'
import process from 'node:process'
import { isolatedDeclarationSync } from 'oxc-transform'

const cwd = process.cwd()

function absolute(path: string): string {
  return resolve(cwd, path)
}

export function dts(): BunPlugin {
  const wroteTrack = new Set<string>()

  return {
    name: 'oxc-transform-dts',
    setup(builder) {
      if (!builder.config.outdir)
        return

      const entrypointPaths = builder.config.entrypoints.map(e => absolute(e))
      const outPath = absolute(builder.config.outdir)

      builder.onStart(() => wroteTrack.clear())

      builder.onLoad({ filter: /\.ts$/ }, async (args) => {
        if (!entrypointPaths.includes(args.path) || wroteTrack.has(args.path))
          return

        wroteTrack.add(args.path)
        const { code } = isolatedDeclarationSync(
          args.path,
          await Bun.file(args.path).text(),
        )

        await Bun.write(
          join(outPath, basename(args.path)).replace(/\.ts$/, '.d.ts'),
          code,
        )
      })
    },
  }
}
