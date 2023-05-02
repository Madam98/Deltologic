module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  testMatch: ['**/tests/**/*.spec.(ts|tsx)'],
  testPathIgnorePatterns: [
    '/node_modules/',
  ],
  maxWorkers: 4,
  cache: true,
};
