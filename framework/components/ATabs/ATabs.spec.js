context("ATabs", () => {
  before(() => {
    cy.visitInLightTheme("/components/tab");
  });

  it("tabs appropriately", () => {
    cy.get("#uncontrolled-mode + .playground .a-tab-group__tab")
      .eq(0)
      .focus()
      .tab();
    cy.get("#uncontrolled-mode + .playground .a-tab-group__tab")
      .eq(1)
      .then(($el) => {
        Cypress.dom.isFocused($el);
      });
  });

  it("has appropriate roles", () => {
    cy.get("#uncontrolled-mode + .playground .a-tab-group")
      .eq(0)
      .should("have.attr", "role", "tablist");
    cy.get("#uncontrolled-mode + .playground .a-tab-group__tab")
      .eq(0)
      .should("have.attr", "role", "tab")
      .should("have.attr", "aria-selected", "false");
    cy.get("#uncontrolled-mode + .playground .a-tab-group__tab")
      .eq(2)
      .should("have.attr", "role", "tab")
      .should("have.attr", "aria-selected", "true");
  });

  it("controlled selects/deselects appropriately", () => {
    cy.get("#controlled-mode + .playground .a-tab-group__tab")
      .eq(0)
      .should("have.attr", "aria-selected", "false")
      .click()
      .should("have.attr", "aria-selected", "true");
    cy.get("#controlled-mode + .playground .a-tab-group__tab")
      .eq(2)
      .should("have.attr", "aria-selected", "false")
      .type("{enter}")
      .should("have.attr", "aria-selected", "true");
    cy.get("#controlled-mode + .playground .a-tab-group__tab")
      .eq(0)
      .should("have.attr", "aria-selected", "false");
  });

  it("uncontrolled selects/deselects appropriately", () => {
    cy.get("#uncontrolled-mode + .playground .a-tab-group__tab")
      .eq(0)
      .should("have.attr", "aria-selected", "false")
      .click()
      .should("have.attr", "aria-selected", "true");
    cy.get("#uncontrolled-mode + .playground .a-tab-group__tab")
      .eq(2)
      .should("have.attr", "aria-selected", "false")
      .type("{enter}")
      .should("have.attr", "aria-selected", "true");
    cy.get("#uncontrolled-mode + .playground .a-tab-group__tab")
      .eq(0)
      .should("have.attr", "aria-selected", "false");
  });

  it("works as scrolling tabs", () => {
    cy.get("#scrolling + .playground .a-tab-group")
      .eq(1)
      .find(".a-tab-group__scroll-right")
      .should("not.exist");

    cy.get("#scrolling + .playground .a-tab-group__scroll-left")
      .eq(0)
      .should("not.be.disabled");
    cy.get("#scrolling + .playground .a-tab-group__scroll-right")
      .eq(0)
      .should("not.be.disabled");

    cy.get("#scrolling + .playground .a-tab-group")
      .eq(0)
      .find(".a-tab-group__tab")
      .eq(8)
      .click();
    cy.get("#scrolling + .playground .a-tab-group__scroll-right")
      .eq(0)
      .click()
      .should("be.disabled");

    cy.get("#scrolling + .playground .a-tab-group")
      .eq(0)
      .find(".a-tab-group__tab")
      .eq(6)
      .click();
    cy.get("#scrolling + .playground .a-tab-group")
      .eq(0)
      .find(".a-tab-group__tab")
      .eq(4)
      .click();
    cy.get("#scrolling + .playground .a-tab-group__scroll-left")
      .eq(0)
      .click()
      .should("be.disabled");
  });

  it("supports themes", () => {
    if (Cypress.env("snapshots") === "off") return;

    cy.get(
      "#uncontrolled-mode + .playground .playground__preview"
    ).compareSnapshot("Tabs 1");

    cy.get("#tall + .playground .playground__preview").compareSnapshot(
      "Tabs 2"
    );

    cy.get("#oversized + .playground .playground__preview").compareSnapshot(
      "Tabs 3"
    );

    cy.get("[data-testid='enable-dusk-theme']").eq(0).click();

    cy.get("#tall + .playground .playground__preview").compareSnapshot(
      "Tabs 4"
    );

    cy.get("#oversized + .playground .playground__preview").compareSnapshot(
      "Tabs 5"
    );
  });
});
