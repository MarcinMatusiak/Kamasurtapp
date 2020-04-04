module.exports = {
  parser: '@typescript-eslint/parser', // Specifies the ESLint parser
  extends: [
    'plugin:react/recommended', // Uses the recommended rules from @eslint-plugin-react
    'plugin:@typescript-eslint/recommended' // Uses the recommended rules from @typescript-eslint/eslint-plugin
  ],
  parserOptions: {
    ecmaVersion: 2018, // Allows for the parsing of modern ECMAScript features
    sourceType: 'module', // Allows for the use of imports
    ecmaFeatures: {
      jsx: true // Allows for the parsing of JSX
    }
  },
  plugins: [
    'react-hooks',
    'import'
  ],
  rules: {
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'react/prop-types': 'off',
    'react/jsx-no-useless-fragment': 'error',
    '@typescript-eslint/explicit-function-return-type': 'off',
    'eqeqeq': ['error', 'smart'],
    'indent': [
      1,
      4,
      { 'SwitchCase': 1 }
    ],
    'object-curly-spacing': ['error', 'always'],
    'max-len': [
      'warn',
      {
          'code': 80,
          'ignoreComments': true ,
          'ignorePattern': '^import'
      }
    ],
    'quotes': [1, 'single'],
    'semi': ["error", "always", { "omitLastInOneLineBlock": true}]
  },
  settings: {
    react: {
      version: 'detect' // Tells eslint-plugin-react to automatically detect the version of React to use
    }
  }
};
