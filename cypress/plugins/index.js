const getCompareSnapshotsPlugin = require("cypress-visual-regression/dist/plugin");
const injectDevServer = require("@cypress/react/plugins/next");

const screenWidth = 1280;
const screenHeight = 720;

/**
 * @type {Cypress.PluginConfig}
 * `on` is used to hook into various events Cypress emits
 * `config` is the resolved Cypress config
 */
module.exports = (on, config) => {
  if (config.testingType === 'component') {
    injectDevServer(on, config);
  }
  require("@cypress/code-coverage/task")(on, config);
  on("file:preprocessor", require("@cypress/code-coverage/use-babelrc"));

  getCompareSnapshotsPlugin(on, config);

  on("before:browser:launch", (browser, launchOptions) => {
    if (browser.name === "chrome" && browser.isHeadless) {
      launchOptions.args.push(`--window-size=${screenWidth},${screenHeight}`);
      launchOptions.args.push("--force-device-scale-factor=1");
    }

    if (browser.name === "electron" && browser.isHeadless) {
      launchOptions.preferences.width = screenWidth;
      launchOptions.preferences.height = screenHeight;
    }

    if (browser.name === "firefox" && browser.isHeadless) {
      launchOptions.args.push(`--width=${screenWidth}`);
      launchOptions.args.push(`--height=${screenHeight}`);
    }

    return launchOptions;
  });

  return config;
};
