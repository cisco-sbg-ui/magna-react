context("AContextualNotification", () => {
  before(() => {
    cy.visitInLightTheme(
      "http://localhost:3000/components/contextual-notification"
    );
  });

  it("supports themes", () => {
    if (Cypress.env("snapshots") === "off") return;

    cy.get("#usage + .playground .playground__preview").compareSnapshot(
      "Contextual Notification 1"
    );

    cy.get("[data-testid='enable-dusk-theme']").eq(0).click();

    cy.get("#usage + .playground .playground__preview").compareSnapshot(
      "Contextual Notification 2"
    );
  });
});
