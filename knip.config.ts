import type { KnipConfig } from 'knip'

export default {
  ignoreDependencies: [
    '@arethetypeswrong/cli',
    '@lumirelle/oxlint-config',
    'pkg-placeholder',
    'publint',
  ],
} satisfies KnipConfig
