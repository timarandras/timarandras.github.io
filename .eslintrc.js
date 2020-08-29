module.exports = {
  globals: {
    __PATH_PREFIX__: true,
  },
  env: {
    browser: true,
    es2020: true,
    jest: true,
  },
  extends: ['plugin:react/recommended', 'airbnb', 'airbnb/hooks', 'plugin:prettier/recommended'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 11,
    sourceType: 'module',
  },
  plugins: ['react', 'react-hooks', 'simple-import-sort'],
  rules: {
    'prettier/prettier': 'error',
    'simple-import-sort/sort': 'error',
    'react-hooks/rules-of-hooks': 'error', // Checks rules of Hooks
    'react-hooks/exhaustive-deps': 'warn', // Checks effect dependencies
  },
};
