module.exports = {
  globals: {
    '__TRANSFORM_HTML__': true
  },
  transform: {
    '^.+\\.jsx?$': 'babel-jest',
    '^.+\\.(ts|html)$': '<rootDir>/node_modules/jest-preset-angular/preprocessor.js'
  },
  moduleFileExtensions: [
    'ts',
    'tsx',
    'js',
    'jsx',
    'json',
    'node',
    '.html'
  ],
  preset: 'jest-preset-angular',
  setupTestFrameworkScriptFile: '<rootDir>/setup-jest.ts',
  transformIgnorePatterns: [
    'node_modules'
  ]
};
