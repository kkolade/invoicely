import config from 'eslint-config-standard'
import prettier from 'eslint-plugin-prettier'
import globals from 'globals'

export default [
  ...[].concat(config),
  {
    files: ['**/*.js', '**/*.jsx', '**/*.ts', '**/*.tsx'],
    plugins: {
      prettier,
    },
    languageOptions: {
      parserOptions: {
        context: {
          ecmaVersion: 2021, // specify the ECMAScript version, adjust as needed
          sourceType: 'module', // specify module type, can be 'script' or 'module'
        },
        globals: {
          ...globals.browser,
          myCustomGlobal: 'readonly',
        },
      },
    },
    rules: {
      'prettier/prettier': 'error',
      // Add any other ESLint rules you want to override here
    },
  },
  { ignores: ['.config/*', '**/.config/'] },
]
