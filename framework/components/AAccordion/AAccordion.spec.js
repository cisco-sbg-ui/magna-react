context("AAccordion", () => {
  before(() => {
    cy.visitInLightTheme("http://localhost:3000/components/accordion");
  });

  it("has appropriate default state", () => {
    cy.get("#uncontrolled-usage + .playground .a-accordion__card")
      .eq(0)
      .should("not.have.attr", "aria-expanded");
    cy.get("#uncontrolled-usage + .playground .a-accordion__card")
      .eq(1)
      .should("have.attr", "aria-expanded", "true");
    cy.get("#uncontrolled-usage + .playground .a-accordion__card")
      .eq(2)
      .should("have.attr", "aria-expanded", "false");
    cy.get("#uncontrolled-usage + .playground .a-accordion__card")
      .eq(3)
      .should("have.attr", "aria-expanded", "true");
  });

  it("tabs appropriately", () => {
    cy.get("#uncontrolled-usage + .playground .a-button").eq(0).focus().tab();
    cy.get("#uncontrolled-usage + .playground .a-accordion__link")
      .eq(1)
      .then(($el) => {
        Cypress.dom.isFocused($el);
      })
      .tab();
    cy.get("#uncontrolled-usage + .playground .a-accordion__link")
      .eq(2)
      .then(($el) => {
        Cypress.dom.isFocused($el);
      })
      .tab();
    cy.get("#uncontrolled-usage + .playground .a-button")
      .eq(1)
      .then(($el) => {
        Cypress.dom.isFocused($el);
      });
  });

  it("supports alternative icons", () => {
    cy.get("#alternative-icons + .playground .a-accordion__link .a-icon")
      .eq(1)
      .should("have.attr", "aria-label", "subtract icon")
      .click()
      .should("have.attr", "aria-label", "add icon");
  });

  it("expands/collapses appropriately uncontrolled", () => {
    cy.get("#uncontrolled-usage + .playground .a-accordion__card")
      .eq(1)
      .should("have.attr", "aria-expanded", "true")
      .find(".a-accordion__link")
      .should("have.attr", "role", "button")
      .click();
    cy.get("#uncontrolled-usage + .playground .a-accordion__card")
      .eq(1)
      .should("have.attr", "aria-expanded", "false")
      .find(".a-accordion__link")
      .type("{enter}");
    cy.get("#uncontrolled-usage + .playground .a-accordion__card")
      .eq(1)
      .find(".a-accordion__link")
      .type(" ");
    cy.get("#uncontrolled-usage + .playground .a-accordion__card")
      .eq(1)
      .find(".a-accordion__link")
      .type(" ");
  });

  it("expands/collapses appropriately controlled", () => {
    cy.get("#controlled-usage + .playground .a-accordion__card")
      .eq(1)
      .should("have.attr", "aria-expanded", "true")
      .find(".a-accordion__link")
      .should("have.attr", "role", "button")
      .click();
    cy.get("#controlled-usage + .playground .a-accordion__card")
      .eq(1)
      .should("have.attr", "aria-expanded", "false")
      .find(".a-accordion__link")
      .type("{enter}");
    cy.get("#controlled-usage + .playground .a-accordion__card")
      .eq(1)
      .find(".a-accordion__link")
      .type(" ");
    cy.get("#controlled-usage + .playground .a-accordion__card")
      .eq(1)
      .find(".a-accordion__link")
      .type(" ");
  });

  it("supports themes", () => {
    if (Cypress.env("snapshots") === "off") return;

    cy.get(
      "#uncontrolled-usage + .playground .playground__preview"
    ).compareSnapshot("Accordion 1");

    cy.get("[data-testid='enable-dusk-theme']").eq(0).click();

    cy.get(
      "#uncontrolled-usage + .playground .playground__preview"
    ).compareSnapshot("Accordion 2");
  });
});
