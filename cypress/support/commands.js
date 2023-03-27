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

Cypress.Commands.add("escapeKeydown", ($onEl = cy.get("body")) => {
  return $onEl.trigger("keydown", {key: "Escape"});
});

Cypress.Commands.add("enterKeydown", ($onEl = cy.get("body")) => {
  return $onEl.trigger("keydown", {keyCode: keyCodes.enter});
});

Cypress.Commands.add("spaceKeydown", ($onEl = cy.get("body")) => {
  return $onEl.trigger("keydown", {keyCode: keyCodes.space});
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
