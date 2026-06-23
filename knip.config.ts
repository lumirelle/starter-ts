import type { KnipConfig } from 'knip'

export default {
  ignoreFiles: [
    // Snapshots
    'test/__snapshots__/**',

    // TODO(Lumirelle): Create a pull request to add taze plugin for knip.
    'taze.config.ts',
  ],
  ignoreDependencies: [
    // Build tools
    'tsdown',

    // Check tools
    '@lumirelle/oxlint-config',
    '@arethetypeswrong/cli',
    'publint',

    // Dependencies manager
    'taze',

    // Releasing tools
    'bumpp',
    'changelogithub',
    'pkg-pr-new',
    'npm',
  ],
} satisfies KnipConfig
