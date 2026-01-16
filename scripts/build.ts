import { build } from '@lumirelle/build-with-bun'

await build({
  entrypoints: [
    './src/index.ts',
  ],
  outdir: './dist',
})
