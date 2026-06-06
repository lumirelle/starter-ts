import type { KnipConfig } from 'knip'

export default {
  entry: ['test/**/*.{ts,js}'],
  ignoreBinaries: ['mise'],
  ignoreDependencies: ['@lumirelle/oxlint-config', 'nano-staged'],
} satisfies KnipConfig
