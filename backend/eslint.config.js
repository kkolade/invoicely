import pluginJs from '@eslint/js';
import prettier from 'eslint-config-prettier';
import pluginPrettier from 'eslint-plugin-prettier';
import globals from 'globals';

export default [
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  prettier,
  {
    plugins: {
      prettier: pluginPrettier,
    },
    rules: {
      'prettier/prettier': ['error', { singleQuote: true }], // Enforces single quotes
    },
  },
];
