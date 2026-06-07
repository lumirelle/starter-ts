import type { KnipConfig } from 'knip'

export default {
  entry: ['test/**/*.{ts,js}'],
  ignoreDependencies: ['@lumirelle/oxlint-config'],
} satisfies KnipConfig
