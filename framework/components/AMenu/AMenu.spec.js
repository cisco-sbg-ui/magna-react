context("AMenu", () => {
  before(() => {
    cy.visitInLightTheme("/components/menu");
  });

  it("opens and closes appropriately", () => {
    const stub = cy.stub();
    cy.on("window:alert", stub);

    cy.get(".a-menu").should("not.exist");
    cy.get("#usage + .playground .a-button").eq(0).click();
    cy.get(".a-menu")
      .eq(0)
      .should("be.visible")
      .then(($el) => {
        Cypress.dom.isFocused($el);
      })
      .type("{esc}");
    cy.get(".a-menu").should("not.exist");
    cy.get("#usage + .playground .a-button")
      .eq(0)
      .then(($el) => {
        Cypress.dom.isFocused($el);
      });

    cy.get("#usage + .playground .a-button").eq(0).click();
    cy.get(".a-menu")
      .eq(0)
      .find(".a-list-item")
      .first()
      .click()
      .then(() => {
        cy.get(".a-menu").should("not.exist");
      });
  });

  it("tabs appropriately", () => {
    cy.get("#usage + .playground .a-button").eq(0).focus().tab();
    cy.get("#usage + .playground .a-button")
      .eq(0)
      .then(($el) => {
        Cypress.dom.isFocused($el);
      });

    // Waiting for focus to shift to menu once it opens. Bug in cypress-plugin-tab for focusable/tabbable
    cy.get("#usage + .playground .a-button").eq(0).click().wait(30).tab(); // eslint-disable-line cypress/no-unnecessary-waiting
    cy.get(".a-menu").should("not.exist");
    cy.get("#usage + .playground .a-button")
      .eq(0)
      .then(($el) => {
        Cypress.dom.isFocused($el);
      });
  });

  it("arrow-keys appropriately", () => {
    cy.get("#usage + .playground .a-button").eq(0).click();
    cy.get(".a-menu")
      .then(($el) => {
        Cypress.dom.isFocused($el);
      })
      .type("{downArrow}")
      .find(".a-list-item[tabindex]")
      .first()
      .then(($el) => {
        Cypress.dom.isFocused($el);
      })
      .type("{downArrow}")
      .next()
      .then(($el) => {
        Cypress.dom.isFocused($el);
      })
      .type("{esc}");

    cy.get("#usage + .playground .a-button").eq(0).click();
    cy.get(".a-menu")
      .then(($el) => {
        Cypress.dom.isFocused($el);
      })
      .type("{upArrow}")
      .find(".a-list-item[tabindex]")
      .last()
      .then(($el) => {
        Cypress.dom.isFocused($el);
      })
      .type("{upArrow}")
      .prev()
      .then(($el) => {
        Cypress.dom.isFocused($el);
      })
      .type("{esc}");
  });

  it("has appropriate role attributes", () => {
    cy.get("#usage + .playground .a-button").eq(0).click();
    cy.get(".a-menu")
      .eq(0)
      .then(($el) => {
        Cypress.dom.isFocused($el);
      })
      .should("have.attr", "role", "menu")
      .find(".a-list-item")
      .first()
      .should("have.attr", "role", "menuitem")
      .type("{esc}");
  });

  it("supports themes", () => {
    if (Cypress.env("snapshots") === "off") return;

    cy.get("#usage + .playground .a-button").first().click();

    cy.get("#usage + .playground .playground__preview").compareSnapshot(
      "Menu 1"
    );

    cy.get("#usage + .playground .a-button").eq(2).click();

    cy.get("#usage + .playground .playground__preview").compareSnapshot(
      "Menu 2"
    );

    cy.get("[data-testid='enable-dusk-theme']").eq(0).click();

    cy.get("#usage + .playground .a-button").first().click();

    cy.get("#usage + .playground .playground__preview").compareSnapshot(
      "Menu 3"
    );

    cy.get("#usage + .playground .a-button").eq(2).click();

    cy.get("#usage + .playground .playground__preview").compareSnapshot(
      "Menu 4"
    );
  });
});
