import unocss from '@unocss/eslint-config/flat';
import { type FlatEslintConfig } from 'eslint-define-config';

export function unocssConfig(): FlatEslintConfig[] {
  return [
    unocss,
    {
      rules: {
        'unocss/blocklist': 'warn',
      },
    },
  ];
}
