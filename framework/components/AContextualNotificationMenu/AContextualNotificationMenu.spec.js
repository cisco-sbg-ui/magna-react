context("AContextualNotificationMenu", () => {
  before(() => {
    cy.visitInLightTheme(
      "http://localhost:3000/components/contextual-notification-menu"
    );
  });

  it("has working keyboard events", () => {
    cy.get(".a-contextual-notification-menu").should("not.exist");
    cy.get("#usage + .playground .a-text-input__input").eq(0).type("mm");
    cy.get(".a-contextual-notification-menu")
      .eq(0)
      .should("be.visible")
      .then(($el) => {
        Cypress.dom.isFocused($el);
      })
      .type("{esc}");
    cy.get(".a-contextual-notification-menu").should("not.exist");
    cy.get("#usage + .playground .a-button")
      .eq(0)
      .then(($el) => {
        Cypress.dom.isFocused($el);
      });

    // TODO: test tab key once cypress supports it.
  });

  it("supports themes", () => {
    if (Cypress.env("snapshots") === "off") return;

    cy.get("#variants + .playground .a-button").eq(0).click({force: true});
    cy.get("#variants + .playground .playground__preview").compareSnapshot(
      "Contextual Notification Menu 1"
    );

    cy.get("#variants + .playground").click("bottomLeft", {
      force: true
    });

    cy.get("#variants + .playground .a-button").eq(1).click({force: true});
    cy.get("#variants + .playground .playground__preview").compareSnapshot(
      "Contextual Notification Menu 2"
    );

    cy.get("#variants + .playground").click("bottomLeft", {
      force: true
    });

    cy.get("#variants + .playground .a-button").eq(2).click({force: true});
    cy.get("#variants + .playground .playground__preview").compareSnapshot(
      "Contextual Notification Menu 3"
    );

    cy.get("#variants + .playground").click("bottomLeft", {
      force: true
    });

    cy.get("#variants + .playground .a-button").eq(3).click({force: true});
    cy.get("#variants + .playground .playground__preview").compareSnapshot(
      "Contextual Notification Menu 4"
    );
    cy.get("#variants + .playground").click("bottomLeft", {
      force: true
    });

    cy.get("[data-testid='enable-dusk-theme']").eq(0).click();

    cy.get("#variants + .playground .a-button").eq(0).click({force: true});
    cy.get("#variants + .playground .playground__preview").compareSnapshot(
      "Contextual Notification Menu 5"
    );
    cy.get("#variants + .playground").click("bottomLeft", {
      force: true
    });

    cy.get("#variants + .playground .a-button").eq(1).click({force: true});
    cy.get("#variants + .playground .playground__preview").compareSnapshot(
      "Contextual Notification Menu 6"
    );
    cy.get("#variants + .playground").click("bottomLeft", {
      force: true
    });

    cy.get("#variants + .playground .a-button").eq(2).click({force: true});
    cy.get("#variants + .playground .playground__preview").compareSnapshot(
      "Contextual Notification Menu 7"
    );
    cy.get("#variants + .playground").click("bottomLeft", {
      force: true
    });

    cy.get("#variants + .playground .a-button").eq(3).click({force: true});
    cy.get("#variants + .playground .playground__preview").compareSnapshot(
      "Contextual Notification Menu 8"
    );
    cy.get("#variants + .playground").click("bottomLeft", {
      force: true
    });
  });
});
