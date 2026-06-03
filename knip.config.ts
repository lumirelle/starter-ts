import type { KnipConfig } from 'knip'

export default {
  entry: ['test/**/*.{ts,js}'],
  ignoreBinaries: ['mise'],
  ignoreDependencies: ['@lumirelle/oxlint-config', 'bumpp', 'nano-staged'],
} satisfies KnipConfig
