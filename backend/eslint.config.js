import js from '@eslint/js';
import globals from 'globals';

export default [
  { ignores: ['coverage'] },
  {
    files: ['**/*.js'],
    ...js.configs.recommended,
    languageOptions: {
      ecmaVersion: 2024,
      globals: globals.node,
      sourceType: 'module',
    },
  },
];
