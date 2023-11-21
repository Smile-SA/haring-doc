module.exports = {
  extends: ['plugin:smile/react', 'plugin:smile/ts'],
  parserOptions: {
    project: ['./tsconfig.json'],
  },
  root: true,
  rules: {
    'import/no-unresolved': 'off',
    'react/no-array-index-key': 'off',
    'react/no-multi-comp': 'off',
  },
};
