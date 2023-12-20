// ***********************************************************
// This example support/component.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************
require("cypress-plugin-tab");

// Import commands.js using ES2015 syntax:
import "./commands";

// Alternatively you can use CommonJS syntax:
// require('./commands')

import {mount} from "cypress/react";
import AApp from "../../framework/components/AApp";

Cypress.Commands.add("mount", (component) => {
  return mount(<AApp>{component}</AApp>);
});

const resizeObserverLoopErrRe =
  /^[^(ResizeObserver loop completed with undelivered notifications.)]/;

Cypress.on("uncaught:exception", (err) => {
  //Returning false here prevents Cypress from failing the test.
  //This will go off when opening a dropdown in tabs. When "fixed" with a setTimeout, the UI glitches.
  //Referencing here in case we need to revisit this in the future.
  if (resizeObserverLoopErrRe.test(err.message)) {
    return false;
  }
});

// Example use:
// cy.mount(<MyComponent />)
