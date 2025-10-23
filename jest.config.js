export default {
  testEnvironment: 'jsdom', // needed for React components
  transform: {
    '^.+\\.tsx?$': 'ts-jest', // use ts-jest for TS files
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'], // optional setup file
  modulePathIgnorePatterns: ['node_modules', 'jest-test-results.json'],
};
