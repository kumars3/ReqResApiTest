/** @type {import('jest').Config} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  roots: ['<rootDir>/tests'],
  testMatch: ['**/*.steps.test.ts'],
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  verbose: true,
  reporters: [
    'default',
    [
      'jest-html-reporters',
      {
        publicPath: './test-results/html',
        filename: 'report.html',
        pageTitle: 'ReqRes API BDD Test Report',
        expand: true,
        hideIcon: false,
        includeFailureMsg: true,
        includeConsoleLog: true
      }
    ],
    [
      'jest-junit',
      {
        outputDirectory: './test-results/junit',
        outputName: 'junit.xml'
      }
    ]
  ]
};