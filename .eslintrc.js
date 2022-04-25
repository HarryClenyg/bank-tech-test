module.exports = {
  root: true,
  parserOptions: {
    ecmaVersion: 12,
    sourceType: "module",
  },
  extends: ["eslint:recommended", "prettier"],
  env: {
    es2021: true,
    node: true,
  },
  plugins: ["jest"],
  rules: {
    "no-console": "error",
    "jest/no-disabled-tests": "warn",
    "jest/no-focused-tests": "error",
    "jest/no-identical-title": "error",
    "jest/prefer-to-have-length": "warn",
    "jest/valid-expect": "error"
  },
};
