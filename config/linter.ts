import type { Options } from '@lumirelle/linter-config/eslint'

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
} satisfies Options
