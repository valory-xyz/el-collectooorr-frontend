module.exports = {
  verbose: true,
  collectCoverageFrom: ['components/index.jsx'],
  setupFilesAfterEnv: ['./jest.setup.js'],
  testEnvironment: 'jsdom',
};
