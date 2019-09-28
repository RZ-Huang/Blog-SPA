module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
    jest: true,
    jquery: true,
  },
  extends: [
    'airbnb',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parser: "babel-eslint",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    "no-console": "off",
    'linebreak-style': ["error", "windows"],
    "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
    "import/extensions": ["error", "ignorePackages"],
    "react/prop-types": [0],
    "react/no-array-index-key": [0],
    "react/no-multi-comp": [1, { "ignoreStateless": true }],
    "react/jsx-first-prop-new-line": ["error", "never"],
    "react/destructuring-assignment": [1, "always"],
    "react/jsx-boolean-value": [1],
    "jsx-a11y/anchor-is-valid": [1],
    "jsx-a11y/click-events-have-key-events": [1],
    "react/jsx-props-no-spreading": [1]
  },
};
