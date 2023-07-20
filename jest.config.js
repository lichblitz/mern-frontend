module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.ts?$': 'ts-jest',
  },
  moduleNameMapper:{
    '^@/(.*)$': '<rootDir>/src/$1',
    '\\.(css|less)$': 'identity-obj-proxy', // For handling CSS imports in Jest tests
    // Add more mappings for other aliases as needed
  },
  testMatch: ['**/*.test.(ts|tsx)'],
  collectCoverage: true,
  coverageReporters: ['lcov', 'text'],
  collectCoverageFrom: [
    'src/**/*.{ts,tsx}', // The source files to collect coverage from (adjust the path to your source files)
    '!src/**/*.test.{ts,tsx}', // Exclude test files from coverage
  ],
  setupFilesAfterEnv: ['<rootDir>/src/setupTests.ts'],
  transformIgnorePatterns: ['<rootDir>/node_modules/'],
};