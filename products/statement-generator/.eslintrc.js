module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['plugin:react/recommended', 'airbnb', 'prettier', 'prettier/react'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint', 'prettier'],
  settings: {
    'import/resolver': {
      typescript: {},
    },
  },
  rules: {
    'prettier/prettier': 'warn',
    'no-use-before-define': 'off',
    'import/extensions': 'off',
    
    // makes alias imports legal
    'import/no-unresolved': 'off',
    'react/jsx-filename-extension': [
      2,
      { extensions: ['.js', '.jsx', '.ts', '.tsx'] },
    ],
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': 'warn',
    'no-undef': 'off',
    'no-unused-expressions': 'off',
    'no-shadow': 'off',
    '@typescript-eslint/no-shadow': ['error'],
    'import/prefer-default-export': 'off',
    'new-cap': 'off',
    'react/button-has-type': 'off',

    // currently forces double define for arrow functions https://github.com/yannickcr/eslint-plugin-react/issues/2353
    'react/prop-types': 'off',
    'react/require-default-props': 'off',

    'react/jsx-props-no-spreading': 'off',
  },
};
