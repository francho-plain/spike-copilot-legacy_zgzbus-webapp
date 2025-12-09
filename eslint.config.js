import js from '@eslint/js';
import tseslint from 'typescript-eslint';

export default tseslint.config(
  js.configs.recommended,
  ...tseslint.configs.recommended,
  {
    ignores: [
      'node_modules/**',
      'dist/**',
      '.tmp/**',
      'app/components/**',
      'test/**',
      'Gruntfile.js',
      'karma*.js'
    ]
  },
  {
    files: ['**/*.js', '**/*.ts'],
    languageOptions: {
      ecmaVersion: 2015,
      sourceType: 'script',
      globals: {
        angular: 'readonly',
        window: 'readonly',
        document: 'readonly',
        console: 'readonly'
      }
    },
    rules: {
      '@typescript-eslint/no-explicit-any': 'warn',
      '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
      '@typescript-eslint/no-this-alias': ['error', { allowedNames: ['$ctrl', 'vm'] }],
      'no-console': 'warn',
      'prefer-const': 'warn'
    }
  }
);
