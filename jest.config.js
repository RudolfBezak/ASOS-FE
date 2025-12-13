module.exports = {
  testEnvironment: 'node',
  testMatch: ['**/__tests__/**/*test.ts'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  transform: {
    '^.+\\.(ts|tsx|js|jsx)$': ['babel-jest', { configFile: './.babelrc' }],
  },
};
