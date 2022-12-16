context("AEmptyState", () => {
  before(() => {
    cy.visitInLightTheme("/components/emptyState");
  });

  // TODO: Test accessibility

  it("supports themes", () => {
    if (Cypress.env("snapshots") === "off") return;

    cy.get("#usage + .playground .playground__preview").compareSnapshot(
      "EmptyState 1"
    );

    cy.get("[data-testid='enable-dusk-theme']").eq(0).click();

    cy.get("#usage + .playground .playground__preview").compareSnapshot(
      "EmptyState 2"
    );
  });
});
