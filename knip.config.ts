import type { KnipConfig } from 'knip'
import { name as thisPkg } from './package.json'

export default {
  /// keep-sorted
  ignoreDependencies: ['@antfu/utils', '@arethetypeswrong/cli', 'publint', thisPkg],
} satisfies KnipConfig
