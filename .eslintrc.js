module.exports = {
  extends: [
    'airbnb',
    'prettier',
    'plugin:jsx-a11y/recommended',
    'plugin:@typescript-eslint/recommended'
  ],
  plugins: ['prettier', 'eslint-plugin-react-hooks', '@typescript-eslint'],
  env: {
    browser: true,
    jest: true
  },
  parser: '@typescript-eslint/parser',
  rules: {
    'no-use-before-define': 'off',
    '@typescript-eslint/no-use-before-define': ['error'],
    'react/jsx-props-no-spreading': 'off',
    'jsx-a11y/anchor-is-valid': 'off',
    'linebreak-style': 'off',
    'prettier/prettier': ['error'],
    'node/no-unpublished-require': ['off'],
    'array-callback-return': 'off',
    'no-underscore-dangle': 'off',
    'react/no-danger': 'off',
    camelcase: ['warn'],
    'react/jsx-one-expression-per-line': 'off',
    eqeqeq: ['error', 'smart'],
    'no-console': [
      'warn',
      {
        allow: ['warn', 'error']
      }
    ],
    'no-multi-spaces': [
      'error',
      {
        exceptions: {
          VariableDeclarator: true,
          ImportDeclaration: true
        }
      }
    ],
    'no-unused-vars': [
      'error',
      {
        args: 'none'
      }
    ],
    'valid-jsdoc': 'error',
    'import/no-extraneous-dependencies': ['error', { devDependencies: true }]
  }
};
