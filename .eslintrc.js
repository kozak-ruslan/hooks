module.exports = {
  parser: '@babel/eslint-parser',
  parserOptions: {
    sourceType: 'module',
    requireConfigFile: false,
    babelOptions: {
      presets: ["@babel/preset-react"]
    },
    ecmaFeatures: {
      jsx: true,
      modules: true,
      experimentalObjectRestSpread: true
    }
  },
  extends: ['airbnb'],
  plugins: ['react', 'import', 'react-hooks', '@babel'],
  env: {
    es6: true,
    browser: true,
    node: true,
  },
  globals: {
    VERSION: true,
  },
  rules: {
    'max-len': 'off',
    'spaced-comment': 'off',
    'comma-dangle': 'off',
    'import/no-unresolved': 'off',
    'no-console': 'off',
    'class-methods-use-this': 'off',
    'linebreak-style': 'off',
    'consistent-return': 'off',
    'import/extensions': 'off',
    'react/jsx-filename-extension': 0,
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn'
  }
};
