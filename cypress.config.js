const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "e153fo",
  e2e: {
    baseUrl: "https://telnyx.com",
    experimentalStudio: true,
    reporter: 'cypress-mochawesome-reporter',
    video: false,
    reporterOptions: {
      charts: true,
      reportPageTitle: 'Cypress Inline Reporter',
      embeddedScreenshots: true,
      inlineAssets: true,
    },
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
      return config;
    },
    hideXHRInCommandLog: true,
  },
});