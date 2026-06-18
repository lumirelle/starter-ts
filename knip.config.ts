import type { KnipConfig } from 'knip'

export default {
  entry: ['test/**/*.{ts,js}'],
  ignoreFiles: ['taze.config.ts'],
  ignoreDependencies: ['@lumirelle/oxlint-config', 'taze'],
} satisfies KnipConfig
