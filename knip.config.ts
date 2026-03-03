/* eslint perfectionist/sort-objects: "error" */
import type { KnipConfig } from 'knip'
import { name } from './package.json'
export default {
  ignoreDependencies: [name, '@antfu/utils', '@arethetypeswrong/cli', 'publint'],
} satisfies KnipConfig
