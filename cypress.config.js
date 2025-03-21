const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'e153fo',
  e2e: {
    baseUrl: 'https://telnyx.com',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
      experimentalStudio:true,
      setupNodeEvents(on, config) {
        // implement node event listeners here
    },
  },
});
