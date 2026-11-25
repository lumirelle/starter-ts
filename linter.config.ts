import type { Options } from '@lumirelle/linter-config'

/**
 * Linter options for both ESLint & Oxlint.
 */
export default {
  type: 'lib',
  typescript: { tsconfigPath: 'tsconfig.json' },
  oxlint: {
    typeAware: true,
    typeCheck: true,
  },
  ignores: ['.agents/**', '.claude/**'],
} satisfies Options
