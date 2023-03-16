const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      const getCompareSnapshotsPlugin = require("cypress-image-diff-js/dist/plugin");

getCompareSnapshotsPlugin(on, config);
    },
  },
});
