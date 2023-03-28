import "cypress-wait-until";
import compareSnapshotCommand from "cypress-visual-regression/dist/command";
import {keyCodes} from "../../framework/utils/helpers";

compareSnapshotCommand();

Cypress.Commands.add("visitInLightTheme", function (url) {
  cy.visit(url, {
    onBeforeLoad(win) {
      cy.stub(win, "matchMedia")
        .withArgs("(prefers-color-scheme: dark)")
        .returns({
          matches: false
        });
    }
  });

  cy.waitForFonts();
});

Cypress.Commands.add("visitInDarkTheme", function (url) {
  cy.visit(url, {
    onBeforeLoad(win) {
      cy.stub(win, "matchMedia")
        .withArgs("(prefers-color-scheme: dark)")
        .returns({
          matches: true
        });
    }
  });

  cy.waitForFonts();
});

Cypress.Commands.add("isCovered", function (selector) {
  cy.once("fail", (err) => {
    expect(err.message).to.include("`cy.click()` failed because this element");
    expect(err.message).to.include("is being covered by another element");
    return false;
  });
  cy.get(selector)
    .click()
    .then(() => {
      new Error(
        "Expected element NOT to be clickable because it is covered, but click() succeeded."
      );
    });
});

Cypress.Commands.add("waitForFonts", function () {
  cy.get(".hidden-font-swatches_1").waitUntil(($el) => $el.width() > 40);
  cy.get(".hidden-font-swatches_2").waitUntil(($el) => $el.width() > 40);
  cy.get(".hidden-font-swatches_3").waitUntil(($el) => $el.width() > 40);
  cy.get(".hidden-font-swatches_4").waitUntil(($el) => $el.width() > 40);
  cy.get(".hidden-font-swatches_5").waitUntil(($el) => $el.width() > 40);
  cy.get(".hidden-font-swatches_6").waitUntil(($el) => $el.width() > 40);
  cy.get(".hidden-font-swatches_7").waitUntil(($el) => $el.width() > 40);
  cy.get(".hidden-font-swatches_8").waitUntil(($el) => $el.width() > 40);
  cy.get(".hidden-font-swatches_9").waitUntil(($el) => $el.width() > 40);
  cy.get(".hidden-font-swatches_10").waitUntil(($el) => $el.width() > 40);
  cy.get(".hidden-font-swatches_11").waitUntil(($el) => $el.width() > 40);
});

Cypress.Commands.add("getByDataTestId", (id) => {
  return cy.get(`[data-testid="${id}"]`);
});

Cypress.Commands.add("getByAriaLabel", (label) => {
  return cy.get(`[aria-label="${label}"]`);
});

const keydownUtils = [
  {keyCode: keyCodes.esc, name: "escapeKeydown"},
  {keyCode: keyCodes.enter, name: "enterKeydown"},
  {keyCode: keyCodes.space, name: "spaceKeydown"},
  {keyCode: keyCodes.down, name: "downArrowKeydown"},
  {keyCode: keyCodes.up, name: "upArrowKeydown"},
  {keyCode: keyCodes.tab, name: "tabKeydown"}
];

/**
 * These give us dedicated keydown commands so that we don't have
 * to remember how to invoke them with the verbose Cypress syntax.
 *
 * @example
 * `cy.trigger("keydown", {keyCode: 13})` can be invoked as `cy.escapeKeydown()`
 */
keydownUtils.forEach(({keyCode, name}) => {
  Cypress.Commands.add(name, {prevSubject: "optional"}, (subject) => {
    if (subject) {
      return cy
        .wrap(subject)
        .trigger("keydown", {keyCode})
        .then(() => subject);
    } else {
      return cy.get("body").trigger("keydown", {keyCode});
    }
  });
});

/**
 * Specifically for `ATooltip`.
 */
Cypress.Commands.add("hoverATooltip", (withClick = false) => {
  return cy.getByAriaLabel("information icon").trigger("mouseenter");
});

/**
 * Specifically for `ATooltip`.
 */
Cypress.Commands.add("clickATooltip", (withClick = false) => {
  return cy.getByAriaLabel("information icon").trigger("click");
});
