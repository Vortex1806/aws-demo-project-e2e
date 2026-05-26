const { defineConfig } = require("@playwright/test");

module.exports = defineConfig({
  testDir: "./tests",

  timeout: 30000,

  retries: 1,

  outputDir: "test-results",

  use: {
    headless: true,
    viewport: { width: 1280, height: 720 },

    screenshot: "only-on-failure",
    video: "retain-on-failure",
    trace: "retain-on-failure",
  },

  reporter: [["list"], ["html", { open: "never" }]],
});
