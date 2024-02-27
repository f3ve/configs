import { type FlatEslintConfig } from 'eslint-define-config';
import { GLOB_DEFAULT_FILES } from '../globs';
import prettierPlugin from 'eslint-plugin-prettier';
import eslintConfigPrettier from 'eslint-config-prettier';

export function prettierConfig(): FlatEslintConfig[] {
  return [
    eslintConfigPrettier as FlatEslintConfig,
    {
      files: GLOB_DEFAULT_FILES,
      plugins: {
        prettier: prettierPlugin,
      },
      rules: {
        'prettier/prettier': 'error',
      },
    },
  ];
}
