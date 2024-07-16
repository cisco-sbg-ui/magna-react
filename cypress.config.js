const {defineConfig} = require("cypress");

module.exports = defineConfig({
  fixturesFolder: false,

  retries: {
    runMode: 2,
    openMode: 0
  },

  screenshotsFolder: "./cypress/snapshots/actual",
  trashAssetsBeforeRuns: true,
  video: false,
  viewportHeight: 720,
  viewportWidth: 1480,

  e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents(on, config) {
      return require("./cypress/plugins/index.js")(on, config);
    },
    baseUrl: "http://localhost:8001",
    specPattern: "framework/**/*.spec.js"
  },

  component: {
    setupNodeEvents() {},
    specPattern: [
      "framework/**/*.cy.{js,jsx,ts,tsx}",
      "cypress/**/*.cy.{js,jsx,ts,tsx}"
    ],
    devServer: {
      framework: "next",
      bundler: "webpack"
    }
  }
});
