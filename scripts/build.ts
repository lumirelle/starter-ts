import { build } from '../build/build.ts'
import { dts } from '../build/plugins/dts.ts'

await build({
  entrypoints: [
    './src/index.ts',
  ],
  outdir: './dist',
  plugins: [dts()],
})
