import "@cypress/code-coverage/support";

import "./commands";

require("cypress-plugin-tab");

Cypress.Screenshot.defaults({
  screenshotOnRunFailure: false
});
