module.exports = {
  extends: ['airbnb', 'prettier', 'plugin:jsx-a11y/recommended'],
  plugins: ['prettier'],
  env: {
    browser: true
  },
  parser: 'babel-eslint',
  rules: {
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
