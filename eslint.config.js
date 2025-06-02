import js from '@eslint/js';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import pluginReact from 'eslint-plugin-react';
import prettier from 'eslint-config-prettier';

export default [
  { ignores: ['dist', 'node_modules'] },

  js.configs.recommended,

  // 3. Конфігурації плагінів React (імпортуються безпосередньо в основний масив)
  pluginReact.configs.recommended, // Включає всі рекомендовані правила для React
  reactHooks.configs.recommended,

  {
    files: ['**/*.{js,jsx}'],
    languageOptions: {
      ecmaVersion: 'latest',
      globals: globals.browser,
      parserOptions: {
        ecmaVersion: 'latest',
        ecmaFeatures: { jsx: true },
        jsxRuntime: 'automatic',
        sourceType: 'module',
      },
    },

    plugins: {
      react: pluginReact,
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
      // prettier: pluginPrettier,
    },
    rules: {
      // ...js.configs.recommended.rules,
      // ...reactHooks.configs.recommended.rules,
      // 'no-unused-vars': ['error', { varsIgnorePattern: '^[A-Z_]' }],
      'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
      'no-console': 'off',
    },
  },
  prettier,
];
