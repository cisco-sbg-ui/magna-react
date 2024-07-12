import "./index.d.ts";
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
  cy.get(".hidden-font-swatches_1").waitUntil(
    ($el) => ($el?.width() || 0) > 40
  );
  cy.get(".hidden-font-swatches_2").waitUntil(
    ($el) => ($el?.width() || 0) > 40
  );
  cy.get(".hidden-font-swatches_3").waitUntil(
    ($el) => ($el?.width() || 0) > 40
  );
  cy.get(".hidden-font-swatches_4").waitUntil(
    ($el) => ($el?.width() || 0) > 40
  );
  cy.get(".hidden-font-swatches_5").waitUntil(
    ($el) => ($el?.width() || 0) > 40
  );
  cy.get(".hidden-font-swatches_6").waitUntil(
    ($el) => ($el?.width() || 0) > 40
  );
  cy.get(".hidden-font-swatches_7").waitUntil(
    ($el) => ($el?.width() || 0) > 40
  );
  cy.get(".hidden-font-swatches_8").waitUntil(
    ($el) => ($el?.width() || 0) > 40
  );
  cy.get(".hidden-font-swatches_9").waitUntil(
    ($el) => ($el?.width() || 0) > 40
  );
  cy.get(".hidden-font-swatches_10").waitUntil(
    ($el) => ($el?.width() || 0) > 40
  );
  cy.get(".hidden-font-swatches_11").waitUntil(
    ($el) => ($el?.width() || 0) > 40
  );
});

Cypress.Commands.add("getByDataTestId", (id) => {
  return cy.get(`[data-testid="${id}"]`);
});

Cypress.Commands.add("getByAriaLabel", (label) => {
  return cy.get(`[aria-label="${label}"]`);
});

interface KeydownUtil {
  key: string;
  keyCode: number;
  name: string;
}

const keydownUtils: KeydownUtil[] = [
  {key: "Escape", keyCode: keyCodes.esc, name: "escapeKeydown"},
  {key: "Enter", keyCode: keyCodes.enter, name: "enterKeydown"},
  {key: " ", keyCode: keyCodes.space, name: "spaceKeydown"},
  {key: "ArrowDown", keyCode: keyCodes.down, name: "downArrowKeydown"},
  {key: "ArrowUp", keyCode: keyCodes.up, name: "upArrowKeydown"},
  {key: "Tab", keyCode: keyCodes.tab, name: "tabKeydown"}
];

/**
 * These give us dedicated keydown commands so that we don't have
 * to remember how to invoke them with the verbose Cypress syntax.
 *
 * @example
 * `cy.trigger("keydown", {keyCode: 13})` can be invoked as `cy.escapeKeydown()`
 */
keydownUtils.forEach(({key, keyCode, name}) => {
  // @ts-expect-error dynamic creation
  Cypress.Commands.add(name, {prevSubject: "optional"}, (subject) => {
    if (subject) {
      return cy
        .wrap(subject)
        .trigger("keydown", {key, keyCode})
        .then(() => subject);
    } else {
      return cy.get("body").trigger("keydown", {key, keyCode});
    }
  });
});

/**
 * Specifically for `ATooltip`.
 */
Cypress.Commands.add("hoverATooltip", () => {
  return cy.getByAriaLabel("information icon").trigger("mouseenter");
});

/**
 * Specifically for `ATooltip`.
 */
Cypress.Commands.add("clickATooltip", () => {
  return cy.getByAriaLabel("information icon").trigger("click");
});

Cypress.Commands.add("getPseudoElementStyle", ($el, pseudoElement, style) => {
  // https://stackoverflow.com/a/75887385
  const subject = $el[0];
  const window = subject.ownerDocument.defaultView;
  const pseudoElementStyles = window.getComputedStyle(subject, pseudoElement);

  return pseudoElementStyles.getPropertyValue(style);
});
