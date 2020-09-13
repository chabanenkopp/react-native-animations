module.exports = {
  root: true,
  extends: ['airbnb', 'airbnb/hooks', '@react-native-community', 'plugin:prettier/recommended'],
  parser: 'babel-eslint',
  settings: {
    "import/resolver": {
      "babel-module": {}
    }
  },
  rules: {
    'semi': [
      2,
      'never'
    ],
    'react/jsx-filename-extension': [
      1,
      {
        'extensions': [
          '.js'
        ]
      }
    ],
    'react/jsx-wrap-multilines': 0,
    'react/require-default-props': 0,
    'global-require': [
      0
    ],
    'no-confusing-arrow': [
      'off'
    ],
    'jsx-a11y/no-static-element-interactions': 0,
    'jsx-a11y/anchor-has-content': 0,
    'jsx-a11y/anchor-is-valid': 0,
    'jsx-a11y/click-events-have-key-events': 0,
    'react/forbid-prop-types': 0,
    'no-shadow': 0,
    'camelcase': 0,
    'no-mixed-operators': 0,
    'no-unused-vars': [
      'error',
      {
        'ignoreRestSiblings': true,
        'caughtErrors': 'none'
      }
    ],
    'no-multiple-empty-lines': [
      'error',
      {
        'max': 1
      }
    ],
    'import/no-extraneous-dependencies': 0,
    'import/prefer-default-export': 0,
    'import/extensions': 0,
    'lines-between-class-members': [
      'error',
      'never'
    ],
    'object-curly-newline': 0,
    'function-paren-newline': 0,
    'react/no-array-index-key': 0,
    'no-restricted-globals': 0,
    'react/no-did-mount-set-state': 0,
    'react-native/no-inline-styles': 0,
    'radix': [
      'error',
      'as-needed'
    ],
    'react/jsx-fragments': 0,
    'react/jsx-props-no-spreading': 0,
    'react/state-in-constructor': 0,
    'prettier/prettier': 'error',
    'no-catch-shadow': 0
  },
}
